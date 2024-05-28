import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Toprated from "./Toprated";

const Headers = () => {
  const [query, setQuery] = useState("");
  const isActiveclass = "nav-link rounded bg-success text-white";
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/movie/search?q=${query}`);
  };

  return (
    <div className="colorforheader bg-black  bg-opacity-75 ">
      <nav className="navbar navbar-expand-lg  ">
        <div className="container">
          <NavLink to="/" className="navbar-brand">
            <h3 className="cursive text-white ">Cinemate</h3>
          </NavLink>
          <button
            className="navbar-toggler bg-white "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item" style={{ marginLeft: "1rem" }}>
                <NavLink
                  className="nav-link text-white "
                  activeClassName={isActiveclass}
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item" style={{ marginLeft: "1rem" }}>
                <NavLink
                  className="nav-link text-white "
                  activeClassName={isActiveclass}
                  to="/popular"
                >
                  Popular
                </NavLink>
              </li>
              <li className="nav-item" style={{ marginLeft: "1rem" }}>
                <NavLink
                  className="nav-link text-white  "
                  activeClassName={isActiveclass}
                  to="/movie/Toprated"
                >
                  Top Rated
                </NavLink>
              </li>
              <li className="nav-item" style={{ marginLeft: "1rem" }}>
                <NavLink
                  className="nav-link text-white"
                  activeClassName={isActiveclass}
                  to="/movie/Upcoming"
                >
                  Upcoming
                </NavLink>
              </li>
            </ul>
            <form className="d-flex" onSubmit={handleSearch}>
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(e) => setQuery(e.target.value)}
              />
              <button className="btn btn-outline-success v" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
      <div className="border-bottom "></div>
    </div>
  );
};

export default Headers;
