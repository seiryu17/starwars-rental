import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ItemCard from "./Card";
import ASSETS from "../../utils/constant/assets";

describe("ItemCard", () => {
  it("renders the ItemCard with provided name and image", () => {
    const name = "Test Item";
    const image = "http://example.com/test-image.jpg";

    render(<ItemCard name={name} image={image} />);

    expect(screen.getByText(name)).toBeInTheDocument();

    const img = screen.getByRole("img", { name });
    expect(img).toHaveAttribute("src", image);
  });

  it("renders the ItemCard with default image when image prop is not provided", () => {
    const name = "Test Item Without Image";

    render(<ItemCard name={name} />);

    expect(screen.getByText(name)).toBeInTheDocument();

    const img = screen.getByRole("img", { name });
    expect(img).toHaveAttribute("src", ASSETS.IMAGE_NOT_FOUND);
  });
});
