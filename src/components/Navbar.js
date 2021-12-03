import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import logo from "../images/logo.png";
import React from "react";

export default function Navbar() {
  return (
    <header className="headers">
      <div className="container nav_container">
        <Link to="/">
          <StaticImage src="../images/logo.png" alt="logo" />
        </Link>
        <input
          className="menu-btn"
          type="checkbox"
          id="menu-btn"
          //onClick={onClick}
        />
        <label htmlFor="menu-btn" className="menu-icon" id="menu">
          <input style={{ display: "none" }} />
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link to="/about">Home</Link>
          </li>
          <li>
            <Link to="/what-we-do">About</Link>
          </li>
          <li>
            <Link to="/how-we-do-it">Sponsor Us</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
