import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { actions, store } from 'yahtzee-toolkit';
import { btnCss } from './style/btn.style';

@customElement('yahtzee-game-finished')
export class GameFinished extends LitElement {
  static styles = css`
    ${btnCss}
    :host {
      display: block;
    }
    .game-finished-container {
      margin: auto;
      text-align: center;
    }
    .btn {
      margin: 1.5rem auto;
    }
  `;

  onClick() {
    store.dispatch(actions.resetGame());
  }

  render() {
    return html`
      <div class="game-finished-container">
        <yahtzee-i18n id="game-finished"></yahtzee-i18n>
        <button class="btn" type="button" @click=${this.onClick}>
          <span class="icon">↶</span>
          <yahtzee-i18n id="game-finished.restart"></yahtzee-i18n>
        </button>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'yahtzee-game-finished': GameFinished;
  }
}
