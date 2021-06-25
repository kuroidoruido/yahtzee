import test, { ExecutionContext } from "ava";
import { DiceSet, ScoreBoard, ScoreDefinitionType, ScoreKey } from "../models";
import { makeScoreBoard } from "./score-board.utils";
import {
  ALL_SCORE_KEYS,
  AUTOMATIC_SCORE_KEYS,
  MANUAL_SCORE_KEYS,
  SCORE_DEFINITIONS,
} from "./score.utils";

test("Every score definition should be indexed with its key", (t) => {
  Object.entries(SCORE_DEFINITIONS).forEach(([index, scoreDef]) => {
    t.is(index, scoreDef.key);
  });
});

function checkComputeResult(
  t: ExecutionContext<unknown>,
  {
    scoreKey,
    dices = [1, 1, 1, 1, 1],
    scores = {},
  }: { scoreKey: ScoreKey; dices?: DiceSet; scores?: Partial<ScoreBoard> },
  expected: number
): void {
  const fakeScores: ScoreBoard = { ...makeScoreBoard(), ...scores };
  const actual = SCORE_DEFINITIONS[scoreKey].compute(dices, fakeScores);
  t.is(actual, expected);
}

test(
  "Ace compute should return sum of 1 dices",
  checkComputeResult,
  { scoreKey: "superior.ace", dices: [1, 3, 3, 1, 4] },
  2
);

test(
  "Ace compute should return 0 if no 1 dice",
  checkComputeResult,
  { scoreKey: "superior.ace", dices: [5, 3, 3, 2, 4] },
  0
);

test(
  "Twos compute should return sum of 2 dices",
  checkComputeResult,
  { scoreKey: "superior.two", dices: [2, 3, 3, 2, 4] },
  4
);

test(
  "Two compute should return 0 if no 2 dice",
  checkComputeResult,
  { scoreKey: "superior.two", dices: [5, 3, 3, 1, 4] },
  0
);

test(
  "Three compute should return sum of 3 dices",
  checkComputeResult,
  { scoreKey: "superior.three", dices: [2, 3, 3, 2, 4] },
  6
);

test(
  "Three compute should return 0 if no 3 dice",
  checkComputeResult,
  { scoreKey: "superior.three", dices: [5, 2, 2, 1, 4] },
  0
);

test(
  "Four compute should return sum of 4 dices",
  checkComputeResult,
  { scoreKey: "superior.four", dices: [2, 3, 4, 2, 4] },
  8
);

test(
  "Four compute should return 0 if no 4 dice",
  checkComputeResult,
  { scoreKey: "superior.four", dices: [5, 2, 2, 1, 3] },
  0
);

test(
  "Five compute should return sum of 5 dices",
  checkComputeResult,
  { scoreKey: "superior.five", dices: [2, 3, 5, 2, 5] },
  10
);

test(
  "Five compute should return 0 if no 5 dice",
  checkComputeResult,
  { scoreKey: "superior.five", dices: [6, 2, 2, 1, 3] },
  0
);

test(
  "Six compute should return sum of 6 dices",
  checkComputeResult,
  { scoreKey: "superior.six", dices: [6, 3, 5, 6, 5] },
  12
);

test(
  "Six compute should return 0 if no 6 dice",
  checkComputeResult,
  { scoreKey: "superior.six", dices: [5, 2, 2, 1, 3] },
  0
);

test(
  "Bonus compute should return 0 if inferior 1 to 6 total is under 63",
  checkComputeResult,
  {
    scoreKey: "superior.bonus",
    scores: {
      "superior.ace": 1,
      "superior.two": 2,
      "superior.three": 3,
      "superior.four": 4,
      "superior.five": 5,
      "superior.six": 6,
    },
  },
  0
);

test(
  "Bonus compute should return 35 if inferior 1 to 6 total is over or equal to 63",
  checkComputeResult,
  {
    scoreKey: "superior.bonus",
    scores: {
      "superior.ace": 3,
      "superior.two": 6,
      "superior.three": 9,
      "superior.four": 12,
      "superior.five": 10,
      "superior.six": 24,
    },
  },
  35
);
test(
  "Bonus compute should count never assign score as 0",
  checkComputeResult,
  {
    scoreKey: "superior.bonus",
    scores: {
      "superior.ace": -1,
      "superior.two": 8,
      "superior.three": 9,
      "superior.four": 12,
      "superior.five": 10,
      "superior.six": 24,
    },
  },
  35
);

