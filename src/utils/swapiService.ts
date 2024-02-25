import axios from "axios";
import { Movie } from "../types/movie";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

export const fetchAllMovies = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/films`);
    const moviesWithPrice = response.data.results.map((movie: Movie) => ({
      ...movie,
      price: 10,
    }));
    return moviesWithPrice;
  } catch (error) {
    console.error("Error fetching all movies:", error);
    throw error;
  }
};

export const fetchMovieDetails = async (id: string) => {
  try {
    const response = await axios.get(`${BASE_URL}/films/${id}`);
    response.data.price = 10;
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for movie ID ${id}:`, error);
    throw error;
  }
};
