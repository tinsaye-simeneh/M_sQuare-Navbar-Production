import React from "react";

export default function Navbar() {
  return (
    <div className="container mt-4 text-dark shadow-lg px-5 p-3 mx-auto mb-5 rounded">
      <div className="row">
        <div className="col-md-6">Logo Section</div>
        <div className="col-md-6">
          <div className="row">
            <div className="col-md-2 text-center">Home</div>
            <div className="col-md-3 text-center">About Us</div>
            <div className="col-md-2 text-center">Services</div>
            <div className="col-md-3 align-center text-center">Contact Us</div>
            <button href="#account" className="border-0 text-white rounded col-md-2" style={{backgroundColor:'#E62B00'}}>
              Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
