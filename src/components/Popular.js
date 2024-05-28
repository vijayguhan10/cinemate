// Popular.js
import React from "react";
import MovieUI from "../components/MovieUI";

const Popular = ({ url }) => {
  return (
    <div>
      <MovieUI url={url} />
    </div>
  );
};

export default Popular;
