import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./sellerDetails.css";
const SellerDetails = () => {
  const [sellerData, setSellerData] = useState("");
  const [sellerDet, setsellerDet] = useState([]);
  const [sellerId, setSellerId] = useState("");
  const [date, setdate] = useState("");
  const { id } = useParams();
  const token = localStorage.getItem("token");
  useEffect(() => {
    axios
      .get(`http://localhost:5000/seller/${id}`)
      .then((result) => {
        console.log(result.data.sellerId[0].email);
        setsellerDet(result.data.sellerId[0]);
        setSellerId(result.data.sellerId[0]._id);
        setSellerData(result.data);
      })
      .catch((err) => {});
  }, []);

  const booking = () => {
    axios
      .post(
        `http://localhost:5000/appoinment/schedule`,

        { date: date, status:"pendding", sellerId: sellerId },
        {
          headers: {
            authorization: "Bearer " + token,
          },
        }
      )
      .then((result) => {
          console.log(result,"ddddd")
        // history.push("/schedule");
      })
      .catch((err) => {
        console.log(err,"err")

      });
  };

  return (
    <div className="sellerrr">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">{sellerDet.fullName}</h5>
          <h5 className="card-title">{sellerDet.email}</h5>
          <p className="card-text">{sellerData.price}</p>
          <p className="card-text">{sellerData.description}</p>
          <a
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            href="#"
            className="btn btn-primary"
          >
            Go somewhere
          </a>
        </div>
      </div>
      <div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <input
                  type="date"
                  onChange={(e) => {
                    setdate(e.target.value);
                  }}
                />
              </div>
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button onClick={booking} type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerDetails;
