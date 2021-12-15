import { Link } from "gatsby";
import React from "react";
import { FaTwitterSquare, FaFacebookSquare } from "react-icons/fa";

export default function Footer() {
  return (
    <section>
      <footer>
        <div className="footer_section">
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
              <Link to="/about">About</Link>
              <br />
              <Link to="/sponsorship">Sponsor Us</Link>
              <br />
            </div>
          </div>
        </div>
      </footer>
      <div className="copy-rights flex justify-content-between">
        <p></p>
        <p className="text-center">
          Copyright 2021{" "}
          <a href="https://www.michaelagreiler.com/" target="_blank">
            Doctor McKayla
          </a>
        </p>
        <p>
          <a href="https://www.facebook.com/seunlocked/" target="_blank">
            {" "}
            <FaFacebookSquare className="pointer" size={30} />{" "}
          </a>
          <a href="https://twitter.com/mgreiler" target="_blank">
            {" "}
            <FaTwitterSquare className="pointer" size={30} />
          </a>
        </p>
      </div>
    </section>
  );
}
