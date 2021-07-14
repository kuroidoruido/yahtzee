import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { connect } from 'pwa-helpers/connect-mixin';
import { AppState, GameStatus, store } from 'yahtzee-toolkit';

@customElement('yahtee-app')
export class App extends connect(store)(LitElement) {
  static styles = css`
    :host {
      display: block;
      max-width: 1200px;
      margin: auto;
      font-family: sans-serif;
    }
    h1 {
      color: rgba(117, 117, 117, 0.4);
    }
    yahtzee-dice-container {
      margin-top: 3rem;
    }
    yahtzee-score-container {
      margin-top: 3rem;
      max-width: 700px;
      margin-left: auto;
      margin-right: auto;
    }
  `;

  gameStatus: GameStatus = 'NO_GAME';

  stateChanged(state: AppState) {
    this.gameStatus = state.gameStatus;
    this.requestUpdate('gameStatus');
  }

  render() {
    let mainContent;
    switch (this.gameStatus) {
      case 'NO_GAME':
        mainContent = html`
          <yahtzee-no-game></yahtzee-no-game>
          <yahtzee-score-container></yahtzee-score-container>
        `;
        break;
      case 'PLAYING':
        mainContent = html`
          <yahtzee-dice-container></yahtzee-dice-container>
          <yahtzee-score-container></yahtzee-score-container>
        `;
        break;
      case 'GAME_FINISHED':
        mainContent = html`
          <yahtzee-game-finished></yahtzee-game-finished>
          <yahtzee-score-container></yahtzee-score-container>
        `;
        break;
    }
    return html`
      <yahtzee-header></yahtzee-header>
      ${mainContent}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'yahtee-app': App;
  }
}
