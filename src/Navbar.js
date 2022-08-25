import React from "react";
import Logo from "./assets/img/logo/logo.png";

export default function Navbar() {
  return (
    <div className="container mt-4 text-dark shadow-lg px-5 p-3 mx-auto mb-5 rounded">
      <div className="row">
        <div className="col-md-6">
          <img src={Logo} alt="MsQuare Logo" />
        </div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-2 text-center">
              <a href="/Home" className="text-dark text-decoration-none">Home</a>
            </div>
            <div className="col-md-3 text-center">
              <a href="/About" className="text-dark text-decoration-none">About Us</a>
            </div>
            <div className="col-md-2 text-center">
              <a href="/Service" className="text-dark text-decoration-none">Services</a>
            </div>
            <div className="col-md-3 align-center text-center">
              <a href="/Contact" className="text-dark text-decoration-none">Contact Us</a>
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
  );
}
