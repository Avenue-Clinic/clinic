// src/utils/i18n.js
import { notFound } from 'next/navigation';

export const locales = ['en', 'ar', 'tr'];
export const defaultLocale = 'en';

// Dictionary structure for our translations
const dictionaries = {
  en: () => import('../locales/en.json').then(module => module.default),
  ar: () => import('../locales/ar.json').then(module => module.default),
  tr: () => import('../locales/tr.json').then(module => module.default),
};

export const getDirection = (locale) => {
  return locale === 'ar' ? 'rtl' : 'ltr';
};

export const getDictionary = async (locale) => {
  if (!locales.includes(locale)) {
    notFound();
  }
  
  try {
    return dictionaries[locale]();
  } catch (error) {
    console.error(`Failed to load dictionary for locale: ${locale}`, error);
    return dictionaries[defaultLocale]();
  }
};