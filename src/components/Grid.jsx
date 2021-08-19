import React from "react";

const Grid = (props) => {
  return (
    <div className="row banner">
      <div className="col-sm-12 col-lg-6 p-5">
        <img src={props.src} alt="joy" className="img-fluid" />
      </div>
      <div className="col-sm-12 col-lg-6">
        <div className="m-5 p-5">
          <h1 className="text-white">{props.mess}</h1>
          <h2 className="text-white">{props.sub}</h2>
          <a className="btn btn-unix" href={props.nav}>{props.btnName}</a>
        </div>
      </div>
    </div>
  );
};

export default Grid;
