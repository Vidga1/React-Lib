import React, { FC } from "react";
import "./Heading.css";
import { heading } from "../../helpers/text";

export interface HeadingProps {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  title?: string;
}

export const Heading: FC<HeadingProps> = ({ level = 1, title = heading }) => {
  const headingClass = `heading ${level}`;

  return (
    <div data-testid="heading" className={headingClass}>
      {React.createElement(`h${level}`, {}, title)}
    </div>
  );
};
