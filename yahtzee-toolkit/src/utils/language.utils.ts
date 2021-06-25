export const SUPPORTED_LANGUAGES = ["fr", "en"] as const;
export type SupportedLanguages = typeof SUPPORTED_LANGUAGES[number];

export function getBrowserLanguage(
  browser: { language: string | undefined | null } = navigator
): SupportedLanguages {
  const browserLang = browser?.language;
  if (browserLang?.toLocaleLowerCase().includes("fr")) {
    return "fr";
  } else {
    return "en";
  }
}

export const LOCAL_STORAGE_LANG_KEY = "YAHTZEE.LANG";

export function getSavedLanguage(
  storage = localStorage
): SupportedLanguages | undefined {
  const saved = storage.getItem(LOCAL_STORAGE_LANG_KEY);
  if (SUPPORTED_LANGUAGES.includes(saved as any)) {
    return saved as SupportedLanguages;
  } else {
    return undefined;
  }
}
