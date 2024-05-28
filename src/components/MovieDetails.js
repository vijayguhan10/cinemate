import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import "./Header.css";

const MovieDetails = ({ apikey }) => {
  const [details, setDetails] = useState(null);
  const [videoKey, setVideoKey] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apikey}&append_to_response=videos`
        );
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setDetails(data);
        console.log(data);
        const video = data.videos.results.find(
          (video) => video.type === "Trailer" && video.site === "YouTube"
        );
        if (video) {
          setVideoKey(video.key);
        }
      } catch (error) {
        console.error("Error fetching movie details:", error);
      }
    }

    fetchData();
  }, [apikey, movieId]);

  if (!details) {
    return <div>Loading...</div>;
  }

  return (
    <div className="w-100 h-100 bg-black text-white m-4 rowdetailsmovie row row-cols-1 row-cols-md-2 row-cols-sm-2 ">
      <div className="col">
        <iframe
          title="Trailer"
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${videoKey}`}
          frameborder="0"
          allowfullscreen
          className="videosection"
        ></iframe>
      </div>
      <div className="col widthacess">
        <h1 className="text-start name">{details.title}</h1>
        <p className="text-start my-5">{details.overview}</p>
        <h6 className="text-start">
          Release date:{" "}
          <span className="text-bg-success mx-4">{details.release_date}</span>
        </h6>
        <div className="row my-5 text-start">
          {details.genres.map((genre) => (
            <div key={genre.id} className="col">
              <h6>
                <span className="border border-1 border-white p-1">
                  {genre.name}
                </span>
              </h6>
            </div>
          ))}
        </div>
        <div style={{ textAlign: "left" }}>
          <div className="my-3">
            <h6 className="my-3">
              Runtime:{" "}
              <span className="mx-3 bg-success">{details.runtime} minutes</span>
            </h6>
            <h6 className="my-3">
              Budget: <span className="mx-3 bg-success">${details.budget}</span>
            </h6>
            <h6 className="my-3">
              Revenue:{" "}
              <span className="mx-3 bg-success">${details.revenue}</span>
            </h6>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MovieDetails;
