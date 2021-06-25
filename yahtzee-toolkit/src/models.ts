export type ScoreKey =
  | "superior.ace"
  | "superior.two"
  | "superior.three"
  | "superior.four"
  | "superior.five"
  | "superior.six"
  | "superior.bonus"
  | "superior.total"
  | "inferior.3ofKind"
  | "inferior.4ofKind"
  | "inferior.fullHouse"
  | "inferior.lowStraight"
  | "inferior.highStraight"
  | "inferior.yahtzee"
  | "inferior.chance"
  | "inferior.total"
  | "total";

export type ScoreBoard = { [key in ScoreKey]: number };

export type DiceSet = [number, number, number, number, number];
export type DiceLocks = [boolean, boolean, boolean, boolean, boolean];

export interface ScoreDefinition {
  readonly key: ScoreKey;
  readonly type: ScoreDefinitionType;
  compute(currentDices: DiceSet, scoreBoard: ScoreBoard): number;
}

export type ScoreDefinitionType = "MANUAL" | "AUTO";

export type GameStatus = "NO_GAME" | "PLAYING" | "GAME_FINISHED";
