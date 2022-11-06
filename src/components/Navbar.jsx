import React, { Fragment, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "../style/navbar.css";

const Navbar = () => {
  /**
   *  ? Garder cette usage du useState pour le burger
   */
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  //* Fake data for testing Links
  const name = "John Doe";

  return (
    <BrowserRouter>
      <main>
        <nav className="navigation">
          <Link to={`/home/${name}`} className="brand-name">
            Mon Libraire SF
          </Link>
          //* !history ne fonctionne pas
          {<button onClick={() => history.push("/home")}>Go to home</button>}
          *//
          <div
            className={
              isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
            }
          >
            <ul>
              <li>
                <Link to={`/about/${name}`}>A propos de nous</Link>
              </li>
              <li>
                <Link to="/signIn">Inscription</Link>
              </li>
              <li>
                <Link to="/signUp">Se connecter</Link>
              </li>
            </ul>
          </div>
        </nav>
        <Routes>
          <Route path="/home" exact component={Home} />
          <Route path="/about:name" element={About} />
          <Route path="/SignIn" element={SignIn} />
          <Route path="/SignUp" element={SignUp} />
          <Route path="/Basket" element={Basket} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

const Home = ({
  match: {
    params: { name },
  },
}) => (
  // props.match.params.name
  <Fragment>
    <h1>Mon Libraire SF{name}</h1>
  </Fragment>
);

const About = () => (
  <Fragment>
    <h1>About </h1>
  </Fragment>
);
const SignIn = () => (
  <Fragment>
    <h1>Se connecter</h1>
  </Fragment>
);
const SignUp = () => (
  <Fragment>
    <h1>Inscription</h1>
  </Fragment>
);
const Basket = () => (
  <Fragment>
    <h1>Panier</h1>
    <FakeText />
  </Fragment>
);
const FakeText = () => (
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
    consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
    non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
  </p>
);
export default Navbar;
