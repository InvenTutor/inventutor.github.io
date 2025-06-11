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
        'd/useful-tools',
        {
          type: 'category',
          label: 'Legal',
          link: {type: 'doc', id: 'd/l/index'},
          items: [
            'd/l/affiliation-disclaimer',
            'd/l/branding-guidelines',
          ],
        },
        {
          type: 'category',
          label: 'Content',
          link: {type: 'doc', id: 'd/c/index'},
          items: [
            'd/c/activate-disabled-components',
            'd/c/visualizing-dropdowns',
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
          label: 'Deprecated',
          link: {type: 'doc', id: 't/d/index'},
          items: [
            't/d/use-discord-oauth',
            't/d/use-tebex-with-your-inventor.gg-bot',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🧩 Plugins',
      link: {type: 'doc', id: 'p/index'},
      items: [
        'p/active-developer-badge',
        'p/basic-moderation-commands',
        'p/birthdays',
        'p/character-roleplay',
        'p/free-chat-ai',
        'p/invite-tracker',
        'p/tags-messages',
        'p/twitch-stream-notifier',
        {
          type: 'category',
          label: 'In Development',
          link: {type: 'doc', id: 'p/dev/index'},
          items: [
            {
              type: 'category',
              label: 'ER:LC API Commands',
              items: [
                'p/dev/erlc-api-commands/index',
                'p/dev/erlc-api-commands/integrate-api-into-components',
              ],
            },
            'p/dev/roblox-price-changer',
          ],
        },
        {
          type: 'category',
          label: 'Planned',
          link: {type: 'doc', id: 'p/p/index'},
          items: [
            'p/p/erlc-roleplay-commands',
            'p/p/roblox-group-manager',
            'p/p/youtube-video-notifier',
            'p/p/bluesky-post-notifier',
            'p/p/message-manager',
          ],
        },
      ],
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
        'c/erlc-api-commands-plugin-examples',
        'c/tebex-purchases-handler',
      ],
    },
  ],
};

export default sidebars;
