import { useParams } from "react-router-dom";
import Layout from "../../components/Layout";
import MovieDetailCard from "../../components/MovieDetail/MainCard";
import Spinner from "../../components/Spinner";
import useFetchMovie from "../../utils/hooks/useFetchMovie";
import { MovieParams } from "../../types/movieParams";
import ScrollContainer from "react-indiana-drag-scroll";
import useFetchCharacters from "../../utils/hooks/useFetchCharacter";
import useFetchPlanets from "../../utils/hooks/useFetchPlanets";
import useFetchStarships from "../../utils/hooks/useFetchStarships";
import ItemCard from "../../components/MovieDetail/Card";
import React from "react";
import ASSETS from "../../utils/constant/assets";

const MovieDetail = () => {
  const { movieId } = useParams<MovieParams>();
  const { data: movieData, isLoading } = useFetchMovie(movieId);
  const movie = Array.isArray(movieData) ? null : movieData;

  const { characters, isLoadingCharacter } = useFetchCharacters(movie);
  const { planets, isLoadingPlanets } = useFetchPlanets(movie);
  const { starships, isLoadingStarships } = useFetchStarships(movie);

  const otherAttributes = [
    {
      title: "Characters",
      type: "CHARACTER",
      items: characters,
      isLoading: isLoadingCharacter,
    },
    {
      title: "Planets",
      type: "PLANET",
      items: planets,
      isLoading: isLoadingPlanets,
    },
    {
      title: "Starships",
      type: "STARSHIP",
      items: starships,
      isLoading: isLoadingStarships,
    },
  ];

  return (
    <Layout>
      <div className="container mx-auto p-4">
        {isLoading ? (
          <div className="mt-64">
            <Spinner />
          </div>
        ) : movie ? (
          <>
            <MovieDetailCard movie={movie} />
            {otherAttributes.map(({ title, type, items, isLoading }, index) => (
              <React.Fragment key={index}>
                {isLoading ? (
                  <div className="mt-8">
                    <Spinner />
                  </div>
                ) : (
                  <>
                    <h1 className="flex justify-center mt-4 font-bold text-xl">
                      {title}
                    </h1>
                    <ScrollContainer className="scroll-container flex overflow-x-auto py-4">
                      {items.map((item, itemIndex) => {
                        const imageName = `${type}_${item.name
                          .toUpperCase()
                          .replace(/ /g, "_")
                          .replace(/-/g, "_")}`;
                        const imageSrc = ASSETS[imageName];
                        return (
                          <ItemCard
                            key={itemIndex}
                            name={item.name}
                            image={imageSrc}
                          />
                        );
                      })}
                    </ScrollContainer>
                  </>
                )}
              </React.Fragment>
            ))}
          </>
        ) : (
          <div>Movie not found.</div>
        )}
      </div>
    </Layout>
  );
};

export default MovieDetail;
