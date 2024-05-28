import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Headers = () => {
  const [query, setQuery] = useState("");
  const isActiveclass = "nav-link rounded bg-success text-white";
  const navigate = useNavigate();

  const handleSearch = (event) => {
    event.preventDefault();
    navigate(`/movie/search?q=${query}`);
  };

  return (
    <div className="colorforheader bg-black bg-opacity-75">
      <Navbar expand="lg" variant="dark">
        <div className="container">
          <Navbar.Brand>
            <NavLink to="/">
              <h3 className="cursive text-white">Cinemate</h3>
            </NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarSupportedContent" />
          <Navbar.Collapse id="navbarSupportedContent">
            <Nav className="me-auto mb-2 mb-lg-0">
              <Nav.Item>
                <NavLink
                  className="nav-link text-white"
                  activeClassName={isActiveclass}
                  exact
                  to="/"
                >
                  Home
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  className="nav-link text-white"
                  activeClassName={isActiveclass}
                  to="/popular"
                >
                  Popular
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  className="nav-link text-white"
                  activeClassName={isActiveclass}
                  to="/movie/Toprated"
                >
                  Top Rated
                </NavLink>
              </Nav.Item>
              <Nav.Item>
                <NavLink
                  className="nav-link text-white"
                  activeClassName={isActiveclass}
                  to="/movie/Upcoming"
                >
                  Upcoming
                </NavLink>
              </Nav.Item>
            </Nav>
            <Nav className="d-flex">
              <FormControl
                type="search"
                placeholder="Search"
                className="mr-2"
                aria-label="Search"
                onChange={(e) => setQuery(e.target.value)}
              />
              <Button variant="outline-success" onClick={handleSearch}>
                Search
              </Button>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
      <div className="border-bottom"></div>
    </div>
  );
};

export default Headers;
