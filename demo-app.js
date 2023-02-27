import {
  LitElement,
  html,
  css,
} from 'lit';
import './button/atmus-button.js';
import './input/atmus-input.js';
import './select/atmus-select.js';
import './checkbox/atmus-checkbox.js';
import './radio/atmus-radio.js';

export class DemoApp extends LitElement {
  static styles = [
    css`
      :host {
        width: 100%;
        height: 100%;
      }
      `,
  ];

  static properties = {
  };

  constructor() {
    super();

  }

  render() {
    return html`
      <br>

      <atmus-button
        label="Accent"
        raised
        @click=${this.clickButton}></atmus-button>

      <br>

      <atmus-input
        id="input"
        suffix="aa"
        label="dddda"
        @input=${this.changeInput}></atmus-input>

      <br>

      <atmus-checkbox
        value="foo"
      >check me!</atmus-checkbox>

      <br>

      <atmus-radio
        value="foo"
      >check me!</atmus-radio>

    `
  }

  clickButton(e) {
    console.dir(e.target);
  }

  changeInput(e) {
    const el = this.renderRoot.querySelector('#input');
    const foo = el.checkValidity();
    console.log(foo);
  }
}
window.customElements.define('demo-app', DemoApp);


