import React from "react";
import "./spinner.scss";

const Spinner = ({ style }) => {
  return (
    <>
      <div className="loader" style={style}></div>
      <div className="spinner-bgc" style={style}></div>
    </>
  );
};

export default Spinner;
