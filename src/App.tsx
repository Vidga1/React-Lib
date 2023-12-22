import React from "react";
import {
  HorizontalLine,
  LineType,
} from "./components/HorizontalLine/HorizontalLine";
import { Heading } from "./components/Heading/Heading";
import { Details } from "./components/Details/Details";
import { Paragraph, ParagraphStyles } from "./components/Paragraph/Paragraph";
import { Image, Float } from "./components/Image/Image";
import { textLion, textPantera, textTiger, textWolf } from "./helpers/text";
import lion from "./assets/img/lion.jpg";
import pantera from "./assets/img/pantera.jpg";
import tiger from "./assets/img/tiger.jpg";
import wolf from "./assets/img/wolf.jpg";
import "./App.css";

export default function App() {
  const renderHeadings = () => {
    return [1, 2, 3, 4, 5, 6].map((level) => (
      <Details key={`heading-${level}`} title={`h${level}`}>
        <Heading level={level as 1 | 2 | 3 | 4 | 5 | 6} />
      </Details>
    ));
  };

  return (
    <main className="App">
      <Heading title={"Библиотека React компонентов"} />
      <HorizontalLine />
      <Details title="Пример заголовков">{renderHeadings()}</Details>
      <HorizontalLine />
      <Details title="Пример горизонтальных линий">
        <Details title="Горизонтальная линия сплошная">
          <HorizontalLine />
        </Details>
        <Details title="Горизонтальная линия двойная">
          <HorizontalLine lineType={LineType.Double} />
        </Details>
        <Details title="Горизонтальная линия пунктирная">
          <HorizontalLine lineType={LineType.Dashed} />
        </Details>
      </Details>
      <HorizontalLine />
      <Details title="Пример параграфа с картинкой (лев)">
        <div className="details-container">
          <Image src={lion} alt="Lion" float={Float.Left} />
          <Paragraph text={textLion} fontStyle={ParagraphStyles.Bold} />
        </div>
      </Details>
      <HorizontalLine />
      <Details title="Пример параграфа с картинкой (пантера)">
        <div className="details-container">
          <Image src={pantera} alt="Pantera" float={Float.Right} />
          <Paragraph text={textPantera} fontStyle={ParagraphStyles.Quote} />
        </div>
      </Details>
      <HorizontalLine />
      <Details title="Пример параграфа с картинкой (тигр)">
        <div className="details-container">
          <Image src={tiger} alt="Tiger" float={Float.Left} />
          <Paragraph text={textTiger} fontStyle={ParagraphStyles.Underline} />
        </div>
      </Details>
      <HorizontalLine />
      <Details title="Пример параграфа с картинкой (волк)">
        <div className="details-container">
          <Image src={wolf} alt="Wolf" float={Float.Right} />
          <Paragraph text={textWolf} fontStyle={ParagraphStyles.Regular} />
        </div>
      </Details>
      <HorizontalLine />
    </main>
  );
}
