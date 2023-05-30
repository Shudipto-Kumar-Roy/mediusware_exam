import React, { useState } from "react";
import Modal1 from "./Modal1";
import Modal2 from "./Modal2";
import { Outlet, useNavigate } from "react-router-dom";

const Problem2 = () => {
  const navigate = useNavigate("");
  return (
    <div className="container">
      <Outlet />
      <div className="row justify-content-center mt-5">
        <h4 className="text-center text-uppercase mb-5">Problem-2</h4>

        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={() => {
              navigate("/problem-2/modal-1");
            }}
            className="btn btn-lg btn-outline-primary"
            type="button"
          >
            All Contacts
          </button>
          <button
            onClick={() => {
              navigate("/problem-2/modal-2");
            }}
            className="btn btn-lg btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Problem2;
