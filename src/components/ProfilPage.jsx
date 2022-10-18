import React from "react";

function ProfilPage(props) {
  return (
    <div>
      {/* background-image */}
      <h2>Mon profil</h2>
      <h3>Oussman N'diaye</h3> {/*Nom de la personne connecter */}
      <section>
        <p>A propos de moi</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ab
          dolores sit earum aspernatur vitae totam ratione minima ducimus
          accusamus sed voluptatibus incidunt quidem doloremque, quod nemo
          magnam. Voluptatibus, eos.
        </p>
        <button class="btn btn-outline-dark border-light shadow-lg rounded">
          Modifier
        </button>
      </section>
    </div>
  );
}

export default ProfilPage;
