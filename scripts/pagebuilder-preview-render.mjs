import puppeteer from 'puppeteer';
import fs from 'node:fs/promises';
import path from 'node:path';

async function waitForFonts(page) {
  try {
    await page.evaluate(async () => {
      if (document.fonts && document.fonts.ready) {
        await document.fonts.ready;
      }
    });
  } catch {
  }
}

async function waitForImages(page) {
  try {
    await page.evaluate(async () => {
      const images = Array.from(document.images || []);
      await Promise.all(
        images.map((img) => {
          if (img.complete) {
            return Promise.resolve();
          }

          return new Promise((resolve) => {
            const done = () => resolve(true);
            img.addEventListener('load', done, { once: true });
            img.addEventListener('error', done, { once: true });
            window.setTimeout(done, 5000);
          });
        })
      );
    });
  } catch {
  }
}

async function loadPreviewSource(page, job) {
  if (job.htmlPath) {
    const html = await fs.readFile(job.htmlPath, 'utf8');
    await page.setContent(html, {
      waitUntil: 'domcontentloaded',
      timeout: 45000,
    });
    return;
  }

  if (job.url) {
    await page.goto(job.url, {
      waitUntil: 'domcontentloaded',
      timeout: 45000,
    });
    return;
  }

  throw new Error('Preview job is missing htmlPath/url.');
}

async function settlePage(page) {
  try {
    await page.waitForNetworkIdle({
      idleTime: 700,
      timeout: 5000,
    });
  } catch {
  }

  await waitForFonts(page);
  await waitForImages(page);
  await page.emulateMediaType('screen');

  try {
    await page.evaluate(() => new Promise((resolve) => window.requestAnimationFrame(() => window.requestAnimationFrame(() => resolve(true)))));
  } catch {
  }
}

function isRetryableLaunchError(error) {
  const message = String(error?.stack || error?.message || error);
  return message.includes('The browser is already running for');
}

async function launchBrowser(tempRoot) {
  let lastError = null;

  for (let attempt = 0; attempt < 2; attempt += 1) {
    const userDataDir = await fs.mkdtemp(path.join(tempRoot, 'chrome-profile-'));

    try {
      const browser = await puppeteer.launch({
        headless: true,
        userDataDir,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      });

      return { browser, userDataDir };
    } catch (error) {
      lastError = error;
      await fs.rm(userDataDir, { recursive: true, force: true });

      if (!isRetryableLaunchError(error) || attempt === 1) {
        throw error;
      }
    }
  }

  throw lastError;
}

async function main() {
  const rawJobs = process.argv[2];
  if (!rawJobs) {
    throw new Error('Missing preview jobs payload.');
  }

  const jobs = JSON.parse(rawJobs);
  if (!Array.isArray(jobs) || jobs.length === 0) {
    throw new Error('Preview jobs payload is empty.');
  }

  const tempRoot = path.resolve(process.cwd(), 'storage', 'app', 'tmp', 'puppeteer');
  await fs.mkdir(tempRoot, { recursive: true });

  if (!process.env.TMPDIR) {
    process.env.TMPDIR = tempRoot;
  }
  if (!process.env.TEMP) {
    process.env.TEMP = tempRoot;
  }
  if (!process.env.TMP) {
    process.env.TMP = tempRoot;
  }

  const { browser, userDataDir } = await launchBrowser(tempRoot);

  try {
    const results = {};

    for (const job of jobs) {
      const page = await browser.newPage();

      try {
        await page.setViewport({
          width: Number(job.width) || 1440,
          height: Number(job.height) || 900,
          deviceScaleFactor: 1,
          isMobile: false,
          hasTouch: false,
        });

        await loadPreviewSource(page, job);
        await settlePage(page);
        await page.screenshot({
          path: job.outputPath,
          type: 'png',
          fullPage: true,
          captureBeyondViewport: true,
          omitBackground: false,
        });

        results[job.device] = job.outputPath;
      } finally {
        await page.close();
      }
    }

    process.stdout.write(JSON.stringify({ ok: true, results }));
  } finally {
    await browser.close();
    await fs.rm(userDataDir, { recursive: true, force: true });
  }
}

main().catch((error) => {
  process.stderr.write(String(error?.stack || error?.message || error));
  process.exit(1);
});
