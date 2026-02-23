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
    <span class="logo-icon icon"

        hx-get="/stories/logo-icon.component.html"
        hx-trigger="load"
        hx-swap="innerHTML"
    />
  `
};

export const LetterIcon: Story = {
  render: () => `
    <span class="letter-icon icon" role="img" aria-label="volkovasystems">
        <span aria-hidden="true">vs</span>
    </span>
  `
};

export const ColorIcon: Story = {
  render: () => `
    <span class="color-icon icon"
        role="img"
        aria-label="orange">
    </span>
  `
};

export const LetterColorIcon: Story = {
  render: () => `
    <span class="letter-icon color-icon icon" role="img" aria-label="volkovasystems">
        <span aria-hidden="true">vs</span>
    </span>
  `
};

export const RoundColorIcon: Story = {
  render: () => `
    <span class="round-icon shape-icon color-icon icon"
        role="img"
        aria-label="round orange">
    </span>
  `
};

export const SquareColorIcon: Story = {
  render: () => `
    <span class="square-icon shape-icon color-icon icon"
        role="img"
        aria-label="square orange">
    </span>
  `
};

export const TriangleColorIcon: Story = {
  render: () => `
    <span class="triangle-icon shape-icon color-icon icon"
        role="img"
        aria-label="triangle orange">
    </span>
  `
};

export const RoundColorIconBase: Story = {
  render: () => `
    <span
        class="round-icon shape-icon color-icon icon"
        role="img"
        aria-label="svg round color icon"

        hx-get="/stories/icon.component.html"
        hx-trigger="load"
        hx-swap="innerHTML"
    />
  `
};

export const SquareColorIconBase: Story = {
  render: () => `
    <span
        class="square-icon shape-icon color-icon icon"
        role="img"
        aria-label="svg square color icon"

        hx-get="/stories/icon.component.html"
        hx-trigger="load"
        hx-swap="innerHTML"
    />
  `
};

export const TriangleColorIconBase: Story = {
  render: () => `
    <span
        class="triangle-icon shape-icon color-icon icon"
        role="img"
        aria-label="svg triangle color icon"

        hx-get="/stories/icon.component.html"
        hx-trigger="load"
        hx-swap="innerHTML"
    />
  `
};

export const RoundLetterColorIconBase: Story = {
  render: () => `
    <span
        class="round-icon shape-icon letter-icon color-icon icon"
        role="img"
        aria-label="volkovasystems"
    >
        <span aria-hidden="true">vs</span>
    </span
  `
};

export const SquareLetterColorIconBase: Story = {
  render: () => `
    <span
        class="square-icon shape-icon letter-icon color-icon icon"
        role="img"
        aria-label="volkovasystems"
    >
        <span aria-hidden="true">vs</span>
    </span
  `
};

export const TriangleLetterColorIconBase: Story = {
  render: () => `
    <span
        class="triangle-icon shape-icon letter-icon color-icon icon"
        role="img"
        aria-label="volkovasystems"
    >
        <span aria-hidden="true">vs</span>
    </span
  `
};
