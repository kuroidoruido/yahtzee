import { Component, Event, EventEmitter, h, Prop } from '@stencil/core';
import { I18nKey, ScoreKey, SCORE_DEFINITIONS } from '../../yahtzee-toolkit';

export interface SelectedEvent {
  scoreKey: ScoreKey
}

@Component({
  tag: 'yahtzee-score-card',
  styleUrl: 'score-card.css',
  shadow: true,
})
export class ScoreCard {
  @Prop({ mutable: true }) scoreKey: ScoreKey = 'total';
  @Prop({ mutable: true })  value: number = 0;
  @Prop({ mutable: true }) diceValue: number = 0;
  @Prop({ mutable: true }) displayDiceValue: boolean = false;
  @Event() selected: EventEmitter<SelectedEvent>;

  constructor() {
    this.onClick = this.onClick.bind(this);
  }

  private get isSelectable(): boolean {
    return this.displayDiceValue && this.value === -1;
  }

  onClick() {
    const scoreDef = SCORE_DEFINITIONS[this.scoreKey];
    if (scoreDef.type === 'MANUAL' && this.isSelectable) {
      this.selected.emit({ scoreKey: this.scoreKey });
    }
  }

  render() {
    const scoreDef = SCORE_DEFINITIONS[this.scoreKey];
    const value = this.value < 0 ? 0 : this.value;
    const diceValue = this.diceValue < 0 ? 0 : this.diceValue;
    const i18nKey = ('score.name.' + scoreDef.key) as I18nKey;
    if (scoreDef.type === 'AUTO') {
      return (
        <fieldset>
          <legend><yahtzee-i18n i18n={i18nKey}></yahtzee-i18n></legend>
          <div class="value">{value}</div>
          <button type="button" class="hidden">
            <span class="icon">⇦</span>
            <span class="dice-value">&nbsp;</span>
          </button>
        </fieldset>
      );
    } else {
      const fieldsetClass = this.isSelectable ? 'selectable' : '';
      const valueDiceClass = this.isSelectable ? '' : 'hidden';
      return (
        <fieldset class={fieldsetClass} onClick={this.onClick}>
          <legend><yahtzee-i18n i18n={i18nKey}></yahtzee-i18n></legend>
          <div class="value">{value}</div>
          <button type="button" class={valueDiceClass}>
            <span class="icon">⇦</span>
            <span class="dice-value">{diceValue}</span>
          </button>
        </fieldset>
      );
    }
  }
}
