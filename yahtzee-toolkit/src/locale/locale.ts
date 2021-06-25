import { SupportedLanguages } from "../utils/language.utils";

const locales = {
  "": { en: "", fr: "" },
  "no-game": {
    en: "You can start playing by clicking on Start game.",
    fr: "You pouvez commencez à jouer en cliquant sur Lancer la partie.",
  },
  "no-game.roll": { en: "Start game", fr: "Lancer la partie" },
  "game-finished": {
    en: "You finished the game. You can start a new game by clicking on Restart.",
    fr: "You avez terminé la partie. Vous pouvez en démarrer une nouvelle en cliquant sur Rejouer.",
  },
  "game-finished.restart": { en: "Restart", fr: "Rejouer" },
  "dice-container.roll": { en: "Roll", fr: "Lancer" },
  "score-container.superior": { en: "Superior", fr: "Supérieur" },
  "score-container.inferior": { en: "Inferior", fr: "Inférieur" },

  "score.name.superior.ace": { en: "Aces", fr: "As" },
  "score.name.superior.two": { en: "Twos", fr: "Deux" },
  "score.name.superior.three": { en: "Threes", fr: "Trois" },
  "score.name.superior.four": { en: "Fours", fr: "Quatre" },
  "score.name.superior.five": { en: "Fives", fr: "Cinq" },
  "score.name.superior.six": { en: "Sixes", fr: "Six" },
  "score.name.superior.bonus": { en: "Bonus", fr: "Prime" },
  "score.name.superior.total": { en: "Superior total", fr: "Total supérieur" },
  "score.name.inferior.3ofKind": { en: "3 of kind", fr: "Brelan" },
  "score.name.inferior.4ofKind": { en: "4 of kind", fr: "Carré" },
  "score.name.inferior.fullHouse": { en: "Full House", fr: "Full" },
  "score.name.inferior.lowStraight": { en: "Low Straight", fr: "Petite Suite" },
  "score.name.inferior.highStraight": {
    en: "High Straight",
    fr: "Grande Suite",
  },
  "score.name.inferior.yahtzee": { en: "Yahtzee", fr: "Yahtzee" },
  "score.name.inferior.chance": { en: "Chance", fr: "Chance" },
  "score.name.inferior.total": { en: "Inferior total", fr: "Total inférieur" },
  "score.name.total": { en: "Total", fr: "Total" },
} as const;

export type I18nKey = keyof typeof locales;

export type I18NString = { [lang in SupportedLanguages]: string };

export const i18nValues: Readonly<{ [key in I18nKey]: Readonly<I18NString> }> =
  locales;

export function i18n(lang: SupportedLanguages, key: I18nKey): string {
  return i18nValues[key][lang];
}
