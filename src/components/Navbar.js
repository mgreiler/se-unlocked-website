import { Link } from "gatsby";
import React from "react";

export default function Navbar() {
  return (
    <nav>
      <h1>
        Software Engineering
        <br />
        <span className="unlocked">Unlocked</span>
      </h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/sponsorship">Sponsor Us</Link>
      </div>
    </nav>
  );
}
