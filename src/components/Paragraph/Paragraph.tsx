import React, { FC } from "react";
import "./Paragraph.css";
import { textLion, textPantera, textTiger, textWolf } from "../../helpers/text";

export enum ParagraphStyles {
  Regular = "regular",
  Quote = "quote",
  Bold = "bold",
  Underline = "underline",
}

export interface ParagraphProps {
  fontStyle?: ParagraphStyles;
  children?: React.ReactNode;
  text?: string;
}

export const Paragraph: FC<ParagraphProps> = ({
  children,
  fontStyle = ParagraphStyles.Regular,
  text,
}) => {
  return (
    <p data-testid="paragraph" className={fontStyle}>
      {text || children}
    </p>
  );
};

export const ParagraphExamples: FC = () => {
  return (
    <div>
      <Paragraph text={textLion} fontStyle={ParagraphStyles.Bold} />
      <Paragraph text={textPantera} fontStyle={ParagraphStyles.Quote} />
      <Paragraph text={textTiger} fontStyle={ParagraphStyles.Underline} />
      <Paragraph text={textWolf} fontStyle={ParagraphStyles.Regular} />
    </div>
  );
};
