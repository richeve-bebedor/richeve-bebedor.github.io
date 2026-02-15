import type { Preview } from "@storybook/html";

const preview: Preview = {
  parameters: { layout: "centered" },
  decorators: [(story) => `<main class="container">${story()}</main>`]
};

export default preview;
