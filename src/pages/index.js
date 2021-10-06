import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <section className={styles.body}>
        <div>
          {posts.map((posts) => (
            <Link to={"/posts" + posts.frontmatter.permalink} key={posts.id}>
              <div className={styles.postList}>
                <div>
                  <GatsbyImage
                    image={getImage(posts.frontmatter.thumbnail)}
                    alt={posts.frontmatter.permalink}
                  />
                </div>
                <div>
                  <h2 className={styles.episodeTitle}>{posts.frontmatter.title}</h2>
                  <audio controls>
                    <source src={posts.frontmatter.audio} />
                  </audio>
                  <p className={styles.episodeExcerpt}>{posts.frontmatter.excerpt}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div>
          <p>Subscribe To Our Software Engineering Podcast</p>
        </div>
      </section>
    </Layout>
  );
}

export const query = graphql`
  query PostQuery {
    allMarkdownRemark(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      nodes {
        frontmatter {
          title
          status
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
          excerpt
          type
          audio
        }
        id
      }
    }
  }
`;
