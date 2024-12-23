import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Kvexium",
  tagline: 'dec start: str = "now";',
  favicon: "img/kvexium_file-new.svg",

  // Set the production url of your site here
  url: "https://github.com",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "kvexium", // Usually your GitHub org/user name.
  projectName: "kvexium.github.io", // Usually your repo name.

  deploymentBranch: "gh-pages", // For Github Pages: gh-pages

  onBrokenLinks: "warn",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en", "de"],
    localeConfigs: {
      en: { label: "English" },
      de: { label: "Deutsch" },
    },
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /* editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/", */
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ["rss", "atom"],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          /* editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/", */
          // Useful options to enforce blogging best practices
          onInlineTags: "warn",
          onInlineAuthors: "warn",
          onUntruncatedBlogPosts: "warn",
        },
        theme: {
          customCss: [ /* "./src/pages/index.css", */ "./src/css/generell.css"],
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      title: "Kvexium",
      logo: {
        alt: "Kvexium Logo",
        src: "img/kvexium-new.svg",
      },
      items: [
        {
          to: "/docs/install",
          position: "left",
          label: "Install",
        },
        {
          to: "/docs/basics/generell",
          position: "left",
          label: "Docs",
        },
        {
          to: "/docs/libs/search",
          position: "left",
          label: "Libraries",
        },
        {
          type: "localeDropdown",
          position: "right",
        },
        {
          href: "https://github.com/kvexium",
          className: "header-github-link",
          "aria-label": "GitHub",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Install",
              to: "/docs/install",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Stack Overflow",
              href: "https://stackoverflow.com/questions/tagged/docusaurus",
            },
            {
              label: "Discord",
              href: "https://discordapp.com/invite/docusaurus",
            },
            {
              label: "Twitter",
              href: "https://twitter.com/docusaurus",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "Blog",
              to: "/blog",
            },
            {
              label: "GitHub",
              href: "https://github.com/kvexium",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Kvexium UG. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.nightOwlLight,
      darkTheme: prismThemes.dracula,
      // additionalLanguages: ["kvexium"], // Füge deine benutzerdefinierte Sprache hinzu
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
