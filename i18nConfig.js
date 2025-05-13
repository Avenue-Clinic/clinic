const i18nConfig = {
  locales: ['en', 'ar', 'tr'],
  defaultLocale: 'en',
  prefixDefault: false,
  cookieName: 'NEXT_LOCALE',
  localeNames: {
    en: 'English',
    ar: 'العربية',
    tr: 'Türkçe'
  },
  countryCodeMap: {
    en: 'GB',
    ar: 'SA',
    tr: 'TR'
  },
  cookieOptions: {
    maxAge: 365 * 24 * 60 * 60, // 1 year
    path: '/'
  }
};

module.exports = i18nConfig;
