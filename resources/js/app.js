import './bootstrap';
import collapse from '@alpinejs/collapse';
import mask from '@alpinejs/mask';
import resize from '@alpinejs/resize';
import intersect from '@alpinejs/intersect';
import sort from '@alpinejs/sort';
import Swiper from 'swiper';
import 'swiper/css';
import addCustomBlocks from './components/grapesjs-blocks';
import { rteTinyMce } from '@grapesjs/studio-sdk-plugins';
import grapesjsBlocksBasic from 'grapesjs-blocks-basic';
import grapesjsPluginForms from 'grapesjs-plugin-forms';
import grapesjsPluginExport from 'grapesjs-plugin-export';
import grapesjsParserPostcss from 'grapesjs-parser-postcss';
import grapesjsTuiImageEditor from 'grapesjs-tui-image-editor';
import grapesjsNavbar from 'grapesjs-navbar';

Alpine.plugin(collapse);
Alpine.plugin(mask);
Alpine.plugin(resize);
Alpine.plugin(intersect);
Alpine.plugin(sort);

window.Swiper = Swiper;
let pagebuilderModulePromise = null;
let lmzBuilderAssetsPromise = null;
const LMZ_BUILDER_VERSION = '20260411-2';
let sidebarCollapseTimer = null;

function ensureFunctionArray(value) {
    return Array.isArray(value) ? value.filter((item) => typeof item === 'function') : [];
}

function setupLmzBuilderExtensions() {
    const config = window.__lmzBuilderConfig && typeof window.__lmzBuilderConfig === 'object' ? window.__lmzBuilderConfig : {};
    if (config.__lmzRuntimeExtensionsRegistered) {
        window.__lmzBuilderConfig = config;
        return;
    }

    const blockRegistrars = ensureFunctionArray(config.blockRegistrars);
    if (!blockRegistrars.includes(addCustomBlocks)) {
        blockRegistrars.push(addCustomBlocks);
    }

    const plugins = Array.isArray(config.plugins) ? config.plugins.filter(Boolean) : [];
    const localDefaultPlugins = [
        grapesjsBlocksBasic,
        grapesjsPluginForms,
        (editor) =>
            grapesjsPluginExport(editor, {
                isBinary(content, filename) {
                    const extension = filename && filename.split('.')[1];
                    return /[\x00-\x08\x0E-\x1F]/.test(content) && !(extension && ['html', 'css'].includes(extension));
                },
            }),
        grapesjsParserPostcss,
        grapesjsTuiImageEditor,
        (editor) =>
            grapesjsNavbar(editor, {
                block: { category: 'Extra' },
            }),
    ];

    localDefaultPlugins.forEach((plugin) => plugins.push(plugin));

    try {
        if (rteTinyMce?.init) {
            plugins.push(
                rteTinyMce.init({
                    enableOnClick: true,
                    cdnScript: '/adminressources/pagebuilder/vendors/tinymce/tinymce.min.js',
                })
            );
        }
    } catch (error) {
        console.warn('LMZ Builder Plugin konnte nicht registriert werden:', error);
    }

    config.blockRegistrars = blockRegistrars;
    config.plugins = plugins;
    config.useStudioWebDefaults = false;
    config.__lmzRuntimeExtensionsRegistered = true;
    window.__lmzBuilderConfig = config;
}

function destroyStudioEditor() {
    if (window.editor && typeof window.editor.destroy === 'function') {
        window.editor.destroy();
        window.editor = null;
    }

    window.__webreachStudioProjectId = null;
    window.__webreachStudioMountedRoot = null;
}

function destroyLmzBuilder() {
    if (window.__lmzBuilderInstance && typeof window.__lmzBuilderInstance.destroy === 'function') {
        window.__lmzBuilderInstance.destroy();
    }

    window.__lmzBuilderInstance = null;
    window.__lmzBuilderProjectId = null;
    window.__lmzBuilderRoot = null;
}

function loadStyleOnce(href) {
    if (document.querySelector(`link[data-webreach-style="${href}"]`)) {
        return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = href;
        link.dataset.webreachStyle = href;
        link.onload = resolve;
        link.onerror = () => reject(new Error(`Stylesheet konnte nicht geladen werden: ${href}`));
        document.head.appendChild(link);
    });
}

function loadScriptOnce(src) {
    if (document.querySelector(`script[data-webreach-script="${src}"]`)) {
        return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.dataset.webreachScript = src;
        script.onload = resolve;
        script.onerror = () => reject(new Error(`Script konnte nicht geladen werden: ${src}`));
        document.head.appendChild(script);
    });
}

