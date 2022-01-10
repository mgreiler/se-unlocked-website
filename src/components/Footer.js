import { Link } from "gatsby";
import React from "react";
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";
import { Container } from "react-bootstrap";

export default function Footer() {
  return (
    <div>
      <footer>
        <Container className="footer_section">
          <div>
            <h2>ABOUT</h2>
            <p>
              The Software Engineering Unlocked podcast gives you a sneak peek
              into how software companies around the world develop software.
              What challenges do they face? Which best practices do they follow?
              And what do they do to build reliable, maintainable and scaleable
              software people love? Hear from developers at companies of all
              sizes, whether it is a large cooperations or a small startup. Each
              guest has their unique story to tell.
            </p>
          </div>
          <div>
            <h2>Pages</h2>
            <div className="links">
              <Link to="/">Home</Link>
              <br />
              <Link to="/sponsorship">Be A Sponsor</Link>
              <br />
              <Link to="/guestguide">Be A Guest</Link>
              <br />
            </div>
          </div>
        </Container>
      </footer>
      <div className="copy-rights flex justify-content-between">
        <p></p>

        <p className="text-center">
          Copyright 2021{" "}
          <a
            href="https://www.michaelagreiler.com/"
            target="_blank"
            rel="noreferrer"
          >
            Doctor McKayla
          </a>
        </p>
        <p>
          <a
            href="https://www.facebook.com/seunlocked/"
            target="_blank"
            rel="noreferrer"
            aria-label="Facebook link"
          >
            {" "}
            <FaFacebookSquare className="pointer" size={30} />{" "}
          </a>
          <a
            href="https://twitter.com/mgreiler"
            target="_blank"
            rel="noreferrer"
            aria-label="Twitter link"
          >
            {" "}
            <FaTwitterSquare className="pointer" size={30} />
          </a>
        </p>
      </div>
    </div>
  );
}
