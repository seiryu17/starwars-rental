import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Badge from "./index";

describe("Badge Component", () => {
  test("displays the count", () => {
    render(<Badge count={5} />);
    expect(screen.getByText("5")).toBeInTheDocument();
  });

  test("handles string count", () => {
    render(<Badge count="10" />);
    expect(screen.getByText("10")).toBeInTheDocument();
  });
});
