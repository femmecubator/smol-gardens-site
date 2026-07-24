// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const { themes } = require('prism-react-renderer')
const lightCodeTheme = themes.github
const darkCodeTheme = themes.dracula

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Smol Gardens',
  tagline: 'Accountable AI guide for Builders and Educators',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://www.opensprints.tech',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'femmecubator', // Usually your GitHub org/user name.
  projectName: 'open-sprints', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',
  onBrokenMarkdownLinks: 'warn',

  plugins: [require.resolve('./plugins/tailwind-plugin.js')],

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
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
          sidebarPath: require.resolve('./sidebars.js'),
          // TODO 👇 might want to uncomment to turn back on if we want to enable user to edit page
          // editUrl: 'https://github.com/femmecubator/open-sprints/tree/main/',
          breadcrumbs: false,
          // Internal planning docs (superpowers plans/specs) live under docs/ for
          // tooling convention but must not publish on the marketing site.
          // NOTE: overriding `exclude` replaces Docusaurus defaults, so the default
          // partial/test globs are restored here alongside the superpowers exclude.
          exclude: [
            '**/_*.{js,jsx,ts,tsx,md,mdx}',
            '**/_*/**',
            '**/*.test.{js,jsx,ts,tsx}',
            '**/__tests__/**',
            '**/superpowers/**',
          ],
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'SMOL GARDENS',
        logo: {
          alt: 'Smol Gardens Logo',
          src: 'img/logo.svg',
        },
        items: [
          { to: '/', label: 'Home', position: 'left', activeBaseRegex: '^/$' },
          { to: '/about', label: 'About', position: 'left' },
          { to: '/seedscore', label: 'Seedscore Tool', position: 'left' },
          { to: '/topics', label: 'Topics', position: 'left' },
          { type: 'docSidebar', sidebarId: 'projectsSideBar', label: 'Docs', position: 'left' },
          { to: '/blog', label: 'Blog', position: 'left' },
          { href: '#contact', label: 'Contact us', position: 'right' },
        ],
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
}

module.exports = config
