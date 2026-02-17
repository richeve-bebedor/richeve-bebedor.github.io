import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = { title: "Concise Components/Control" };
export default meta;

type Story = StoryObj;

export const ControlWithIconOnly: Story = {
  render: () => `
    <icon-control
        hx-get="/stories/control-with-icon-only.component.html"
        hx-trigger="load"
        hx-swap="innerHTML"
    />
  `
};

export const ControlInPageTreeHeader: Story = {
  render: () => `
    <aside
        class="
            page-tree
            list

            left-sidebar
            sidebar
            bar
        "
    >
        <header
            class="
                page-tree-header
                list-item
            "
        >
            <span
                class="
                    header-logo
                    logo
                    icon
                "
            >
                <svg
                    class="
                        logo
                        icon
                    "

                    viewBox="0 0 900 900"
                    preserveAspectRatio="xMidYMid meet"
                    role="img"
                    aria-label="vs"
                >
                    <use href="/assets/images/vs.logo.svg#vs-logo" />
                </svg>
            </span>
            <a
                class="
                    header-link
                    link
                "

                href="#"
            >
                <h4>volkovasystems</h4>
            </a>
            <page-tree-header-control
                hx-get="/stories/control-in-page-tree-header.component.html"
                hx-trigger="load"
                hx-swap="outerHTML"
            />
        </header>
    </aside>
  `
};
