import { css, unsafeCSS } from '@lit/reactive-element';

export function dicePipsPositionning(diceWidth: number) {
  const paddingAndGap = 2;
  const pipWidth = Math.floor((diceWidth - 4 * paddingAndGap) / 3 - 1);
  const baseColor = unsafeCSS('#212121');
  const hoverColor = unsafeCSS('#757575');
  const lockColor = unsafeCSS('#0097A7');
  const lockHoverColor = unsafeCSS('#00BCD4');
  return css`
    .dice {
      width: ${diceWidth}px;
      height: ${diceWidth}px;
      border: 5px solid ${baseColor};
      border-radius: 10px;
      display: grid;
      grid-template-rows: 33% 33% 33%;
      grid-template-columns: 33% 33% 33%;
      grid-gap: ${paddingAndGap}px;
      padding: ${paddingAndGap}px;
    }
    .dice .pip {
      background-color: ${baseColor};
      width: ${pipWidth}px;
      height: ${pipWidth}px;
      border-radius: 10px;
    }
    .dice.locked {
      border-color: ${lockColor};
    }
    .dice.locked .pip {
      background-color: ${lockColor};
    }
    .dice:hover {
      cursor: pointer;
    }
    .dice:not(.locked):hover {
      border-color: ${hoverColor};
    }
    .dice:not(.locked):hover .pip {
      background-color: ${hoverColor};
    }
    .dice.locked:hover {
      border-color: ${lockHoverColor};
    }
    .dice.locked:hover .pip {
      background-color: ${lockHoverColor};
    }

    .dice .pip:nth-child(1) {
      grid-area: a;
    }
    .dice .pip:nth-child(2) {
      grid-area: b;
    }
    .dice .pip:nth-child(3) {
      grid-area: c;
    }
    .dice .pip:nth-child(4) {
      grid-area: d;
    }
    .dice .pip:nth-child(5) {
      grid-area: e;
    }
    .dice .pip:nth-child(6) {
      grid-area: f;
    }
    .dice[alt='1'] {
      grid-template-areas:
        '. . .'
        '. a .'
        '. . .';
    }
    .dice[alt='2'] {
      grid-template-areas:
        '. . a'
        '. . .'
        'b . .';
    }
    .dice[alt='3'] {
      grid-template-areas:
        '. . a'
        '. b .'
        'c . .';
    }
    .dice[alt='4'] {
      grid-template-areas:
        'a . b'
        '. . .'
        'c . d';
    }
    .dice[alt='5'] {
      grid-template-areas:
        'a . b'
        '. c .'
        'd . e';
    }
    .dice[alt='6'] {
      grid-template-areas:
        'a . b'
        'c . d'
        'e . f';
    }
  `;
}
