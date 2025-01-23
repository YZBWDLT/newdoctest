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
    favicon: 'img/favicon.ico',

    // Set the production url of your site here
    url: 'https://github.com',
    // Set the /<baseUrl>/ pathname under which your site is served
    // For GitHub pages deployment, it is often '/<projectName>/'
    baseUrl: '/',

    // GitHub pages deployment config.
    // If you aren't using GitHub pages, you don't need these.
    organizationName: 'PumpkinJui', // Usually your GitHub org/user name.
    projectName: 'groupdocs', // Usually your repo name.

    onBrokenLinks: 'throw',
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
                blog: false,
                theme: {
                    customCss: './src/css/custom.css',
                },
            }),
        ],
    ],

    
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */ themeConfig: ({

        // Replace with your project's social card
        image: 'img/docusaurus-social-card.jpg',

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
                { 
                    label: '文档',
                    position: 'left',
                    type: 'docSidebar',
                    sidebarId: 'groupdoc'
                },
                {
                    label: '服务器',
                    position: 'left',
                    type: 'docSidebar',
                    sidebarId: 'server'
                },
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
                        {
                            label: 'Tutorial',
                            to: '/docs/intro',
                        },
                    ],
                },
                {
                    title: 'More',
                    items: [
                        {
                            label: 'GitHub',
                            href: 'https://github.com/PumpkinJui/groupdocs',
                        },
                    ],
                },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} 量筒测试群. Built with Docusaurus.`,
        },
        prism: {
            theme: prismThemes.github,
            darkTheme: prismThemes.dracula,
        },
    }),
};

export default config;
