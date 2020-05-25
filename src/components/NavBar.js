import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

function Navbar() {
  return (
    <header className="navBar">
      <Link to="/">
        <h1 className="linkColor">Mockup RPG Website</h1>
      </Link>
      <ul className="navLinks">
        <Link to="/about">
          <li className="linkColor">About</li>
        </Link>
      </ul>
    </header>
  );
}

export default Navbar;
