import Layout from "../components/Layout";
import Spinner from "../components/Spinner";
import MovieCatalogList from "../components/MovieCatalog/List";
import useFetchMovie from "../utils/hooks/useFetchMovie";
import Slider from "react-slick";
import MovieHero from "../components/MovieCatalog/Hero";

const MovieCatalog = () => {
  const { data: movieData, isLoading } = useFetchMovie();

  const movies = Array.isArray(movieData)
    ? movieData
    : movieData
    ? [movieData]
    : [];
  const featuredMovies = movies.slice(0, 2);

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <Layout>
      {isLoading ? (
        <div className="mt-64">
          <Spinner />
        </div>
      ) : (
        <>
          {featuredMovies.length > 0 && (
            <Slider {...settings}>
              {featuredMovies.map((movie) => (
                <MovieHero movie={movie} />
              ))}
            </Slider>
          )}
          <MovieCatalogList list={movies || []} />
        </>
      )}
    </Layout>
  );
};

export default MovieCatalog;
