import React from "react";
import * as styles from "../styles/header.module.css";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <section className={styles.header}>
      <Navbar />{" "}
    </section>
  );
}
