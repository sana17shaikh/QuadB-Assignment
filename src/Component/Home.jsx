import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
const Home = ({ item, index }) => {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="card " style={{ width: "320px" }} key={index}>
            <img
              src={item?.show?.image?.medium}
              className="card-img-top"
              alt="No Image"
            />
            <div className="card-body">
              <h5 className="card-title">{item?.show?.name}</h5>
              <Link to={`movie/${item?.show?.id}`}>
                <a href="/" className="btn btn-primary">
                  Go somewhere
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
