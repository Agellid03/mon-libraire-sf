import React from "react";
import "../style/navbar.css";

function Navbar() {
  //State et Datas

  //Comportements

  //Render
  return (
    <div id="nav">
      <ul className="navbar">
        <li>
          <a id="logo" href="#z">
            Mon libraire SF
          </a>
        </li>
        <li>
          <a className="navbar-brand" href="z#">
            A propos de nous
          </a>
        </li>
        <li>
          <a className="navbar-brand" href="../SignUp.jsx">
            Inscritpion
          </a>
        </li>
        <li>
          <a className="navbar-brand" href="z#">
            Se connecter
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Navbar;
