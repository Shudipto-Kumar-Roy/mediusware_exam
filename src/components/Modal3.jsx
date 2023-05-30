import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Modal3 = ({ setShow, data }) => {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
        zIndex: 150,
      }}
    >
      <div
        style={{
          width: "600px",
          height: "400px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundColor: "#ffffff",
          position: "relative",
        }}
        className="d-flex justify-content-center flex-direction-column align-items-center"
      >
        <h3>Modal 3</h3>
        <div className="d-flex justify-content-between align-items-center gap-3 mt-4">
          <h5>Country :</h5>
          <h6>{data?.country?.name}</h6>
        </div>
        <div className="d-flex justify-content-between align-items-center gap-3 my-4">
          <h5>Phone :</h5>
          <h6>{data?.phone}</h6>
        </div>

        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={() => {
              setShow(false);
            }}
            className="btn btn-sm btn-outline-danger"
            type="button"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal3;
