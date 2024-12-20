import { themes as prismThemes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";

const config: Config = {
  title: "Frontend Bootcamp C5",
  tagline: "From Concept to Creation: Master the Web",
  favicon: "img/favicon.ico",

  // Set the production url of your site here
  url: "https://kas-bootcamp.netlify.app",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "facebook", // Usually your GitHub org/user name.
  projectName: "docusaurus", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl: "https://github.com/kasboi/kas-bootcamp",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/logo.svg",
    navbar: {
      title: "Frontend Bootcamp C5",
      logo: {
        alt: "Frontend Bootcamp C5 Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "Tutorial",
        },
        {
          href: "https://github.com/kasboi",
          label: "GitHub",
          position: "left",
        },
        {
          href: "https://careerconnect.ng/",
          label: "CareerConnect",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [],
      copyright: `Copyright © ${new Date().getFullYear()} KAS, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      magicComments: [
        {
          className: "code-block-line-removed",
          line: "code-remove-next-line",
          block: { start: "code-remove-start", end: "code-remove-end" },
        },
        {
          className: "code-block-line-added",
          line: "code-add-next-line",
          block: { start: "code-add-start", end: "code-add-end" },
        },
      ],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
