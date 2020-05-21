import React from "react";

const Loader = () => {
  return (
      <div className=" w-100 d-flex justify-content-center">
    <div className="lds-grid">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
      </div>
  );
};

export default Loader;
