import { ScoreBoard } from "../models";

export function makeScoreBoard(): ScoreBoard {
  return {
    "superior.ace": -1,
    "superior.two": -1,
    "superior.three": -1,
    "superior.four": -1,
    "superior.five": -1,
    "superior.six": -1,
    "superior.bonus": 0,
    "superior.total": 0,
    "inferior.3ofKind": -1,
    "inferior.4ofKind": -1,
    "inferior.fullHouse": -1,
    "inferior.lowStraight": -1,
    "inferior.highStraight": -1,
    "inferior.yahtzee": -1,
    "inferior.chance": -1,
    "inferior.total": 0,
    total: 0,
  };
}
