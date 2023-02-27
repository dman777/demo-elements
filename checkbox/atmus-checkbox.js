import {
  LitElement,
  html,
  css,
} from 'lit';
import '@material/mwc-checkbox'


export class AtmusCheckbox extends LitElement {
  static styles = [
     css`
      :host {
        width: 100%;
        height: 100%;
      }

      .foo {
        width: 100%;
        height: 100%;
      }

      mwc-button {
        --mdc-theme-secondary: #228189;
      }
    `
    ]

  static properties = {
    value: {
      type: String,
    },
    checked: {
      type: Boolean,
    },
    indeterminate: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    reducedTouchTarget: {
      type: Boolean,
    },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="foo">
        <mwc-checkbox
          ?checked=${this.checked}
          ?indeterminate=${this.indeterminate}
          ?disabled=${this.disabled}
          ?reducedTouchTarget=${this.reducedTouchTarget}
          .value=${this.value}>
        </mwc-checkbox>
      </div>
    `
  }
}

window.customElements.define('atmus-checkbox', AtmusCheckbox);


