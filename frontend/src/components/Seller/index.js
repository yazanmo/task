import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import { Card, Button } from "react-bootstrap";

import "./Seller.css";

/* Seller */

const Seller = () => {
  const [allseller, setAllseller] = useState();
  const [seller, setSeller] = useState();

  const history = useHistory();

  useEffect(() => {
    axios
      .get(`http://localhost:5000/seller`)
      .then((response) => {
        setAllseller(response.data);
        console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
        console.log("Error");
      });
  }, []);

  const searchSeller = (str) => {
    axios
      .get(`http://localhost:5000/seller/search?fullName=${str}`)
      .then((response) => {
        if (response.data[0]._id) {
          console.log(response.data);
        }
      })
      .catch((err) => {
        console.log(err);
        console.log("Error");
      });
  };

  const pushTo = (id) => {
    history.push(`/sellerdetails/${id}`);
  };
  return (
    <>
      <link
        rel="stylesheet"
        href="http://maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css"
      ></link>
      <div className="wrap">
        <div class="search">
          <input
            type="text"
            placeholder="fullName"
            className="searchTerm"
            onChange={(e) => {
              setSeller(e.target.value);
            }}
          />
          <button
            className="searchButton"
            onClick={() => {
              searchSeller(seller);
            }}
          >
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>

      <div className="parantrestaurant">
        {allseller &&
          allseller.map((elem, i) => {
            return (
              <div className="childrestaurant" key={i}>
                <p>{elem.fullName}</p>
              </div>
            );
          })}
      </div>
      <div className="seller">
        {allseller &&
          allseller.map((elem, i) => {
            return (
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={elem.img} />
                <Card.Body>
                  <Card.Title>{elem.fullName}</Card.Title>
                  <Card.Text>{elem.email}</Card.Text>
                  <Button
                    variant="primary"
                    onClick={() => {
                      pushTo(elem._id);
                    }}
                  >
                    booking
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
      </div>
    </>
  );
};
export default Seller;
