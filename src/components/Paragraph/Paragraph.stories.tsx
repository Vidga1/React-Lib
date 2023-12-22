import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Paragraph, ParagraphStyles } from "./Paragraph";
import { textLion, textPantera, textTiger, textWolf } from "../../helpers/text";

export default {
  title: "React Components Lib/Paragraph",
  component: Paragraph,
  argTypes: {
    fontStyle: {
      control: "select",
      options: [
        ParagraphStyles.Regular,
        ParagraphStyles.Quote,
        ParagraphStyles.Underline,
        ParagraphStyles.Bold,
      ],
    },
    text: { control: "text" },
  },
} as ComponentMeta<typeof Paragraph>;

const Template: ComponentStory<typeof Paragraph> = (args) => (
  <Paragraph {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: textLion,
  fontStyle: ParagraphStyles.Regular,
};

export const Quote = Template.bind({});
Quote.args = {
  text: textPantera,
  fontStyle: ParagraphStyles.Quote,
};

export const Underline = Template.bind({});
Underline.args = {
  text: textWolf,
  fontStyle: ParagraphStyles.Underline,
};

export const Bold = Template.bind({});
Bold.args = {
  text: textTiger,
  fontStyle: ParagraphStyles.Bold,
};
