import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import "../style/navbar.css";
const Navbar = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <BrowserRouter>
      <nav className="navigation">
        <a href="/" className="brand-name">
          Mon Libraire SF
        </a>
        <button
          className="hamburger"
          onClick={() => {
            setIsNavExpanded(!isNavExpanded);
          }}
        ></button>
        <div
          className={
            isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
          }
        >
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">A propos</a>
            </li>
            <li>
              <a href="/signIn">Inscription</a>
            </li>
            <li>
              <a href="signUp">Se connecter</a>
            </li>
          </ul>
        </div>
      </nav>
    </BrowserRouter>
  );
};

export default Navbar;
