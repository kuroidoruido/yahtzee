import test, { ExecutionContext } from "ava";
import { I18nKey, I18NString, i18nValues } from "./locale";
import { SupportedLanguages } from "../utils/language.utils";
import { SCORE_DEFINITIONS } from "../utils/score.utils";

test("should contains an english value for each keys", (t) => {
  Object.entries(i18nValues).forEach(checkTranslation(t, "en"));
});

test("should contains a french value for each keys", (t) => {
  Object.entries(i18nValues).forEach(checkTranslation(t, "fr"));
});

test("should contains a translation object for each score definition", (t) => {
  Object.keys(SCORE_DEFINITIONS).forEach((key) => {
    t.truthy(
      i18nValues[`score.name.${key}` as I18nKey],
      `Expect 'score.name.${key}' to be defined`
    );
  });
});

function checkTranslation(
  t: ExecutionContext<unknown>,
  i18nKey: SupportedLanguages
) {
  return ([key, i18nString]: [string, Readonly<I18NString>]) => {
    t.truthy(i18nString[i18nKey], `Expect '${key}' to have an en key`);
    t.assert(
      i18nString[i18nKey].length > 0,
      `Expect '${key}' to have a non empty en key`
    );
  };
}
