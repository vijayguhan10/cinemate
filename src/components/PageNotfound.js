import React from "react";
import { Link } from "react-router-dom";
import virtus from "../assets/404.png";
import "./Header.css";

const NotFound = () => {
  return (
    <div className="container-fluid d-flex justify-content-center align-items-center vh-100 custom-container">
      <div className="card    mb-5 p-4 custom-card">
        <h1 className="card-title text-center custom-text-center">
          404! Oops Page not found
        </h1>
        <div className="card-body d-flex justify-content-center">
          <img className="h-100 custom-img" src={virtus} alt="Page Not Found" />
        </div>
        <div className="card-footer text-center mt-3">
          <Link to="/" className="btn btn-success btn-hover w-75">
            Go to Home Page
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
