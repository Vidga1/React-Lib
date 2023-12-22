import React from "react";
import { render, screen } from "@testing-library/react";
import { Heading } from "../src/components/Heading/Heading";

describe("Heading", () => {
  // Тест для рендера с пропсами по умолчанию
  it("renders a heading with default level and title", () => {
    render(<Heading />);
    const defaultHeading =
      "Изучим мир хищников: льва, пантеры, тигра и волка, каждый из которых уникален и играет ключевую роль в своей экосистеме."; // Ваше значение по умолчанию
    const headingElement = screen.getByRole("heading", { level: 1 });
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent(defaultHeading); // Используем значение по умолчанию
  });
  [1, 2, 3, 4, 5, 6].forEach((level) => {
    it(`applies correct classes for level ${level}`, () => {
      render(
        <Heading
          level={level as 1 | 2 | 3 | 4 | 5 | 6}
          title={`Heading ${level}`}
        />,
      );
      const headingElement = screen.getByTestId("heading");
      expect(headingElement).toHaveClass(`heading ${level}`);
    });
  });
});
