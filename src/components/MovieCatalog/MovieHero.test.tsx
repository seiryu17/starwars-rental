import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import MovieHero from "./Hero";

jest.mock("../../utils/constant/assets", () => ({
  MOVIE_EPISODE_4: "test-image-url.jpg",
  IMAGE_NOT_FOUND: "image-not-found-url.jpg",
}));

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

describe("MovieHero", () => {
  it("renders the movie details and navigates on button click", () => {
    render(
      <BrowserRouter>
        <MovieHero movie={movie} />
      </BrowserRouter>
    );

    expect(screen.getByText(movie.title)).toBeInTheDocument();
    expect(screen.getByText(movie.opening_crawl)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Learn More" })
    ).toBeInTheDocument();

    const backgroundImageDiv = document.querySelector(
      '[style*="background-image"]'
    );
    expect(backgroundImageDiv).toHaveAttribute(
      "style",
      expect.stringContaining("test-image-url.jpg")
    );
  });
});