test(
  "Superior Total compute should return sum of other inferiors",
  checkComputeResult,
  {
    scoreKey: "superior.total",
    scores: {
      "superior.ace": 3,
      "superior.two": 6,
      "superior.three": 9,
      "superior.four": 12,
      "superior.five": 15,
      "superior.six": 18,
      "superior.bonus": 35,
      "superior.total": -1000,
      "inferior.3ofKind": 100,
      "inferior.4ofKind": 101,
      "inferior.lowStraight": 102,
      "inferior.highStraight": 103,
      "inferior.fullHouse": 104,
      "inferior.yahtzee": 105,
      "inferior.chance": 106,
      "inferior.total": 107,
      total: 2000,
    },
  },
  98
);
test(
  "Superior Total compute should count never assign score as 0",
  checkComputeResult,
  {
    scoreKey: "superior.total",
    scores: {
      "superior.ace": -1,
      "superior.two": -1,
      "superior.three": -1,
      "superior.four": -1,
      "superior.five": -1,
      "superior.six": -1,
      "superior.bonus": 0,
      "superior.total": -1000,
      "inferior.3ofKind": 100,
      "inferior.4ofKind": 101,
      "inferior.lowStraight": 102,
      "inferior.highStraight": 103,
      "inferior.fullHouse": 104,
      "inferior.yahtzee": 105,
      "inferior.chance": 106,
      "inferior.total": 107,
      total: 2000,
    },
  },
  0
);

test(
  "3 of kind compute should return 0 if no dice is present 3 times",
  checkComputeResult,
  { scoreKey: "inferior.3ofKind", dices: [1, 2, 2, 3, 3] },
  0
);
test(
  "3 of kind compute should return dice sum if a dice is present 3 times",
  checkComputeResult,
  { scoreKey: "inferior.3ofKind", dices: [3, 1, 2, 3, 3] },
  12
);
test(
  "3 of kind compute should return dice sum if a dice is present 3 times and another one 2 times",
  checkComputeResult,
  { scoreKey: "inferior.3ofKind", dices: [3, 2, 2, 3, 3] },
  13
);
test(
  "3 of kind compute should return dice sum if a dice is present 4 times",
  checkComputeResult,
  { scoreKey: "inferior.3ofKind", dices: [1, 3, 3, 3, 3] },
  13
);
test(
  "3 of kind compute should return dice sum if a dice is present 5 times",
  checkComputeResult,
  { scoreKey: "inferior.3ofKind", dices: [2, 2, 2, 2, 2] },
  10
);

test(
  "4 of kind compute should return 0 if no dice is present 4 times",
  checkComputeResult,
  { scoreKey: "inferior.4ofKind", dices: [1, 2, 2, 3, 3] },
  0
);
test(
  "4 of kind compute should return dice sum if a dice is present 4 times",
  checkComputeResult,
  { scoreKey: "inferior.4ofKind", dices: [1, 3, 3, 3, 3] },
  13
);
test(
  "4 of kind compute should return dice sum if a dice is present 5 times",
  checkComputeResult,
  { scoreKey: "inferior.4ofKind", dices: [3, 3, 3, 3, 3] },
  15
);

test(
  "Yahtzee compute should return 0 if no dice is present 5 times",
  checkComputeResult,
  { scoreKey: "inferior.yahtzee", dices: [1, 2, 2, 3, 3] },
  0
);
test(
  "Yahtzee compute should return 50 if a dice is present 5 times",
  checkComputeResult,
  { scoreKey: "inferior.yahtzee", dices: [2, 2, 2, 2, 2] },
  50
);

test(
  "Full house compute should return 0 if there is no dice present 3 times and no dice present 2 times",
  checkComputeResult,
  { scoreKey: "inferior.fullHouse", dices: [1, 2, 2, 3, 3] },
  0
);
test(
  "Full house compute should return 25 if a dice is present 3 times and another one 2 times",
  checkComputeResult,
  { scoreKey: "inferior.fullHouse", dices: [3, 2, 2, 3, 3] },
  25
);
test(
  "Full house compute should return 25 if a dice is present 5 times",
  checkComputeResult,
  { scoreKey: "inferior.fullHouse", dices: [2, 2, 2, 2, 2] },
  25
);

test(
  "Low Straight compute should return 0 if there is no straigh of 4 dices",
  checkComputeResult,
  { scoreKey: "inferior.lowStraight", dices: [1, 2, 2, 3, 3] },
  0
);
test(
  "Low Straight compute should return 30 if dice includes straight 1,2,3,4",
  checkComputeResult,
  { scoreKey: "inferior.lowStraight", dices: [1, 2, 3, 4, 4] },
  30
);
test(
  "Low Straight compute should return 30 if dice includes straight 2,3,4,5",
  checkComputeResult,
  { scoreKey: "inferior.lowStraight", dices: [2, 2, 3, 4, 5] },
  30
);
test(
  "Low Straight compute should return 30 if dice includes straight 3,4,5,6",
  checkComputeResult,
  { scoreKey: "inferior.lowStraight", dices: [1, 3, 4, 5, 6] },
  30
);
test(
  "Low Straight compute should return 30 if dice includes 2 low straight ",
  checkComputeResult,
  { scoreKey: "inferior.lowStraight", dices: [2, 3, 4, 5, 6] },
  30
);

