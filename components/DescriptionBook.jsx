import React from "react";
import "../style/descriptionBook.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
function DescriptionBook(props) {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div class="img-container col-12 col-md-3">
        <span class="position-relative d-block rotate-in-2-bl-cw" />
        <picture>
          <img
            src="../images/Dune.jpg"
            alt="Le cycle de Dune. Vol. 4. L'empereur-dieu de Dune"
            title="Le cycle de Dune. Vol. 4. L'empereur-dieu de Dune"
            class="couverture"
          />
        </picture>

        <span
          class="text-brand-1 text-decoration-underline cursor-pointer"
          data-bs-toggle="modal"
          data-bs-target="#infosTechniquesModal"
        >
          Lire les informations techniques
        </span>
      </div>
      <Footer />
    </div>
  );
}

export default DescriptionBook;
