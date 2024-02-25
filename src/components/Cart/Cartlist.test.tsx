import { render, screen } from "@testing-library/react";
import CartList from "./List";
import { useCart } from "../../store/CartContext";
import "@testing-library/jest-dom";

jest.mock("../../store/CartContext", () => ({
  useCart: jest.fn(),
}));

describe("CartList Component", () => {
  it('renders "Your cart is empty" when there are no items', () => {
    (useCart as jest.Mock).mockReturnValue({
      cartItems: [],
      increaseQuantity: jest.fn(),
      decreaseQuantity: jest.fn(),
    });

    render(<CartList />);
    expect(screen.getByText("Your cart is empty")).toBeInTheDocument();
  });

  it("renders cart items correctly", () => {
    (useCart as jest.Mock).mockReturnValue({
      cartItems: [
        {
          episode_id: 1,
          image: "test-image.jpg",
          title: "Test Item",
          price: 10,
          quantity: 2,
          url: "https:test.com/films/1",
          opening_crawl: "Test Description",
          characters: ["https:test.com/planets"],
          planets: ["https:test.com/planets"],
          starships: ["https:test.com/starships"],
          director: "test",
          producer: "test",
          release_date: "1980-02-11",
        },
      ],
      increaseQuantity: jest.fn(),
      decreaseQuantity: jest.fn(),
    });

    render(<CartList />);
    expect(screen.getByText("Test Item")).toBeInTheDocument();
    expect(screen.getByText("$ 10")).toBeInTheDocument();
    expect(screen.getByText("Quantity: 2")).toBeInTheDocument();
  });
});
