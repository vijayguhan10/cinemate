// FetchRequests.js
import React, { useState, useEffect } from "react";

const FetchRequests = ({ url, setMovies }) => {
  useEffect(() => {
    async function fetchMovies() {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    }

    fetchMovies();
  }, [url]);

  return null;
};

export default FetchRequests;
