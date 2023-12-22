import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import {
  HorizontalLine,
  LineType,
} from "../src/components/HorizontalLine/HorizontalLine";

describe("HorizontalLine", () => {
  it("renders with default line type", () => {
    render(<HorizontalLine />);
    const lineElement = screen.getByTestId("hr");
    expect(lineElement).toBeInTheDocument();
    // Проверяем, что нет класса, если lineType не указан
    expect(lineElement).not.toHaveClass();
  });

  it.each([LineType.Solid, LineType.Double, LineType.Dashed])(
    "renders with line type %s",
    (lineType) => {
      render(<HorizontalLine lineType={lineType} />);
      const lineElement = screen.getByTestId("hr");
      expect(lineElement).toBeInTheDocument();
      expect(lineElement).toHaveClass(lineType);
    },
  );
});
