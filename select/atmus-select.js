import {
  LitElement,
  html,
  css,
} from 'lit';
import '@material/mwc-select';


export class AtmusSelect extends LitElement {
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

      mwc-textfield {
        --mdc-theme-primary: #228189;
        --mdc-text-field-outlined-hover-border-color: #228189;
        --mdc-text-field-fill-color: rgba(0, 0, 0, 0.04);
      }
    `
    ]

  static properties = {
    value: {
      type: String,
    },
    label: {
      type: String,
    },
    icon: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    required: {
      type: Boolean,
    },
    naturalMenuWidth: {
      type: String,
    },
    fixedMenuPosition: {
      type: Boolean,
    },
    outlined: {
      type: Boolean,
    },
    helper: {
      type: String,
    },
    selected: {
      type: String,
    },
    items: {
      type: Array,
    },
    index: {
      type: Number,
    },
    validity: {
      type: String,
    },
    validityTransform: {
      type: Object,
    },
    validateOnInitialRender: {
      type: Boolean,
    },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="foo">
        <mwc-select
          id="component"
          .value=${this.value}
          .label=${this.label}
          .icon=${this.icon}
          .disabled=${this.disabled}
          ?required=${this.required}
          .naturalMenuWidth=${this.naturalMenuWidth}
          .fixedMenuPosition=${this.fixedMenuPosition}
          .outlined=${this.outlined}
          .helper=${this.helper}
          .selected=${this.selected}
          .items=${this.items}
          .index=${this.index}
          .validity=${this.validity}
          .validityTransform=${this.validityTransform}
          .validateOnInitialRender=${this.validateOnInitialRender}
          ></mwc-select>
      </div>
    `
  }

  checkValidity() {
    return this.renderRoot.querySelector('#component').checkValidity();
  }

  reportValidity() {
    return this.renderRoot.querySelector('#component').reportValidity();
  }

  setCustomValidity(msg) {
    return this.renderRoot.querySelector('#component').setCustomValidity(msg);
  }

  layout() {
    return this.renderRoot.querySelector('#component').layout();
  }
  layoutOptions() {
    return this.renderRoot.querySelector('#component').layout();
  }
}

window.customElements.define('atmus-select', AtmusSelect);


