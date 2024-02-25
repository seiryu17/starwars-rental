import React from "react";
import { Movie } from "../../types/movie";
import ASSETS from "../../utils/constant/assets";
import { useNavigate } from "react-router-dom";

function MovieHero({ movie }: { movie: Movie }) {
  const navigate = useNavigate();
  const id = movie.url.split("/").slice(-2, -1)[0];

  return (
    <div
      key={movie.episode_id}
      className="relative h-screen w-full overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${
            ASSETS[`MOVIE_EPISODE_${movie.episode_id}`] ||
            ASSETS.IMAGE_NOT_FOUND
          })`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-75"></div>
      </div>
      <div className="relative h-full flex flex-col justify-center p-8 text-center">
        <h2 className="text-white text-5xl font-bold mb-4">{movie.title}</h2>
        <p className="text-white text-xl mb-8 max-w-2xl mx-auto">
          {movie.opening_crawl}
        </p>
        <button
          className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={() => navigate(`/films/${id}`)}
        >
          Learn More
        </button>
      </div>
    </div>
  );
}

export default MovieHero;
