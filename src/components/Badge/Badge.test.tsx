import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BadgeTypes } from "../../types/components/badge";
import Badge from ".";

describe("Badge Component", () => {
  test("renders the count prop correctly", () => {
    const props: BadgeTypes = { count: 5 };
    render(<Badge {...props} />);

    const badgeElement = screen.getByText("5");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveClass("bg-red-600");
    expect(badgeElement).toHaveTextContent("5");
  });

  test("renders correctly with different count", () => {
    const props: BadgeTypes = { count: 10 };
    render(<Badge {...props} />);

    const badgeElement = screen.getByText("10");
    expect(badgeElement).toBeInTheDocument();
    expect(badgeElement).toHaveTextContent("10");
  });
});
