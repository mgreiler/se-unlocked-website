import React from "react";
import "../styles/global.css";
import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
  return (
    <main>
      <Header />
      <div>{children}</div>
      <Footer />
    </main>
  );
}
