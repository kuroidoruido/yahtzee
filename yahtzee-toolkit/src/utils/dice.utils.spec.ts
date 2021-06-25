import {
  computeRepartition,
  rollOneDice,
  VALID_ROLL_VALUES,
} from "./dice.utils";
import test from "ava";

/* *** rollOneDice *** */

test("Should always return an integer number between 1 to 6 included", (t) => {
  const rolls = new Array(100).fill(null).map(rollOneDice);

  t.is(rolls.length, 100, "should generate 100 dice score");
  for (const roll of rolls) {
    t.true(
      VALID_ROLL_VALUES.includes(roll),
      `scope ${roll} should be an integer between 1 to 6`
    );
  }
});

test("Should return numbers correctly dispatched between 1 to 6", (t) => {
  const rolls = new Array(1000).fill(null).map(rollOneDice);
  t.is(rolls.length, 1000, "should generate 1000 dice score");

  const rollsByValues = rolls.reduce((acc, next) => {
    acc[next] = acc[next] ? acc[next] + 1 : 1;
    return acc;
  }, {} as { [value: number]: number });
  t.true(rollsByValues[1] > 1);
  t.true(rollsByValues[2] > 1);
  t.true(rollsByValues[3] > 1);
  t.true(rollsByValues[4] > 1);
  t.true(rollsByValues[5] > 1);
  t.true(rollsByValues[6] > 1);
});

/* *** computeRepartition *** */

test("Should return all valid dice value by default", (t) => {
  const actual = computeRepartition([]);
  VALID_ROLL_VALUES.forEach((dice) => {
    t.is(actual[dice], 0);
  });
});

test("Should compute dice repartition", (t) => {
  const actual = computeRepartition([2, 3, 4, 3, 3]);
  const expected: typeof actual = { 1: 0, 2: 1, 3: 3, 4: 1, 5: 0, 6: 0 };
  t.deepEqual(actual, expected);
});
