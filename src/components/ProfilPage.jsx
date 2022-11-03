import React from "react";
import image from "../images/myProfil.jpg";
import "../style/pageProfil.css";
import Footer from "./Footer";
import Navbar from "./Navbar";
function ProfilPage(props) {
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <div class="padding">
        <div class="col-md-5">
          {/* Column  */}
          <div class="card">
            <div class="card-body little-profile text-center">
              <div class="pro-img">
                <img src={image} alt="user" />
              </div>
              <h3 class="m-b-0">Awa N'goye</h3>
              <p>Passionée par la SF</p>
              <a
                href="#z"
                class="m-t-10  btn btn-primary btn-md btn-rounded"
                data-abc="true"
              >
                Modifier
              </a>
              <div class="row text-center m-t-20">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa distinctio harum numquam officia, aspernatur nemo,
                    consequatur corporis deleniti quae expedita repellendus
                    quisquam nihil aperiam delectus impedit nobis dolore illum
                    soluta?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default ProfilPage;
