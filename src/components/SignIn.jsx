import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function SignIn() {
  //State & Données

  //Comportements

  return (
    <div class="container-md mt-5">
      <div class="text-center mt-5">
        <Navbar />
      </div>
      <h2>Inscrivez-vous ! </h2>
      <div class="row mt-5 justify-content-center">
        <h2 class="row justify-content-center ">Connectez-vous!</h2>
        <div class="col-lg-4 mt-5">
          <label for="email" class="form-label mt-3">
            Veuillez entrez votre email
          </label>
          <input type="text" class="form-control" placeholder="" />

          <label for="mot de passe" class="form-label mt-2">
            Votre mot de passe
          </label>
          <input type="mot de passe" class="form-control" place-holder="" />

          <div class="text-end mt-3">
            <button class="btn btn-outline-primary border-light shadow-lg rounded">
              Se connecter
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

export default SignIn;
