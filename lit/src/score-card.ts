import { css, html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { I18nKey, ScoreKey, SCORE_DEFINITIONS } from 'yahtzee-toolkit';

export type SelectedEvent = CustomEvent<{ scoreKey: ScoreKey }>;

export function selectedEvent(scoreKey: ScoreKey): SelectedEvent {
  return new CustomEvent('selected', {
    detail: { scoreKey },
    bubbles: true,
    composed: true,
    cancelable: true,
  });
}

@customElement('yahtzee-score-card')
export class ScoreCard extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    fieldset {
      display: flex;
      flex-direction: row;
      align-items: center;
    }
    fieldset.selectable {
      cursor: pointer;
    }
    fieldset.selectable:hover {
      border-color: rgba(117, 117, 117);
    }
    .value {
      font-size: 1.5rem;
    }
    .dice-value {
      font-size: 1.5rem;
    }
    button {
      display: flex;
      flex-direction: row;
      align-items: center;
      border: none;
      background-color: transparent;
      margin: 0;
      padding: 0;
    }
    button.hidden {
      visibility: hidden;
    }
    button .icon {
      font-size: 200%;
      padding: 0 1rem;
    }
  `;

  @property({ type: String })
  private scoreKey: ScoreKey = 'total';

  @property({ type: Number })
  value: number = 0;

  @property({ type: Number })
  diceValue: number = 0;

  @property({ type: Boolean })
  displayDiceValue: boolean = false;

  private get isSelectable(): boolean {
    return this.displayDiceValue && this.value === -1;
  }

  onClick() {
    const scoreDef = SCORE_DEFINITIONS[this.scoreKey];
    if (scoreDef.type === 'MANUAL' && this.isSelectable) {
      this.dispatchEvent(selectedEvent(this.scoreKey));
    }
  }

  render() {
    const scoreDef = SCORE_DEFINITIONS[this.scoreKey];
    const value = this.value < 0 ? 0 : this.value;
    const diceValue = this.diceValue < 0 ? 0 : this.diceValue;
    const i18nKey = ('score.name.' + scoreDef.key) as I18nKey;
    if (scoreDef.type === 'AUTO') {
      return html`
        <fieldset>
          <legend><yahtzee-i18n id=${i18nKey}></yahtzee-i18n></legend>
          <div class="value">${value}</div>
          <button type="button" class="hidden">
            <span class="icon">⇦</span>
            <span class="dice-value">&nbsp;</span>
          </button>
        </fieldset>
      `;
    } else {
      const fieldsetClass = this.isSelectable ? 'selectable' : '';
      const valueDiceClass = this.isSelectable ? '' : 'hidden';
      return html`
        <fieldset class=${fieldsetClass} @click=${this.onClick}>
          <legend><yahtzee-i18n id=${i18nKey}></yahtzee-i18n></legend>
          <div class="value">${value}</div>
          <button type="button" class=${valueDiceClass}>
            <span class="icon">⇦</span>
            <span class="dice-value">${diceValue}</span>
          </button>
        </fieldset>
      `;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'yahtzee-score-card': ScoreCard;
  }
}
