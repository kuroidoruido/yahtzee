import { LitElement, html, css } from 'lit';
import { customElement } from 'lit/decorators.js';
import { connect } from 'pwa-helpers/connect-mixin';
import {
  actions,
  AppState,
  makeScoreBoard,
  ScoreBoard,
  ScoreKey,
  store,
  SUPERIOR_SCORE_KEYS,
  INFERIOR_SCORE_KEYS,
  I18nKey,
} from 'yahtzee-toolkit';
import { SelectedEvent } from './score-card';

@customElement('yahtzee-score-container')
export class ScoreContainer extends connect(store)(LitElement) {
  static styles = css`
    :host {
      display: block;
    }
    .score-container {
      display: flex;
      flex-direction: row;
    }
    fieldset {
      flex: 1 1 50%;
      border: none;
    }
  `;
  scores: ScoreBoard = makeScoreBoard();
  scoreOfDices: ScoreBoard = makeScoreBoard();
  roll: number = 0;

  stateChanged(state: AppState) {
    this.scores = state.scores;
    this.requestUpdate('scores');
    this.scoreOfDices = state.scoreOfDices;
    this.requestUpdate('scoreOfDices');
    this.roll = state.roll;
    this.requestUpdate('roll');
  }

  onClick({ detail: { scoreKey } }: SelectedEvent) {
    store.dispatch(actions.setScore({ scoreKey }));
  }

  renderScoreColumn(scoreKeys: ScoreKey[], columnTitle: I18nKey) {
    const displayDiceValue = this.roll > 0;
    return html`
      <fieldset>
        <legend><yahtzee-i18n id=${columnTitle}></yahtzee-i18n></legend>
        ${scoreKeys.map(
          (scoreKey) =>
            html`<yahtzee-score-card
              .scoreKey=${scoreKey}
              .value=${this.scores[scoreKey]}
              .diceValue=${this.scoreOfDices[scoreKey]}
              .displayDiceValue=${displayDiceValue}
              @selected=${this.onClick}
            ></yahtzee-score-card>`
        )}
      </fieldset>
    `;
  }

  render() {
    return html`
      <div class="score-container">
        ${this.renderScoreColumn(
          SUPERIOR_SCORE_KEYS,
          'score-container.superior'
        )}
        ${this.renderScoreColumn(
          INFERIOR_SCORE_KEYS,
          'score-container.inferior'
        )}
      </div>
      <div class="total-container">
        <yahtzee-score-card
          scoreKey="total"
          .value=${this.scores.total}
          .diceValue=${this.scoreOfDices.total}
        ></yahtzee-score-card>
      </div>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'yahtzee-score-container': ScoreContainer;
  }
}
