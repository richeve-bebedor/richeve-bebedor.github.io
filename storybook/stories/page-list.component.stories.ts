import type { Meta, StoryObj } from "@storybook/html";

const meta: Meta = { title: "Concise Components/Page List" };
export default meta;

type Story = StoryObj;

export const PageList: Story = {
  render: () => `
    <aside
        class="
            list

            left-sidebar
            sidebar
            bar
        "
    >
        <section
            class="
                list-item

                group-list
                list
            "
        >
            <nav
                hx-get="/stories/page-list.component.html"
                hx-trigger="load"
                hx-swap="innerHTML"
            >
            </nav>
        </section>
    </aside>
  `
};

export const PageListWithControl: Story = {
  render: () => `
    <section
        class="left-sidebar sidebar"
        hx-get="/partials/page-list-with-control.component.html"
        hx-trigger="load"
        hx-swap="innerHTML">
    </section>
  `
};

export const PageListWithIcon: Story = {
  render: () => `
    <section
        class="left-sidebar sidebar"
        hx-get="/partials/page-list-with-icon.component.html"
        hx-trigger="load"
        hx-swap="innerHTML">
    </section>
  `
};

export const CompletePageList: Story = {
  render: () => `
    <section
        class="left-sidebar sidebar"
        hx-get="/partials/complete-page-list.component.html"
        hx-trigger="load"
        hx-swap="innerHTML">
    </section>
  `
};
