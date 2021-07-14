import { Component, h } from '@stencil/core';
import { store } from '@stencil/redux';
import { actions } from '../../yahtzee-toolkit';

@Component({
  tag: 'yahtzee-no-game',
  styleUrl: 'no-game.css',
  shadow: true,
})
export class NoGame {
  dicesRoll: typeof actions.dicesRoll;

  constructor() {
    this.onClick = this.onClick.bind(this);
  }

  connectedCallback() {
    store.mapDispatchToProps(this, { dicesRoll: actions.dicesRoll });
  }

  onClick() {
    this.dicesRoll();
  }

  render() {
    return (
      <div class="no-game-container">
        <yahtzee-i18n i18n="no-game"></yahtzee-i18n>
        <button class="btn" type="button" onClick={this.onClick}>
          <span class="icon">↻</span>
          <yahtzee-i18n i18n="no-game.roll"></yahtzee-i18n>
        </button>
      </div>
    );
  }
}
