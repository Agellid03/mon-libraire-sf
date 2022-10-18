import React, { useRef } from "react";
import Footer from "../components/Footer";
import Navbar from "./Navbar";

function SignIn() {
  //State & Données
  const inputRef = useRef();

  //Comportements
  const handleSubmit = (event) => {
    event.preventDefault();
    // alert("handleSubmit");
    console.log(inputRef.current.value);
  };

  return (
    <div>
      <Navbar />
      <div>
        <form action="submit" onSubmit={handleSubmit}>
          <input ref={inputRef} type="text" placeholder="Connectez-vous!" />
          <button>Connectez-vous ! </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default SignIn;
