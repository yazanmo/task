import React, { useEffect, useState } from "react";
import { Card, Button } from "react-bootstrap";
import axios from "axios";


const Schedule = () => {
  const [result, setResult] = useState([]);
  const [status, setStatus] = useState("");

  const token = localStorage.getItem("token");

  useEffect(() => {
    axios
      .get(
        `http://localhost:5000/appoinments`,

        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((result) => {
        setResult(result.data);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }, []);

  const changeStatus = (id) => {
    axios
      .put(
        `http://localhost:5000/appoinments/${id}`,

        { status: status }
      )
      .then((result) => {
        setStatus(result.data)
        console.log(result.data, "ddddd");
      })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  return (
    <div className="seller">
      
      {result &&
        result.map((elem, i) => {
          return (
            <>
                <div class="card" >
  <div class="card-body">
    <p class="card-text">{elem.date}</p>
    <button  onClick={() => {
                  setStatus("accpted");
                  console.log(elem._id,"ssds")
                  changeStatus(elem._id);
                }} type="button" class="btn btn-danger">Rejected</button>

    <button  onClick={() => {
                  setStatus("rejcted");
                  changeStatus(elem._id);
                }} type="button" class="btn btn-success">Accepted</button>
  </div>
</div>
            </>
          );
        })}
     
    </div>
  );
};

export default Schedule;
