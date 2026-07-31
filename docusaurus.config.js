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
  // TODO: replace with the real Smol Gardens production domain before deploying.
  // Only affects sitemap/canonical/absolute URLs — not local dev or the build.
  url: 'https://kriziaf.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'kriziaf', // Usually your GitHub org/user name.
  projectName: 'launchpad-marketing-site', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenAnchors: 'warn',

  // onBrokenMarkdownLinks moved here — the top-level option is deprecated and
  // is removed in Docusaurus v4.
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },

  plugins: [require.resolve('./plugins/tailwind-plugin.js')],

  // Webfonts must be loaded here rather than via @import in custom.css: the
  // Tailwind `@source` at-rule precedes it there, which makes the @import
  // invalid so PostCSS strips it and no font loads at all.
  // Families come from the Figma tokens — Work Sans (H1), Montserrat
  // (display), Inter (body/labels) — plus Nunito Sans for the marketing pages.
  stylesheets: [
    {
      href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:opsz,wght@6..12,400;6..12,500;6..12,600;6..12,700&family=Inter:wght@400;500;600;700&family=Work+Sans:wght@400;500;600;700&family=Montserrat:wght@400;500;600;700&display=swap',
      type: 'text/css',
    },
  ],

  headTags: [
    {
      tagName: 'link',
      attributes: { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
    },
    {
      tagName: 'link',
      attributes: {
        rel: 'preconnect',
        href: 'https://fonts.gstatic.com',
        crossorigin: 'anonymous',
      },
    },
  ],

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
        // The seed blog was Docusaurus tutorial content (2019/2021 sample
        // posts). Removed with the rest of the open-sprints seed; re-enable
        // when Smol Gardens has real posts to publish.
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Social/OG card. Previously img/docusaurus-social-card.jpg, which does
      // not exist in static/ — every share preview requested a 404.
      image: 'img/hero-team.jpg',
      navbar: {
        // No `title`: the logo artwork already contains the wordmark, so
        // setting one renders "SMOL GARDENS" twice in the header.
        logo: {
          alt: 'Smol Gardens',
          src: 'img/logo.svg',
        },
        // Matches the header in Figma node 2202:1561: four nav items, then the
        // outlined "Contact us" button. The docs sidebar is reachable from the
        // Topics listing, so it is not a top-level item.
        // All items sit in the right group: the design puts the logo alone on
        // the left and the whole nav run flush right, ending level with the
        // bar's right padding.
        items: [
          { to: '/', label: 'Home', position: 'right', activeBaseRegex: '^/$' },
          { to: '/about', label: 'About', position: 'right' },
          { to: '/seedscore', label: 'Try Seedscore', position: 'right' },
          { to: '/topics', label: 'Topics', position: 'right' },
          {
            to: '/docs/topics/community-governance',
            label: 'Contact us',
            position: 'right',
            className: 'navbar__cta',
          },
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
