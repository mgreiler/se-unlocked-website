import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import rss from "../images/RSS-Feed-blue-sm.png";
import pod from "../images/google-podcast-blue-sm.png";
import deezer from "../images/deezer-blue-sm.png";
import itunes from "../images/itunes-blue-sm.png";
import twitter from "../images/twitter-logo-sm-blue.png";

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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/sponsorship">Be A Sponsor</Link>
          </li>
          <li>
            <Link to="/guestguide">Be A Guest</Link>
          </li>
        </ul>
      </div>
      {/* <div className="container nav_container">
        <div className="row seven-cols">
          <div className="col-xl-3 col-lg-3">
            <button type="button" class="btn btn-primary">iTunes</button>
          </div>
          <div className="col-xl-3 col-lg-3">
            <button type="button" class="btn btn-secondary">Spotify</button>
          </div>
          <div className="col-xl-3 col-lg-3">
            <button type="button" class="btn btn-success">Overcast</button>
          </div>
          <div className="col-xl-3 col-lg-3">
            <button type="button" class="btn btn-danger">Google Podcast</button>
          </div>
          <div className="col-xl-3 col-lg-3">
            <button type="button" class="btn btn-warning">Sticher</button>
          </div>
          <div className="col-xl-3 col-lg-3">
            <button type="button" class="btn btn-info">PocketCasts</button>
          </div>
          <div className="col-xl-3 col-lg-3">
            <button type="button" class="btn btn-light">RSS</button>
          </div>
        </div>
      </div> */}
    </header>
  );
}
