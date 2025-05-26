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
    en: 'US',
    ar: 'SA',
    tr: 'TR'
  },
  cookieOptions: {
    maxAge: 24 * 60 * 60, // 1 day
    path: '/'
  }
};

module.exports = i18nConfig;
