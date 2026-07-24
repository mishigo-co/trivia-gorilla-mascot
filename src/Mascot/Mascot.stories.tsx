// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import type { Meta, StoryObj } from "@storybook/react-vite";

import { Mascot } from "./Mascot";

const meta = {
  component: Mascot,
  argTypes: {
    variant: {
      control: "select",
      options: ["blue", "darkRed", "brown"],
    },
    expression: {
      control: "select",
      options: ["happy", "sad", "angry", "surprised", "wince"],
    },
  },
} satisfies Meta<typeof Mascot>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    expression: "happy",
    variant: "blue",
    size: 640,
  },
};

export const Sad: Story = { args: { ...Default.args, expression: "sad" } };
export const Angry: Story = { args: { ...Default.args, expression: "angry" } };
export const Surprised: Story = { args: { ...Default.args, expression: "surprised" } };
export const Wince: Story = { args: { ...Default.args, expression: "wince" } };
