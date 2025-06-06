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
      items: [
        'd/index',
        'd/official-links-and-staff-list',
        'd/about-inventutor-pro',
        'd/useful-tools',
        {
          type: 'category',
          label: 'Legal',
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
      items: [
        't/index',
        {
          type: 'category',
          label: 'Beginner Tutorials',
          items: [
            't/b/how-to-invite-friends-to-edit-your-bot',
            't/b/how-to-create-reaction-roles',
            't/b/how-to-create-an-welcomer',
            't/b/how-to-create-sticky-messages',
            't/b/how-to-make-an-say-command',
            't/b/how-to-create-moderation-commands',
            't/b/how-to-use-modals',
            't/b/how-to-create-an-inventor.gg-bot',
            't/b/how-to-save-data-using-databases',
          ],
        },
        {
          type: 'category',
          label: 'Advanced Topics',
          items: [
            't/a/how-to-make-staff-applications',
            't/a/how-to-automatically-moderate-messages',
            't/a/how-to-use-custom-blocks',
          ],
        },
        {
          type: 'category',
          label: 'Deprecated',
          items: [
            't/d/how-to-use-discord-oauth',
            't/d/how-to-use-tebex-with-your-inventor.gg-bot',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🧩 Plugins',
      items: [
        'p/index',
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
          items: [
            'p/dev/index',
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
          items: [
            'p/p/index',
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
      items: [
        'c/index',
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
