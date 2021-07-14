import { Component, Fragment, h, State } from '@stencil/core';
import { store, Unsubscribe } from '@stencil/redux';
import { actions, AppState, I18nKey, INFERIOR_SCORE_KEYS, ScoreBoard, ScoreKey, SUPERIOR_SCORE_KEYS, makeScoreBoard } from '../../yahtzee-toolkit';
import { SelectedEvent } from '../score-card/score-card';

@Component({
  tag: 'yahtzee-score-container',
  styleUrl: 'score-container.css',
  shadow: true,
})
export class ScoreContainer {
  @State() scores: ScoreBoard = makeScoreBoard();
  @State() scoreOfDices: ScoreBoard = makeScoreBoard();
  @State() roll: number = 0;
  unsubscribe!: Unsubscribe;
  setScore: typeof actions.setScore;
  toggleLock: typeof actions.toggleLock;

  constructor() {
    this.onClick = this.onClick.bind(this);
  }

  connectedCallback() {
    this.unsubscribe = store.mapStateToProps(this, (state: AppState) => {
      return { scores: state.scores, scoreOfDices: state.scoreOfDices, roll: state.roll };
    });
    store.mapDispatchToProps(this, { setScore: actions.setScore, toggleLock: actions.toggleLock });
  }

  disconnectedCallback() {
    this.unsubscribe();
  }

  onClick({ detail: {scoreKey} }: CustomEvent<SelectedEvent>) {
    this.setScore({ scoreKey });
  }

  renderScoreColumn(scoreKeys: ScoreKey[], columnTitle: I18nKey) {
    const displayDiceValue = this.roll > 0;
    return (
      <fieldset>
        <legend><yahtzee-i18n i18n={columnTitle}></yahtzee-i18n></legend>
        {scoreKeys.map(
          (scoreKey) => (
            <yahtzee-score-card
              scoreKey={scoreKey}
              value={this.scores[scoreKey]}
              diceValue={this.scoreOfDices[scoreKey]}
              displayDiceValue={displayDiceValue}
              onSelected={this.onClick}
            ></yahtzee-score-card>
          )
        )}
      </fieldset>
    );
  }

  render() {
    return (
      <Fragment>
        <div class="score-container">
          {this.renderScoreColumn(SUPERIOR_SCORE_KEYS, 'score-container.superior')}
          {this.renderScoreColumn(INFERIOR_SCORE_KEYS, 'score-container.inferior')}
        </div>
        <div class="total-container">
          <yahtzee-score-card
            scoreKey="total"
            value={this.scores.total}
            diceValue={this.scoreOfDices.total}
          ></yahtzee-score-card>
        </div>
      </Fragment>
    );
  }
}
