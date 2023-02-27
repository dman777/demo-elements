import {
  LitElement,
  html,
  css,
} from 'lit';
import '@material/mwc-textfield'


export class AtmusInput extends LitElement {
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
    type: {
      type: String,
    },
    label: {
      type: String,
    },
    placeholder: {
      type: String,
    },
    prefix: {
      type: String,
    },
    suffix: {
      type: String,
    },
    icon: {
      type: String,
    },
    iconTrailing: {
      type: String,
    },
    disabled: {
      type: Boolean,
    },
    charCounter: {
      type: Boolean,
    },
    outlined: {
      type: Boolean,
    },
    helper: {
      type: String,
    },
    helperPersistent: {
      type: Boolean,
    },
    required: {
      type: Boolean,
    },
    maxLength: {
      type: Number,
    },
    validationMessage: {
      type: String,
    },
    pattern: {
      type: String,
    },
    min: {
      type: Number,
    },
    max: {
      type: Number,
    },
    size: {
      type: Number,
    },
    step: {
      type: Number,
    },
    autoValidate: {
      type: Boolean,
    },
    willValidate: {
      type: Boolean,
    },
    validityTransform: {
      type: Boolean,
    },
    validateOnInitialRender: {
      type: Boolean,
    },
    name: {
      type: String,
    },
  };

  constructor() {
    super();
  }

  render() {
    return html`
      <div class="foo">
        <mwc-textfield
          id="input"
          value=${this.value}
          .type=${this.type}
          .placeholder=${this.placeholder}
          .prefix=${this.prefix}
          .suffix=${this.suffix}
          .icon=${this.icon}
          .iconTrailing=${this.iconTrailing}
          .disabled=${this.disabled}
          .charCounter=${this.charCounter}
          ?outlined=${this.outlined}
          .helper=${this.helper}
          ?helperPersistent=${this.helperPersistent}
          ?required=${this.required}
          .maxLength=${this.maxLength}
          .validationMessage=${this.validationMessage}
          .pattern=${this.pattern}
          .min=${this.min}
          .max=${this.max}
          .size=${this.size}
          .step=${this.step}
          ?autoValidate=${this.autoValidate}
          ?willValidate=${this.willValidate}
          ?validityTransform=${this.validityTransform}
          ?validateOnInitialRender=${this.validateOnInitialRender}
          .name=${this.name}
          .label=${this.label}
          ></mwc-textfield>
      </div>
    `
  }

  checkValidity() {
    return this.renderRoot.querySelector('#input').checkValidity();
  }

  reportValidity() {
    return this.renderRoot.querySelector('#input').reportValidity();
  }

  setCustomValidity(msg) {
    return this.renderRoot.querySelector('#input').setCustomValidity(msg);
  }

  layout() {
    return this.renderRoot.querySelector('#input').layout();
  }
}

window.customElements.define('atmus-input', AtmusInput);


