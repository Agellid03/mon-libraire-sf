import React from "react";
import "../style/navbar.css";

function Navbar() {
  //State et Datas

  // Comportements
  const toggleMenuOpen = () => {
    document.body.classList.toggle("open");
  };

  //render
  return (
    <div>
      <body>
        <nav class="navbar">
          <div class="navbar-overlay" onClick={toggleMenuOpen()}></div>
          <a href="#z" class="navbar-burger" onClick={toggleMenuOpen()}>
            <span class="materials-icon">Menu</span>
          </a>
          <h1 class="navbar-title">Mon libraire SF</h1>
          <nav class="navbar-menu">
            <a href="#z">A propos de nous</a>
            <a href="#a">Se connecter</a>
            <a href="#z">Inscription</a>
          </nav>
        </nav>
      </body>
    </div>
  );
}

export default Navbar;
