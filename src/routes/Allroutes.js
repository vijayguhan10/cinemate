// Allroutes.js
import Toprated from "../components/Toprated";
import Serach from "../components/Serach";
import PageNotfound from "../components/PageNotfound";
import React from "react";
import { Route, Routes } from "react-router-dom";
import MovieUI from "../components/MovieUI";
import Upcomming from "./../components/Upcomming";
import Popular from "./../components/Popular";
import MovieDetails from "../components/MovieDetails";

const Allroutes = () => {
  const apikey = "e67103b50af1d2493e637dfcbee08bdc";
  const nowPlayingUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=${apikey}`;
  const top_rated = `https://api.themoviedb.org/3/movie/top_rated?api_key=${apikey}`;
  const upcommingurl = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apikey}
  `;
  const popularurl = `https://api.themoviedb.org/3/movie/popular?api_key=${apikey}
  `;
  return (
    <Routes className=" w-100  h-100 ">
      <Route path="/" element={<MovieUI url={nowPlayingUrl} />} />
      <Route
        path="/movie/Toprated"
        element={<Toprated url={top_rated} />}
      />{" "}
      <Route
        path="/movie/Upcoming"
        element={<Upcomming url={upcommingurl} />}
      />
      <Route path="/popular" element={<Popular url={popularurl} />} />
      <Route path="/movie/search" element={<Serach apikey={apikey} />} />
      <Route
        path="/movies/Indetails/:movieId"
        element={<MovieDetails apikey={apikey} />}
      />
      <Route path="*" element={<PageNotfound />} />
    </Routes>
  );
};

export default Allroutes;
