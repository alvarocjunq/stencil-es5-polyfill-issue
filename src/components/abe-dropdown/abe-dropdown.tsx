import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'abe-dropdown',
  styleUrl: 'abe-dropdown.css',
  shadow: true,
})
export class AbeDropdown {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}
