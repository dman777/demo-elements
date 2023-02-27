import {
  LitElement,
  html,
  css,
} from 'lit';
import '@material/mwc-button'


export class AtmusButton extends LitElement {
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
        --mdc-theme-primary: #228189
      }
    `
    ]

  static properties = {
    icon: {
      type: String,
    },
    label: {
      type: String,
    },
    raised: {
      type: Boolean,
    },
    outlined: {
      type: Boolean,
    },
    unelevated: {
      type: Boolean,
    },
    dense: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    trailingIcon: {
      type: Boolean,
    },
    expandContent: {
      type: Boolean,
    },
    fullwidth: {
      type: Boolean,
    },

  };

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="foo">
        <mwc-button
        ?unelevated=${this.unelevated}
        ?dense=${this.dense}
        ?disabled=${this.disabled}
        ?trailingIcon=${this.trailingIcon}
        ?expandContent=${this.expandContent}
        ?fullwidth=${this.fullwidth}
        ?raised=${this.raised}
        .icon=${this.icon}
        .label=${this.label}></mwc-button>
      </div>
    `
  }
}

window.customElements.define('atmus-button', AtmusButton);


