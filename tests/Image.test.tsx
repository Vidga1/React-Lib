import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Image, ImageExamples, Float } from "../src/components/Image/Image";
import lion from "../../assets/img/lion.jpg";
import pantera from "../../assets/img/pantera.jpg";
import tiger from "../../assets/img/tiger.jpg";
import wolf from "../../assets/img/wolf.jpg";

describe("Image", () => {
  it("renders with default props", () => {
    render(<Image />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toHaveAttribute("src");
    expect(imageElement).toHaveAttribute("alt", "Picture with wolf");
    expect(imageElement).toHaveClass("image float-right");
  });

  it("renders with custom props", () => {
    const alt = "Lion";
    const src = "../src/assets/img/lion.jpg";
    render(<Image alt={alt} src={src} float={Float.Left} />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toHaveAttribute("src", src);
    expect(imageElement).toHaveAttribute("alt", alt);
    expect(imageElement).toHaveClass("image float-left");
  });

  it("renders with default alt when alt prop is not provided", () => {
    render(<Image src="../src/assets/img/lion.jpg" />);
    const imageElement = screen.getByRole("img");
    // Проверка на дефолтный alt
    expect(imageElement).toHaveAttribute("alt", "Picture with wolf");
  });
});

describe("Image with default props", () => {
  it("renders with default src and alt text", () => {
    render(<Image />);
    const imageElement = screen.getByRole("img");
    expect(imageElement).toHaveAttribute("alt", "Picture with wolf");
    expect(imageElement).toHaveAttribute("src", wolf); // Проверяем дефолтный src
    expect(imageElement).toHaveClass("image float-right"); // Проверяем дефолтный класс
  });
});

describe("ImageExamples", () => {
  it("renders images with different props", () => {
    render(<ImageExamples />);
    const lionImage = screen.getByAltText("Lion");
    const panteraImage = screen.getByAltText("Pantera");
    const tigerImage = screen.getByAltText("Tiger");
    const wolfImage = screen.getByAltText("Wolf");

    expect(lionImage).toHaveAttribute("src", lion);
    expect(lionImage).toHaveClass("image float-left");

    expect(panteraImage).toHaveAttribute("src", pantera);
    expect(panteraImage).toHaveClass("image float-right");

    expect(tigerImage).toHaveAttribute("src", tiger);
    expect(tigerImage).toHaveClass("image float-left");

    expect(wolfImage).toHaveAttribute("src", wolf);
    expect(wolfImage).toHaveClass("image float-right");
  });
});
