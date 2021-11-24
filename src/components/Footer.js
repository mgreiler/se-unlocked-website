import { Link } from "gatsby";
import React from "react";

export default function Footer() {
  return (
    <section>
      <footer>
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
        <p>Copyright 2021 Michaela Greiler</p>
      </footer>
    </section>
  );
}
