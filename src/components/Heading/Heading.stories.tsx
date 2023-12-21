import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Heading } from "./Heading";
import { heading } from "../../helpers/text";

export default {
  title: "React Components Lib/Heading",
  component: Heading,
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => (
  <Heading {...args} />
);

export const Default = Template.bind({});
Default.args = {
  level: 1,
  title: heading,
};
