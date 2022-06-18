import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import * as styles from "../styles/header.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <section className={styles.header}>
      <header className={styles.headers}>
        <div className="container nav_container">
          <Link to="/">
            <StaticImage src="../images/logo.png" alt="logo" />
          </Link>
          <input
            className={styles.menuBtn}
            type="checkbox"
            id="menu-btn"
            //onClick={onClick}
          />
          <label htmlFor="menu-btn" className={styles.menuIcon} id="menu">
            <input style={{ display: "none" }} />
            <span className={styles.navicon}></span>
          </label>
          <ul className={styles.menu}>
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
    </section>
  );
}
