import { configureStore, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { DiceLocks, DiceSet, GameStatus, ScoreBoard, ScoreKey } from "./models";
import {
  DiceIndex,
  DICE_INDEXES,
  makeDiceLocks,
  rollOneDice,
} from "./utils/dice.utils";
import {
  getBrowserLanguage,
  getSavedLanguage,
  LOCAL_STORAGE_LANG_KEY,
  SupportedLanguages,
} from "./utils/language.utils";
import { makeScoreBoard } from "./utils/score-board.utils";
import {
  AUTOMATIC_SCORE_KEYS,
  MANUAL_SCORE_KEYS,
  SCORE_DEFINITIONS,
} from "./utils/score.utils";

export interface AppState {
  currentLang: SupportedLanguages;
  gameStatus: GameStatus;
  dices: DiceSet;
  diceLocks: DiceLocks;
  roll: number;
  scores: ScoreBoard;
  scoreOfDices: ScoreBoard;
}

export const DEFAULT_LANG = getSavedLanguage() ?? getBrowserLanguage();

const initialState: AppState = {
  currentLang: DEFAULT_LANG,
  gameStatus: "NO_GAME",
  dices: [1, 1, 1, 1, 1],
  diceLocks: makeDiceLocks(),
  roll: 0,
  scores: makeScoreBoard(),
  scoreOfDices: makeScoreBoard(),
};

type LockAction = PayloadAction<{ diceIndex: DiceIndex }>;

const stateReducer = createSlice({
  name: "app",
  initialState,
  reducers: {
    setLang(
      state,
      { payload: { lang } }: PayloadAction<{ lang: SupportedLanguages }>
    ) {
      state.currentLang = lang;
    },
    lock(state, { payload: { diceIndex } }: LockAction) {
      state.diceLocks[diceIndex] = true;
    },
    unlock(state, { payload: { diceIndex } }: LockAction) {
      state.diceLocks[diceIndex] = false;
    },
    toggleLock(state, { payload: { diceIndex } }: LockAction) {
      state.diceLocks[diceIndex] = !state.diceLocks[diceIndex];
    },
    dicesRoll(state) {
      if (state.roll < 3) {
        DICE_INDEXES.forEach((diceIndex) => {
          if (!state.diceLocks[diceIndex]) {
            state.dices[diceIndex] = rollOneDice();
          }
        });
        MANUAL_SCORE_KEYS.forEach((scoreKey) => {
          state.scoreOfDices[scoreKey] = SCORE_DEFINITIONS[scoreKey].compute(
            state.dices,
            state.scores
          );
        });
        if (state.gameStatus === "NO_GAME" && state.roll === 0) {
          state.gameStatus = "PLAYING";
        }
        state.roll++;
      }
    },
    setScore(
      state,
      { payload: { scoreKey } }: PayloadAction<{ scoreKey: ScoreKey }>
    ) {
      state.roll = 0;
      state.scores[scoreKey] = state.scoreOfDices[scoreKey];
      state.scoreOfDices = makeScoreBoard();
      state.diceLocks = makeDiceLocks();
      AUTOMATIC_SCORE_KEYS.forEach((scoreKey) => {
        state.scores[scoreKey] = SCORE_DEFINITIONS[scoreKey].compute(
          state.dices,
          state.scores
        );
      });
      if (MANUAL_SCORE_KEYS.every((scoreKey) => state.scores[scoreKey] >= 0)) {
        state.gameStatus = "GAME_FINISHED";
      }
    },
    resetGame() {
      return initialState;
    },
  },
});

export const store = configureStore({
  reducer: stateReducer.reducer,
});

export type AppDispatch = typeof store.dispatch;
export const actions = stateReducer.actions;

export function changeLang(lang: SupportedLanguages, storage = localStorage) {
  return async function (dispatch: AppDispatch) {
    dispatch(actions.setLang({ lang }));
    storage.setItem(LOCAL_STORAGE_LANG_KEY, lang);
  };
}
