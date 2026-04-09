(function () {
    'use strict';

    const CANVAS_TAILWIND_RELATIVE = '/adminresources/css/tailwind.min.css';
    const CANVAS_STYLE_SYNC_INTERVAL_MS = 2000;
    const LMZ_VENDOR_VERSION = '20260331-3';

    function toAbsoluteUrl(href, baseUrl) {
        try {
            return new URL(href, baseUrl || window.location.href).href;
        } catch (error) {
            return href;
        }
    }

    function normalizeCanvasStyles(styles, baseUrl) {
        if (!Array.isArray(styles) || styles.length === 0) {
            return [];
        }

        const seen = new Set();
        const normalized = [];

        styles
            .filter(Boolean)
            .forEach((href) => {
                const absoluteHref = toAbsoluteUrl(String(href), baseUrl);
                if (!seen.has(absoluteHref)) {
                    seen.add(absoluteHref);
                    normalized.push(absoluteHref);
                }
            });

        return normalized;
    }

    function getDefaultCanvasStyles() {
        return normalizeCanvasStyles([CANVAS_TAILWIND_RELATIVE], window.location.href);
    }

    const DEFAULT_CANVAS_STYLES = getDefaultCanvasStyles();
    const STUDIO_WEB_DEFAULT_PLUGIN_SPECS = [
        { id: 'gjs-blocks-basic', src: 'https://unpkg.com/grapesjs-blocks-basic@1.0.1/dist/index.js' },
        { id: 'grapesjs-plugin-forms', src: 'https://unpkg.com/grapesjs-plugin-forms@2.0.5/dist/index.js' },
        {
            id: 'grapesjs-plugin-export',
            src: 'https://unpkg.com/grapesjs-plugin-export@1.0.11/dist/index.js',
            options: {
                isBinary(content, filename) {
                    const extension = filename && filename.split('.')[1];
                    return /[\x00-\x08\x0E-\x1F]/.test(content) && !(extension && ['html', 'css'].includes(extension));
                },
            },
        },
        { id: 'grapesjs-parser-postcss', src: 'https://unpkg.com/grapesjs-parser-postcss@1.0.1/dist/index.js' },
        { id: 'grapesjs-tui-image-editor', src: 'https://unpkg.com/grapesjs-tui-image-editor@1.0.1/dist/index.js' },
        { id: 'grapesjs-navbar', src: 'https://unpkg.com/grapesjs-navbar@1.0.1/dist/index.js', options: { block: { category: 'Extra' } } },
    ];

    const DEFAULT_PROJECT_DATA = {
        assets: [],
        styles: [],
        pages: [
            {
                name: 'Startseite',
                component:
                    '<section class="container mx-auto px-6 py-12">' +
                    '<h1 class="text-3xl font-semibold">Neue Seite</h1>' +
                    '<p class="mt-4 text-gray-700">Dieser Inhalt wurde mit dem LMZ Builder erstellt.</p>' +
                    '</section>',
            },
        ],
    };

    const DEFAULT_OPTIONS = {
        root: '#studio-editor',
        projectId: null,
        gjsScript: '/adminressources/pagebuilder/vendors/lmz-builderjs.js?v=' + LMZ_VENDOR_VERSION,
        gjsStyle: '/adminressources/pagebuilder/vendors/lmz-builderjs.css?v=' + LMZ_VENDOR_VERSION,
        canvasStyles: DEFAULT_CANVAS_STYLES,
        endpoints: {
            load: '/administrator/pagebuilder/load/:id',
            save: '/administrator/pagebuilder/save',
            assets: '/administrator/pagebuilder/assets',
            upload: '/administrator/pagebuilder/upload',
        },
        fetch: {
            credentials: 'same-origin',
            headers: {},
        },
        autosave: {
            enabled: true,
            intervalMs: 10000,
            changesBeforeSave: 30,
        },
        blocks: {
            addDefault: true,
            custom: [],
        },
        styleManager: {
            sectors: [
                { name: 'General', open: false, buildProps: ['display', 'position', 'top', 'right', 'bottom', 'left', 'float', 'clear', 'overflow'] },
                { name: 'Dimension', open: false, buildProps: ['width', 'height', 'min-height', 'max-width', 'padding', 'margin'] },
                {
                    name: 'Flex',
                    open: false,
                    buildProps: [
                        'flex-direction',
                        'flex-wrap',
                        'justify-content',
                        'align-items',
                        'align-content',
                        'order',
                        'flex-basis',
                        'flex-grow',
                        'flex-shrink',
                        'align-self',
                    ],
                },
                {
                    name: 'Typography',
                    open: true,
                    buildProps: [
                        'font-family',
                        'font-size',
                        'font-weight',
                        'line-height',
                        'letter-spacing',
                        'color',
                        'text-align',
                        'text-decoration',
                        'text-transform',
                    ],
                },
                {
                    name: 'Background',
                    open: false,
                    buildProps: ['background-color', 'background-image', 'background-repeat', 'background-position', 'background-size', 'background-attachment'],
                },
                { name: 'Border', open: false, buildProps: ['border', 'border-width', 'border-style', 'border-color', 'border-radius'] },
                { name: 'Effects', open: false, buildProps: ['opacity', 'box-shadow', 'text-shadow', 'transform', 'transition'] },
            ],
        },
        storage: {
            onLoad: null,
            onSave: null,
        },
        assets: {
            onLoad: null,
            onUpload: null,
        },
        plugins: [],
        pluginSpecs: [],
        pluginsOpts: {},
        useStudioWebDefaults: true,
        gjsOptions: {},
    };

    function isPlainObject(value) {
        return !!value && typeof value === 'object' && !Array.isArray(value);
    }

    function deepMerge(base, extra) {
        const output = Array.isArray(base) ? base.slice() : { ...base };

        if (!isPlainObject(extra) && !Array.isArray(extra)) {
            return output;
        }

        Object.keys(extra).forEach((key) => {
            const incoming = extra[key];
            const current = output[key];

            if (Array.isArray(incoming)) {
                output[key] = incoming.slice();
                return;
            }

            if (isPlainObject(incoming) && isPlainObject(current)) {
                output[key] = deepMerge(current, incoming);
                return;
            }

            output[key] = incoming;
        });

        return output;
    }

    function ensureArray(value) {
        return Array.isArray(value) ? value.filter(Boolean) : [];
    }

    function uniquePlugins(plugins) {
        const seenStrings = new Set();
        const seenFunctions = new Set();
        const output = [];

        ensureArray(plugins).forEach((plugin) => {
            if (typeof plugin === 'string') {
                if (!seenStrings.has(plugin)) {
                    seenStrings.add(plugin);
                    output.push(plugin);
                }
                return;
            }

            if (typeof plugin === 'function') {
                if (!seenFunctions.has(plugin)) {
                    seenFunctions.add(plugin);
                    output.push(plugin);
                }
                return;
            }

            output.push(plugin);
        });

        return output;
    }

    function normalizePluginSpecs(specs) {
        const output = [];
        const byKey = new Map();

        ensureArray(specs).forEach((entry) => {
            const normalizedEntry = typeof entry === 'string' ? { src: entry } : entry;
            if (!isPlainObject(normalizedEntry)) {
                return;
            }

            const id = typeof normalizedEntry.id === 'string' && normalizedEntry.id.trim() ? normalizedEntry.id.trim() : null;
            const src = typeof normalizedEntry.src === 'string' && normalizedEntry.src.trim() ? normalizedEntry.src.trim() : null;
            const key = id ? 'id:' + id : src ? 'src:' + toAbsoluteUrl(src) : null;

            if (!key) {
                return;
            }

            const existing = byKey.get(key) || { id: null, src: null, options: {} };
            const merged = {
                id: id || existing.id,
                src: src || existing.src,
                options: deepMerge(existing.options || {}, isPlainObject(normalizedEntry.options) ? normalizedEntry.options : {}),
            };

            byKey.set(key, merged);
        });

        byKey.forEach((value) => output.push(value));
        return output;
    }

    async function resolvePluginSpecs(grapesjs, specs) {
        const plugins = [];
        const pluginOptions = {};
        const normalizedSpecs = normalizePluginSpecs(specs);

        for (const spec of normalizedSpecs) {
            if (spec.src) {
                try {
                    await loadScriptOnce(spec.src);
                } catch (error) {
                    console.warn('LMZBuilder: plugin script konnte nicht geladen werden:', spec.src);
                    continue;
                }
            }

            if (!spec.id) {
                continue;
            }

            let hasPlugin = true;
            if (typeof grapesjs?.plugins?.get === 'function') {
                try {
                    hasPlugin = !!grapesjs.plugins.get(spec.id);
                } catch (error) {
                    hasPlugin = false;
                }
            }

            if (!hasPlugin && spec.src) {
                console.warn('LMZBuilder: plugin wurde nicht registriert:', spec.id);
                continue;
            }

            plugins.push(spec.id);

            if (isPlainObject(spec.options) && Object.keys(spec.options).length) {
                pluginOptions[spec.id] = deepMerge(pluginOptions[spec.id] || {}, spec.options);
            }
        }

        return {
            plugins,
            pluginOptions,
        };
    }

    function resolveRuntimeExtensions(root) {
        const globalConfig = isPlainObject(window.__lmzBuilderConfig) ? window.__lmzBuilderConfig : {};
        const rootConfig = isPlainObject(root?.__lmzBuilderConfig) ? root.__lmzBuilderConfig : {};
        const pluginOptions = deepMerge(globalConfig.pluginsOpts || {}, rootConfig.pluginsOpts || {});
        const runtimeUseStudioDefaults =
            typeof rootConfig.useStudioWebDefaults === 'boolean'
                ? rootConfig.useStudioWebDefaults
                : typeof globalConfig.useStudioWebDefaults === 'boolean'
                ? globalConfig.useStudioWebDefaults
                : null;

        return {
            plugins: [...ensureArray(globalConfig.plugins), ...ensureArray(rootConfig.plugins)],
            pluginOptions,
            pluginSpecs: normalizePluginSpecs([
                ...ensureArray(globalConfig.pluginSpecs),
                ...ensureArray(globalConfig.pluginScripts),
                ...ensureArray(rootConfig.pluginSpecs),
                ...ensureArray(rootConfig.pluginScripts),
            ]),
            blockRegistrars: [...ensureArray(globalConfig.blockRegistrars), ...ensureArray(rootConfig.blockRegistrars)],
            customBlocks: [...ensureArray(globalConfig.customBlocks), ...ensureArray(rootConfig.customBlocks)],
            useStudioWebDefaults: runtimeUseStudioDefaults,
        };
    }

    function getRootElement(root) {
        if (typeof root === 'string') {
            const node = document.querySelector(root);
            if (!node) {
                throw new Error('LMZBuilder: root element not found for selector ' + root);
            }
            return node;
        }

        if (root instanceof HTMLElement) {
            return root;
        }

        throw new Error('LMZBuilder: invalid root option');
    }

    function getCsrfToken() {
        return document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
    }

    function withCsrfHeaders(headers) {
        const token = getCsrfToken();
        const merged = { ...(headers || {}) };

        if (token && !merged['X-CSRF-TOKEN']) {
            merged['X-CSRF-TOKEN'] = token;
        }

        return merged;
    }

    function loadStyleOnce(href) {
        if (!href) {
            return Promise.resolve();
        }

        if (document.querySelector('link[data-lmz-style="' + href + '"]')) {
            return Promise.resolve();
        }

        return new Promise((resolve, reject) => {
            const link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = href;
            link.dataset.lmzStyle = href;
            link.onload = resolve;
            link.onerror = () => reject(new Error('LMZBuilder: failed to load style ' + href));
            document.head.appendChild(link);
        });
    }

    function loadScriptOnce(src) {
        if (!src) {
            return Promise.resolve();
        }

        const existing = document.querySelector('script[data-lmz-script="' + src + '"]');
        if (existing) {
            if (existing.dataset.lmzLoaded === '1') {
                return Promise.resolve();
            }

            if (existing.dataset.lmzError === '1') {
                return Promise.reject(new Error('LMZBuilder: failed to load script ' + src));
            }

            return new Promise((resolve, reject) => {
                existing.addEventListener(
                    'load',
                    () => {
                        existing.dataset.lmzLoaded = '1';
                        resolve();
                    },
                    { once: true }
                );
                existing.addEventListener(
                    'error',
                    () => {
                        existing.dataset.lmzError = '1';
                        reject(new Error('LMZBuilder: failed to load script ' + src));
                    },
                    { once: true }
                );
            });
        }

        return new Promise((resolve, reject) => {
            const script = document.createElement('script');
            script.src = src;
            script.async = true;
            script.dataset.lmzScript = src;
            script.onload = () => {
                script.dataset.lmzLoaded = '1';
                resolve();
            };
            script.onerror = () => {
                script.dataset.lmzError = '1';
                reject(new Error('LMZBuilder: failed to load script ' + src));
            };
            document.head.appendChild(script);
        });
    }

    function resolveGrapesJsGlobal() {
        if (window.grapesjs) {
            return window.grapesjs;
        }

        if (window.exports && window.exports.grapesjs) {
            window.grapesjs = window.exports.grapesjs;
            return window.grapesjs;
        }

        if (window.module && window.module.exports) {
            const exported = window.module.exports;
            if (exported.init || exported.default || exported.plugins) {
                window.grapesjs = exported.default || exported;
                return window.grapesjs;
            }
        }

        if (window.globalThis && window.globalThis.grapesjs) {
            window.grapesjs = window.globalThis.grapesjs;
            return window.grapesjs;
        }

        return null;
    }

    async function ensureGrapesJs(options) {
        const current = resolveGrapesJsGlobal();
        if (current) {
            return current;
        }

        await loadStyleOnce(options.gjsStyle);
        await loadScriptOnce(options.gjsScript);

        const loaded = resolveGrapesJsGlobal();
        if (!loaded) {
            throw new Error('LMZBuilder: grapesjs could not be loaded');
        }

        return loaded;
    }

    function resolveEndpoint(urlTemplate, projectId) {
        if (!urlTemplate) {
            return null;
        }

        if (urlTemplate.includes(':id')) {
            return urlTemplate.replace(':id', encodeURIComponent(projectId || ''));
        }

        return urlTemplate;
    }

    async function parseJson(response) {
        const text = await response.text();
        if (!text) {
            return null;
        }

        try {
            return JSON.parse(text);
        } catch (error) {
            return null;
        }
    }

    function normalizeProjectPayload(payload) {
        if (!payload) {
            return null;
        }

        let value = payload;
        if (isPlainObject(value) && value.project) {
            value = value.project;
        }

        if (typeof value === 'string') {
            try {
                value = JSON.parse(value);
            } catch (error) {
                return null;
            }
        }

        return isPlainObject(value) ? value : null;
    }

    function setupTabs(shell) {
        const triggers = shell.querySelectorAll('[data-lmz-tab-trigger]');

        function activate(tabValue) {
            const parts = tabValue.split(':');
            const group = parts[0];

            triggers.forEach((trigger) => {
                trigger.classList.toggle('is-active', trigger.dataset.lmzTabTrigger === tabValue);
            });

            shell.querySelectorAll('[data-lmz-tab-panel]').forEach((panel) => {
                const panelGroup = panel.dataset.lmzTabPanel.split(':')[0];
                const shouldShow = panel.dataset.lmzTabPanel === tabValue && panelGroup === group;
                panel.classList.toggle('is-active', shouldShow);
            });
        }

        triggers.forEach((trigger) => {
            trigger.addEventListener('click', () => {
                activate(trigger.dataset.lmzTabTrigger);
            });
        });

        activate('left:blocks');
        activate('right:styles');
    }

    function createShell(root) {
        root.classList.add('lmz-builder-host');
        root.innerHTML = '';

        const shell = document.createElement('div');
        shell.className = 'lmz-builder';
        shell.innerHTML =
            '<div class="lmz-builder__topbar">' +
            '<div class="lmz-builder__actions">' +
            '<button type="button" data-lmz-action="undo">Undo</button>' +
            '<button type="button" data-lmz-action="redo">Redo</button>' +
            '<button type="button" data-lmz-action="preview">Preview</button>' +
            '<button type="button" data-lmz-action="assets">Assets</button>' +
            '<button type="button" data-lmz-action="save" class="is-primary">Speichern</button>' +
            '</div>' +
            '<div class="lmz-builder__status" data-lmz-status data-state="muted">Initialisierung...</div>' +
            '</div>' +
            '<div class="lmz-builder__body">' +
            '<aside class="lmz-builder__sidebar lmz-builder__sidebar--left">' +
            '<div class="lmz-builder__tabs">' +
            '<button type="button" class="is-active" data-lmz-tab-trigger="left:blocks">Blocks</button>' +
            '<button type="button" data-lmz-tab-trigger="left:layers">Layers</button>' +
            '</div>' +
            '<div class="lmz-builder__panels">' +
            '<div class="lmz-builder__panel is-active" data-lmz-tab-panel="left:blocks"><div class="lmz-builder__mount" data-lmz-mount="blocks"></div></div>' +
            '<div class="lmz-builder__panel" data-lmz-tab-panel="left:layers"><div class="lmz-builder__mount" data-lmz-mount="layers"></div></div>' +
            '</div>' +
            '</aside>' +
            '<main class="lmz-builder__main">' +
            '<div class="lmz-builder__canvas" data-lmz-mount="canvas"></div>' +
            '</main>' +
            '<aside class="lmz-builder__sidebar lmz-builder__sidebar--right">' +
            '<div class="lmz-builder__tabs">' +
            '<button type="button" class="is-active" data-lmz-tab-trigger="right:styles">Styles</button>' +
            '<button type="button" data-lmz-tab-trigger="right:traits">Properties</button>' +
            '</div>' +
            '<div class="lmz-builder__panels">' +
            '<div class="lmz-builder__panel is-active" data-lmz-tab-panel="right:styles">' +
            '<div class="lmz-builder__mount" data-lmz-mount="styles"></div>' +
            '</div>' +
            '<div class="lmz-builder__panel" data-lmz-tab-panel="right:traits"><div class="lmz-builder__mount" data-lmz-mount="traits"></div></div>' +
            '</div>' +
            '</aside>' +
            '</div>' +
            '<input type="file" data-lmz-upload-input multiple hidden />';

        root.appendChild(shell);
        setupTabs(shell);

        return {
            shell,
            status: shell.querySelector('[data-lmz-status]'),
            canvas: shell.querySelector('[data-lmz-mount="canvas"]'),
            blocks: shell.querySelector('[data-lmz-mount="blocks"]'),
            layers: shell.querySelector('[data-lmz-mount="layers"]'),
            styles: shell.querySelector('[data-lmz-mount="styles"]'),
            traits: shell.querySelector('[data-lmz-mount="traits"]'),
            uploadInput: shell.querySelector('[data-lmz-upload-input]'),
        };
    }

    function setStatus(refs, text, state) {
        if (!refs.status) {
            return;
        }

        refs.status.textContent = text;
        refs.status.dataset.state = state || 'muted';
    }

    function getFirstChildComponent(wrapper) {
        if (!wrapper || typeof wrapper.components !== 'function') {
            return null;
        }

        const components = wrapper.components();
        if (!components) {
            return null;
        }

        if (typeof components.at === 'function') {
            return components.at(0) || null;
        }

        if (Array.isArray(components)) {
            return components[0] || null;
        }

        if (Array.isArray(components.models)) {
            return components.models[0] || null;
        }

        return null;
    }

    function selectInitialComponent(editor) {
        if (!editor || typeof editor.select !== 'function') {
            return;
        }

        if (typeof editor.getSelected === 'function' && editor.getSelected()) {
            return;
        }

        const wrapper = typeof editor.getWrapper === 'function' ? editor.getWrapper() : null;
        const target = getFirstChildComponent(wrapper) || wrapper;

        if (!target) {
            return;
        }

        try {
            editor.select(target);
        } catch (error) {
            console.warn('LMZBuilder: initiale Komponentenauswahl fehlgeschlagen');
        }
    }

    function dedupeClassManagerUis(container) {
        if (!container) {
            return;
        }

        const managers = Array.from(container.querySelectorAll('.lmzbjs-clm-tags'));
        if (managers.length <= 1) {
            return;
        }

        managers.slice(1).forEach((node) => node.remove());
    }

    function addDefaultBlocks(editor) {
        const blockManager = editor.BlockManager;

        blockManager.add('lmz-section', {
            label: 'Section',
            category: 'Layout',
            content: '<section class="container mx-auto px-6 py-8"><div class="max-w-4xl mx-auto">Neuer Abschnitt</div></section>',
        });

        blockManager.add('lmz-two-columns', {
            label: '2 Columns',
            category: 'Layout',
            content:
                '<section class="container mx-auto px-6 py-8">' +
                '<div class="grid gap-6 md:grid-cols-2">' +
                '<div class="p-6 rounded bg-gray-100">Spalte 1</div>' +
                '<div class="p-6 rounded bg-gray-100">Spalte 2</div>' +
                '</div>' +
                '</section>',
        });

        blockManager.add('lmz-hero', {
            label: 'Hero',
            category: 'Layout',
            content:
                '<section class="py-16 bg-slate-900 text-white">' +
                '<div class="container mx-auto px-6">' +
                '<h2 class="text-4xl font-bold">Hero Titel</h2>' +
                '<p class="mt-4 text-slate-200 max-w-xl">Beschreibe hier dein Angebot mit einem kurzen Intro.</p>' +
                '<a class="inline-block mt-6 px-5 py-3 rounded bg-blue-500 hover:bg-blue-600" href="#">Call to Action</a>' +
                '</div>' +
                '</section>',
        });

        blockManager.add('lmz-text', {
            label: 'Text',
            category: 'Basic',
            content: '<p class="text-gray-700">Bearbeitbarer Textblock</p>',
        });

        blockManager.add('lmz-button', {
            label: 'Button',
            category: 'Basic',
            content: '<a href="#" class="inline-block rounded bg-blue-600 px-4 py-2 text-white">Button</a>',
        });

        blockManager.add('lmz-image', {
            label: 'Image',
            category: 'Basic',
            content: '<img src="https://placehold.co/1200x600" alt="Placeholder" class="w-full h-auto rounded" />',
        });
    }

    async function loadAssetLibrary(editor, options) {
        let assets = null;

        if (typeof options.assets.onLoad === 'function') {
            assets = await options.assets.onLoad({ editor });
        } else if (options.endpoints.assets) {
            const response = await fetch(options.endpoints.assets, {
                credentials: options.fetch.credentials,
                headers: options.fetch.headers,
            });

            if (!response.ok) {
                throw new Error('LMZBuilder: could not load assets (status ' + response.status + ')');
            }

            assets = await parseJson(response);
        }

        if (!Array.isArray(assets)) {
            return;
        }

        assets.forEach((asset) => {
            if (typeof asset === 'string') {
                editor.AssetManager.add({ src: asset });
                return;
            }

            if (isPlainObject(asset) && asset.src) {
                editor.AssetManager.add(asset);
            }
        });
    }

    async function uploadAssets(editor, files, options) {
        if (!files || files.length === 0) {
            return [];
        }

        if (typeof options.assets.onUpload === 'function') {
            const uploaded = await options.assets.onUpload({ editor, files });
            if (Array.isArray(uploaded)) {
                uploaded.forEach((asset) => editor.AssetManager.add(asset));
            }
            return uploaded || [];
        }

        if (!options.endpoints.upload) {
            throw new Error('LMZBuilder: missing upload endpoint');
        }

        const uploaded = [];

        for (const file of files) {
            const body = new FormData();
            body.append('file', file);

            const response = await fetch(options.endpoints.upload, {
                method: 'POST',
                body,
                credentials: options.fetch.credentials,
                headers: withCsrfHeaders(options.fetch.headers),
            });

            if (!response.ok) {
                throw new Error('LMZBuilder: upload failed (status ' + response.status + ')');
            }

            const result = await parseJson(response);
            const src = result?.url || result?.src || null;

            if (src) {
                const asset = { src };
                editor.AssetManager.add(asset);
                uploaded.push(asset);
            }
        }

        return uploaded;
    }

    const canvasStyleTextCache = new Map();

    async function fetchCanvasStyleText(href) {
        const normalizedHref = toAbsoluteUrl(href);

        if (canvasStyleTextCache.has(normalizedHref)) {
            return canvasStyleTextCache.get(normalizedHref);
        }

        try {
            const response = await fetch(normalizedHref, { credentials: 'same-origin' });
            if (!response.ok) {
                throw new Error('status ' + response.status);
            }

            const text = await response.text();
            canvasStyleTextCache.set(normalizedHref, text);
            return text;
        } catch (error) {
            console.warn('LMZBuilder: canvas style fallback konnte nicht vorgeladen werden:', normalizedHref);
            canvasStyleTextCache.set(normalizedHref, null);
            return null;
        }
    }

    function warmupCanvasStyleCache(styles) {
        normalizeCanvasStyles(styles).forEach((href) => {
            fetchCanvasStyleText(href).catch(() => {});
        });
    }

    function ensureInlineCanvasStyle(documentFrame, href) {
        if (!documentFrame?.head) {
            return;
        }

        const normalizedHref = toAbsoluteUrl(href, documentFrame.baseURI || window.location.href);
        let inlineStyle = documentFrame.querySelector('style[data-lmz-canvas-inline="' + normalizedHref + '"]');

        if (!inlineStyle) {
            inlineStyle = documentFrame.createElement('style');
            inlineStyle.dataset.lmzCanvasInline = normalizedHref;
            inlineStyle.dataset.lmzCanvasInlineState = 'idle';
            inlineStyle.appendChild(documentFrame.createTextNode('/* loading canvas style fallback */'));
            documentFrame.head.appendChild(inlineStyle);
        }

        if (inlineStyle.dataset.lmzCanvasInlineState === 'loaded' || inlineStyle.dataset.lmzCanvasInlineState === 'loading') {
            return;
        }

        inlineStyle.dataset.lmzCanvasInlineState = 'loading';

        fetchCanvasStyleText(normalizedHref)
            .then((cssText) => {
                if (!cssText) {
                    inlineStyle.dataset.lmzCanvasInlineState = 'error';
                    return;
                }

                inlineStyle.textContent = cssText;
                inlineStyle.dataset.lmzCanvasInlineState = 'loaded';
                console.info('LMZBuilder: canvas style als Inline-Fallback geladen:', normalizedHref);
            })
            .catch(() => {
                inlineStyle.dataset.lmzCanvasInlineState = 'error';
            });
    }

    function ensureCanvasStyles(editor, styles) {
        const normalizedStyles = normalizeCanvasStyles(styles);
        if (normalizedStyles.length === 0) {
            return;
        }

        const documentFrame = editor?.Canvas?.getDocument?.();
        if (!documentFrame?.head) {
            return;
        }

        const frameBaseUrl = documentFrame.baseURI || window.location.href;
        const normalizeHref = (href) => toAbsoluteUrl(href, frameBaseUrl);
        const expectedHrefs = new Set(normalizedStyles.map((href) => normalizeHref(href)));
        const expectedPathnames = new Set(
            normalizedStyles
                .map((href) => {
                    try {
                        return new URL(normalizeHref(href)).pathname;
                    } catch (error) {
                        return null;
                    }
                })
                .filter(Boolean)
        );

        normalizedStyles.forEach((href) => {
            ensureInlineCanvasStyle(documentFrame, href);
        });

        // Inline-only strategy: remove external stylesheet links for managed canvas styles.
        Array.from(documentFrame.querySelectorAll('link[rel="stylesheet"][href]')).forEach((link) => {
            const href = normalizeHref(link.getAttribute('href') || link.href || '');
            let linkPathname = null;
            try {
                linkPathname = new URL(href).pathname;
            } catch (error) {}

            if (expectedHrefs.has(href) || (linkPathname && expectedPathnames.has(linkPathname))) {
                link.remove();
            }
        });

        Array.from(documentFrame.querySelectorAll('style[data-lmz-canvas-inline]')).forEach((styleNode) => {
            const inlineHref = normalizeHref(styleNode.dataset.lmzCanvasInline || '');
            if (!expectedHrefs.has(inlineHref)) {
                styleNode.remove();
            }
        });
    }

    function startCanvasStyleSync(editor, styles) {
        const normalizedStyles = normalizeCanvasStyles(styles);
        if (normalizedStyles.length === 0) {
            return () => {};
        }

        let frameEl = null;
        let headObserver = null;

        const syncNow = () => {
            ensureCanvasStyles(editor, normalizedStyles);
        };

        const bindHeadObserver = () => {
            if (headObserver) {
                headObserver.disconnect();
                headObserver = null;
            }

            const documentFrame = editor?.Canvas?.getDocument?.();
            if (!documentFrame?.head || typeof MutationObserver === 'undefined') {
                return;
            }

            headObserver = new MutationObserver(() => {
                syncNow();
            });
            headObserver.observe(documentFrame.head, { childList: true });
        };

        const bindFrameListener = () => {
            const currentFrameEl = editor?.Canvas?.getFrameEl?.();
            if (!currentFrameEl || currentFrameEl === frameEl) {
                return;
            }

            if (frameEl) {
                frameEl.removeEventListener('load', onFrameReady);
            }

            frameEl = currentFrameEl;
            frameEl.addEventListener('load', onFrameReady);
        };

        const onFrameReady = () => {
            syncNow();
            bindHeadObserver();
        };

        editor.on('load', onFrameReady);
        editor.on('canvas:frame:load', onFrameReady);

        bindFrameListener();
        onFrameReady();

        const intervalId = window.setInterval(() => {
            bindFrameListener();
            syncNow();
        }, CANVAS_STYLE_SYNC_INTERVAL_MS);

        return () => {
            window.clearInterval(intervalId);
            editor.off('load', onFrameReady);
            editor.off('canvas:frame:load', onFrameReady);
            if (frameEl) {
                frameEl.removeEventListener('load', onFrameReady);
            }
            if (headObserver) {
                headObserver.disconnect();
                headObserver = null;
            }
        };
    }

    async function create(userOptions) {
        const options = deepMerge(DEFAULT_OPTIONS, userOptions || {});
        const configuredCanvasStyles = normalizeCanvasStyles([
            ...(Array.isArray(options.canvasStyles) ? options.canvasStyles : []),
            ...(Array.isArray(options.gjsOptions?.canvas?.styles) ? options.gjsOptions.canvas.styles : []),
        ]);
        const root = getRootElement(options.root);
        const runtimeExtensions = resolveRuntimeExtensions(root);
        const useStudioWebDefaults =
            typeof runtimeExtensions.useStudioWebDefaults === 'boolean'
                ? runtimeExtensions.useStudioWebDefaults
                : options.useStudioWebDefaults !== false;
        const configuredPluginSpecs = normalizePluginSpecs([
            ...(useStudioWebDefaults ? STUDIO_WEB_DEFAULT_PLUGIN_SPECS : []),
            ...ensureArray(options.pluginSpecs),
            ...runtimeExtensions.pluginSpecs,
        ]);
        const configuredPluginOptionsBase = deepMerge(options.pluginsOpts || {}, runtimeExtensions.pluginOptions || {});
        const configuredCustomBlocks = [...ensureArray(options.blocks?.custom), ...runtimeExtensions.customBlocks];
        const refs = createShell(root);
        const grapesjs = await ensureGrapesJs(options);
        const resolvedPluginSpecs = await resolvePluginSpecs(grapesjs, configuredPluginSpecs);
        const configuredPlugins = uniquePlugins([
            ...ensureArray(options.plugins),
            ...runtimeExtensions.plugins,
            ...resolvedPluginSpecs.plugins,
        ]);
        const configuredPluginOptions = deepMerge(configuredPluginOptionsBase, resolvedPluginSpecs.pluginOptions || {});
        warmupCanvasStyleCache(configuredCanvasStyles);

        setStatus(refs, 'Editor wird gestartet...', 'muted');

        const grapesOptions = deepMerge(
            {
                container: refs.canvas,
                height: '100%',
                width: 'auto',
                stylePrefix: 'lmzbjs-',
                fromElement: false,
                noticeOnUnload: false,
                storageManager: false,
                panels: { defaults: [] },
                blockManager: { appendTo: refs.blocks },
                layerManager: { appendTo: refs.layers },
                selectorManager: { componentFirst: true },
                styleManager: deepMerge({ appendTo: refs.styles, custom: false }, options.styleManager),
                traitManager: { appendTo: refs.traits },
                canvas: { styles: [] },
                plugins: configuredPlugins,
                pluginsOpts: configuredPluginOptions,
            },
            options.gjsOptions || {}
        );

        grapesOptions.canvas = deepMerge({ styles: [] }, grapesOptions.canvas || {});
        grapesOptions.canvas.styles = [];

        const editor = grapesjs.init(grapesOptions);
        const canvasStyles = configuredCanvasStyles;
        dedupeClassManagerUis(refs.styles);

        if (options.blocks.addDefault && editor.BlockManager.getAll().length === 0) {
            addDefaultBlocks(editor);
        }

        if (configuredCustomBlocks.length) {
            configuredCustomBlocks.forEach((block) => {
                if (block?.id && block?.definition) {
                    editor.BlockManager.add(block.id, block.definition);
                }
            });
        }

        runtimeExtensions.blockRegistrars.forEach((registrar, index) => {
            if (typeof registrar !== 'function') {
                return;
            }

            try {
                registrar(editor);
            } catch (error) {
                console.error('LMZBuilder: blockRegistrar fehlgeschlagen (Index ' + index + ')', error);
            }
        });

        const state = {
            dirtyCount: 0,
            saveInFlight: false,
            saveQueued: false,
            autosaveTimer: null,
            destroyed: false,
        };

        let api = null;
        let stopCanvasStyleSync = () => {};

        const saveProject = async (reason) => {
            if (state.destroyed) {
                return;
            }

            if (state.saveInFlight) {
                state.saveQueued = true;
                return;
            }

            state.saveInFlight = true;
            setStatus(refs, reason === 'manual' ? 'Speichern...' : 'Autosave...', 'muted');

            try {
                const projectData = editor.getProjectData();
                const html = editor.getHtml();
                const css = editor.getCss();

                if (typeof options.storage.onSave === 'function') {
                    await options.storage.onSave({
                        project: projectData,
                        html,
                        css,
                        reason,
                        editor,
                        projectId: options.projectId,
                    });
                } else if (options.endpoints.save) {
                    const body = new FormData();
                    if (options.projectId !== null && options.projectId !== undefined && options.projectId !== '') {
                        body.append('id', String(options.projectId));
                    }
                    body.append('data', JSON.stringify(projectData));
                    body.append('html', '<style>' + css + '</style>' + html);

                    const response = await fetch(options.endpoints.save, {
                        method: 'POST',
                        body,
                        credentials: options.fetch.credentials,
                        headers: withCsrfHeaders(options.fetch.headers),
                    });

                    if (!response.ok) {
                        throw new Error('LMZBuilder: save failed (status ' + response.status + ')');
                    }
                }

                state.dirtyCount = 0;
                if (typeof editor.clearDirtyCount === 'function') {
                    editor.clearDirtyCount();
                }

                const now = new Date();
                setStatus(refs, 'Gespeichert ' + now.toLocaleTimeString(), 'success');
            } catch (error) {
                console.error(error);
                setStatus(refs, 'Speichern fehlgeschlagen', 'error');
            } finally {
                state.saveInFlight = false;
                if (state.saveQueued && api) {
                    state.saveQueued = false;
                    api.save('queued');
                }
            }
        };

        const loadProjectIntoEditor = (projectData) => {
            editor.loadProjectData(projectData);
            ensureCanvasStyles(editor, canvasStyles);
            window.setTimeout(() => {
                selectInitialComponent(editor);
                dedupeClassManagerUis(refs.styles);
            }, 0);
        };

        const loadProject = async () => {
            setStatus(refs, 'Projekt wird geladen...', 'muted');

            try {
                let payload = null;

                if (typeof options.storage.onLoad === 'function') {
                    payload = await options.storage.onLoad({ editor, projectId: options.projectId });
                } else if (options.endpoints.load && options.projectId) {
                    const url = resolveEndpoint(options.endpoints.load, options.projectId);
                    const response = await fetch(url, {
                        credentials: options.fetch.credentials,
                        headers: options.fetch.headers,
                    });

                    if (!response.ok) {
                        throw new Error('LMZBuilder: load failed (status ' + response.status + ')');
                    }

                    payload = await parseJson(response);
                }

                const projectData = normalizeProjectPayload(payload) || DEFAULT_PROJECT_DATA;
                loadProjectIntoEditor(projectData);

                if (typeof editor.clearDirtyCount === 'function') {
                    editor.clearDirtyCount();
                }
                state.dirtyCount = 0;
                setStatus(refs, 'Projekt geladen', 'success');
            } catch (error) {
                console.error(error);
                loadProjectIntoEditor(DEFAULT_PROJECT_DATA);
                setStatus(refs, 'Fallback-Projekt geladen', 'error');
            }
        };

        api = {
            editor,
            save(reason) {
                return saveProject(reason || 'manual');
            },
            async load() {
                await loadProject();
                await loadAssetLibrary(editor, options).catch((error) => {
                    console.error(error);
                    setStatus(refs, 'Assets konnten nicht geladen werden', 'error');
                });
            },
            async upload(files) {
                return uploadAssets(editor, files, options);
            },
            destroy() {
                state.destroyed = true;
                stopCanvasStyleSync();
                if (state.autosaveTimer) {
                    window.clearInterval(state.autosaveTimer);
                }
                editor.destroy();
                root.innerHTML = '';
                root.classList.remove('lmz-builder-host');
            },
        };

        refs.shell.querySelector('[data-lmz-action="undo"]').addEventListener('click', () => editor.runCommand('core:undo'));
        refs.shell.querySelector('[data-lmz-action="redo"]').addEventListener('click', () => editor.runCommand('core:redo'));
        refs.shell.querySelector('[data-lmz-action="save"]').addEventListener('click', () => api.save('manual'));
        refs.shell.querySelector('[data-lmz-action="assets"]').addEventListener('click', () => refs.uploadInput.click());
        refs.shell.querySelector('[data-lmz-action="preview"]').addEventListener('click', () => {
            if (editor.Commands.isActive('core:preview')) {
                editor.stopCommand('core:preview');
            } else {
                editor.runCommand('core:preview');
            }
        });

        refs.uploadInput.addEventListener('change', async (event) => {
            const files = Array.from(event.target.files || []);
            if (!files.length) {
                return;
            }

            setStatus(refs, 'Upload...', 'muted');
            try {
                await api.upload(files);
                setStatus(refs, 'Assets hochgeladen', 'success');
                editor.runCommand('open-assets');
            } catch (error) {
                console.error(error);
                setStatus(refs, 'Upload fehlgeschlagen', 'error');
            } finally {
                refs.uploadInput.value = '';
            }
        });

        editor.on('update', () => {
            state.dirtyCount += 1;
            if (options.autosave.enabled && state.dirtyCount >= options.autosave.changesBeforeSave) {
                api.save('autosave-threshold');
            }
        });

        stopCanvasStyleSync = startCanvasStyleSync(editor, canvasStyles);

        if (options.autosave.enabled) {
            state.autosaveTimer = window.setInterval(() => {
                if (state.dirtyCount > 0) {
                    api.save('autosave-interval');
                }
            }, options.autosave.intervalMs);
        }

        try {
            editor.Keymaps.add('lmz-save', '⌘+s, ctrl+s', () => {
                api.save('shortcut');
                return false;
            });
        } catch (error) {
            console.warn('LMZBuilder: save keymap could not be registered');
        }

        await api.load();
        ensureCanvasStyles(editor, canvasStyles);

        return api;
    }

    async function initFromStudioNode() {
        const root = document.getElementById('studio-editor');
        if (!root) {
            if (window.__lmzBuilderInstance) {
                window.__lmzBuilderInstance.destroy();
                window.__lmzBuilderInstance = null;
                window.__lmzBuilderProjectId = null;
            }
            return null;
        }

        const projectId = root.getAttribute('data-project') || null;

        if (
            window.__lmzBuilderInstance &&
            window.__lmzBuilderProjectId === projectId &&
            window.__lmzBuilderRoot === root
        ) {
            return window.__lmzBuilderInstance;
        }

        if (window.__lmzBuilderInstance) {
            window.__lmzBuilderInstance.destroy();
            window.__lmzBuilderInstance = null;
        }

        window.__lmzBuilderInstance = await create({
            root,
            projectId,
            canvasStyles: DEFAULT_CANVAS_STYLES,
            endpoints: {
                load: '/administrator/pagebuilder/load/:id',
                save: '/administrator/pagebuilder/save',
                assets: '/administrator/pagebuilder/assets',
                upload: '/administrator/pagebuilder/upload',
            },
        });

        window.__lmzBuilderProjectId = projectId;
        window.__lmzBuilderRoot = root;
        return window.__lmzBuilderInstance;
    }

    window.LMZBuilder = {
        create,
        version: '0.1.0',
    };
    window.initLMZBuilder = initFromStudioNode;
})();
