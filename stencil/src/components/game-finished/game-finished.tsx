import { Component, h } from '@stencil/core';
import { store } from '@stencil/redux';
import { actions } from '../../yahtzee-toolkit';

@Component({
  tag: 'yahtzee-game-finished',
  styleUrl: 'game-finished.css',
  shadow: true,
})
export class GameFinished {
  resetGame: typeof actions.resetGame;

  constructor() {
    this.onClick = this.onClick.bind(this);
  }

  connectedCallback() {
    store.mapDispatchToProps(this, { resetGame: actions.resetGame });
  }

  onClick() {
    this.resetGame();
  }

  render() {
    return (
      <div class="game-finished-container">
        <yahtzee-i18n i18n="game-finished"></yahtzee-i18n>
        <button class="btn" type="button" onClick={this.onClick}>
          <span class="icon">↶</span>
          <yahtzee-i18n i18n="game-finished.restart"></yahtzee-i18n>
        </button>
      </div>
    );
  }
}
