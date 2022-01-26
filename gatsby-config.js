module.exports = {
  siteMetadata: {
    siteUrl: "https://www.se-unlocked.com",
    title: "Software Engineering Unlocked",
    author: {
      name: `Dr. Michaela Greiler`,
      summary: `who is obsessed with making code reviews your superpower.`,
    },
    description: `Your Software Engineering Podcast.`,
    siteUrl: `https://www.software-engineering-unlocked.com`,
    social: {
      twitter: `mgreiler`,
    },
    keywords: `tech podcast, software quality, code reviews, technology podcast, software engineering podcast, programming podcast`,
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
    {
      resolve: "gatsby-plugin-mailchimp",
      options: {
        endpoint:
          "https://se-unlocked.us3.list-manage.com/subscribe/post?u=74b1790e5710618801de6d4a7&id=a1f53b7c4f", // string; add your MC list endpoint here; see instructions below
        timeout: 3500, // number; the amount of time, in milliseconds, that you want to allow mailchimp to respond to your request before timing out. defaults to 3500
      },
    },
    "gatsby-plugin-image",
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-143793976-1",
      },
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allMarkdownRemark } }) => {
              return allMarkdownRemark.nodes.map((node) => {
                return Object.assign({}, node.frontmatter, {
                  description: node.excerpt,
                  date: node.frontmatter.date,
                  url: site.siteMetadata.siteUrl + node.frontmatter.permalink,
                  guid: site.siteMetadata.siteUrl + node.frontmatter.permalink,
                  custom_elements: [
                    { "content:encoded": node.html },
                    { audio: node.frontmatter.audio },
                  ],
                });
              });
            },
            query: `
              {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  nodes {
                    excerpt
                    html
                    frontmatter {
                      permalink
                      date
                      title
                      excerpt
                      audio
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "SE Unlocked RSS Feed",
          },
        ],
      },
    },
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-react-helmet-canonical-urls`,
      options: {
        siteUrl: `https://www.software-engineering-unlocked.com`,
      },
    },
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/Software_Engineering_Unlocked_FavIcon.png",
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
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 800,
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
        name: "transcripts",
        path: "./src/transcripts/",
      },
      __key: "transcripts",
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
