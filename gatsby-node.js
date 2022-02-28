const path = require("path");

exports.createPages = async ({ graphql, actions }) => {
  const { data } = await graphql(`
    query Posts {
      allMarkdownRemark(filter: { frontmatter: { type: { eq: "post" } } }) {
        nodes {
          frontmatter {
            permalink
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.nodes.forEach((node) => {
    actions.createPage({
      path: node.frontmatter.permalink,
      component: path.resolve("./src/templates/posts-detail.js"),
      context: { permalink: node.frontmatter.permalink },
      defer: true
    });
  });
};
