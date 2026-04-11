(function () {
    'use strict';

    const CANVAS_TAILWIND_RELATIVE = '/adminresources/css/tailwind.min.css';
    const CANVAS_STYLE_SYNC_INTERVAL_MS = 2000;
    const LMZ_VENDOR_VERSION = '20260331-3';
    const SPACING_SIDES = ['top', 'right', 'bottom', 'left'];
    const SPACING_MIN_HANDLE_SIZE = 10;

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
                { name: 'Dimension', open: true, buildProps: ['width', 'height', 'min-height', 'max-width', 'padding', 'margin'] },
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

    function getShellIcon(name) {
        const icons = {
            brand:
                '<svg viewBox="0 0 24 24" fill="none" aria-hidden="true">' +
                '<path d="M4 6.75C4 5.784 4.784 5 5.75 5h4.5C11.216 5 12 5.784 12 6.75v4.5c0 .966-.784 1.75-1.75 1.75h-4.5A1.75 1.75 0 0 1 4 11.25v-4.5Z" stroke="currentColor" stroke-width="1.6"/>' +
                '<path d="M12.75 12.75c0-.966.784-1.75 1.75-1.75h3.75c.966 0 1.75.784 1.75 1.75v5.5c0 .966-.784 1.75-1.75 1.75H14.5a1.75 1.75 0 0 1-1.75-1.75v-5.5Z" stroke="currentColor" stroke-width="1.6"/>' +
                '<path d="M12.75 5.75A1.75 1.75 0 0 1 14.5 4h3.75A1.75 1.75 0 0 1 20 5.75v1.5A1.75 1.75 0 0 1 18.25 9H14.5a1.75 1.75 0 0 1-1.75-1.75v-1.5Z" fill="currentColor" opacity=".22"/>' +
                '<path d="M4 16.5c0-.966.784-1.75 1.75-1.75h2.5c.966 0 1.75.784 1.75 1.75v1.75c0 .966-.784 1.75-1.75 1.75h-2.5A1.75 1.75 0 0 1 4 18.25V16.5Z" fill="currentColor"/>' +
                '</svg>',
            undo:
                '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true">' +
                '<path d="M7.75 5.25 4.25 8.5l3.5 3.25" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>' +
                '<path d="M5 8.5h6.5a4 4 0 1 1 0 8H9.25" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>' +
                '</svg>',
            redo:
                '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true">' +
                '<path d="m12.25 5.25 3.5 3.25-3.5 3.25" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>' +
                '<path d="M15 8.5H8.5a4 4 0 1 0 0 8h2.25" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>' +
                '</svg>',
            preview:
                '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true">' +
                '<path d="M1.75 10s3.25-5 8.25-5 8.25 5 8.25 5-3.25 5-8.25 5-8.25-5-8.25-5Z" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>' +
                '<circle cx="10" cy="10" r="2.35" stroke="currentColor" stroke-width="1.7"/>' +
                '</svg>',
            assets:
                '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true">' +
                '<rect x="2.75" y="3.25" width="14.5" height="13.5" rx="2.25" stroke="currentColor" stroke-width="1.7"/>' +
                '<path d="m5.25 13.25 3-3 2.25 2.25 2.75-3.25 1.5 1.75" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>' +
                '<circle cx="7" cy="7.25" r="1.15" fill="currentColor"/>' +
                '</svg>',
            save:
                '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true">' +
                '<path d="M4 3.25h9.75L16.75 6v10.75H4V3.25Z" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>' +
                '<path d="M6.75 3.25V7h6V3.25" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>' +
                '<path d="M6.75 16.25V11.5h7v4.75" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/>' +
                '</svg>',
            blocks:
                '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true">' +
                '<rect x="2.75" y="2.75" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.6"/>' +
                '<rect x="11.25" y="2.75" width="6" height="6" rx="1.5" fill="currentColor" opacity=".2"/>' +
                '<rect x="11.25" y="11.25" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.6"/>' +
                '<rect x="2.75" y="11.25" width="6" height="6" rx="1.5" stroke="currentColor" stroke-width="1.6"/>' +
                '</svg>',
            layers:
                '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true">' +
                '<path d="m10 3 7 3.5-7 3.5-7-3.5L10 3Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>' +
                '<path d="m3 10 7 3.5 7-3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
                '<path d="m3 13.5 7 3.5 7-3.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>' +
                '</svg>',
            styles:
                '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true">' +
                '<path d="M4.5 5.25h11" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>' +
                '<path d="M4.5 10h8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>' +
                '<path d="M4.5 14.75h6" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>' +
                '<circle cx="14.25" cy="10" r="2" stroke="currentColor" stroke-width="1.5"/>' +
                '<circle cx="12.75" cy="14.75" r="2" fill="currentColor" opacity=".24"/>' +
                '</svg>',
            traits:
                '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true">' +
                '<path d="M10 2.75 3.75 6.25v7.5L10 17.25l6.25-3.5v-7.5L10 2.75Z" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/>' +
                '<path d="M10 7.25v5.5M7.25 10h5.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>' +
                '</svg>',
            classes:
                '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true">' +
                '<path d="M3.75 6.25h8.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>' +
                '<path d="M3.75 10h12.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>' +
                '<path d="M3.75 13.75h9.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/>' +
                '<circle cx="14.75" cy="6.25" r="1.75" fill="currentColor" opacity=".22"/>' +
                '<circle cx="16.25" cy="13.75" r="1.75" stroke="currentColor" stroke-width="1.5"/>' +
                '</svg>',
            chevron:
                '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true">' +
                '<path d="m6 8 4 4 4-4" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"/>' +
                '</svg>',
            close:
                '<svg viewBox="0 0 20 20" fill="none" aria-hidden="true">' +
                '<path d="m6 6 8 8M14 6l-8 8" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/>' +
                '</svg>',
        };

        return icons[name] || '';
    }

    function createActionButton(action, label, icon, options) {
        const config = options || {};
        const classes = ['lmz-builder__action'];

        if (config.primary) {
            classes.push('is-primary');
        }

        if (config.iconOnly) {
            classes.push('is-icon-only');
        }

        return (
            '<button type="button" class="' +
            classes.join(' ') +
            '" data-lmz-action="' +
            action +
            '" aria-label="' +
            label +
            '">' +
            '<span class="lmz-builder__action-icon">' +
            getShellIcon(icon) +
            '</span>' +
            (config.iconOnly
                ? ''
                : '<span class="lmz-builder__action-label">' + label + '</span>') +
            '</button>'
        );
    }

    function createPanelToggleButton(config) {
        return (
            '<button type="button" class="lmz-builder__action lmz-builder__action--panel" data-lmz-panel-toggle="' +
            config.id +
            '" data-lmz-panel-group="' +
            config.group +
            '" aria-haspopup="dialog" aria-expanded="false">' +
            '<span class="lmz-builder__action-icon">' +
            getShellIcon(config.icon) +
            '</span>' +
            '<span class="lmz-builder__action-label">' +
            config.label +
            '</span>' +
            '</button>'
        );
    }

    function createPopoverPanel(config) {
        return (
            '<section class="lmz-builder__popover-panel" data-lmz-popover-panel="' +
            config.id +
            '" hidden>' +
            '<header class="lmz-builder__popover-head">' +
            '<div class="lmz-builder__popover-title">' +
            '<span class="lmz-builder__popover-icon">' +
            getShellIcon(config.icon) +
            '</span>' +
            '<strong>' +
            config.label +
            '</strong>' +
            '</div>' +
            '<button type="button" class="lmz-builder__popover-close" data-lmz-panel-close="' +
            config.group +
            '" aria-label="' +
            config.label +
            ' schliessen">' +
            getShellIcon('close') +
            '</button>' +
            '</header>' +
            '<div class="lmz-builder__popover-body">' +
            '<div class="lmz-builder__mount" data-lmz-mount="' +
            config.mount +
            '"></div>' +
            '</div>' +
            '</section>'
        );
    }

    function createPopover(side, sections) {
        return (
            '<aside class="lmz-builder__popover lmz-builder__popover--' +
            side +
            '" data-lmz-popover="' +
            side +
            '" hidden>' +
            sections.map((section) => createPopoverPanel(section)).join('') +
            '</aside>'
        );
    }

    function setupPopovers(shell) {
        const buttons = Array.from(shell.querySelectorAll('[data-lmz-panel-toggle]'));
        const panels = Array.from(shell.querySelectorAll('[data-lmz-popover-panel]'));
        const popovers = Array.from(shell.querySelectorAll('[data-lmz-popover]'));
        const closeButtons = Array.from(shell.querySelectorAll('[data-lmz-panel-close]'));
        const state = {
            left: null,
            right: null,
        };

        const getGroup = (value) => String(value || '').split(':')[0];

        function renderGroup(group) {
            const activeValue = state[group];

            buttons.forEach((button) => {
                if (button.dataset.lmzPanelGroup !== group) {
                    return;
                }

                const isActive = button.dataset.lmzPanelToggle === activeValue;
                button.classList.toggle('is-active', isActive);
                button.setAttribute('aria-expanded', isActive ? 'true' : 'false');
            });

            panels.forEach((panel) => {
                if (getGroup(panel.dataset.lmzPopoverPanel) !== group) {
                    return;
                }

                const isActive = panel.dataset.lmzPopoverPanel === activeValue;
                panel.classList.toggle('is-active', isActive);
                panel.hidden = !isActive;
            });

            popovers.forEach((popover) => {
                if (popover.dataset.lmzPopover !== group) {
                    return;
                }

                const isOpen = !!activeValue;
                popover.classList.toggle('is-open', isOpen);
                popover.hidden = !isOpen;
            });

            shell.classList.toggle('has-' + group + '-popover', !!activeValue);
        }

        function open(value) {
            const group = getGroup(value);
            state[group] = value;
            renderGroup(group);
        }

        function closeGroup(group) {
            state[group] = null;
            renderGroup(group);
        }

        function toggle(value) {
            const group = getGroup(value);
            if (state[group] === value) {
                closeGroup(group);
                return;
            }

            open(value);
        }

        function closeAll() {
            closeGroup('left');
            closeGroup('right');
        }

        const pointerHandler = (event) => {
            const target = event.target;
            if (!(target instanceof Element)) {
                return;
            }

            if (target.closest('[data-lmz-panel-toggle]') || target.closest('.lmz-builder__popover') || target.closest('[data-lmz-action="selection"]')) {
                return;
            }

            closeAll();
        };

        const keyHandler = (event) => {
            if (event.key === 'Escape') {
                closeAll();
            }
        };

        buttons.forEach((button) => {
            button.addEventListener('click', () => {
                toggle(button.dataset.lmzPanelToggle);
            });
        });

        closeButtons.forEach((button) => {
            button.addEventListener('click', () => {
                closeGroup(button.dataset.lmzPanelClose);
            });
        });

        document.addEventListener('pointerdown', pointerHandler);
        document.addEventListener('keydown', keyHandler);

        renderGroup('left');
        renderGroup('right');

        return {
            open,
            toggle,
            closeGroup,
            closeAll,
            getActive(group) {
                return state[group] || null;
            },
            destroy() {
                document.removeEventListener('pointerdown', pointerHandler);
                document.removeEventListener('keydown', keyHandler);
            },
        };
    }

    function createShell(root) {
        const leftSections = [
            { id: 'left:blocks', group: 'left', mount: 'blocks', icon: 'blocks', label: 'Bausteine' },
            { id: 'left:layers', group: 'left', mount: 'layers', icon: 'layers', label: 'Ebenen' },
        ];
        const rightSections = [
            { id: 'right:styles', group: 'right', mount: 'styles', icon: 'styles', label: 'Stile' },
            { id: 'right:traits', group: 'right', mount: 'traits', icon: 'traits', label: 'Eigenschaften' },
            { id: 'right:classes', group: 'right', mount: 'classes', icon: 'classes', label: 'Klassen' },
        ];

        root.classList.add('lmz-builder-host');
        root.innerHTML = '';

        const shell = document.createElement('div');
        shell.className = 'lmz-builder';
        shell.innerHTML =
            '<div class="lmz-builder__topbar">' +
            '<div class="lmz-builder__actions">' +
            createActionButton('undo', 'Undo', 'undo', { iconOnly: true }) +
            createActionButton('redo', 'Redo', 'redo', { iconOnly: true }) +
            createActionButton('preview', 'Vorschau', 'preview', { iconOnly: true }) +
            createActionButton('assets', 'Medien', 'assets', { iconOnly: true }) +
            createActionButton('save', 'Speichern', 'save', { primary: true }) +
            '</div>' +
            '<div class="lmz-builder__panel-actions lmz-builder__panel-actions--left">' +
            leftSections.map((section) => createPanelToggleButton(section)).join('') +
            '</div>' +
            '<div class="lmz-builder__panel-actions lmz-builder__panel-actions--right">' +
            rightSections.map((section) => createPanelToggleButton(section)).join('') +
            '</div>' +
            '<div class="lmz-builder__meta">' +
            '<button type="button" class="lmz-builder__selection is-empty" data-lmz-action="selection">Keine Auswahl</button>' +
            '<div class="lmz-builder__status" data-lmz-status data-state="muted">Initialisierung...</div>' +
            '</div>' +
            '</div>' +
            '<div class="lmz-builder__viewport">' +
            '<main class="lmz-builder__main">' +
            '<div class="lmz-builder__canvas-shell">' +
            '<div class="lmz-builder__canvas" data-lmz-mount="canvas"></div>' +
            '</div>' +
            '</main>' +
            createPopover('left', leftSections) +
            createPopover('right', rightSections) +
            '</div>' +
            '<input type="file" data-lmz-upload-input multiple hidden />';

        root.appendChild(shell);
        const panels = setupPopovers(shell);

        return {
            shell,
            panels,
            status: shell.querySelector('[data-lmz-status]'),
            selection: shell.querySelector('[data-lmz-action="selection"]'),
            canvas: shell.querySelector('[data-lmz-mount="canvas"]'),
            blocks: shell.querySelector('[data-lmz-mount="blocks"]'),
            layers: shell.querySelector('[data-lmz-mount="layers"]'),
            styles: shell.querySelector('[data-lmz-mount="styles"]'),
            traits: shell.querySelector('[data-lmz-mount="traits"]'),
            classes: shell.querySelector('[data-lmz-mount="classes"]'),
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

    function getSelectionLabel(component) {
        if (!component) {
            return 'Keine Auswahl';
        }

        const attributes = typeof component.getAttributes === 'function' ? component.getAttributes() || {} : {};
        const explicitName = attributes['data-gjs-name'] || attributes['aria-label'] || attributes.title || null;
        const type = typeof component.get === 'function' ? component.get('type') || component.get('tagName') : null;
        const fallback = explicitName || (typeof component.getName === 'function' ? component.getName() : null) || type || 'Element';
        const normalized = String(fallback)
            .replace(/[-_]+/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();
        const label = normalized ? normalized.charAt(0).toUpperCase() + normalized.slice(1) : 'Element';

        return attributes.id ? label + ' #' + attributes.id : label;
    }

    function syncShellState(editor, refs) {
        if (!editor || !refs?.shell) {
            return;
        }

        const selected = typeof editor.getSelected === 'function' ? editor.getSelected() : null;

        if (refs.selection) {
            refs.selection.textContent = getSelectionLabel(selected);
            refs.selection.classList.toggle('is-empty', !selected);
        }

        const previewActive = !!editor.Commands?.isActive?.('core:preview');
        const previewButton = refs.shell.querySelector('[data-lmz-action="preview"]');
        if (previewButton) {
            previewButton.classList.toggle('is-active', previewActive);
        }

        refs.shell.classList.toggle('is-preview', previewActive);

        const undoManager = editor.UndoManager;
        const undoButton = refs.shell.querySelector('[data-lmz-action="undo"]');
        const redoButton = refs.shell.querySelector('[data-lmz-action="redo"]');

        if (undoButton && undoManager?.isAvailable) {
            undoButton.disabled = !undoManager.isAvailable('undo');
        }

        if (redoButton && undoManager?.isAvailable) {
            redoButton.disabled = !undoManager.isAvailable('redo');
        }
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

    function toNumericValue(value) {
        const parsed = typeof value === 'number' ? value : parseFloat(value);
        return Number.isFinite(parsed) ? parsed : 0;
    }

    function roundSpacingValue(value) {
        return Math.round(toNumericValue(value) * 100) / 100;
    }

    function clampSpacingValue(value, min) {
        return Math.max(roundSpacingValue(value), typeof min === 'number' ? min : Number.NEGATIVE_INFINITY);
    }

    function getSpacingSnapshot(offsets) {
        const source = offsets || {};

        return {
            margin: {
                top: toNumericValue(source.marginTop),
                right: toNumericValue(source.marginRight),
                bottom: toNumericValue(source.marginBottom),
                left: toNumericValue(source.marginLeft),
            },
            padding: {
                top: Math.max(0, toNumericValue(source.paddingTop)),
                right: Math.max(0, toNumericValue(source.paddingRight)),
                bottom: Math.max(0, toNumericValue(source.paddingBottom)),
                left: Math.max(0, toNumericValue(source.paddingLeft)),
            },
            border: {
                top: Math.max(0, toNumericValue(source.borderTopWidth)),
                right: Math.max(0, toNumericValue(source.borderRightWidth)),
                bottom: Math.max(0, toNumericValue(source.borderBottomWidth)),
                left: Math.max(0, toNumericValue(source.borderLeftWidth)),
            },
        };
    }

    function getScaledSpacingBox(spacing, zoom) {
        return {
            top: spacing.top * zoom,
            right: spacing.right * zoom,
            bottom: spacing.bottom * zoom,
            left: spacing.left * zoom,
        };
    }

    function getHandleSize(value) {
        return value > 0 ? Math.max(value, SPACING_MIN_HANDLE_SIZE) : SPACING_MIN_HANDLE_SIZE;
    }

    function createRect(left, top, width, height) {
        return {
            left,
            top,
            width: Math.max(0, width),
            height: Math.max(0, height),
        };
    }

    function getPointerPosition(editor, event) {
        const frameDocument = editor?.Canvas?.getDocument?.();
        const frameElement = editor?.Canvas?.getFrameEl?.();
        const sourceDocument = event?.target?.ownerDocument;
        const clientX = toNumericValue(event?.clientX);
        const clientY = toNumericValue(event?.clientY);

        if (frameDocument && frameElement && sourceDocument === frameDocument) {
            const frameRect = frameElement.getBoundingClientRect();
            return {
                x: clientX + frameRect.left,
                y: clientY + frameRect.top,
            };
        }

        return {
            x: clientX,
            y: clientY,
        };
    }

    function getSpacingStylePayload(type, values, changedSide, nextValue) {
        const payload = {};

        SPACING_SIDES.forEach((side) => {
            const value = side === changedSide ? nextValue : values[side];
            payload[type + '-' + side] = roundSpacingValue(value) + 'px';
        });

        return payload;
    }

    function getSpacingDelta(side, deltaX, deltaY) {
        if (side === 'top') {
            return -deltaY;
        }

        if (side === 'right') {
            return deltaX;
        }

        if (side === 'bottom') {
            return deltaY;
        }

        return -deltaX;
    }

    function getActiveSpacingSnapshot(drag) {
        if (!drag) {
            return null;
        }

        const spacing = {
            margin: { ...drag.startSpacing.margin },
            padding: { ...drag.startSpacing.padding },
            border: { ...drag.startSpacing.border },
        };

        if (drag.latestValues) {
            spacing[drag.type] = { ...drag.latestValues };
        }

        return spacing;
    }

    function setupSpacingEditor(editor) {
        if (!editor?.Canvas) {
            return () => {};
        }

        const state = {
            disposed: false,
            rafId: 0,
            overlay: null,
            host: null,
            handles: new Map(),
            drag: null,
            dragTargets: [],
        };

        const getOverlayHost = () => editor.Canvas.getSpotsEl?.() || editor.Canvas.getToolsEl?.();

        const applyDragPreview = () => {
            if (!state.drag) {
                return;
            }

            state.drag.previewFrame = 0;

            if (!state.drag.pendingValues) {
                return;
            }

            state.drag.latestValues = { ...state.drag.pendingValues };
            state.drag.pendingValues = null;
            state.drag.component.addStyle(
                getSpacingStylePayload(state.drag.type, state.drag.startValues, state.drag.side, state.drag.latestValues[state.drag.side]),
                { partial: true }
            );

            scheduleRefresh();
        };

        const getLayoutMetrics = (element, dragState) => {
            if (dragState) {
                return {
                    position: {
                        ...dragState.startOuter,
                        zoom: dragState.zoom,
                    },
                    spacing: getActiveSpacingSnapshot(dragState),
                };
            }

            const position = editor.Canvas.getElementPos?.(element);
            if (!position || !Number.isFinite(position.width) || !Number.isFinite(position.height)) {
                return null;
            }

            return {
                position,
                spacing: getSpacingSnapshot(editor.Canvas.getElementOffsets?.(element)),
            };
        };

        const hideOverlay = () => {
            if (state.overlay) {
                state.overlay.style.display = 'none';
            }
        };

        const clearActiveHandles = () => {
            state.handles.forEach((handle) => {
                handle.classList.remove('is-active');
            });

            if (state.overlay) {
                state.overlay.classList.remove('is-dragging');
            }
        };

        const ensureOverlay = () => {
            const host = getOverlayHost();
            if (!host) {
                return null;
            }

            if (state.host !== host) {
                if (state.overlay?.parentNode) {
                    state.overlay.parentNode.removeChild(state.overlay);
                }

                state.overlay = null;
                state.host = host;
                state.handles.clear();
            }

            if (state.overlay) {
                return state.overlay;
            }

            const overlay = document.createElement('div');
            overlay.className = 'lmz-spacing-editor';
            overlay.style.display = 'none';

            const bindHandle = (type, side) => {
                const handle = document.createElement('button');
                handle.type = 'button';
                handle.className = 'lmz-spacing-editor__handle lmz-spacing-editor__handle--' + type;
                handle.dataset.type = type;
                handle.dataset.side = side;
                handle.setAttribute('aria-label', type + ' ' + side);
                handle.addEventListener('pointerdown', (event) => startDrag(event, type, side));
                overlay.appendChild(handle);
                state.handles.set(type + ':' + side, handle);
            };

            ['margin', 'padding'].forEach((type) => {
                SPACING_SIDES.forEach((side) => bindHandle(type, side));
            });

            host.appendChild(overlay);
            state.overlay = overlay;

            return overlay;
        };

        const applyRect = (handle, rect) => {
            if (!handle) {
                return;
            }

            const isVisible = rect.width > 0 && rect.height > 0;
            handle.style.display = isVisible ? 'block' : 'none';

            if (!isVisible) {
                handle.dataset.value = '';
                return;
            }

            handle.style.left = rect.left + 'px';
            handle.style.top = rect.top + 'px';
            handle.style.width = rect.width + 'px';
            handle.style.height = rect.height + 'px';
        };

        const refresh = () => {
            state.rafId = 0;

            if (state.disposed) {
                return;
            }

            const overlay = ensureOverlay();
            if (!overlay) {
                return;
            }

            const selected = editor.getSelected?.();
            if (!selected || editor.Commands?.isActive?.('core:preview')) {
                hideOverlay();
                return;
            }

            const element = selected.getEl?.();
            if (!element) {
                hideOverlay();
                return;
            }

            const dragState =
                state.drag && state.drag.component === selected && state.drag.element === element ? state.drag : null;
            const metrics = getLayoutMetrics(element, dragState);

            if (!metrics?.position || !metrics.spacing) {
                hideOverlay();
                return;
            }

            const position = metrics.position;
            const zoom = Math.max(toNumericValue(position.zoom) || 1, 0.01);
            const spacing = metrics.spacing;
            const margin = getScaledSpacingBox(spacing.margin, zoom);
            const padding = getScaledSpacingBox(spacing.padding, zoom);
            const border = getScaledSpacingBox(spacing.border, zoom);
            const outer = {
                left: position.left,
                top: position.top,
                width: position.width,
                height: position.height,
            };

            const displayMargin = {
                top: getHandleSize(margin.top),
                right: getHandleSize(margin.right),
                bottom: getHandleSize(margin.bottom),
                left: getHandleSize(margin.left),
            };

            const marginOuter = {
                left: outer.left - displayMargin.left,
                top: outer.top - displayMargin.top,
                width: outer.width + displayMargin.left + displayMargin.right,
                height: outer.height + displayMargin.top + displayMargin.bottom,
            };

            const paddingBox = {
                left: outer.left + border.left,
                top: outer.top + border.top,
                width: Math.max(0, outer.width - border.left - border.right),
                height: Math.max(0, outer.height - border.top - border.bottom),
            };

            const displayPadding = {
                top: paddingBox.height > 0 ? Math.min(getHandleSize(padding.top), paddingBox.height) : 0,
                right: paddingBox.width > 0 ? Math.min(getHandleSize(padding.right), paddingBox.width) : 0,
                bottom:
                    paddingBox.height > 0 ? Math.min(getHandleSize(padding.bottom), Math.max(paddingBox.height - Math.min(getHandleSize(padding.top), paddingBox.height), 0) || paddingBox.height) : 0,
                left: paddingBox.width > 0 ? Math.min(getHandleSize(padding.left), paddingBox.width) : 0,
            };

            overlay.style.display = 'block';

            applyRect(state.handles.get('margin:top'), createRect(marginOuter.left, marginOuter.top, marginOuter.width, displayMargin.top));
            applyRect(
                state.handles.get('margin:right'),
                createRect(outer.left + outer.width, outer.top, displayMargin.right, outer.height)
            );
            applyRect(
                state.handles.get('margin:bottom'),
                createRect(marginOuter.left, outer.top + outer.height, marginOuter.width, displayMargin.bottom)
            );
            applyRect(state.handles.get('margin:left'), createRect(marginOuter.left, outer.top, displayMargin.left, outer.height));

            applyRect(
                state.handles.get('padding:top'),
                createRect(paddingBox.left, paddingBox.top, paddingBox.width, displayPadding.top)
            );
            applyRect(
                state.handles.get('padding:right'),
                createRect(
                    Math.max(paddingBox.left + paddingBox.width - displayPadding.right, paddingBox.left),
                    paddingBox.top + displayPadding.top,
                    displayPadding.right,
                    Math.max(0, paddingBox.height - displayPadding.top - displayPadding.bottom)
                )
            );
            applyRect(
                state.handles.get('padding:bottom'),
                createRect(
                    paddingBox.left,
                    Math.max(paddingBox.top + paddingBox.height - displayPadding.bottom, paddingBox.top),
                    paddingBox.width,
                    displayPadding.bottom
                )
            );
            applyRect(
                state.handles.get('padding:left'),
                createRect(
                    paddingBox.left,
                    paddingBox.top + displayPadding.top,
                    displayPadding.left,
                    Math.max(0, paddingBox.height - displayPadding.top - displayPadding.bottom)
                )
            );

            state.handles.forEach((handle, key) => {
                const [type, side] = key.split(':');
                const rawValue = spacing[type][side];
                const value = roundSpacingValue(rawValue) + 'px';
                handle.title = type + ' ' + side + ': ' + value;
                handle.dataset.value = value;
                handle.dataset.label = type + ' ' + side + ': ' + value;
            });
        };

        const scheduleRefresh = () => {
            if (state.disposed || state.rafId) {
                return;
            }

            state.rafId = window.requestAnimationFrame(refresh);
        };

        const removeDragListeners = () => {
            state.dragTargets.forEach((target) => {
                target.removeEventListener('pointermove', onPointerMove, true);
                target.removeEventListener('pointerup', stopDrag, true);
                target.removeEventListener('pointercancel', stopDrag, true);
            });

            state.dragTargets = [];
        };

        function stopDrag() {
            if (!state.drag) {
                return;
            }

            const { component, handleEl, type, side, startValues, pointerId } = state.drag;

            if (state.drag.previewFrame) {
                window.cancelAnimationFrame(state.drag.previewFrame);
                state.drag.previewFrame = 0;
            }

            if (state.drag.pendingValues) {
                state.drag.latestValues = { ...state.drag.pendingValues };
                state.drag.pendingValues = null;
            }

            removeDragListeners();
            clearActiveHandles();

            if (handleEl?.releasePointerCapture && pointerId !== undefined && handleEl.hasPointerCapture?.(pointerId)) {
                handleEl.releasePointerCapture(pointerId);
            }

            if (state.drag.latestValues) {
                component.addStyle(getSpacingStylePayload(type, startValues, side, state.drag.latestValues[side]));
            }

            state.drag = null;
            scheduleRefresh();
        }

        function onPointerMove(event) {
            if (!state.drag) {
                return;
            }

            event.preventDefault();

            const pointer = getPointerPosition(editor, event);
            const deltaX = (pointer.x - state.drag.startPointer.x) / state.drag.zoom;
            const deltaY = (pointer.y - state.drag.startPointer.y) / state.drag.zoom;
            const delta = getSpacingDelta(state.drag.side, deltaX, deltaY);
            const minValue = state.drag.type === 'padding' ? 0 : undefined;
            const nextValue = clampSpacingValue(state.drag.startValues[state.drag.side] + delta, minValue);
            const nextValues = {
                ...state.drag.startValues,
                [state.drag.side]: nextValue,
            };

            state.drag.pendingValues = nextValues;

            if (!state.drag.previewFrame) {
                state.drag.previewFrame = window.requestAnimationFrame(applyDragPreview);
            }
        }

        function startDrag(event, type, side) {
            if (editor.Commands?.isActive?.('core:preview')) {
                return;
            }

            const selected = editor.getSelected?.();
            const element = selected?.getEl?.();
            if (!selected || !element) {
                return;
            }

            event.preventDefault();
            event.stopPropagation();

            removeDragListeners();
            clearActiveHandles();

            const position = editor.Canvas.getElementPos?.(element);
            if (!position || !Number.isFinite(position.width) || !Number.isFinite(position.height)) {
                return;
            }

            const zoom = Math.max(toNumericValue(position?.zoom) || 1, 0.01);
            const spacing = getSpacingSnapshot(editor.Canvas.getElementOffsets?.(element));
            const handle = state.handles.get(type + ':' + side);
            const pointer = getPointerPosition(editor, event);
            const frameWindow = editor.Canvas.getWindow?.();
            const targets = [window];

            if (frameWindow && frameWindow !== window) {
                targets.push(frameWindow);
            }

            if (handle) {
                handle.classList.add('is-active');
                if (handle.setPointerCapture && event.pointerId !== undefined) {
                    handle.setPointerCapture(event.pointerId);
                }
            }

            if (state.overlay) {
                state.overlay.classList.add('is-dragging');
            }

            state.drag = {
                component: selected,
                element,
                type,
                side,
                zoom,
                pointerId: event.pointerId,
                handleEl: handle,
                startPointer: pointer,
                startOuter: {
                    left: position.left,
                    top: position.top,
                    width: position.width,
                    height: position.height,
                },
                startSpacing: spacing,
                startValues: { ...spacing[type] },
                latestValues: null,
                pendingValues: null,
                previewFrame: 0,
            };

            state.dragTargets = targets;
            targets.forEach((target) => {
                target.addEventListener('pointermove', onPointerMove, true);
                target.addEventListener('pointerup', stopDrag, true);
                target.addEventListener('pointercancel', stopDrag, true);
            });
        }

        const editorEvents = ['load', 'component:selected', 'component:deselected', 'component:update', 'component:styleUpdate', 'canvas:coords', 'canvas:zoom', 'canvas:frame:load'];
        editorEvents.forEach((eventName) => editor.on(eventName, scheduleRefresh));
        window.addEventListener('resize', scheduleRefresh);
        scheduleRefresh();

        return () => {
            state.disposed = true;
            removeDragListeners();
            clearActiveHandles();
            window.removeEventListener('resize', scheduleRefresh);
            editorEvents.forEach((eventName) => editor.off(eventName, scheduleRefresh));

            if (state.rafId) {
                window.cancelAnimationFrame(state.rafId);
                state.rafId = 0;
            }

            if (state.overlay?.parentNode) {
                state.overlay.parentNode.removeChild(state.overlay);
            }
        };
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

    function waitForNextPaint() {
        return new Promise((resolve) => {
            window.requestAnimationFrame(() => {
                window.requestAnimationFrame(resolve);
            });
        });
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
                showOffsets: false,
                showOffsetsSelected: false,
                storageManager: false,
                panels: { defaults: [] },
                blockManager: { appendTo: refs.blocks },
                layerManager: { appendTo: refs.layers },
                selectorManager: { componentFirst: true, appendTo: refs.classes },
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
        dedupeClassManagerUis(refs.classes || refs.styles);

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
        let stopSpacingEditor = () => {};

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
                const shouldGeneratePreviews = reason === 'manual' || reason === 'shortcut';

                if (typeof options.storage.onSave === 'function') {
                    await options.storage.onSave({
                        project: projectData,
                        html,
                        css,
                        generatePreviews: shouldGeneratePreviews,
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
                    if (shouldGeneratePreviews) {
                        body.append('generate_previews', '1');
                    }

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
                if (typeof syncEditorShell === 'function') {
                    syncEditorShell();
                }
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
                dedupeClassManagerUis(refs.classes || refs.styles);
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
                stopSpacingEditor();
                refs.panels?.destroy?.();
                if (state.autosaveTimer) {
                    window.clearInterval(state.autosaveTimer);
                }
                editor.destroy();
                root.innerHTML = '';
                root.classList.remove('lmz-builder-host');
            },
        };

        const syncEditorShell = () => syncShellState(editor, refs);

        refs.shell.querySelector('[data-lmz-action="undo"]').addEventListener('click', () => {
            editor.runCommand('core:undo');
            window.requestAnimationFrame(syncEditorShell);
        });

        refs.shell.querySelector('[data-lmz-action="redo"]').addEventListener('click', () => {
            editor.runCommand('core:redo');
            window.requestAnimationFrame(syncEditorShell);
        });
        refs.shell.querySelector('[data-lmz-action="save"]').addEventListener('click', () => api.save('manual'));
        refs.shell.querySelector('[data-lmz-action="assets"]').addEventListener('click', () => refs.uploadInput.click());
        refs.selection.addEventListener('click', () => {
            refs.panels.toggle(editor.getSelected() ? 'right:traits' : 'right:styles');
        });
        refs.shell.querySelector('[data-lmz-action="preview"]').addEventListener('click', () => {
            if (editor.Commands.isActive('core:preview')) {
                editor.stopCommand('core:preview');
            } else {
                editor.runCommand('core:preview');
            }

            window.requestAnimationFrame(syncEditorShell);
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
            syncEditorShell();
            if (options.autosave.enabled && state.dirtyCount >= options.autosave.changesBeforeSave) {
                api.save('autosave-threshold');
            }
        });

        editor.on('component:selected', () => {
            if (!refs.panels.getActive('right')) {
                refs.panels.open('right:styles');
            }
        });

        ['load', 'component:selected', 'component:deselected', 'component:update', 'component:styleUpdate', 'undo', 'redo'].forEach((eventName) => {
            editor.on(eventName, syncEditorShell);
        });

        stopCanvasStyleSync = startCanvasStyleSync(editor, canvasStyles);
        stopSpacingEditor = setupSpacingEditor(editor);

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
        syncEditorShell();

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
