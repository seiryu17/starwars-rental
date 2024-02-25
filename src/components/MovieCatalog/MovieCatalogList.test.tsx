import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import * as CartContextModule from "../../store/CartContext";
import MovieCatalogList from "./List";
import { Movie } from "../../types/movie";
import { ButtonProps } from "../../types/components/card";

jest.mock("./Card", () => ({
  __esModule: true,
  default: ({ movie, button }: { movie: Movie; button: ButtonProps }) => (
    <div data-testid="mock-card">
      <div>{movie.title}</div>
      <button onClick={() => button.action(movie)}>{button.text}</button>
    </div>
  ),
}));

const movies = [
  {
    url: "http://swapi.dev/api/films/1/",
    episode_id: 4,
    title: "A New Hope",
    release_date: "1977-05-25",
    director: "George Lucas",
    producer: "Gary Kurtz, Rick McCallum",
    price: 20,
    image: "test-image.jpg",
    quantity: 2,
    opening_crawl: "Test Description",
    characters: ["https:test.com/planets"],
    planets: ["https:test.com/planets"],
    starships: ["https:test.com/starships"],
  },
];

describe("MovieCatalogList", () => {
  const mockAddToCart = jest.fn();

  beforeEach(() => {
    mockAddToCart.mockClear();

    jest.spyOn(CartContextModule, "useCart").mockImplementation(() => ({
      addToCart: mockAddToCart,
      cartItems: [],
      clearCart: jest.fn(),
      increaseQuantity: jest.fn(),
      decreaseQuantity: jest.fn(),
    }));
  });

  it("renders a list of movies", () => {
    render(<MovieCatalogList list={movies} />);

    movies.forEach((movie) => {
      expect(screen.getByText(movie.title)).toBeInTheDocument();
    });

    movies.forEach(() => {
      expect(screen.getByText("+ Cart")).toBeInTheDocument();
    });

    const addButton = screen.getAllByText("+ Cart")[0];
    fireEvent.click(addButton);

    expect(mockAddToCart).toHaveBeenCalledTimes(1);
    expect(mockAddToCart).toHaveBeenCalledWith(movies[0]);
  });
});
