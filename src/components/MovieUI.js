// MovieUI.js
import React, { useState } from "react";
import "./Header.css";
import FetchRequests from "./FetchRequests";
import { NavLink } from "react-router-dom";

const MovieUI = ({ url }) => {
  const [movies, setMovies] = useState([]);

  return (
    <div className=" w-100  h-100 row row-cols-1 row-cols-sm-2 row-cols-sm-fs-1 row-cols-md-3 row-cols-lg-3 g-2 m-5">
      <FetchRequests url={url} setMovies={setMovies} />
      {movies &&
        movies.map((movie) => (
          <div className="col" >
            <div className="card h-100">
              <img
                src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
                className="card-img-top"
                alt="Movie Image"
              />

              <div className="card-body d-flex flex-column align-items-center">
                <h5 className="card-title">{movie.original_title}</h5>
                <p className="card-text">{movie.overview}</p>
                <div className="mt-auto">
                  <NavLink
                    to={`/movies/Indetails/${movie.id}`} 
                    type="button"
                    className="btn btn-primary"
                    data-bs-toggle="button"
                    aria-pressed="false"
                    autoComplete="on"
                  >
                    Button
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default MovieUI;
