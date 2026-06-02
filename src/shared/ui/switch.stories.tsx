import type { Meta, StoryObj } from "@storybook/react-vite";
import { fn } from "storybook/test";

import { Switch } from "./switch";

const meta = {
  title: "Shared UI/Switch",
  component: Switch,
  tags: ["autodocs"],
  args: {
    onCheckedChange: fn(),
  },
  parameters: {
    layout: "centered",
  },
  render: (args) => (
    <div className="flex items-center gap-3">
      <Switch id="switch-story" {...args} />
      <label htmlFor="switch-story" className="text-sm">
        Enable notifications
      </label>
    </div>
  ),
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: {
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const DisabledChecked: Story = {
  args: {
    disabled: true,
    defaultChecked: true,
  },
};
