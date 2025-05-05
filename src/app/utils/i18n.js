// src/utils/i18n.js
import { notFound } from 'next/navigation';

export const locales = ['en', 'ar', 'tr'];
export const defaultLocale = 'en';

const loadDictionary = async (locale) => {
  const content = await import(`../locales/${locale}/content.json`).then((module) => module.default);
  const header = await import(`../locales/${locale}/header.json`).then((module) => module.default);
  const footer = await import(`../locales/${locale}/footer.json`).then((module) => module.default);

  // Merge all translations into one dictionary
  return {
    dir: locale === 'ar' ? 'rtl' : 'ltr',
    ...content,
    ...header,
    ...footer
  };
};

const dictionaries = {
  en: () => loadDictionary('en'),
  ar: () => loadDictionary('ar'),
  tr: () => loadDictionary('tr'),
};

export const getDirection = (locale) => {
  return locale === 'ar' ? 'rtl' : 'ltr';
};

export const getDictionary = async (locale) => {
  if (!locales.includes(locale)) {
    notFound();
  }
  
  try {
    return await dictionaries[locale]();
  } catch (error) {
    console.error(`Failed to load dictionary for locale: ${locale}`, error);
    return await dictionaries[defaultLocale]();
  }
};