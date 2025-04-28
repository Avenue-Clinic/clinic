// src/utils/i18n.js
import { notFound } from 'next/navigation';

export const locales = ['en', 'ar', 'tr'];
export const defaultLocale = 'en';

const loadDictionary = async (locale) => {
  const home = await import(`../locales/${locale}/home.json`).then((module) => module.default);
  const header = await import(`../locales/${locale}/header.json`).then((module) => module.default);
  const footer = await import(`../locales/${locale}/footer.json`).then((module) => module.default);
  const form = await import(`../locales/${locale}/form.json`).then((module) => module.default);
  const about = await import(`../locales/${locale}/about.json`).then((module) => module.default);
  const dentalImplants = await import(`../locales/${locale}/dental-implants.json`).then((module) => module.default);

  // Merge all translations into one dictionary
  return {
    dir: locale === 'ar' ? 'rtl' : 'ltr',
    header: header.header,   // Extract header translations from nested structure
    footer,   // Footer specific translations
    form,     // Form specific translations    
    about,    // About page specific translations
    'dental-implants': dentalImplants,  // Dental implants translations
    ...home   // This contains most sections (hero, about, expertise, etc.)
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