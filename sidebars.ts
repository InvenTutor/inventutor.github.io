import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */
const sidebars: SidebarsConfig = {
  tutorialSidebar: [
    {
      type: 'link',
      label: '💙 Discord Support',
      href: 'https://dsc.gg/inventutor',
    },
    {
      type: 'category',
      label: '📙 Docs',
      link: {type: 'doc', id: 'd/index'},
      items: [
        'd/official-links',
        'd/labels',
      //  'd/discord-server-rules',
        {
          type: 'category',
          label: 'Legal',
          link: {type: 'doc', id: 'd/l/index'},
          items: [
            'd/l/affiliation-disclaimer',
            'd/l/branding-guidelines',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🎬 Tutorials',
      link: {type: 'doc', id: 't/index'},
      items: [
        {
          type: 'category',
          label: 'Beginner Tutorials',
          link: {type: 'doc', id: 't/b/index'},
          items: [
            't/b/dm-users',
            't/b/check-users-roles',
            't/b/use-ai-for-free-in-components',
            't/b/invite-friends-to-edit-your-bot',
            't/b/create-reaction-roles',
            't/b/create-an-welcomer',
            't/b/create-sticky-messages',
            't/b/make-an-say-command',
            't/b/create-moderation-commands',
            't/b/use-modals',
            't/b/create-an-inventor.gg-bot',
            't/b/save-data-using-databases',
          ],
        },
        {
          type: 'category',
          label: 'Guides',
          link: {type: 'doc', id: 't/g/index'},
          items: [
            't/g/useful-tools',
            't/g/activate-disabled-components',
            't/g/visualizing-dropdowns',
          ],
        },
        {
          type: 'category',
          label: 'Advanced Topics',
          link: {type: 'doc', id: 't/a/index'},
          items: [
            't/a/make-staff-applications',
            't/a/automatically-moderate-messages',
            't/a/use-custom-blocks',
          ],
        },
        {
          type: 'category',
          label: 'Deprecated (🚫)',
          link: {type: 'doc', id: 't/d/index'},
          items: [
            't/d/use-discord-oauth',
            't/d/use-tebex-with-your-inventor.gg-bot',
          ],
        },
      ],
    },
    {
      type: 'doc',
      id: 'p/index',
      label: '🧩 Plugins (🚫)',
    },
    {
      type: 'category',
      label: '⚡ Components',
      link: {type: 'doc', id: 'c/index'},
      items: [
        'c/basic-tiktok-notifier',
        'c/discord-api-examples',
        'c/free-ai-chat',
        'c/basic-youtube-notifier',
        'c/tebex-purchases-handler',
      ],
    },
  ],
};

export default sidebars;
