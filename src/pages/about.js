import React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image";
import { Container } from "react-bootstrap";
import Seo from "../components/seo";

export default function About() {
  return (
    <Layout>
      <Seo title="Your favorite Software Engineering Podcast" />
      <Container>
        <h2>Behind The Mic</h2>
        <hr class="rounded-short"></hr>
        <div class="flex-container">
          <div class="flex-child">
            <StaticImage
              src="../uploads/2019/07/podcast_small.jpg"
              alt="Michaela Greiler recording a show"
            />
          </div>
          <div class="flex-child">
            <h3>Michaela Greiler aka Doctor McKayla</h3>
            <p>
              Michaela Greiler has a passion for understanding how people
              develop software. For years, she has been analyzing and improving
              the software development processes at Microsoft. Now she runs her
              own training and consultancy business, where she helps engineering
              teams around the world to make code reviews their superpower. She
              shares her findings through articles on her blog or in scientific
              journals, in publications such as freecodecamp and at conferences.
              And, she also runs a weekly software engineering newsletter that
              more than 1400 people enjoy. With this podcast, she wants to open
              doors of successful software companies, and discuss with her
              guests what it takes to develop scalable, maintainable and
              reliable software people love.
            </p>
          </div>
        </div>
        <section class="about-show">
          <h2>About Our Show</h2>
          <hr class="rounded-short"></hr>
          <p>
            This show was born out of Michaela’s curiosity for how different
            companies develop software. How does their tech stack look like?
            Which practices do they follow? Do they do code reviews? Are the
            concerned about technical debt? And what about their culture and
            company values? With this podcast Michaela wants to open doors at
            different companies, and get the perspective of experts in the
            fields about how to develop maintainable, reliable and scaleable
            software people love. Michaela’s guests come from completely
            different backgrounds. Some come from large cooperation such as
            Microsoft, Google or Facebook. Some are founders of their own tech
            startup. And some come from more traditional or smaller businesses.
            What they all have in common is a passion for high-quality software.
            But how do they achieve their goal? As we all know, there isn’t only
            one way of developing quality-software. So, what best practices do
            they value, which management style do they prefer, and do they
            follow a certain software methodology. What problems do they
            struggle with? And which ones did they overcome already? Let’s find
            out together in the Software Engineering Unlocked Podcast!
          </p>
        </section>
        <section class="newsletter">
          <div>
            <h2>Join Our Newsletter</h2>
            <hr class="rounded-short"></hr>
            <p>
              Want to connect on a deeper level? Make sure to hop on the mailing
              list and get behind the scenes information the show, the guests
              and the host.
            </p>
          </div>
        </section>
      </Container>
    </Layout>
  );
}
