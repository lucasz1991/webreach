import '@grapesjs/studio-sdk/dist/style.css';
import '@grapesjs/studio-sdk/style';
import { createStudioEditor } from '@grapesjs/studio-sdk';
import {
    dialogComponent,
    fsLightboxComponent,
    iconifyComponent,
    lightGalleryComponent,
    rteTinyMce,
    swiperComponent,
} from '@grapesjs/studio-sdk-plugins';
import addCustomBlocks from './components/grapesjs-blocks';

function getEditorRoot() {
    return document.getElementById('studio-editor');
}

function getCsrfToken() {
    return document.querySelector('meta[name="csrf-token"]')?.getAttribute('content') || '';
}

window.initGrapesJs = async function initGrapesJs() {
    const editorRoot = getEditorRoot();
    if (!editorRoot) {
        return null;
    }

    const selectedProject = editorRoot.getAttribute('data-project');
    const licenseKey = editorRoot.getAttribute('data-license');

    if (!selectedProject || !licenseKey) {
        return null;
    }

    if (
        window.editor &&
        window.__webreachStudioProjectId === selectedProject &&
        window.__webreachStudioMountedRoot === editorRoot
    ) {
        return window.editor;
    }

    if (window.editor) {
        window.editor.destroy();
        window.editor = null;
    }

    try {
        window.editor = await createStudioEditor({
            root: '#studio-editor',
            licenseKey,
            plugins: [
                rteTinyMce.init({
                    enableOnClick: true,
                    loadConfig: ({ component, config }) => {
                        const demoRte = component.get('demorte');

                        if (demoRte === 'fixed') {
                            return {
                                toolbar: 'bold italic underline strikethrough | alignleft aligncenter alignright alignjustify | link image media',
                                fixed_toolbar_container_target: document.querySelector('.rteContainer'),
                            };
                        }

                        if (demoRte === 'quickbar') {
                            return {
                                plugins: `${config.plugins} quickbars`,
                                toolbar: false,
                                quickbars_selection_toolbar: 'bold italic underline strikethrough | quicklink image',
                            };
                        }

                        return {};
                    },
                }),
                iconifyComponent?.init({
                    block: { category: 'Extra', label: 'Iconify' },
                }),
                fsLightboxComponent?.init({
                    block: { category: 'Extra', label: 'FS Lightbox' },
                }),
                lightGalleryComponent?.init({
                    block: { category: 'Extra', label: 'Light Gallery' },
                }),
                swiperComponent?.init({
                    block: false,
                }),
                dialogComponent.init({
                    block: { category: 'Extra', label: 'My Dialog' },
                }),
                (editor) => {
                    addCustomBlocks(editor);
                },
            ],
            layout: {
                default: {
                    type: 'row',
                    style: { height: '100%' },
                    colors: {
                        global: {
                            focus: 'rgba(37, 99, 235, 1)',
                        },
                        primary: {
                            background1: 'rgba(101, 118, 95, 1)',
                            backgroundHover: 'rgba(64, 84, 57, 1)',
                        },
                    },
                    children: [
                        {
                            type: 'sidebarLeft',
                            children: {
                                type: 'tabs',
                                value: 'blocks',
                                tabs: [
                                    {
                                        id: 'blocks',
                                        label: 'Blocks',
                                        children: { type: 'panelBlocks', style: { height: '100%' } },
                                    },
                                    {
                                        id: 'layers',
                                        label: 'Elements',
                                        children: { type: 'panelLayers', style: { height: '100%' } },
                                    },
                                ],
                            },
                        },
                        {
                            type: 'canvasSidebarTop',
                            sidebarTop: { leftContainer: { buttons: [] } },
                        },
                        {
                            type: 'sidebarRight',
                            children: {
                                type: 'tabs',
                                value: 'styles',
                                tabs: [
                                    {
                                        id: 'styles',
                                        label: 'Styles',
                                        children: {
                                            type: 'column',
                                            style: { height: '100%' },
                                            children: [
                                                { type: 'panelSelectors', style: { padding: 5 } },
                                                { type: 'panelStyles' },
                                            ],
                                        },
                                    },
                                    {
                                        id: 'props',
                                        label: 'Properties',
                                        children: { type: 'panelProperties', style: { padding: 5, height: '100%' } },
                                    },
                                    {
                                        id: 'amimations',
                                        label: 'Effects',
                                        children: [
                                            { type: 'panelSelectors', style: { padding: 5 } },
                                            { type: 'panelAnimations', style: { padding: 25, height: '100%' } },
                                        ],
                                    },
                                ],
                            },
                        },
                    ],
                },
            },
            project: {
                type: 'web',
            },
            pages: {
                add: false,
                duplicate: false,
                remove: false,
                select: false,
                settings: false,
            },
            canvas: {
                styles: ['/adminresources/css/tailwind.min.css'],
            },
            assets: {
                storageType: 'self',
                onUpload: async ({ files }) => {
                    const body = new FormData();
                    for (const file of files) {
                        body.append('file', file);
                    }

                    const response = await fetch('/administrator/pagebuilder/upload', {
                        method: 'POST',
                        body,
                        headers: { 'X-CSRF-TOKEN': getCsrfToken() },
                        credentials: 'same-origin',
                    });

                    if (!response.ok) {
                        console.error('Bild-Upload fehlgeschlagen');
                        return [];
                    }

                    const result = await response.json();
                    return [{ src: result.url }];
                },
                onLoad: async () => {
                    const response = await fetch('/administrator/pagebuilder/assets', {
                        credentials: 'same-origin',
                    });

                    if (!response.ok) {
                        console.error('Fehler beim Laden der Assets');
                        return [];
                    }

                    return response.json();
                },
            },
            storage: {
                type: 'self',
                onSave: async ({ project, editor }) => {
                    const files = await editor.runCommand('studio:projectFiles');
                    const htmlFile = files.find((file) => file.mimeType === 'text/html');
                    const htmlData = htmlFile?.content ?? '';
                    const body = new FormData();
                    body.append('id', selectedProject);
                    body.append('data', JSON.stringify(project));
                    body.append('html', htmlData);

                    const response = await fetch('/administrator/pagebuilder/save', {
                        method: 'POST',
                        body,
                        headers: { 'X-CSRF-TOKEN': getCsrfToken() },
                        credentials: 'same-origin',
                    });

                    if (!response.ok) {
                        console.error('Speichern fehlgeschlagen');
                    }
                },
                onLoad: async () => {
                    const response = await fetch(`/administrator/pagebuilder/load/${selectedProject}`, {
                        credentials: 'same-origin',
                    });

                    if (!response.ok) {
                        console.error('Laden fehlgeschlagen');
                        return {};
                    }

                    const projectJson = await response.json();
                    return { project: projectJson };
                },
                autosaveChanges: 100,
                autosaveIntervalMs: 10000,
            },
            identity: {
                id: '1MZssHHwuOi2kNaH',
            },
        });

        window.__webreachStudioProjectId = selectedProject;
        window.__webreachStudioMountedRoot = editorRoot;
        return window.editor;
    } catch (error) {
        console.error('Fehler beim Initialisieren von GrapesJS Studio:', error);
        return null;
    }
};
