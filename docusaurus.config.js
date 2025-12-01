import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'NT Ultra',
  tagline: 'A familiar New Tab Page experience',
  favicon: 'img/favicon.ico',
  future: {
    v4: true,
  },
  url: 'https://nt-ultra.github.io',
  baseUrl: '/',
  organizationName: 'nt-ultra',
  projectName: 'nt-ultra.github.io',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/nt-ultra/nt-ultra.github.io/edit/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      image: 'img/soc.gif',
      navbar: {
        title: 'NT Ultra',
        logo: {
          alt: '☺',
          src: 'img/logo.png',
        },
        items: [
          {
            label: 'Documentation',
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
          },
          {
            label: 'GitHub',
            href: 'https://github.com/nt-ultra/nt-ultra',
            position: 'left',
          },
          {
            type: 'localeDropdown',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} soulhotel.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      // https://docusaurus.io/docs/search#using-algolia-docsearch
      // algolia: {
      //   appId: '0OM5PA911H',
      //   apiKey: '8d30d97462633bddfe02c133689df78f',
      //   indexName: 'algolia-doc-crawler',
      //   contextualSearch: true,
      //   searchParameters: {},
      //   searchPagePath: 'search',
      //   insights: false,
      //   // askAi: 'YOUR_ALGOLIA_ASK_AI_ASSISTANT_ID',
      // },
    }),
};

export default config;
