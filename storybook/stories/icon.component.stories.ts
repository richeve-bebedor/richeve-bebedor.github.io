import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = { title: "Concise Components/Icon" };
export default meta;

type Story = StoryObj;

export const Icon: Story = {
  render: () => `
    <span
        class="icon"
        hx-get="/partials/icon.component.html"
        hx-trigger="load"
        hx-swap="innerHTML"
    />
  `
};
