import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { dicePipsPositionning } from './style/dice-pips-positioning';

@customElement('yahtzee-dice')
export class Dice extends LitElement {
  static styles = css`
    :host {
      display: block;
    }
    ${dicePipsPositionning(68)}
  `;

  @property({ type: Number })
  value: number = 1;

  @property({ type: Boolean })
  locked: boolean = false;

  render() {
    const className = `dice dice-${this.value} ${this.locked ? 'locked' : ''}`;
    return html`<div class="${className}" role="img" alt="${this.value}">
      ${new Array(this.value).fill(html`<div class="pip"></div>`)}
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'yahtzee-dice': Dice;
  }
}
