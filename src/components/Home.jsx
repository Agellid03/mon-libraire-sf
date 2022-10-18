import React from "react";
import "../style/home.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
function Home(props) {
  return (
    <div>
      <body>
        <header className="homePicture">
          <Navbar />
        </header>
      </body>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Home;
