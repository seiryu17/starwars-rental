import { useNavigate } from "react-router";
import ASSETS from "../../utils/constant/assets";
import { CardProps } from "../../types/components/card";

function Card({ movie, button }: CardProps) {
  const navigate = useNavigate();

  const parts = movie.url.split("/");
  const id = parts[parts.length - 2];

  const episodeImageKey = `MOVIE_EPISODE_${movie.episode_id}`;
  const imageSrc = ASSETS[episodeImageKey];
  const releaseYear = movie.release_date.split("-")[0];

  return (
    <div
      onClick={() => navigate(`/films/${id}`)}
      className="max-w-sm rounded overflow-hidden shadow-lg bg-gray-800 relative cursor-pointer"
    >
      <img width={"100%"} src={imageSrc} alt={movie.title} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2 text-white">{movie.title}</div>
        <p className="text-gray-400 text-base">
          <span className="text-white font-bold">Released:</span> {releaseYear}
        </p>
        <p className="text-gray-400 text-base">
          <span className="text-white font-bold">Director:</span>{" "}
          {movie.director}
        </p>
        <p className="text-gray-400 text-base">
          <span className="text-white font-bold">Producer:</span>{" "}
          {movie.producer}
        </p>
        <span className="text-green-400 font-bold text-xl">
          $ {movie.price}
        </span>
        {button && (
          <button
            className="absolute top-0 right-0 bg-orange-500 rounded-bl-md p-2 hover:bg-orange-600"
            onClick={(e) => {
              e.stopPropagation();
              button.action({ ...movie, image: imageSrc });
            }}
          >
            {button.text}
          </button>
        )}
      </div>
    </div>
  );
}

export default Card;
