import { newSpecPage } from '@stencil/core/testing';
import { AbeDropdown } from '../abe-dropdown';

describe('abe-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [AbeDropdown],
      html: `<abe-dropdown></abe-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <abe-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </abe-dropdown>
    `);
  });
});
