import React from "react";

function Section() {
  return (
    <div className="container m-6">
      <div className="container px-4 py-4" id="hanging-icons">
        <h2 className="pb-2 border-bottom text text-center">
          Equipos de gama alta
        </h2>
        <div className="container ">
          <button className="col btn btn-apple-green text-white align-item-center">
            Más Productos de Apple
          </button>
        </div>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start">
            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"></div>
            <div className="card card-body bg-apple-green">
              <br />
              <br />
              <br />
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"></div>
            <div className="card card-body bg-apple-green">
              <br />
              <br />
              <br />
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <div className="icon-square text-bg-light d-inline-flex align-items-center justify-content-center fs-4 flex-shrink-0 me-3"></div>
            <div className="card card-body bg-apple-green">
              <br />
              <br />
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section;
