import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import * as CartContextModule from "../../store/CartContext";
import MovieDetailCard from "./MainCard";

const movie = {
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
};

describe("MovieDetailCard", () => {
  const mockAddToCart = jest.fn();

  beforeEach(() => {
    jest.spyOn(CartContextModule, "useCart").mockImplementation(() => ({
      addToCart: mockAddToCart,
      cartItems: [],
      clearCart: jest.fn(),
      increaseQuantity: jest.fn(),
      decreaseQuantity: jest.fn(),
    }));
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders movie details correctly", () => {
    render(<MovieDetailCard movie={movie} />);

    expect(
      screen.getByText(`${movie.title} (${movie.release_date.split("-")[0]})`)
    ).toBeInTheDocument();
    expect(screen.getByText(`Director: ${movie.director}`)).toBeInTheDocument();
    expect(screen.getByText(`Producer: ${movie.producer}`)).toBeInTheDocument();
    expect(screen.getByText(movie.opening_crawl)).toBeInTheDocument();
    expect(screen.getByText(`$ ${movie.price}`)).toBeInTheDocument();
  });

  it('calls addToCart method when "Add to Cart" button is clicked', () => {
    render(<MovieDetailCard movie={movie} />);

    fireEvent.click(screen.getByText("Add to Cart"));

    expect(mockAddToCart).toHaveBeenCalledWith({
      ...movie,
      price: movie.price,
      image: expect.any(String),
    });
  });
});
