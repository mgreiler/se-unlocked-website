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
import "bootstrap/dist/css/bootstrap.min.css";

import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { Container } from "react-bootstrap";

export default function Home({ data }) {
  const posts = data.allMarkdownRemark.nodes;
  return (
    <Layout>
      <section>
        <Container className="text-center fluid episodes-grid">
          <Row>
            <Col
              sm={12}
              md={12}
              lg={12}
              xl={12}
              xxl={12}
              className="grid-title"
            >
              <h1 className="text-center">Latest Episode</h1>
            </Col>
          </Row>
          <Row className="text-center">
            {posts.map((posts) => (
              <Col
                sm={12}
                md={6}
                lg={6}
                xl={4}
                xxl={3}
                key={posts.id}
                className="post_list"
              >
                <Link to={posts.frontmatter.permalink} key={posts.id}>
                  <div className={styles.postList}>
                    <div className="postList_image">
                      <GatsbyImage
                        image={getImage(posts.frontmatter.thumbnail)}
                        alt={posts.frontmatter.permalink}
                      />
                    </div>
                    <div className={styles.postList_content}>
                      <audio
                        controls
                        preload="none"
                        className={styles.postList_audio}
                      >
                        <source src={posts.frontmatter.audio} />
                      </audio>
                      <h2 className={styles.episodeTitle}>
                        {posts.frontmatter.title}
                      </h2>
                      <p className={styles.episodeExcerpt}>
                        {posts.frontmatter.excerpt}
                      </p>
                    </div>
                  </div>
                </Link>{" "}
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="subscribe">
        <div className="subscribe-text">
          <h2>Subscribe To Our Podcast</h2>
          <p>
            Never miss an episode! Subscribe on iTunes, Google, Deezer, or via
            RSS
          </p>
          <div className="icons">
            <a
              href="https://feeds.simplecast.com/K1_mv0CJ"
              target="_blank"
              rel="noreferrer"
            >
              <img src={rss} />
            </a>
            <a
              href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9LMV9tdjBDSg=="
              target="_blank"
              rel="noreferrer"
            >
              <img src={pod} />
            </a>
            <a
              href="https://podcasts.apple.com/at/podcast/software-engineering-unlocked/id1477527378?l=en"
              target="_blank"
              rel="noreferrer"
            >
              <img src={itunes} />
            </a>
            <a
              href="https://twitter.com/se_unlocked"
              target="_blank"
              rel="noreferrer"
            >
              <img src={twitter} />
            </a>
            <a
              href="https://www.deezer.com/us/show/465682"
              target="_blank"
              rel="noreferrer"
            >
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
