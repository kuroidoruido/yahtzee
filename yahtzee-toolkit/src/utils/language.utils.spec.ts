import test from "ava";
import { getBrowserLanguage } from "./language.utils";

test("getCurrentLanguage should return fr when browser language contains fr or FR", (t) => {
  t.deepEqual(getBrowserLanguage({ language: "fr" }), "fr");
  t.deepEqual(getBrowserLanguage({ language: "FR" }), "fr");
  t.deepEqual(getBrowserLanguage({ language: "fr-FR" }), "fr");
  t.deepEqual(getBrowserLanguage({ language: "fr_FR" }), "fr");
});

test("getCurrentLanguage should return en when browser language contains en or EN", (t) => {
  t.deepEqual(getBrowserLanguage({ language: "en" }), "en");
  t.deepEqual(getBrowserLanguage({ language: "EN" }), "en");
  t.deepEqual(getBrowserLanguage({ language: "en-US" }), "en");
  t.deepEqual(getBrowserLanguage({ language: "en_UK" }), "en");
});

test("getCurrentLanguage should return en for other language", (t) => {
  t.deepEqual(getBrowserLanguage({ language: "de" }), "en");
  t.deepEqual(getBrowserLanguage({ language: "DE" }), "en");
});

test("getCurrentLanguage should return en for null/undefined language", (t) => {
  t.deepEqual(getBrowserLanguage({ language: "" }), "en");
  t.deepEqual(getBrowserLanguage({ language: null }), "en");
  t.deepEqual(getBrowserLanguage({ language: undefined }), "en");
});
