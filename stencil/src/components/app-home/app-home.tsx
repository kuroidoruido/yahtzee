import { Component, Fragment, h, State } from '@stencil/core';
import { store, Unsubscribe } from '@stencil/redux';
import { GameStatus } from '../../yahtzee-toolkit';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.css',
  shadow: true,
})
export class AppHome {
  @State() gameStatus: GameStatus = 'NO_GAME';
  unsubscribe!: Unsubscribe;

  connectedCallback() {
    this.unsubscribe = store.mapStateToProps(this, state => {
      return { gameStatus: state.gameStatus };
    });
  }

  disconnectedCallback() {
    this.unsubscribe();
  }

  render() {
    switch (this.gameStatus) {
      case 'NO_GAME':
        return (<Fragment>
          <yahtzee-no-game></yahtzee-no-game>
          <yahtzee-score-container></yahtzee-score-container>
        </Fragment>);
      case 'PLAYING':
        return (<Fragment>
          <yahtzee-dice-container></yahtzee-dice-container>
          <yahtzee-score-container></yahtzee-score-container>
        </Fragment>);
      case 'GAME_FINISHED':
        return (<Fragment>
          <yahtzee-game-finished></yahtzee-game-finished>
          <yahtzee-score-container></yahtzee-score-container>
        </Fragment>);
    }
  }
}
