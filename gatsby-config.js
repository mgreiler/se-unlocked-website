module.exports = {
  siteMetadata: {
    siteUrl: "https://www.se-unlocked.com",
    title: "Software Engineering Unlocked",
  },
  plugins: [
    // {
    //   resolve: "gatsby-plugin-sass",
    //   options: {
    //     cssLoaderOptions: {
    //       modules: {
    //         exportLocalsConvention: "camelCaseOnly",
    //       },
    //     },
    //   },
    // },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-143793976-1",
      },
    },
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-audio",
            options: {
              preload: "auto",
              loop: false,
              controls: true,
              muted: false,
              autoplay: false,
            },
          },
        ],
      },
    },
    "gatsby-plugin-mdx",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "uploads",
        path: "./src/uploads/",
      },
      __key: "uploads",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "posts",
        path: "./src/posts/",
      },
      __key: "posts",
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "pages",
        path: "./src/pages/",
      },
      __key: "pages",
    },
  ],
};
