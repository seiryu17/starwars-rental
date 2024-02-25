import { useState, useEffect } from "react";
import { fetchAllMovies, fetchMovieDetails } from "../swapiService";
import { Movie } from "../../types/movie";

const useFetchMovie = (
  id?: string
): { data: Movie | Movie[] | null; isLoading: boolean } => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = id
          ? await fetchMovieDetails(id)
          : await fetchAllMovies();
        setData(response);
      } catch (error) {
        console.error("Fetching error:", error);
        setData(null);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [id]);

  return { data, isLoading };
};

export default useFetchMovie;
