import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function SignUp() {
  return (
    <div id="contacts" class="bg-light">
      <div class="container-md">
        <div class="text-center">
          <Navbar />
          <h2>Inscrivez-vous ! </h2>
        </div>

        <div class="row mt-5 justify-content-center">
          <div class="col-lg-4">
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

            <label for="mot de passe" class="form-label mt-2">
              Votre mot de passe
            </label>
            <input type="mdp" class="form-control" place-holder="" />

            <div class="text-end mt-3">
              <button class="btn btn-outline-dark border-light shadow-lg rounded">
                Se connecter
              </button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default SignUp;
