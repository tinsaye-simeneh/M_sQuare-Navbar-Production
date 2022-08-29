import React from "react";
import Logo from "./assets/img/logo/logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

export default function Navbar() {
  return (
    <nav class="navbar navbar-expand-lg">
    <div className="container mt-4 text-dark shadow-lg px-5 p-3 mx-auto mb-5 rounded">
      
    <div className="col-md-6">
      <a href="/Home" className="navbar-brand">
            <img src={Logo} alt="MsQuare Logo" />
          </a>
          </div>

  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarNav">
        
        <div className="col-md-12">
          <div className="row">
            <div className="col-md-2 text-center">
              <a href="/Home" className="text-dark text-decoration-none">
                Home
              </a>
            </div>
            <div className="col-md-3 text-center">
              <a href="/About" className="text-dark text-decoration-none">
                About Us
              </a>
            </div>
            <div className="col-md-2 text-center">
              <a href="/Service" className="text-dark text-decoration-none">
                Services
              </a>
            </div>
            <div className="col-md-3 align-center text-center">
              <a href="/Contact" className="text-dark text-decoration-none">
                Contact Us
              </a>
            </div>
            <button
              href="#account"
              className="border-0 text-white rounded col-md-2"
              style={{ backgroundColor: "#E62B00" }}
            >
              Account
            </button>
          </div>
        </div>
      </div>
      </div>
      </nav>
  );
}
