import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function SignUp() {
  return (
    <div class="container-md ">
      <div class="text-center">
        <Navbar />
      </div>
      <h2>Inscrivez-vous ! </h2>
      <div class="row  justify-content-center">
        <div class="col-lg-4 mt-5">
          <h2 class="row justify-content-center">Inscrivez-vous!</h2>
          <label for="Nom" class="form-label" type="text">
            Votre prénom
          </label>
          <input
            type="text"
            class="form-control form-control "
            placeholder="EX: Sofiane,Dorian.."
          />

          <label for="Nom" class="form-label" type="text">
            Votre Nom
          </label>
          <input type="text" class="form-control" placeholder="...." />

          <label for="email" class="form-label mt-3">
            Veuillez entrez votre email
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="EX: exemple@exemple.com"
          />

          <label for="email" class="form-label mt-3">
            Veuillez confirmer votre email
          </label>
          <input
            type="text"
            class="form-control"
            placeholder="EX: exemple@exemple.com"
          />

          <label for="mot de passe" class="form-label mt-2">
            Votre mot de passe
          </label>
          <input type="mdp" class="form-control" place-holder="****" />

          <label for="mot de passe" class="form-label mt-2">
            Veuillez confirmer votre mot de passe
          </label>
          <input
            type="mot de passe"
            class="form-control"
            place-holder="*****"
          />

          <div class="text-end mt-2">
            <button class="btn btn-outline-primary border-light shadow-lg rounded">
              S'inscrire !
            </button>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default SignUp;
