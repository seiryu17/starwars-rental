import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartItem from "./Item";
import { CartItemProps } from "../../types/components/cartItem";

describe("CartItem Component", () => {
  const mockIncreaseQuantity = jest.fn();
  const mockDecreaseQuantity = jest.fn();
  const itemProps: CartItemProps = {
    item: {
      episode_id: 1,
      image: "test-image.jpg",
      title: "Test Item",
      price: 10,
      quantity: 1,
      url: "https:test.com/films/1",
      opening_crawl: "Test Description",
      characters: ["https:test.com/planets"],
      planets: ["https:test.com/planets"],
      starships: ["https:test.com/starships"],
      director: "test",
      producer: "test",
      release_date: "1980-02-11",
    },
    increaseQuantity: mockIncreaseQuantity,
    decreaseQuantity: mockDecreaseQuantity,
  };

  beforeEach(() => {
    render(<CartItem {...itemProps} />);
  });

  test("renders the item information correctly", () => {
    expect(screen.getByText("Test Item")).toBeInTheDocument();
    expect(screen.getByText("$ 10")).toBeInTheDocument();
    expect(screen.getByText("Quantity: 1")).toBeInTheDocument();
    expect(screen.getByAltText("Test Item")).toHaveAttribute(
      "src",
      "test-image.jpg"
    );
  });

  test("calls increaseQuantity when + button is clicked", () => {
    const increaseButton = screen.getByRole("button", { name: "+" });
    fireEvent.click(increaseButton);
    expect(mockIncreaseQuantity).toHaveBeenCalledWith(
      itemProps.item.episode_id
    );
  });

  test("calls decreaseQuantity when - button is clicked", () => {
    const decreaseButton = screen.getByRole("button", { name: "-" });
    fireEvent.click(decreaseButton);
    expect(mockDecreaseQuantity).toHaveBeenCalledWith(
      itemProps.item.episode_id
    );
  });
});