function loadLmzBuilderAssets() {
    if (typeof window.initLMZBuilder === 'function') {
        return Promise.resolve();
    }

    if (!lmzBuilderAssetsPromise) {
        lmzBuilderAssetsPromise = Promise.all([
            loadStyleOnce('/adminressources/pagebuilder/lmz-builder.css?v=' + LMZ_BUILDER_VERSION),
            loadScriptOnce('/adminressources/pagebuilder/lmz-builder.js?v=' + LMZ_BUILDER_VERSION),
        ]).catch((error) => {
            lmzBuilderAssetsPromise = null;
            throw error;
        });
    }

    return lmzBuilderAssetsPromise;
}

function initMetisMenu() {
    if (!window.MetisMenu) {
        return;
    }

    const sideMenu = document.getElementById('side-menu');
    if (!sideMenu) {
        return;
    }

    if (window.__webreachMetisMenu && typeof window.__webreachMetisMenu.dispose === 'function') {
        window.__webreachMetisMenu.dispose();
    }

    window.__webreachMetisMenu = new window.MetisMenu('#side-menu');
}

function clearSidebarCollapseTimer() {
    if (sidebarCollapseTimer) {
        window.clearTimeout(sidebarCollapseTimer);
        sidebarCollapseTimer = null;
    }
}

function isDesktopHoverSidebar() {
    return window.innerWidth >= 1140 && Boolean(document.querySelector('.vertical-menu'));
}

function isSidebarHoveredOrFocused() {
    const activeElement = document.activeElement;
    const hoverInsideSidebar = document.querySelector('.vertical-menu:hover, .topbar-brand:hover');
    const focusInsideSidebar = activeElement?.closest('.vertical-menu, .topbar-brand');

    return Boolean(hoverInsideSidebar || focusInsideSidebar);
}

function setDesktopSidebarExpanded(expanded) {
    if (document.body.getAttribute('data-sidebar-collapsible') !== 'true') {
        return;
    }

    document.body.setAttribute('data-sidebar-expanded', expanded ? 'true' : 'false');
}

function scheduleDesktopSidebarCollapse() {
    clearSidebarCollapseTimer();

    sidebarCollapseTimer = window.setTimeout(() => {
        const activeElement = document.activeElement;
        const focusInsideSidebar = activeElement?.closest('.vertical-menu, .topbar-brand');
        const hoverInsideSidebar = document.querySelector('.vertical-menu:hover, .topbar-brand:hover');

        if (!focusInsideSidebar && !hoverInsideSidebar) {
            setDesktopSidebarExpanded(false);
        }
    }, 90);
}

function syncSidebarInteractionMode() {
    const hasSidebar = Boolean(document.querySelector('.vertical-menu'));
    if (!hasSidebar) {
        return;
    }

    const desktopMode = isDesktopHoverSidebar();
    document.body.setAttribute('data-sidebar-collapsible', desktopMode ? 'true' : 'false');

    if (desktopMode) {
        document.body.classList.remove('sidebar-enable');

        const isExpanded = document.body.getAttribute('data-sidebar-expanded') === 'true';
        const shouldStayExpanded = isExpanded || isSidebarHoveredOrFocused();

        document.body.setAttribute('data-sidebar-expanded', shouldStayExpanded ? 'true' : 'false');
        return;
    }

    clearSidebarCollapseTimer();
    document.body.setAttribute('data-sidebar-expanded', 'false');
}

function initLeftMenuCollapse() {
    document.querySelectorAll('.vertical-menu-btn').forEach((button) => {
        if (button.dataset.webreachBound === '1') {
            return;
        }

        button.dataset.webreachBound = '1';

        button.addEventListener('click', (event) => {
            event.preventDefault();

            if (isDesktopHoverSidebar()) {
                clearSidebarCollapseTimer();
                setDesktopSidebarExpanded(document.body.getAttribute('data-sidebar-expanded') !== 'true');
                return;
            }

            document.body.classList.toggle('sidebar-enable');
            initMenuItemScroll();
        });
    });
}

