import { graphql, Link } from "gatsby";
import * as React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/home.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Newsletter from "../components/Newsletter";
import rss from "../images/RSS-Feed-blue-sm.png";
import pod from "../images/google-podcast-blue-sm.png";
import deezer from "../images/deezer-blue-sm.png";
import itunes from "../images/itunes-blue-sm.png";
import twitter from "../images/twitter-logo-sm-blue.png";

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <section className={styles.body}>
        <div className="content">
          <h1 className="text-center">Latest Episode</h1>
          {posts.map((posts) => (
            <Link to={"/posts" + posts.frontmatter.permalink} key={posts.id}>
              <div className={styles.postList}>
                <div className="postList_image">
                  <GatsbyImage
                    image={getImage(posts.frontmatter.thumbnail)}
                    alt={posts.frontmatter.permalink}
                  />
                </div>
                <div className={styles.postList_content}>
                  <h2 className={styles.episodeTitle}>
                    {posts.frontmatter.title}
                  </h2>
                  <audio controls>
                    <source src={posts.frontmatter.audio} />
                  </audio>
                  <p className={styles.episodeExcerpt}>
                    {posts.frontmatter.excerpt}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <section class="subscribe">
        <div class="subscribe-text">
          <h2>Subscribe To Our Podcast</h2>
          <p>
            Never miss an episode! Subscribe on iTunes, Google, Deezer, or via
            RSS
          </p>
          <div className="icons">
            <a href="https://feeds.simplecast.com/K1_mv0CJ" target="_blank">
              <img src={rss} />
            </a>
            <a
              href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9LMV9tdjBDSg=="
              target="_blank"
            >
              <img src={pod} />
            </a>
            <a
              href="https://podcasts.apple.com/at/podcast/software-engineering-unlocked/id1477527378?l=en"
              target="_blank"
            >
              <img src={itunes} />
            </a>
            <a href="https://twitter.com/se_unlocked" target="_blank">
              <img src={twitter} />
            </a>
            <a href="https://www.deezer.com/us/show/465682" target="_blank">
              <img src={deezer} />
            </a>
          </div>
        </div>
      </section>{" "}
      <Newsletter />
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
