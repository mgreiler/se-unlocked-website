import React from "react";
import Layout from "../components/Layout";
import * as styles from "../styles/sponsor.module.css";
import { StaticImage } from "gatsby-plugin-image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import rss from "../images/RSS-Feed-blue-sm.png";
import pod from "../images/google-podcast-blue-sm.png";
import deezer from "../images/deezer-blue-sm.png";
import itunes from "../images/itunes-blue-sm.png";
import twitter from "../images/twitter-logo-sm-blue.png";

export default function Sponsorship() {
  return (
    <Layout>
      <div className={styles.sponsor_container}>
        <h1>
          Reach developers with a heart for developing high-quality software!
        </h1>
      </div>
      {/*section1*/}
      <div className={styles.section_1}>
        <div className={styles.sponsor_container}>
          <p>
            The Software Engineering Unlocked podcast is an up and coming show
            directed to developers, and engineering leaders. Two things all
            listeners have in common is the drive to build better software and
            better engineering cultures.
          </p>
          <p>
            Sponsors that make a perfect match with the Software Engineering
            Unlocked podcast include sponsors that:
          </p>
          <ul>
            <li>offer software that makes developers’ lives better,</li>
            <li>are looking to hire talented folks,</li>
            <li>are looking to hire talented folks,</li>
            <li>
              provide high-quality training and education resources such as
              courses or books, or,
            </li>
            <li>offer high-quality hardware products.</li>
          </ul>
        </div>
      </div>
      {/*section2*/}
      <div className={styles.section_2}>
        <div className={`${styles.sponsor_container} ${styles.text_left}`}>
          <h1 className={`${styles.text_left}`}>160,000+ listens</h1>
          <h1 className={`${styles.text_left}`}>60+ episodes</h1>
          <h1 className={`${styles.text_left}`}>5,000+ Twitter followers</h1>
        </div>
      </div>
      {/*section3 What Sponsor Say*/}
      <div className={styles.section_1}>
        <div className={styles.sponsor_container}>
          <h3>What Sponsor Say</h3>
          <Row className="mt-4 ml-4 mr-4">
            <Col sm={12} md={6} lg={6}>
              <StaticImage
                src="../images/tracy-2020.jpg"
                alt="Tracy Phillips sponsoring the podcast"
              />
            </Col>
            <Col sm={12} md={6} lg={6}>
              <p className={styles.italic}>
                {" "}
                Sponsoring Software Engineering Unlocked was fun and worth the
                investment! Working with Michaela is always great – she was very
                attentive to our advertising goals, spent time learning about
                our product, and spoke about us to her audience from a place of
                true authenticity. We saw real engagement after the ads and are
                excited to continue working with her in the future.
              </p>
              <p className={styles.italic}>
                -Tracy Phillips, Co-Founder at CodeSubmit
              </p>
            </Col>
          </Row>
        </div>
      </div>
      {/*section4*/}
      <div className={styles.section_2}>
        <div className={styles.sponsor_container}>
          <div className="d-flex justify-content-center">
            <a href="https://code-review-workshop.typeform.com/to/Cap63J">
              <button className={styles.button}>I want to sponsor!</button>{" "}
            </a>
          </div>
        </div>
      </div>
      {/*section5 how it works*/}
      <div className={styles.section_2}>
        <div className={styles.sponsor_container}>
          {" "}
          <h3>How it works? </h3>
          <p>
            We love to personally report about our experience with your product.
            This also yields the best results. Therefore, whenever possible, we
            want to make sure to test out the product, or see it in action via a
            demo.
          </p>
          <p>
            In addition, we offer to work with you on your ad message, so that
            your message feels authentic and keeps the tone of the show.
          </p>
          <p>
            Alternatively, you can also send us our favorite script that we
            read.
          </p>
        </div>
      </div>
      {/*section6 Pricing*/}
      <div className={styles.section_2}>
        <div className={styles.sponsor_container}>
          {" "}
          <h3>Pricing</h3>
          <p>
            Because the best results for podcast advertisers are achieved when
            sponsors appear on a few consecutive shows, we highly encourage you
            to book a multi-show-package and profit from the discounted rates.
          </p>
          <ul>
            <li>Multi-show 3+ appearances — €540 Euro per show</li>
            <li>Multi-show 6+ appearances — €399 Euro per show</li>
            <li>Single show appearance — €850 Euro per show</li>
          </ul>
          <p>
            We occasionally have sponsored speakers, giving all the spotlight to
            you for 45 minutes. A sponsored speaker episode costs €1490 Euros.{" "}
          </p>
        </div>
      </div>
      {/*section7*/}
      <div className={styles.section_2}>
        <div className={styles.sponsor_container}>
          <div className="d-flex justify-content-center">
            <a href="https://code-review-workshop.typeform.com/to/Cap63J">
              <button className={styles.button}>Let me sponsor!</button>
            </a>
          </div>
        </div>
      </div>
      {/* Donation section section8 */}
      <div className={styles.donation}>
        <div className={styles.sponsor_container}>
          <h1>What you will get</h1>
          <ul>
            <li>A one-minute sponsor spot at the beginning of the show .</li>
            <li>
              A dedicated sponsorship section including your logo, link, and
              description on the episode website page.
            </li>
            <li>
              A sponsorship section within the show notes syndicated to podcast
              clients and our RSS feed, reaching users independent of the
              client.
            </li>
            <li>
              One tweet introducing you to our Twitter audience every three
              episodes sponsored.
            </li>
            <li>
              At least one mention in our monthly SE Unlocked newsletter – and
              follow-up mentions as long as you are an active sponsor.
            </li>
            <li>
              We currently only accept <span>one external sponsor</span> per
              episode, making sure you get all the spotlight.
            </li>
          </ul>
        </div>
      </div>
      {/*section9*/}{" "}
      <div className={styles.section_1}>
        <div className={styles.sponsor_container}>
          <p>
            The topics discussed in the podcast range from engineering
            methodologies to software engineering best practices, and experience
            reports of day-to-day work life at certain companies.
          </p>
          <p>
            Another topic that is highly valuable is interviewing experiences
            and hiring decisions, attracting listeners that are ready for a new
            role.
          </p>
          <p>
            Sponsoring the podcast is ideal for all who want to reach an engaged
            audience that is enthusiastic about software quality, software
            engineering rigor, and that strives to build welcoming and including
            engineering cultures.
          </p>
        </div>
      </div>
      {/*section10 Ready to get in*/}
      <div className={styles.section_2}>
        <div className={styles.sponsor_container}>
          <div className="d-flex justify-content-center">
            <a href="https://code-review-workshop.typeform.com/to/Cap63J">
              <button className={styles.button}>I'm ready to get in!</button>{" "}
            </a>
          </div>
        </div>
      </div>
      {/*section11*/}{" "}
      <div className={styles.section_1}>
        <div className={styles.sponsor_container}>
          <p>
            Just within one year, the podcast has reached a wide audience of
            quality-focused software engineers and product-folks. The podcast
            has been listened to over 160,000 times. Each episode averages around
            1,500 listens. The number of listens each episode gets is quite
            stable, showing a loyal, yet growing listener base. Some of the most
            downloaded episodes reach around 5,000 people.
          </p>
        </div>
      </div>
      {/*Demographics*/}
      <div className={styles.section_2}>
        <div className={styles.sponsor_container}>
          <Row>
            <Col sm={12} md={5} lg={5}>
              <h1 className={styles.text_left}>Demographics</h1>
              <p>
                Most of our listeners are from the USA 36%, Europe 35%, and
                Canada 4.72%.
              </p>
              <ol>
                <li>USA 36.3%</li>
                <li>UK 9.28%</li>
                <li>Germany 7.98%</li>
                <li>Canada 4.72%</li>
                <li>India 3.18%</li>
                <li>Australia 2.83%</li>
                <li>France 2.44%</li>
                <li>The Netherlands 2.38%</li>
                <li>Brazil 1.94%</li>
                <li>Austria 1.77%</li>
              </ol>
            </Col>
            <Col sm={12} md={7} lg={7}>
              <StaticImage
                src="../images/map.png"
                alt="Michaela Greiler recording a show"
              />
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.gradient_section}>
        <div className={styles.sponsor_container}>
          <h1 className={styles.text_left}>Ready to increase your reach?</h1>
          <p className="mt-4">Interested in sponsoring? Send us an email at</p>
          <p>
              michaela [at] michaelagreiler [.] com
          </p>
        </div>
      </div>
      <div className={styles.section_1}>
        <div className={styles.sponsor_container}>
          <h1 className={styles.text_left}>Follow Us</h1>{" "}
          <div className="icons mt-5">
            <a
              href="https://feeds.simplecast.com/K1_mv0CJ"
              target="_blank"
              rel="noreferrer"
              className={styles.mr_5}
            >
              <img src={rss} alt="subscribe via RSS feed" />
            </a>
            <a
              href="https://podcasts.google.com/feed/aHR0cHM6Ly9mZWVkcy5zaW1wbGVjYXN0LmNvbS9LMV9tdjBDSg=="
              target="_blank"
              rel="noreferrer"
              className={styles.mr_5}
            >
              <img src={pod} alt="subscribe via Google podcasts" />
            </a>
            <a
              href="https://podcasts.apple.com/at/podcast/software-engineering-unlocked/id1477527378?l=en"
              target="_blank"
              rel="noreferrer"
              className={styles.mr_5}
            >
              <img src={itunes} alt="subscribe via iTunes" />
            </a>
            <a
              href="https://twitter.com/se_unlocked"
              target="_blank"
              rel="noreferrer"
              className={styles.mr_5}
            >
              <img src={twitter} alt="subscribe via Twitter" />
            </a>
            <a
              href="https://www.deezer.com/us/show/465682"
              target="_blank"
              rel="noreferrer"
              className={styles.mr_5}
            >
              <img src={deezer} alt="subscribe via Deezer" />
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