function initActiveMenu() {
    const pageUrl = window.location.href.split(/[?#]/)[0];
    const menuItems = Array.from(document.querySelectorAll('#sidebar-menu a'));
    const nestedLists = document.querySelectorAll('#sidebar-menu ul');

    menuItems.forEach((item) => item.classList.remove('active'));
    document.querySelectorAll('#sidebar-menu li.mm-active').forEach((item) => item.classList.remove('mm-active'));
    nestedLists.forEach((list) => {
        if (list.id !== 'side-menu') {
            list.classList.remove('mm-show');
        }
    });

    const exactMatches = menuItems.filter((item) => item.href === pageUrl);
    const fallbackMatches = menuItems.filter((item) => item.dataset.menuActive === 'true');
    const activeItems = exactMatches.length > 0 ? exactMatches : fallbackMatches;

    activeItems.forEach((item) => {
        item.classList.add('active');

        let currentLi = item.closest('li');
        while (currentLi) {
            currentLi.classList.add('mm-active');

            const parentUl = currentLi.parentElement;
            if (parentUl && parentUl.tagName === 'UL' && parentUl.id !== 'side-menu') {
                parentUl.classList.add('mm-show');
            }

            currentLi = parentUl ? parentUl.closest('li') : null;
        }
    });
}

function initMenuItemScroll() {
    setTimeout(() => {
        const sidebarMenu = document.getElementById('side-menu');
        const activeItem = sidebarMenu?.querySelector('.mm-active .active');

        if (!activeItem || activeItem.offsetTop <= 300) {
            return;
        }

        const verticalMenu = document.querySelector('.vertical-menu');
        const scroller = verticalMenu?.querySelector('.simplebar-content-wrapper');

        if (scroller) {
            scroller.scrollTop = activeItem.offsetTop;
        }
    }, 150);
}

function initFeather() {
    if (window.feather && typeof window.feather.replace === 'function') {
        window.feather.replace();
    }
}

function initSidebarInteractions() {
    if (document.body.dataset.webreachSidebarInteractionsBound !== '1') {
        document.body.dataset.webreachSidebarInteractionsBound = '1';

        document.querySelectorAll('.vertical-menu, .topbar-brand').forEach((element) => {
            if (element.dataset.webreachSidebarHoverBound === '1') {
                return;
            }

            element.dataset.webreachSidebarHoverBound = '1';

            element.addEventListener('mouseenter', () => {
                if (!isDesktopHoverSidebar()) {
                    return;
                }

                clearSidebarCollapseTimer();
                setDesktopSidebarExpanded(true);
            });

            element.addEventListener('mouseleave', () => {
                if (!isDesktopHoverSidebar()) {
                    return;
                }

                scheduleDesktopSidebarCollapse();
            });

            element.addEventListener('focusin', () => {
                if (!isDesktopHoverSidebar()) {
                    return;
                }

                clearSidebarCollapseTimer();
                setDesktopSidebarExpanded(true);
            });

            element.addEventListener('focusout', () => {
                if (!isDesktopHoverSidebar()) {
                    return;
                }

                scheduleDesktopSidebarCollapse();
            });
        });

        document.addEventListener(
            'pointerdown',
            (event) => {
                const target = event.target instanceof Element ? event.target : null;

                if (isDesktopHoverSidebar()) {
                    if (!target || !target.closest('.vertical-menu, .topbar-brand')) {
                        clearSidebarCollapseTimer();
                        setDesktopSidebarExpanded(false);
                    }

                    return;
                }

                if (!target || !target.closest('.vertical-menu, .vertical-menu-btn')) {
                    document.body.classList.remove('sidebar-enable');
                }
            },
            true
        );

        document.addEventListener('keydown', (event) => {
            if (event.key !== 'Escape') {
                return;
            }

            clearSidebarCollapseTimer();
            setDesktopSidebarExpanded(false);
            document.body.classList.remove('sidebar-enable');
        });

        window.addEventListener('resize', syncSidebarInteractionMode);
    }

    syncSidebarInteractionMode();
}

function initAdminLayout() {
    syncSidebarInteractionMode();
    initMetisMenu();
    initLeftMenuCollapse();
    initSidebarInteractions();
    initActiveMenu();
    initMenuItemScroll();
    initFeather();
}

function initPagebuilderIfNeeded() {
    setupLmzBuilderExtensions();

    const editorRoot = document.getElementById('studio-editor');

    if (!editorRoot) {
        destroyStudioEditor();
        destroyLmzBuilder();
        return;
    }

    loadLmzBuilderAssets()
        .then(() => {
            if (!document.getElementById('studio-editor')) {
                return;
            }

            if (typeof window.initLMZBuilder === 'function') {
                destroyStudioEditor();
                return window.initLMZBuilder();
            }

            throw new Error('initLMZBuilder ist nicht verfuegbar.');
        })
        .catch((error) => {
            console.error('LMZ Builder konnte nicht geladen werden:', error);

            if (typeof window.initGrapesJs === 'function') {
                window.initGrapesJs();
                return;
            }

            if (!pagebuilderModulePromise) {
                pagebuilderModulePromise = import('./pagebuilder.js').catch((importError) => {
                    console.error('Studio-Pagebuilder konnte nicht geladen werden:', importError);
                    pagebuilderModulePromise = null;
                });
            }

            pagebuilderModulePromise.then(() => {
                if (typeof window.initGrapesJs === 'function' && document.getElementById('studio-editor')) {
                    window.initGrapesJs();
                }
            });
        });
}

document.addEventListener('DOMContentLoaded', initAdminLayout);
document.addEventListener('livewire:load', initAdminLayout);
document.addEventListener('livewire:navigated', initAdminLayout);

document.addEventListener('DOMContentLoaded', initPagebuilderIfNeeded);
document.addEventListener('livewire:load', initPagebuilderIfNeeded);
document.addEventListener('livewire:navigated', initPagebuilderIfNeeded);
