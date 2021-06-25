import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { connect } from 'pwa-helpers/connect-mixin';
import { actions, AppState, DiceLocks, DiceSet, store } from 'yahtzee-toolkit';
import { DiceIndex } from 'yahtzee-toolkit/src/utils/dice.utils';
import { btnCss } from './style/btn.style';

@customElement('yahtzee-dice-container')
export class DiceContainer extends connect(store)(LitElement) {
  static styles = css`
    ${btnCss}
    :host {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
    }
    .dice-container {
      display: flex;
      flex-direction: row;
      gap: 6px;
      width: fit-content;
    }
    .roll-button {
      margin-left: 6px;
    }
  `;
  dices: DiceSet = [1, 1, 1, 1, 1];
  diceLocks: DiceLocks = [false, false, false, false, false];
  hasRoll: boolean = false;
  rollLock: boolean = false;

  stateChanged(state: AppState) {
    this.dices = state.dices;
    this.requestUpdate('dices');
    this.diceLocks = state.diceLocks;
    this.requestUpdate('diceLocks');
    this.rollLock = state.roll >= 3;
    this.requestUpdate('rollLock');
    this.hasRoll = state.roll >= 1;
    this.requestUpdate('hasRoll');
  }

  rollClickHandler() {
    store.dispatch(actions.dicesRoll());
  }

  onClick(diceIndex: DiceIndex) {
    return () => {
      if (this.hasRoll) {
        store.dispatch(actions.toggleLock({ diceIndex }));
      }
    };
  }

  render() {
    return html`
      <div class="dice-container">
        ${this.dices.map(
          (dice, index) =>
            html`
              <yahtzee-dice
                .value=${dice}
                .locked=${this.diceLocks[index]}
                @click="${this.onClick(index as DiceIndex)}"
              ></yahtzee-dice>
            `
        )}
      </div>
      <button
        type="button"
        class="roll-button btn"
        @click=${this.rollClickHandler}
        .disabled=${this.rollLock}
      >
        <span class="icon">↻</span>
        <yahtzee-i18n id="dice-container.roll"></yahtzee-i18n>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'yahtzee-dice-container': DiceContainer;
  }
}
