/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: "QP",
  tagline: "The tagline of my site",
  url: "https://quintonpham.com",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  organizationName: "quintonpham", // Usually your GitHub org/user name.
  projectName: "my-website", // Usually your repo name.
  themeConfig: {
    // announcementBar: {
    //   id: "WORK IN PROGRESS", // Any value that will identify this message.
    //   content:
    //     "We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>",
    //   backgroundColor: "#fafbfc", // Defaults to `#fff`.
    //   textColor: "#091E42", // Defaults to `#000`.
    // },
    colorMode: {
      respectPrefersColorScheme: true,
      defaultMode: 'dark', // "light or "dark"
      disableSwitch: true, // true or false: allow users to switch between light and dark modes
    },
    navbar: {
      hideOnScroll: false,
      title: "Quinton Pham",
      logo: {
        alt: "My Site Logo",
        src: "img/headshot/photo.jpg",
      },
      items: [
        // LEFT
        // {
        //   type: "doc",
        //   docId:"aboutMe",
        //   label: "Info Base",
        //   position: "left",
        // },
        // {
        //   to: "blog", 
        //   label: "Blog", 
        //   position: "right"
        // },

        // RIGHT
        
        // {
        //   label: "Spotify",
        //   to: "https://open.spotify.com/user/1261246325?si=xH4QRQDEQ0KzZ8LxZyDqGw",
        //   position: "right",
        // },
        // {
        //   label: "Instagram",
        //   to: "https://www.instagram.com/quintonlpham",
        //   position: "right",
        // },
        {
          label: "GitHub",
          to: "https://github.com/phamousq/my-website",
          position: "right",
        },
        {
          label: "Contact",
          position: "right",
          items: [
            {
              to: "https://open.spotify.com/user/1261246325?si=xH4QRQDEQ0KzZ8LxZyDqGw", 
              label: "Email",
            },
            {
              to: "https://calendly.com/quintonpham/meet-and-greet", 
              label: "Calendly",
            },
          ],
        },
      ]
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
    },
    footer: {
      style: "dark",
      // links: [
      //   {
      //     title: "Docs",
      //     items: [
      //       {
      //         label: "Style Guide",
      //         to: "docs/",
      //       },
      //       {
      //         label: "Second Doc",
      //         to: "docs/doc2/",
      //       },
      //     ],
      //   },
      //   {
      //     title: "Community",
      //     items: [
      //       {
      //         label: "Stack Overflow",
      //         href: "https://stackoverflow.com/questions/tagged/docusaurus",
      //       },
      //       {
      //         label: "Discord",
      //         href: "https://discordapp.com/invite/docusaurus",
      //       },
      //       {
      //         label: "Twitter",
      //         href: "https://twitter.com/docusaurus",
      //       },
      //     ],
      //   },
      //   {
      //     title: "More",
      //     items: [
      //       {
      //         label: "Blog",
      //         to: "blog",
      //       },
      //       {
      //         label: "GitHub",
      //         href: "https://github.com/facebook/docusaurus",
      //       },
      //     ],
      //   },
      // ],
      copyright: `Copyright © ${new Date().getFullYear()} Quinton Pham. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          routeBasePath: '/',
          showLastUpdateTime: true,
          include: ['**/*.md', '**/*.mdx'],
          // editUrl:'https://github.com/phamousq/my-website/blob/master',
        },
        blog: false,
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        }
      }
    ]
  ]
};
