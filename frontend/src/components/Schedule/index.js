import React, { useEffect, useState } from "react";
import axios from "axios";
export default function Schedule() {
  const [data, setData] = useState([]);
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
        console.log(result.data, "ddddd");
        console.log(token, "ddddd");
        // history.push("/schedule");
        setData(result.data);
      })
      .catch((err) => {
        console.log(err, "err");
      });
  }, []);

  return (
    <div className="schedule">
      {data &&
        data.map((element, index) => {
          <div class="card" style="width: 18rem;">
            <img src="..." class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>;
        })}
    </div>
  );
}
