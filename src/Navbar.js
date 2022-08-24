import React from "react";

export default function Navbar() {
  return (
    <div className="container mt-3 text-white rounded bg-black">
      <div className="row p-3">
        <div className="col-md-4 bg-primary">
            Logo Section
        </div>
        <div className="col-md-8 bg-secondary">
            Menu Section
        </div>
      </div>
    </div>
  );
}
