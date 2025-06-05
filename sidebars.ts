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
        'docs/index',
        'docs/official-links-and-staff-list',
        'docs/about-inventutor-pro',
        'docs/useful-tools',
        {
          type: 'category',
          label: 'Legal',
          items: [
            'docs/legal/affiliation-disclaimer',
            'docs/legal/branding-guidelines',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🎬 Tutorials',
      items: [
        'tutorials/index',
        {
          type: 'category',
          label: 'Beginner Tutorials',
          items: [
            'tutorials/beginner/how-to-invite-friends-to-edit-your-bot',
            'tutorials/beginner/how-to-create-reaction-roles',
            'tutorials/beginner/how-to-create-an-welcomer',
            'tutorials/beginner/how-to-create-sticky-messages',
            'tutorials/beginner/how-to-make-an-say-command',
            'tutorials/beginner/how-to-create-moderation-commands',
            'tutorials/beginner/how-to-use-modals',
            'tutorials/beginner/how-to-create-an-inventor.gg-bot',
            'tutorials/beginner/how-to-save-data-using-databases',
          ],
        },
        {
          type: 'category',
          label: 'Advanced Topics',
          items: [
            'tutorials/advanced/how-to-make-staff-applications',
            'tutorials/advanced/how-to-automatically-moderate-messages',
            'tutorials/advanced/how-to-use-custom-blocks',
          ],
        },
        {
          type: 'category',
          label: 'Deprecated',
          items: [
            'tutorials/deprecated/how-to-use-discord-oauth',
            'tutorials/deprecated/how-to-use-tebex-with-your-inventor.gg-bot',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '🧩 Plugins',
      items: [
        'plugins/index',
        'plugins/active-developer-badge',
        'plugins/basic-moderation-commands',
        'plugins/birthdays',
        'plugins/character-roleplay',
        'plugins/free-chat-ai',
        'plugins/invite-tracker',
        'plugins/tags-messages',
        'plugins/twitch-stream-notifier',
        {
          type: 'category',
          label: 'In Development',
          items: [
            'plugins/in-development/index',
            {
              type: 'category',
              label: 'ER:LC API Commands',
              items: [
                'plugins/in-development/erlc-api-commands/index',
                'plugins/in-development/erlc-api-commands/integrate-api-into-components',
              ],
            },
            'plugins/in-development/roblox-price-changer',
          ],
        },
        {
          type: 'category',
          label: 'Planned',
          items: [
            'plugins/planned/index',
            'plugins/planned/erlc-roleplay-commands',
            'plugins/planned/roblox-group-manager',
            'plugins/planned/youtube-video-notifier',
            'plugins/planned/bluesky-post-notifier',
            'plugins/planned/message-manager',
          ],
        },
      ],
    },
    {
      type: 'category',
      label: '⚡ Components',
      items: [
        'components/index',
        'components/basic-tiktok-notifier',
        'components/discord-api-examples',
        'components/free-ai-chat',
        'components/basic-youtube-notifier',
        'components/erlc-api-commands-plugin-examples',
        'components/tebex-purchases-handler',
      ],
    },
  ],
};

export default sidebars;
