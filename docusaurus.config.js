module.exports = {
  title: 'QP',
  tagline: 'The tagline of my site',
  url: 'https://quintonpham.me',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    googleAnalytics: {
      trackingID: 'G-YV9N16N1Y2',
      // Optional fields.
      // anonymizeIP: true, // Should IPs be anonymized?
    },
    // announcementBar: {
    //   id: 'WORK IN PROGRESS', // Any value that will identify this message.
    //   content:
    //     'We are looking to revamp our docs, please fill <a target="_blank" rel="noopener noreferrer" href="#">this survey</a>',
    //   backgroundColor: '#fafbfc', // Defaults to `#fff`.
    //   textColor: '#091E42', // Defaults to `#000`.
    // },

    colorMode: {
      defaultMode: 'dark', // 'light or 'dark'
      disableSwitch: true, // true or false: allow users to switch between light and dark modes
    },
    navbar: {
      hideOnScroll: true,
      title: 'Quinton Pham',
      logo: {
        alt: 'My Site Logo',
        src: 'img/headshot/photo.jpg',
      },
      items: [
        // LEFT
        {
          to: 'docs/startHere',
          activeBasePath: 'docs',
          label: 'Knowledge Base',
          position: 'left',
        },
        {
          to: 'blog', 
          label: 'Blog', 
          position: 'left'
        },

        // RIGHT
        {
          label: 'Spotify',
          to: 'https://open.spotify.com/user/1261246325?si=xH4QRQDEQ0KzZ8LxZyDqGw',
          position: 'right',
        },
        {
          label: 'Instagram',
          to: 'https://www.instagram.com/quintonlpham/',
          position: 'right',
        },
        {
          label: 'Contact',
          position: 'right',
          items: [
            {
              to: 'https://open.spotify.com/user/1261246325?si=xH4QRQDEQ0KzZ8LxZyDqGw', 
              label: 'Email',
            },
            {
              to: 'https://calendly.com/quintonpham/meet-and-greet', 
              label: 'Calendly',
            },
          ],
        },
      ],
    },
    // footer: {
    //   copyright: `Copyright © ${new Date().getFullYear()} Built with Docusaurus.`,
    // },
    // footer: {
    //   style: 'dark',
    //   links: [
    //     {
    //       title: 'Docs',
    //       items: [
    //         {
    //           label: 'Style Guide',
    //           to: 'docs/',
    //         },
    //         {
    //           label: 'Second Doc',
    //           to: 'docs/doc2/',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'Community',
    //       items: [
    //         {
    //           label: 'Stack Overflow',
    //           href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //         },
    //         {
    //           label: 'Discord',
    //           href: 'https://discordapp.com/invite/docusaurus',
    //         },
    //         {
    //           label: 'Twitter',
    //           href: 'https://twitter.com/docusaurus',
    //         },
    //       ],
    //     },
    //     {
    //       title: 'More',
    //       items: [
    //         {
    //           label: 'Blog',
    //           to: 'blog',
    //         },
    //         {
    //           label: 'GitHub',
    //           href: 'https://github.com/facebook/docusaurus',
    //         },
    //       ],
    //     },
    //   ],
    //   copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
