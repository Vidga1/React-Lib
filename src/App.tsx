import React from "react";
import { HorizontalLine, LineType } from "./components/HorizontalLine/HorizontalLine";
import { Heading } from "./components/Heading/Heading";
import { Details } from "./components/Details/Details";
import "./App.css";

export default function App() {
  const renderHeadings = () => {
    return [1, 2, 3, 4, 5, 6].map(level => (
      <Details key={`heading-${level}`} title={`h${level}`}>
        <Heading level={level as 1 | 2 | 3 | 4 | 5 | 6} />
      </Details>
    ));
  };

  return (
    <main className="App">
      <Heading title={"Библиотека React компонентов"} />
      <HorizontalLine />
      <Details title="Пример заголовков">
        {renderHeadings()}
      </Details>
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
    </main>
  );
}
