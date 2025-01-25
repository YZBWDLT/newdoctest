// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
    title: '量筒测试群 群文档',
    tagline: '记录群内大小事务的文档',
    favicon: 'img/yzbwdlt.png',

    // Set the production url of your site here
    url: 'https://github.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'PumpkinJui', // Usually your GitHub org/user name.
    projectName: 'groupdocs', // Usually your repo name.

    onBrokenLinks: 'ignore',
    onBrokenMarkdownLinks: 'warn',

    // Even if you don't use internationalization, you can use this field to set
    // useful metadata like html lang. For example, if your site is Chinese, you
    // may want to replace 'en' with 'zh-Hans'.
    i18n: {
        defaultLocale: 'zh-Hans',
        locales: ['zh-Hans'],
    },

    presets: [
        [
            'classic',
            /** @type {import('@docusaurus/preset-classic').Options} */
            ({
                docs: {
                    sidebarPath: './sidebars.js',
                    editUrl: 'https://github.com/PumpkinJui/groupdocs/tree/main/',
                },
                blog: {
                    routeBasePath: 'blog/anno',
                    showReadingTime: true,
                    feedOptions: {
                      type: ['rss', 'atom'],
                      xslt: true,
                    },
                    blogSidebarCount: 'ALL',
                    // Please change this to your repo.
                    // Remove this to remove the "edit this page" links.
                    editUrl:
                      'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
                    // Useful options to enforce blogging best practices
                    onInlineTags: 'warn',
                    onInlineAuthors: 'warn',
                    onUntruncatedBlogPosts: 'ignore',
                  },
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ themeConfig: ({

        // Replace with your project's social card
        image: 'img/yzbwdlt.png',

        docs: {
            sidebar: {
                hideable: true,
            }
        },

        // 网站颜色主题
        colorMode: {
            /** 默认颜色 */ defaultMode: 'light',
            /** 是否跟随系统主题 */ respectPrefersColorScheme: true
        },

        // 顶部栏
        navbar: {
            title: '量筒测试群 群文档',
            logo: { alt: 'Logo', src: 'img/yzbwdlt.png', },
            items: [
                { label: '群规', position: 'left', type: 'docSidebar', sidebarId: 'rule' },
                { label: '群资源', position: 'left', type: 'docSidebar', sidebarId: 'resource' },
                { label: '服务器', position: 'left', type: 'docSidebar', sidebarId: 'server' },
                { label: '工具', position: 'left', type: 'docSidebar', sidebarId: 'tool' },
                { label: '公告', position: 'left', to: '/blog/anno' },
                { label: '关于', position: 'left', type: 'docSidebar', sidebarId: 'about' },
                {
                    href: 'https://github.com/PumpkinJui/groupdocs',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [
                {
                    title: 'Docs',
                    items: [
                        { label: 'Tutorial', to: '/docs/intro', },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        { label: 'GitHub', href: 'https://github.com/PumpkinJui/groupdocs', },
                    ],
                },
                {
                    title: '授权许可',
                    items: [
                        { label: 'CC-BY-4.0', href: 'https://creativecommons.org/licenses/by/4.0/deed.zh-hans' },
                        { label: '许可证概览', to: '/docs/about/license/overview_zh' },
                        { label: 'License Overview', to: '/docs/about/license/overview_en' },                    ],
                },
            ],
            copyright: `版权归 © 2019 - ${new Date().getFullYear()} 极筑 · 量筒地图测试群所有。本站使用 Docusaurus 构建。`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    }),
};

export default config;
