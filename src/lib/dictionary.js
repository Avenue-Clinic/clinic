const dictionaries = {
  en: () => import("../dictionaries/en.json").then((module) => module.default),
  tr: () => import("../dictionaries/tr.json").then((module) => module.default),
  ar: () => import("../dictionaries/ar.json").then((module) => module.default),
};

export const getDictionary = async (locale) => {
  if (!dictionaries[locale]) {
    throw new Error(`Dictionary for locale '${locale}' not found`);
  }
  return dictionaries[locale]();
};
