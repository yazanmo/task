import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import "./AddDetails.css";

const AddDetails = () => {
  const history = useHistory();
  const [price, setPrice] = useState("");
  const [dec, setDec] = useState("");

  const token = localStorage.getItem("token");
  const addDetails = () => {
    axios
      .post(
        `http://localhost:5000/seller`,

        { description: dec, price },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((result) => {
        history.push("/schedule");
      })
      .catch((err) => {});
  };

  return (
    <div className="">
      <div className="add-form">
        <div className="inputs">
          <input
            onChange={(e) => {
              setPrice(e.target.value);
            }}
            type="price"
            placeholder="price"
          />
          <br></br>
          <input
            onChange={(e) => {
              setDec(e.target.value);
            }}
            type="decription"
            placeholder="decription"
          />

          <button className="btn-form" onClick={addDetails}>
            save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddDetails;
