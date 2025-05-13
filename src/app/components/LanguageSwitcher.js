'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';
import i18nConfig from '../../../i18nConfig';

const LanguageSwitcher = ({ isMobile = false }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const { i18n } = useTranslation();
  const currentLocale = i18n.language;

  const handleLocaleChange = (newLocale) => {
    // Set cookie for next-i18n-router
    const date = new Date();
    date.setTime(date.getTime() + i18nConfig.cookieOptions.maxAge * 1000);
    const expires = date.toUTCString();
    document.cookie = `${i18nConfig.cookieName}=${newLocale};expires=${expires};path=${i18nConfig.cookieOptions.path}`;

    // Redirect to the new locale path
    if (
      currentLocale === i18nConfig.defaultLocale &&
      !i18nConfig.prefixDefault
    ) {
      router.push('/' + newLocale + pathname);
    } else {
      router.push(
        pathname.replace(
          `/${currentLocale}`,
          newLocale === i18nConfig.defaultLocale ? '' : `/${newLocale}`,
        ),
      );
    }

    router.refresh();
  };

  const languageMap = Object.keys(i18nConfig.locales).reduce((acc, locale) => {
    acc[locale] = {
      name: i18nConfig.localeNames[locale],
      countryCode: i18nConfig.countryCodeMap[locale],
    };
    return acc;
  }, {});

  const isRTL = currentLocale === 'ar';

  if (isMobile) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div
            className={`flex items-center ${isRTL ? 'space-x-reverse' : 'space-x-2'}`}
          >
            <ReactCountryFlag
              countryCode={languageMap[currentLocale]?.countryCode || 'US'}
              svg
              style={{
                width: '20px',
                height: '20px',
              }}
            />
            <span className="text-lg text-[var(--primary)]">
              {languageMap[currentLocale]?.name ||
                (currentLocale ? currentLocale.toUpperCase() : '')}
            </span>
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full hover:text-[var(--secondary)] transition-colors duration-300"
          >
            <svg
              className={`w-5 h-5 transition-transform duration-300 text-[var(--primary)] hover:text-[var(--secondary)] ${isOpen ? 'rotate-180' : ''}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </button>
        </div>
        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}
        >
          <div className="flex flex-col space-y-2">
            {i18nConfig.locales.map(
              (locale) =>
                locale !== currentLocale && (
                  <button
                    key={locale}
                    onClick={() => handleLocaleChange(locale)}
                    className="flex items-center px-4 py-2 transition-colors duration-300 hover:bg-gray-50"
                  >
                    <ReactCountryFlag
                      countryCode={languageMap[locale]?.countryCode || 'US'}
                      svg
                      style={{
                        width: '20px',
                        height: '20px',
                        marginRight: '8px',
                      }}
                    />
                    <span className="text-lg text-[var(--primary)] hover:text-[var(--secondary)]">
                      {languageMap[locale]?.name ||
                        (locale ? locale.toUpperCase() : '')}
                    </span>
                  </button>
                ),
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="relative group">
      <button
        className={`flex items-center hover:text-[var(--secondary)] transition-colors duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}
      >
        <ReactCountryFlag
          countryCode={languageMap[currentLocale]?.countryCode || 'US'}
          svg
          style={{
            width: '16px',
            height: '16px',
            marginRight: isRTL ? '0' : '8px',
            marginLeft: isRTL ? '8px' : '0',
          }}
        />
        <span className="text-[var(--primary)] group-hover:text-[var(--secondary)] transition-colors">
          {languageMap[currentLocale]?.name ||
            (currentLocale ? currentLocale.toUpperCase() : '')}
        </span>
        <svg
          className={`w-4 h-4 ${isRTL ? 'mr-1' : 'ml-1'} text-[var(--primary)] group-hover:text-[var(--secondary)] transition-colors`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>

      <div className="absolute z-50 invisible mt-2 transition-all duration-300 -translate-x-1/2 bg-white rounded-md shadow-lg opacity-0 left-1/2 group-hover:opacity-100 group-hover:visible">
        <div
          className={`flex px-2 py-1 ${isRTL ? 'space-x-reverse' : 'space-x-2'}`}
        >
          {i18nConfig.locales.map((locale) => (
            <button
              key={locale}
              onClick={() => handleLocaleChange(locale)}
              className={`flex flex-col items-center p-2 rounded transition-colors ${
                currentLocale === locale
                  ? 'text-[var(--secondary)] bg-gray-50'
                  : 'text-[var(--primary)] hover:bg-gray-100'
              }`}
            >
              <ReactCountryFlag
                countryCode={languageMap[locale]?.countryCode || 'US'}
                svg
                style={{
                  width: '20px',
                  height: '20px',
                  marginBottom: '4px',
                }}
              />
              <span className="text-sm whitespace-nowrap">
                {languageMap[locale]?.name ||
                  (locale ? locale.toUpperCase() : '')}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;
