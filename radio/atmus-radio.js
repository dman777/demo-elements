import {
  LitElement,
  html,
  css,
} from 'lit';
import '@material/mwc-radio'


export class AtmusRadio extends LitElement {
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

      mwc-radio {
        --mdc-theme-secondary: #228189;
      }
    `
    ]

  static properties = {
    name: {
      type: String,
    },
    value: {
      type: String,
    },
    checked: {
      type: Boolean,
    },
    disabled: {
      type: Boolean,
    },
    global: {
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
        <mwc-radio
          .name=${this.name}
          .value=${this.value}
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          ?global=${this.global}
          ?reducedTouchTarget=${this.reducedTouchTarget}
        ></mwc-radio>
      </div>
    `
  }
}

window.customElements.define('atmus-radio', AtmusRadio);


