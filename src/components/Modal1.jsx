import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Modal3 from "./Modal3";

const Modal1 = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [check, setCheck] = useState(false);
  const [view, setView] = useState({});
  const [show, setShow] = useState(false);
  const [contacts, setContacts] = useState([]);
  useEffect(() => {
    const getAllContacts = async () => {
      const res = await fetch("/api/contacts", {
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
      });
      const data = await res.json();
      if (check) {
        setContacts([...data?.results?.filter((item) => item?.id % 2 === 0)]);
      } else {
        setContacts([...data?.results]);
      }
    };
    getAllContacts();
  }, [check]);

  useEffect(() => {
    if (search) {
      setTimeout(() => {
        navigate(`/problem-2/modal-2?search=${search}`);
      }, 5000);
    }
  }, [search]);
  return (
    <>
      {show && <Modal3 setShow={setShow} data={view} />}
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
          <input
            type="text"
            placeholder="Search.."
            onChange={(e) => setSearch(e.target.value)}
            style={{ position: "absolute", right: "1%", top: "1%" }}
          />
          <h3>Modal 1</h3>
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
            <label
              style={{ position: "absolute", left: "4%", bottom: "4%" }}
              className="d-flex align-items-center gap-3"
            >
              Only Even
              <input
                checked={check}
                onChange={(e) => setCheck(e.target.checked)}
                className="form-check-input mt-0"
                type="checkbox"
                value=""
                aria-label="Checkbox for following text input"
              />
            </label>
          </div>
          <div style={{ height: "70%", overflow: "auto", padding: "10px 0" }}>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Country</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Action</th>
                </tr>
              </thead>
              <tbody className="table-group-divider">
                {contacts?.map((item, index) => (
                  <tr>
                    <th scope="row">{item?.id}</th>
                    <td>{item?.country?.name}</td>
                    <td>{item?.phone}</td>
                    <td>
                      <span
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          setView(item);
                          setShow(true);
                        }}
                      >
                        Show
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal1;
