import 'server-only';

const dictionaries = {
  en: () => import('../dictionaries/en.json').then((module) => module.default),
  tr: () => import('../dictionaries/tr.json').then((module) => module.default),
  ar: () => import('../dictionaries/ar.json').then((module) => module.default),
};

export const getDictionary = async (locale) => {
  if (!dictionaries[locale]) {
    // Default to English if the locale is not supported
    return dictionaries.en();
  }
  return dictionaries[locale]();
};
