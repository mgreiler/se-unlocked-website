import { graphql } from "gatsby";
import React from "react";
import Layout from "../components/Layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
//import styles from "../styles/posts-details.module.css";

export default function PostsDetails({ data }) {
  const { html } = data.markdownRemark;
  const { title, thumbnail, permalink, post_header_image } =
    data.markdownRemark.frontmatter;
  return (
    <Layout>
      <div style={{ display: "grid" }}>
        <GatsbyImage image={getImage(post_header_image)} alt={permalink} />
        <div
          style={{
            // By using the same grid area for both, they are stacked on top of each other
            gridArea: "1/1",
            position: "relative",
            // This centers the other elements inside the hero component
            placeItems: "center",
            display: "grid",
          }}
        >
          <h2>{title}</h2>
        </div>
      </div>
      <div>
        {/* <div>
          <GatsbyImage image={getImage(thumbnail)} alt={permalink} />
        </div> */}
        {<div dangerouslySetInnerHTML={{ __html: html }} />}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query PostPage($permalink: String) {
    markdownRemark(
      frontmatter: { permalink: { eq: $permalink }, type: { eq: "post" } }
    ) {
      html
      frontmatter {
        title
        type
        permalink
        thumbnail {
          childImageSharp {
            gatsbyImageData(
              width: 200
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
        post_header_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