test(
  "High Straight compute should return 0 if there is no straigh of 5 dices",
  checkComputeResult,
  { scoreKey: "inferior.highStraight", dices: [1, 2, 2, 3, 3] },
  0
);
test(
  "High Straight compute should return 40 if dice is straight 1,2,3,4,5",
  checkComputeResult,
  { scoreKey: "inferior.highStraight", dices: [1, 2, 3, 4, 5] },
  40
);
test(
  "High Straight compute should return 40 if dice is straight 2,3,4,5,6",
  checkComputeResult,
  { scoreKey: "inferior.highStraight", dices: [2, 3, 4, 5, 6] },
  40
);

test(
  "Chance compute should return sum of dices",
  checkComputeResult,
  { scoreKey: "inferior.chance", dices: [1, 2, 2, 3, 3] },
  11
);

test(
  "Inferior Total compute should return sum of other superior",
  checkComputeResult,
  {
    scoreKey: "inferior.total",
    scores: {
      "superior.ace": 1003,
      "superior.two": 1006,
      "superior.three": 1009,
      "superior.four": 10012,
      "superior.five": 10015,
      "superior.six": 10018,
      "superior.bonus": 10035,
      "superior.total": 1000,
      "inferior.3ofKind": 1,
      "inferior.4ofKind": 2,
      "inferior.lowStraight": 3,
      "inferior.highStraight": 4,
      "inferior.fullHouse": 5,
      "inferior.yahtzee": 6,
      "inferior.chance": 7,
      "inferior.total": -2000,
      total: 2000,
    },
  },
  28
);

test(
  "Inferior Total compute should count never assign score as 0",
  checkComputeResult,
  {
    scoreKey: "inferior.total",
    scores: {
      "superior.ace": 1003,
      "superior.two": 1006,
      "superior.three": 1009,
      "superior.four": 10012,
      "superior.five": 10015,
      "superior.six": 10018,
      "superior.bonus": 10035,
      "superior.total": 1000,
      "inferior.3ofKind": -1,
      "inferior.4ofKind": -1,
      "inferior.lowStraight": -1,
      "inferior.highStraight": -1,
      "inferior.fullHouse": -1,
      "inferior.yahtzee": -1,
      "inferior.chance": -1,
      "inferior.total": -2000,
      total: 2000,
    },
  },
  0
);

test(
  "Total compute should return sum of other totals",
  checkComputeResult,
  {
    scoreKey: "total",
    scores: {
      "superior.ace": 1003,
      "superior.two": 1006,
      "superior.three": 1009,
      "superior.four": 10012,
      "superior.five": 10015,
      "superior.six": 10018,
      "superior.bonus": 10035,
      "superior.total": 2,
      "inferior.3ofKind": -100,
      "inferior.4ofKind": -101,
      "inferior.lowStraight": -102,
      "inferior.highStraight": -103,
      "inferior.fullHouse": -104,
      "inferior.yahtzee": -105,
      "inferior.chance": -106,
      "inferior.total": 1,
      total: 2000,
    },
  },
  3
);

test("ALL_SCORE_KEYS should contains all score definition keys", (t) => {
  t.true(
    Object.values(SCORE_DEFINITIONS).every((scoreDef) =>
      ALL_SCORE_KEYS.includes(scoreDef.key)
    )
  );
});
test("ALL_SCORE_KEYS should have a score definition", (t) => {
  t.true(
    ALL_SCORE_KEYS.every(
      (scoreKey) => SCORE_DEFINITIONS[scoreKey]?.key === scoreKey
    )
  );
});
type ScoreDefByType = { [type in ScoreDefinitionType]: ScoreKey[] };
const scoreDefByType: ScoreDefByType = Object.values(SCORE_DEFINITIONS).reduce(
  (acc, current) => ({
    ...acc,
    [current.type]: [...acc[current.type], current.key],
  }),
  {
    MANUAL: [] as ScoreKey[],
    AUTO: [] as ScoreKey[],
  }
);
test("AUTOMATIC_SCORE_KEYS should contains all AUTO score definition", (t) => {
  t.true(
    scoreDefByType["AUTO"].every((autoScoreDef) =>
      AUTOMATIC_SCORE_KEYS.includes(autoScoreDef)
    )
  );
});
test("AUTOMATIC_SCORE_KEYS should contains no MANUAL score definition", (t) => {
  t.false(
    scoreDefByType["MANUAL"].some((manualScoreDef) =>
      AUTOMATIC_SCORE_KEYS.includes(manualScoreDef)
    )
  );
});
test("MANUAL_SCORE_KEYS should contains all MANUAL score definition", (t) => {
  t.true(
    scoreDefByType["MANUAL"].every((manualScoreDef) =>
      MANUAL_SCORE_KEYS.includes(manualScoreDef)
    )
  );
});
test("MANUAL_SCORE_KEYS should contains no AUTO score definition", (t) => {
  t.false(
    scoreDefByType["AUTO"].some((autoScoreDef) =>
      MANUAL_SCORE_KEYS.includes(autoScoreDef)
    )
  );
});
