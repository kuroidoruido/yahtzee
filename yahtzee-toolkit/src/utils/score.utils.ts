import { ScoreBoard, ScoreDefinition, ScoreKey } from "../models";
import { computeRepartition, VALID_ROLL_VALUES } from "./dice.utils";

function is(n: number): (x: number) => boolean {
  return (x) => x === n;
}

function sum(acc: number, current: number): number {
  return acc + current;
}

const VALID_LOW_STRAIGHT: number[][] = [
  [1, 2, 3, 4],
  [2, 3, 4, 5],
  [3, 4, 5, 6],
];
const VALID_HIGH_STRAIGHT: number[][] = [
  [1, 2, 3, 4, 5],
  [2, 3, 4, 5, 6],
];

export const SCORE_DEFINITIONS: { [scoreKey in ScoreKey]: ScoreDefinition } = {
  "superior.ace": {
    key: "superior.ace",
    type: "MANUAL",
    compute(currentDices) {
      return currentDices.filter(is(1)).reduce(sum, 0);
    },
  },
  "superior.two": {
    key: "superior.two",
    type: "MANUAL",
    compute(currentDices) {
      return currentDices.filter(is(2)).reduce(sum, 0);
    },
  },
  "superior.three": {
    key: "superior.three",
    type: "MANUAL",
    compute(currentDices) {
      return currentDices.filter(is(3)).reduce(sum, 0);
    },
  },
  "superior.four": {
    key: "superior.four",
    type: "MANUAL",
    compute(currentDices) {
      return currentDices.filter(is(4)).reduce(sum, 0);
    },
  },
  "superior.five": {
    key: "superior.five",
    type: "MANUAL",
    compute(currentDices) {
      return currentDices.filter(is(5)).reduce(sum, 0);
    },
  },
  "superior.six": {
    key: "superior.six",
    type: "MANUAL",
    compute(currentDices) {
      return currentDices.filter(is(6)).reduce(sum, 0);
    },
  },
  "superior.bonus": {
    key: "superior.bonus",
    type: "AUTO",
    compute(_, scoreBoard) {
      const s = scoreExtractor(scoreBoard);
      const subtotal =
        s("superior.ace") +
        s("superior.two") +
        s("superior.three") +
        s("superior.four") +
        s("superior.five") +
        s("superior.six");
      return subtotal >= 63 ? 35 : 0;
    },
  },
  "superior.total": {
    key: "superior.total",
    type: "AUTO",
    compute(_, scoreBoard) {
      const s = scoreExtractor(scoreBoard);
      return (
        s("superior.ace") +
        s("superior.two") +
        s("superior.three") +
        s("superior.four") +
        s("superior.five") +
        s("superior.six") +
        s("superior.bonus")
      );
    },
  },
  "inferior.3ofKind": {
    key: "inferior.3ofKind",
    type: "MANUAL",
    compute(currentDices) {
      const byDiceFace = computeRepartition(currentDices);
      const has3ofKind = VALID_ROLL_VALUES.some(
        (dice) => byDiceFace[dice] >= 3
      );
      return has3ofKind ? currentDices.reduce(sum, 0) : 0;
    },
  },
  "inferior.4ofKind": {
    key: "inferior.4ofKind",
    type: "MANUAL",
    compute(currentDices) {
      const byDiceFace = computeRepartition(currentDices);
      const has4ofKind = VALID_ROLL_VALUES.some(
        (dice) => byDiceFace[dice] >= 4
      );
      return has4ofKind ? currentDices.reduce(sum, 0) : 0;
    },
  },
  "inferior.fullHouse": {
    key: "inferior.fullHouse",
    type: "MANUAL",
    compute(currentDices) {
      const byDiceFace = computeRepartition(currentDices);
      const [first, second] = VALID_ROLL_VALUES.filter(
        (dice) => byDiceFace[dice] >= 2
      );
      const hasFullHouse =
        byDiceFace[first] === 5 ||
        (byDiceFace[first] === 3 && byDiceFace[second] === 2) ||
        (byDiceFace[first] === 2 && byDiceFace[second] === 3);
      return hasFullHouse ? 25 : 0;
    },
  },
  "inferior.lowStraight": {
    key: "inferior.lowStraight",
    type: "MANUAL",
    compute(currentDices) {
      const hasLowStraight = VALID_LOW_STRAIGHT.some((validDices) =>
        validDices.every((dice) => currentDices.includes(dice))
      );
      return hasLowStraight ? 30 : 0;
    },
  },
  "inferior.highStraight": {
    key: "inferior.highStraight",
    type: "MANUAL",
    compute(currentDices) {
      const sorted = currentDices.slice().sort();
      const hasLowStraight = VALID_HIGH_STRAIGHT.some((validDices) =>
        validDices.every((dice, index) => dice === sorted[index])
      );
      return hasLowStraight ? 40 : 0;
    },
  },
  "inferior.yahtzee": {
    key: "inferior.yahtzee",
    type: "MANUAL",
    compute(currentDices) {
      const byDiceFace = computeRepartition(currentDices);
      const hasYahtzee = VALID_ROLL_VALUES.some(
        (dice) => byDiceFace[dice] >= 5
      );
      return hasYahtzee ? 50 : 0;
    },
  },
  "inferior.chance": {
    key: "inferior.chance",
    type: "MANUAL",
    compute(currentDices) {
      return currentDices.reduce(sum);
    },
  },
  "inferior.total": {
    key: "inferior.total",
    type: "AUTO",
    compute(_, scoreBoard) {
      const s = scoreExtractor(scoreBoard);
      return (
        s("inferior.3ofKind") +
        s("inferior.4ofKind") +
        s("inferior.fullHouse") +
        s("inferior.lowStraight") +
        s("inferior.highStraight") +
        s("inferior.yahtzee") +
        s("inferior.chance")
      );
    },
  },
  total: {
    key: "total",
    type: "AUTO",
    compute(_, scoreBoard) {
      return scoreBoard["superior.total"] + scoreBoard["inferior.total"];
    },
  },
} as const;

function scoreExtractor(scoreBoard: ScoreBoard) {
  return (key: ScoreKey) => (scoreBoard[key] === -1 ? 0 : scoreBoard[key]);
}

export const ALL_SCORE_KEYS: ScoreKey[] = [
  "superior.ace",
  "superior.two",
  "superior.three",
  "superior.four",
  "superior.five",
  "superior.six",
  "superior.bonus",
  "superior.total",
  "inferior.3ofKind",
  "inferior.4ofKind",
  "inferior.fullHouse",
  "inferior.lowStraight",
  "inferior.highStraight",
  "inferior.yahtzee",
  "inferior.chance",
  "inferior.total",
  "total",
];

export const AUTOMATIC_SCORE_KEYS: ScoreKey[] = ALL_SCORE_KEYS.filter(
  (scoreKey) => SCORE_DEFINITIONS[scoreKey].type === "AUTO"
);
export const MANUAL_SCORE_KEYS: ScoreKey[] = ALL_SCORE_KEYS.filter(
  (scoreKey) => SCORE_DEFINITIONS[scoreKey].type === "MANUAL"
);

export const SUPERIOR_SCORE_KEYS: ScoreKey[] = ALL_SCORE_KEYS.filter(
  (scoreKey) => scoreKey.startsWith("superior.")
);
export const INFERIOR_SCORE_KEYS: ScoreKey[] = ALL_SCORE_KEYS.filter(
  (scoreKey) => scoreKey.startsWith("inferior.")
);
