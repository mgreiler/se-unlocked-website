import React from "react";
import Navbar from "./Navbar";
import "../styles/global.css";
import * as styles from "../styles/home.module.css";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <main>
      <section className={styles.header}>
        <title>SE Unlocked</title>
        <Navbar />{" "}
      </section>
      <div className={styles.body}>{children}</div>
      <Footer />
    </main>
  );
}
