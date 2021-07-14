import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'yahtzee-dice',
  styleUrl: 'dice.css',
  shadow: true,
})
export class Dice {
  @Prop({ reflect: true, mutable: true }) value: number = 1;
  @Prop({ reflect: true, mutable: true }) locked: boolean = false;

  render() {
    const className = `dice dice-${this.value} ${this.locked ? 'locked' : ''}`;
    const props = { alt: this.value, className };
    const pips = new Array(this.value).fill(null);
    return (
      <div class={className} role="img" {...props}>
        {pips.map(() => <div class="pip"></div>)}
      </div>
    );
  }
}
