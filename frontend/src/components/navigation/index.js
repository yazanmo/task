import React from "react";
import { Link } from "react-router-dom";
import jwt from "jsonwebtoken";
import Logo from "./../../components/logo.png";
import "./navigation.css";

require("dotenv").config();
const Navigation = ({ setHomePageSection }) => {
  let token = localStorage.getItem("token");
  let role = localStorage.getItem("role");

  return (
    <div className="navBar">
      <div className="logo">
        <img className="logo-img" src={Logo} />
        <p>Mediator</p>
      </div>
      <div className="nav">
        <ul>
          {token ? (
            <>
              {role === "seller" ? (
                <>
                  <li>
                    {" "}
                    <Link to="/schedule" className="links">
                      Schedule
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link to="/adddetails" className="links">
                      Add Details
                    </Link>{" "}
                  </li>

                  <li>
                    {" "}
                    <Link
                      to="/"
                      className="links"
                      onClick={() => {
                        localStorage.clear();
                      }}
                    >
                      Log out
                    </Link>{" "}
                  </li>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <>
              <li>
                {" "}
                <Link to="/login" className="links">
                  Log in
                </Link>{" "}
              </li>
            </>
          )}
          {token ? (
            <>
              {role === "buyer" ? (
                <>
                  <li>
                    <Link to="/seller" className="links">
                      all seller
                    </Link>{" "}
                  </li>
                  <li>
                    {" "}
                    <Link
                      to="/"
                      className="links"
                      onClick={() => {
                        localStorage.clear();
                      }}
                    >
                      Log out
                    </Link>{" "}
                  </li>
                </>
              ) : (
                <></>
              )}
            </>
          ) : (
            <></>
          )}
        </ul>
      </div>
    </div>
  );
};
export default Navigation;
