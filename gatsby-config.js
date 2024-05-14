module.exports = {
  siteMetadata: {
    siteUrl: "https://www.se-unlocked.com",
    title: "Software Engineering Unlocked",
    author: {
      name: `Dr. Michaela Greiler`,
      summary: `who is obsessed with making code reviews your superpower.`,
    },
    description: `Your favorite Software Engineering Podcast.`,
    siteUrl: `https://www.software-engineering-unlocked.com`,
    social: {
      twitter: `mgreiler`,
    },
    keywords: `tech podcast, software quality, code reviews, technology podcast, software engineering podcast, programming podcast`,
    defaultogimage: `/og-image.png`,
  },
  trailingSlash: "always",
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
      resolve: `gatsby-plugin-plausible`,
      options: {
        domain: `software-engineering-unlocked.com`,
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
                  description: node.frontmatter.excerpt,
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
                  filter: {frontmatter: {status: {eq: "publish"}, type: {eq: "post"}}}
                  sort: {frontmatter: {date: DESC}},
                ) {
                  nodes {
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
      {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          "G-WQSJJELR2S", // Google Analytics / GA
          // "AW-CONVERSION_ID", // Google Ads / Adwords / AW
          // "DC-FLOODIGHT_ID", // Marketing Platform advertising products (Display & Video 360, Search Ads 360, and Campaign Manager)
        ],
        // This object gets passed directly to the gtag config command
        // This config will be shared across all trackingIds
        gtagConfig: {
          // optimize_id: "OPT_CONTAINER_ID", //Container ID for A/B Testing with Google Optimize
          anonymize_ip: true,
          cookie_expires: 0,
        },
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: false,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: ["/preview/**", "/do-not-track/me/too/"],
          // Defaults to https://www.googletagmanager.com
          origin: "YOUR_SELF_HOSTED_ORIGIN",
          // Delays processing pageview events on route update (in milliseconds)
          delayOnRouteUpdate: 0,
        },
      },
    },
  ],
};
