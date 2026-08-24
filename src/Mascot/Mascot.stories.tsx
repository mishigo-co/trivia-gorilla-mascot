import type { Meta, StoryObj } from "@storybook/react-vite";
import { Mascot } from "./Mascot";
import { expressions } from "./expressions";
import { swatches } from "./swatches";

const allExpressions = Object.keys(expressions) as (keyof typeof expressions)[];
const allVariants = Object.keys(swatches) as (keyof typeof swatches)[];
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
export const Surprised: Story = {
  args: { ...Default.args, expression: "surprised" },
};
export const Wince: Story = { args: { ...Default.args, expression: "wince" } };
export const AllExpressions: Story = {
  args: Default.args,
  render: () => (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${allVariants.length}, 1fr)`,
        gap: 16,
        width: 720,
      }}
    >
      {allExpressions.flatMap((expression) =>
        allVariants.map((variant) => (
          <div
            key={`${expression}-${variant}`}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 4,
            }}
          >
            <Mascot expression={expression} variant={variant} size={200} />
            <span
              style={{ fontSize: 12, color: "#666", fontFamily: "sans-serif" }}
            >
              {expression} / {variant}
            </span>
          </div>
        )),
      )}
    </div>
  ),
};
