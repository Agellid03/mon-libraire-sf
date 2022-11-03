import React from "react";
import "../style/home.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
function Home() {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>
      <p>
        Nous avons différentes façons d'esquiver la réalité. Si on nous
        obligeait à l'affronter à chaque instant de la journée, nous
        deviendrions tous fous. Frank Herbert La Mort blanche .
      </p>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
