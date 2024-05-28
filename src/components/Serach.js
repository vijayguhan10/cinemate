import React from "react";
import { useSearchParams } from "react-router-dom";
import MovieUI from "./MovieUI";

const Search = ({ apikey }) => {
  
  const [searchParams] = useSearchParams();
  const result = searchParams.get("q");

  return (
    <div>
      <h2 className="text-white m-0 p-0 ">Results for '{result}'</h2>
      <MovieUI
        url={`https://api.themoviedb.org/3/search/movie?api_key=${apikey}&query=${result}`}
      />
    </div>
  );
};

export default Search;
