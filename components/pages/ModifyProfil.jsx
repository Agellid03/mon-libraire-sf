import React from "react";
import "../style/modifyProfil.css";

function ModifyProfil() {
  return (
    <div class="container-md mt-5 col-lg-4">
      <h1 id="modif">Modifier mon profil</h1>
      <form class="row  justify-content-center">
        <div class="form-group">
          <label for="nom">Entrez votre nom</label>
          <input type="text" class="form-control" id="nom" placeholder="..." />
        </div>

        <div class="form-group">
          <label for="email">Entrez votre prénom</label>
          <input
            type="text"
            class="form-control"
            id="prenom"
            placeholder="..."
          />
        </div>

        <div class="form-group">
          <label for="image">Changer photo de profil</label>
          <div>
            <input type="file" id="file" name="file" accept="image/*" />
          </div>
        </div>
        <div class="form-group">
          <label for="bio">A propos</label>
          <textarea class="form-control" id="bio" rows="3"></textarea>
        </div>
        <div class="text-center mt-3 ">
          <button class="btn btn-outline-primary border-light shadow-lg rounded">
            Modifier
          </button>
        </div>
      </form>
    </div>
  );
}

export default ModifyProfil;
