import React from "react";
import { Spinner } from "react-bootstrap";

function Loader() {
  return (
    <>
      <Spinner
        animation="border"
        role="status"
        style={{
          height: "100px",
          width: "100px",
          margin: "auto",
          display: "block",
        }}
      ></Spinner>
      <span className="visually-hidden">Loading...</span>
    </>
  );
}

export default Loader;
