import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Image, Float, lion, pantera, tiger, wolf } from "./Image";

export default {
  title: "React Components Lib/Image",
  component: Image,
  argTypes: {
    float: {
      control: 'select',
      options: [Float.Left, Float.Right ],
      defaultValue: Float.Left,
    },
  },
} as ComponentMeta<typeof Image>;

const Template: ComponentStory<typeof Image> = (args) => <Image {...args} />;

export const LionImage = Template.bind({});
LionImage.args = {
  src: lion,
  alt: "Picture with lion",
  float: Float.Left,
};

export const PanteraImage = Template.bind({});
PanteraImage.args = {
  src: pantera,
  alt: "Picture with pantera",
  float: Float.Right,
};

export const TigerImage = Template.bind({});
TigerImage.args = {
  src: tiger,
  alt: "Picture with tiger",
  float: Float.Left
};

export const WolfImage = Template.bind({});
WolfImage.args = {
  src: wolf,
  alt: "Picture with wolf",
  float: Float.Right
};
