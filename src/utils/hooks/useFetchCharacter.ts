import { useState, useEffect } from "react";
import axios from "axios";
import { Character } from "../../types/movieCharacter";
import { Movie } from "../../types/movie";

const useFetchCharacters = (movie: Movie | null) => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [isLoadingCharacter, setIsLoadingCharacter] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const charactersUrls = movie?.characters || [];

    if (!movie) {
      setCharacters([]);
      setIsLoadingCharacter(false);
      return;
    }

    if (!charactersUrls.length) {
      setCharacters([]);
      return;
    }

    const fetchCharacters = async () => {
      setIsLoadingCharacter(true);
      setError(null);

      try {
        const responses = await Promise.all(
          charactersUrls.map((url) => axios.get(url))
        );
        const data = responses.map((response) => response.data);

        setCharacters(data);
      } catch (err: any) {
        console.error("Error fetching characters:", err);
        setError(err);
      } finally {
        setIsLoadingCharacter(false);
      }
    };

    fetchCharacters();
  }, [movie]);

  return { characters, isLoadingCharacter, error };
};

export default useFetchCharacters;
