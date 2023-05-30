import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Modal2 = () => {
  const [query, setQuery] = useSearchParams();
  const search = query.get("search");
  const navigate = useNavigate("");
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getAllContacts = async () => {
      const res = await fetch(`/api/contacts/?country=${search}`, {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const data = await res.json();
      setContacts([...data?.results]);
    };
    getAllContacts();
  }, []);
  console.log(contacts);
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
        zIndex: 100,
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
      >
        <h3>Modal 2</h3>
        <div className="d-flex justify-content-center gap-3">
          <button
            onClick={() => {
              navigate("/problem-2/modal-1");
            }}
            className="btn btn-sm btn-outline-primary"
            type="button"
          >
            All Contacts
          </button>
          <button
            onClick={() => {
              navigate("/problem-2/modal-2");
            }}
            className="btn btn-sm btn-outline-warning"
            type="button"
          >
            US Contacts
          </button>
          <button
            onClick={() => {
              navigate("/problem-2");
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

export default Modal2;
