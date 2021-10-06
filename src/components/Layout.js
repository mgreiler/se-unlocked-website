import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";
import * as styles from "../styles/home.module.css";


export default function Layout({ children }) {
  return (
    <section className={styles.header}>
      <main>
        <title>Home Page</title>
        <div className="layout">
          <Navbar />
          <div className="content">{children}</div>
          <footer>
            <p>Copyright 2021 Michaela Greiler</p>
          </footer>
        </div>
      </main>
    </section>
  );
}
