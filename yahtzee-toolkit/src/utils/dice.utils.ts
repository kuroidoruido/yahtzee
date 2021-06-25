import { DiceLocks } from "../models";

export const VALID_ROLL_VALUES: readonly number[] = [1, 2, 3, 4, 5, 6] as const;

export type DiceIndex = 0 | 1 | 2 | 3 | 4;
export const DICE_INDEXES: DiceIndex[] = [0, 1, 2, 3, 4];

export function rollOneDice(): number {
  return Math.floor(Math.random() * 6) + 1;
}

export function computeRepartition(dices: readonly number[]): {
  [dice: number]: number;
} {
  const res: { [dice: number]: number } = {};
  VALID_ROLL_VALUES.forEach((dice) => (res[dice] = 0));
  dices.forEach((dice) => res[dice]++);
  return res;
}

export function makeDiceLocks(): DiceLocks {
  return [false, false, false, false, false];
}
