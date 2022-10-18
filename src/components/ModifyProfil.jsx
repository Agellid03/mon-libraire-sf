import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

function ModifyProfil() {
  return (
    <div>
      <div id="contacts" class="bg-light">
        <div class="container-md">
          <div class="text-center">
            <Navbar />
            <h2>Modifier votre profil</h2>
          </div>

          <div class="row  justify-content-center">
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

              <label for="commentaire" class="form-label" type="text">
                A propos de moi
                <textarea
                  name="comments"
                  id="comments"
                  cols="45"
                  rows="05"
                ></textarea>
              </label>

              <div class="text">
                <button class="btn btn-outline-dark border-light shadow-lg rounded">
                  Modifier
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ModifyProfil;
