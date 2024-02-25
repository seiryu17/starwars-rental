import { useState, useEffect } from "react";
import axios from "axios";
import { Planet } from "../../types/moviePlanet";
import { Movie } from "../../types/movie";

const useFetchPlanets = (movie: Movie | null) => {
  const [planets, setPlanets] = useState<Planet[]>([]);
  const [isLoadingPlanets, setIsLoadingPlanets] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const planetsUrls = movie?.planets || [];

    if (!movie) {
      setPlanets([]);
      setIsLoadingPlanets(false);
      return;
    }

    if (!planetsUrls.length) {
      setPlanets([]);
      return;
    }

    const fetchPlanets = async () => {
      setIsLoadingPlanets(true);
      setError(null);

      try {
        const responses = await Promise.all(
          planetsUrls.map((url) => axios.get(url))
        );
        const fetchedPlanets = responses.map((response) => response.data);
        setPlanets(fetchedPlanets);
      } catch (err) {
        console.error("Error fetching planets:", err);
        setError(err instanceof Error ? err : new Error("An error occurred"));
      } finally {
        setIsLoadingPlanets(false);
      }
    };

    fetchPlanets();
  }, [movie]);

  return { planets, isLoadingPlanets, error };
};

export default useFetchPlanets;
