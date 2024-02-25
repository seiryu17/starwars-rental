import { useState, useEffect } from "react";
import axios from "axios";
import { Starship } from "../../types/movieStarship";
import { Movie } from "../../types/movie";

const useFetchStarships = (movie: Movie | null) => {
  const [starships, setStarships] = useState<Starship[]>([]);
  const [isLoadingStarships, setIsLoadingStarships] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const starshipUrls = movie?.starships || [];

    if (!movie) {
      setStarships([]);
      setIsLoadingStarships(false);
      return;
    }

    if (!starshipUrls.length) {
      setStarships([]);
      return;
    }

    const fetchStarships = async () => {
      setIsLoadingStarships(true);
      setError(null);

      try {
        const responses = await Promise.all(
          starshipUrls.map((url) => axios.get(url))
        );
        const fetchedStarships = responses.map((response) => response.data);
        setStarships(fetchedStarships);
      } catch (err) {
        console.error("Error fetching starships:", err);
        setError(
          err instanceof Error
            ? err
            : new Error("An error occurred while fetching starships")
        );
      } finally {
        setIsLoadingStarships(false);
      }
    };

    fetchStarships();
  }, [movie]);

  return { starships, isLoadingStarships, error };
};

export default useFetchStarships;
