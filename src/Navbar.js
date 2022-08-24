import React from "react";

export default function Navbar() {
  return (
    <div className="container mt-3 text-white rounded bg-black">
      <div className="row p-3">
        <div className="col-md-6 bg-primary">Logo Section</div>
        <div className="col-md-6 bg-secondary">
          <div className="row">
            <div className="col-md-2 bg-dark text-center">Home</div>
            <div className="col-md-2 bg-dark text-center">Home</div>
            <div className="col-md-2 bg-dark text-center">Home</div>
            <div className="col-md-2 bg-dark text-center">Home</div>
            <a className="btn btn-primary col-md-3">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
}
