import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'InvenTutor Docs',
  tagline: 'The best content for your Inventor.gg bots.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://inventutor.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'inventutor', // Usually your GitHub org/user name.
  projectName: 'inventutor.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/social-cover.png',
    navbar: {
      title: 'InvenTutor Docs',
      logo: {
        alt: 'InvenTutor Logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs', label: 'Docs', position: 'left' },
        { to: '/tutorials', label: 'Tutorials', position: 'left' },
        { to: '/plugins', label: 'Plugins', position: 'left' },
        { to: '/components', label: 'Components', position: 'left' },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Content',
          items: [
            {
              label: 'Docs',
              to: '/docs',
            },
            {
              label: 'Tutorials',
              to: '/tutorials',
            },
            {
              label: 'Plugins',
              to: '/plugins',
            },
            {
              label: 'Components',
              to: '/components',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/@InvenTutor',
            },
            {
              label: 'Discord',
              href: 'https://dsc.gg/inventutor',
            },
            {
              label: 'Merch',
              href: 'https://inventutor-shop.fourthwall.com',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Affiliation Disclaimer',
              to: '/docs/legal/affiliation-disclaimer',
            },
            {
              label: 'Useful Tools',
              href: '/docs/useful-tools',
            },
            {
              label: 'Propose Changes',
              href: 'https://github.com/inventutor/inventutor.github.io',
            },
          ],
        },
      ],
      copyright: `InvenTutor is not affiliated with Inventor.gg. <a href="/docs/legal/affiliation-disclaimer">Learn more.</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
