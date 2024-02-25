import { useCart } from "../../store/CartContext";
import { movieDetailCard } from "../../types/components/movieDetailCard";
import ASSETS from "../../utils/constant/assets";

function MovieDetailCard({ movie }: movieDetailCard) {
  const { addToCart } = useCart();

  const episodeImageKey = `MOVIE_EPISODE_${movie.episode_id}`;
  const imageSrc = ASSETS[episodeImageKey];
  const releaseYear = movie.release_date.split("-")[0];

  const handleAddToCart = () => {
    addToCart({
      ...movie,
      price: movie.price,
      image: imageSrc,
    });
  };
  return (
    <div className="mx-auto bg-gray-800 text-white rounded-lg shadow-lg overflow-hidden">
      <div
        className="bg-cover bg-center h-96 relative"
        style={{
          backgroundImage: `url(${imageSrc})`,
        }}
      >
        <div className="bg-gray-900 bg-opacity-75 absolute bottom-0 w-full py-4 px-6">
          <h2 className="text-4xl font-bold">
            {movie.title} ({releaseYear})
          </h2>
          <p className="text-xl">Director: {movie.director}</p>
          <p className="text-xl">Producer: {movie.producer}</p>
        </div>
      </div>
      <div className="p-4 md:p-8">
        <h3 className="text-xl font-semibold mb-4">Overview</h3>
        <p className="mb-4">{movie.opening_crawl}</p>
        <p className="text-green-400 font-bold text-xl">$ {movie.price}</p>
        <button
          onClick={handleAddToCart}
          className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default MovieDetailCard;
