import 'server-only';

export const locales = ['en', 'tr', 'ar'];

const dictionaries = {
  en: () => import('../locales/en.json').then((module) => module.default),
  tr: () => import('../locales/tr.json').then((module) => module.default),
  ar: () => import('../locales/ar.json').then((module) => module.default),
};

export const getDictionary = async (locale) => {
  if (!dictionaries[locale]) {
    // Default to English if the locale is not supported
    return dictionaries.en();
  }
  return dictionaries[locale]();
};
