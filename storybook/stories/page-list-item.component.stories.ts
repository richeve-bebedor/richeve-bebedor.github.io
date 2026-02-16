import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = { title: "Concise Components/Page List Item" };
export default meta;

type Story = StoryObj;

export const PageListItem: Story = {
  render: () => `
    <section class="left-sidebar sidebar">
        <aside>
            <nav>
                <ul class="page-list list"
                    hx-get="/partials/page-list-item.component.html"
                    hx-trigger="load"
                    hx-swap="innerHTML"
                >
                </ul>
            </nav>
        </aside>
    </section>
  `
};

export const PageListItemWithControl: Story = {
  render: () => `
    <section class="left-sidebar sidebar">
        <aside>
            <nav>
                <ul class="page-list list"
                    hx-get="/partials/page-list-item-with-control.component.html"
                    hx-trigger="load"
                    hx-swap="innerHTML"
                >
                </ul>
            </nav>
        </aside>
    </section>
  `
};

export const PageListItemWithIcon: Story = {
  render: () => `
    <section class="left-sidebar sidebar">
        <aside>
            <nav>
                <ul class="page-list list"
                    hx-get="/partials/page-list-item-with-icon.component.html"
                    hx-trigger="load"
                    hx-swap="innerHTML"
                >
                </ul>
            </nav>
        </aside>
    </section>
  `
};

export const CompletePageListItem: Story = {
  render: () => `
    <section class="left-sidebar sidebar">
        <aside>
            <nav>
                <ul class="page-list list"
                    hx-get="/partials/complete-page-list-item.component.html"
                    hx-trigger="load"
                    hx-swap="innerHTML"
                >
                </ul>
            </nav>
        </aside>
    </section>
  `
};
