import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { actions, store } from 'yahtzee-toolkit';
import { btnCss } from './style/btn.style';

@customElement('yahtzee-no-game')
export class NoGame extends LitElement {
  static styles = css`
    ${btnCss}
    :host {
      display: block;
    }
    .no-game-container {
      margin: auto;
      text-align: center;
    }
    .btn {
      margin: 1.5rem auto;
    }
  `;

  onClick() {
    store.dispatch(actions.dicesRoll());
  }

  render() {
    return html`
      <div class="no-game-container">
        <yahtzee-i18n id="no-game"></yahtzee-i18n>
        <button class="btn" type="button" @click=${this.onClick}>
          <span class="icon">↻</span>
          <yahtzee-i18n id="no-game.roll"></yahtzee-i18n>
        </button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'yahtzee-no-game': NoGame;
  }
}
