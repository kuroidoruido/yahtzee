import { Component, Fragment, h, State } from '@stencil/core';
import { store, Unsubscribe } from '@stencil/redux';
import { DiceIndex } from '../../../../yahtzee-toolkit/src/utils/dice.utils';
import { actions, DiceLocks, DiceSet } from '../../yahtzee-toolkit';

@Component({
  tag: 'yahtzee-dice-container',
  styleUrl: 'dice-container.css',
  shadow: true,
})
export class DiceContainer {
  @State() dices: DiceSet = [1, 1, 1, 1, 1];
  @State() diceLocks: DiceLocks = [false, false, false, false, false];
  @State() hasRoll: boolean = false;
  @State() rollLock: boolean = false;
  unsubscribe!: Unsubscribe;
  dicesRoll: typeof actions.dicesRoll;
toggleLock: typeof actions.toggleLock;

  constructor() {
    this.rollClickHandler = this.rollClickHandler.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  connectedCallback() {
    this.unsubscribe = store.mapStateToProps(this, state => {
      return { dices: state.dices, diceLocks: state.diceLocks, rollLock: state.roll >= 3, hasRoll: state.roll >= 1 };
    });
    store.mapDispatchToProps(this, { dicesRoll: actions.dicesRoll, toggleLock: actions.toggleLock });
  }

  disconnectedCallback() {
    this.unsubscribe();
  }

  rollClickHandler() {
    this.dicesRoll();
  }

  onClick(diceIndex: DiceIndex) {
    return () => {
      if (this.hasRoll) {
        this.toggleLock({ diceIndex });
      }
    };
  }

  render() {
    return (
      <Fragment>
        <div class="dice-container">
          {this.dices.map(
            (dice, index) => (
                <yahtzee-dice
                  value={dice}
                  locked={this.diceLocks[index]}
                  onClick={this.onClick(index as DiceIndex)}
                ></yahtzee-dice>
              )
          )}
        </div>
        <button
          type="button"
          class="roll-button btn"
          onClick={this.rollClickHandler}
          disabled={this.rollLock}
        >
          <span class="icon">↻</span>
          <yahtzee-i18n i18n="dice-container.roll"></yahtzee-i18n>
        </button>
      </Fragment>
    );
  }
}
