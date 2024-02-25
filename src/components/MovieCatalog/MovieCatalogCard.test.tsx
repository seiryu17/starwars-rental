import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Card from "./Card";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () =>
    jest.fn().mockImplementation((path) => console.log(`Navigate to: ${path}`)),
}));

describe("Card Component", () => {
  const mockButtonAction = jest.fn();

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

  const buttonProps = {
    text: "Add to Cart",
    action: jest.fn(),
  };

  beforeEach(() => {
    render(
      <BrowserRouter>
        <Card
          movie={movie}
          button={{ text: "Add to Cart", action: mockButtonAction }}
        />
      </BrowserRouter>
    );
  });

  it("renders movie information and navigates on click", () => {
    expect(screen.getByText("A New Hope")).toBeInTheDocument();
    expect(screen.getByText("Released:")).toBeInTheDocument();
    expect(screen.getByText("1977")).toBeInTheDocument();
    expect(screen.getByText("Director:")).toBeInTheDocument();
    expect(screen.getByText("George Lucas")).toBeInTheDocument();
    expect(screen.getByText("Producer:")).toBeInTheDocument();
    expect(screen.getByText("Gary Kurtz, Rick McCallum")).toBeInTheDocument();
    expect(screen.getByText("$ 20")).toBeInTheDocument();

    const movieCard = screen.getByTestId("movie-card");
    fireEvent.click(movieCard);
  });
});
