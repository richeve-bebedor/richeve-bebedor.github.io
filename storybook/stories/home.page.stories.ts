import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = { title: "Concise Pages/Home Page" };
export default meta;

type Story = StoryObj;

export const HomePage: Story = {
  render: () => `
    <div
        class="
            list-item

            group-list
            list
        "

        hx-get="/stories/home.page.html"
        hx-trigger="load"
        hx-swap="outerHTML"
    >
    </div>
  `
};
