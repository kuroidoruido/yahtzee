import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { connect } from 'pwa-helpers/connect-mixin';
import {
  actions,
  AppState,
  changeLang,
  store,
  SupportedLanguages,
  SUPPORTED_LANGUAGES,
} from 'yahtzee-toolkit';
import { selectCss } from './style/select.style';

@customElement('yahtzee-header')
export class Header extends connect(store)(LitElement) {
  static styles = css`
    ${selectCss}
    :host {
      display: block;
    }
    header {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
  `;
  currentLang: SupportedLanguages = 'en';

  stateChanged(state: AppState) {
    this.currentLang = state.currentLang;
    this.requestUpdate('currentLang');
  }

  rollClickHandler() {
    store.dispatch(actions.dicesRoll());
  }

  onLangChange(event: Event) {
    const lang = (event?.target as any)?.value;
    if (SUPPORTED_LANGUAGES.includes(lang)) {
      store.dispatch(changeLang(lang));
    }
  }

  // createRenderRoot() {
  //   return this;
  // }

  render() {
    return html`
      <header>
        <h1>Anthony's Yahtzee</h1>
        <select name="lang" class="select" @change=${this.onLangChange}>
          ${SUPPORTED_LANGUAGES.map(
            (lang) =>
              html`<option .selected=${lang === this.currentLang}>
                ${lang}
              </option>`
          )}
        </select>
      </header>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'yahtzee-header': Header;
  }
}
