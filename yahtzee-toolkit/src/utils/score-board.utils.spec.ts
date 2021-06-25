import test from "ava";
import { makeScoreBoard } from "./score-board.utils";
import { AUTOMATIC_SCORE_KEYS, MANUAL_SCORE_KEYS } from "./score.utils";

test("Should init every AUTO scoreKey with zero", (t) => {
  const actual = makeScoreBoard();
  AUTOMATIC_SCORE_KEYS.forEach((scoreKey) => {
    t.is(actual[scoreKey], 0, `expected '${scoreKey}' === 0`);
  });
});

test("Should init every MANUAL scoreKey with zero", (t) => {
  const actual = makeScoreBoard();
  MANUAL_SCORE_KEYS.forEach((scoreKey) => {
    t.is(actual[scoreKey], -1, `expected '${scoreKey}' === -1`);
  });
});
