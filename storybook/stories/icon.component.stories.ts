import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = { title: "Concise Components/Icon" };
export default meta;

type Story = StoryObj;

export const Icon: Story = {
  render: () => `
    <span
        class="icon"

        hx-get="/stories/icon.component.html"
        hx-trigger="load"
        hx-swap="innerHTML"
    />
  `
};

export const LogoIcon: Story = {
  render: () => `
    <span
        class="
            logo
            icon
        "

        hx-get="/stories/logo-icon.component.html"
        hx-trigger="load"
        hx-swap="innerHTML"
    />
  `
};
