import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "../style/navbar.css";
const NavBar = () => {
  //* useSate for responsives
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  return (
    <nav role="navigation" className="navigation">
      <NavLink className="brand-name" to="">
        Mon Libraire SF
      </NavLink>
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
            <NavLink className="navbar-item" to="/SignIn">
              Inscription
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-item" to="/SignUp">
              Se connecter
            </NavLink>
          </li>
          <li>
            <NavLink className="navbar-item" to="/Basket">
              Panier
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
