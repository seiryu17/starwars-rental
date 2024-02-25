import MovieCatalogList from "../components/MovieCatalog/List";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";
import useFetchMovie from "../utils/hooks/useFetchMovie";
import ASSETS from "../utils/constant/assets";
import { useNavigate } from "react-router-dom";

const MovieCatalog = () => {
  const { data: movieData, isLoading } = useFetchMovie();
  const navigate = useNavigate();
  const movies = Array.isArray(movieData)
    ? movieData
    : movieData
    ? [movieData]
    : [];

  const featuredMovie = movies.length > 0 ? movies[0] : null;
  const parts = featuredMovie?.url?.split("/");
  const id = parts ? parts[parts.length - 2] : null;

  return (
    <Layout>
      {isLoading ? (
        <div className="mt-64">
          <Spinner />
        </div>
      ) : (
        <>
          {featuredMovie && (
            <div className="relative h-screen w-full overflow-hidden">
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${
                    ASSETS[`MOVIE_EPISODE_${featuredMovie.episode_id}`] ||
                    ASSETS.IMAGE_NOT_FOUND
                  })`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-black opacity-75"></div>
              </div>
              <div className="relative h-full flex flex-col justify-center p-8 text-center">
                <h2 className="text-white text-5xl font-bold mb-4 animate-fadeInUp">
                  {featuredMovie.title}
                </h2>
                <p className="text-white text-xl mb-8 max-w-2xl mx-auto animate-fadeInUp delay-200">
                  {featuredMovie.opening_crawl}
                </p>
                <button
                  className="mx-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transform hover:scale-105 transition-transform duration-300"
                  onClick={() => navigate(`/films/${id}`)}
                >
                  Learn More
                </button>
              </div>
            </div>
          )}
          <MovieCatalogList list={movies || []} />
        </>
      )}
    </Layout>
  );
};

export default MovieCatalog;
