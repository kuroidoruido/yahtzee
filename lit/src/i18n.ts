import { LitElement, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { connect } from 'pwa-helpers/connect-mixin';
import {
  AppState,
  DEFAULT_LANG,
  i18n,
  I18nKey,
  store,
  SupportedLanguages,
} from 'yahtzee-toolkit';

@customElement('yahtzee-i18n')
export class I18n extends connect(store)(LitElement) {
  static styles = css`
    :host {
      display: inline;
    }
  `;

  @property({ type: String })
  id: I18nKey = '';

  currentLang: SupportedLanguages = DEFAULT_LANG;

  stateChanged(state: AppState) {
    this.currentLang = state.currentLang;
    this.requestUpdate('currentLang');
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return i18n(this.currentLang, this.id);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'yahtzee-i18n': I18n;
  }
}
