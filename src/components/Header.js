import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import React from "react";
import * as styles from "../styles/header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className="container nav_container">
        <Link to="/" className={styles.logo}>
          <StaticImage src="../images/logo.png" alt="logo" />
        </Link>
        <input className={styles.menuToggle} type="checkbox" id="menu-btn" />
        <label htmlFor="menu-btn" className={styles.menuIcon} id="menu">
          <span className={styles.navicon}></span>
        </label>
        <div className={styles.menu}>
          <nav className={styles.nav}>
            <ul>
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
          </nav>
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
      </div>
    </header>
  );
}
