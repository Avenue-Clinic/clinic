'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { locales, defaultLocale } from '../utils/i18n';
import ReactCountryFlag from 'react-country-flag';
import Cookies from 'js-cookie';

const LANG_COOKIE_NAME = 'preferred-lang';

const LanguageSwitcher = ({ currentLocale, isMobile = false }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  const handleLocaleChange = (locale) => {
    // Set the preferred language cookie
    Cookies.set(LANG_COOKIE_NAME, locale, { path: '/', expires: 365 });

    // Correctly determine the base path part (the part after the locale, or the full path if no locale)
    let basePath = '';
    const pathSegments = pathname.split('/'); // e.g., ['', 'en', 'about'] or ['', 'about'] or [''] for root
    
    // Check if the *current* path's first segment is a known locale
    if (locales.includes(pathSegments[1])) {
      // Path has a locale prefix: /en/about -> segments ['', 'en', 'about']
      basePath = pathSegments.slice(2).join('/'); // 'about'
    } else if (pathSegments.length > 1 && pathSegments[1] !== '') {
      // Path has no locale prefix but is not root: /about -> segments ['', 'about']
      basePath = pathSegments.slice(1).join('/'); // 'about'
    }

    // Always construct the path with the locale prefix, even for default locale
    const newPath = `/${locale}${basePath ? `/${basePath}` : ''}`;
    
    console.log(`Switcher: Switching to ${locale}. Current: ${pathname}, Base: '${basePath}', New: ${newPath}`); // Debug logging
    router.push(newPath);
  };
  
  const languageMap = {
    en: { name: 'English', countryCode: 'GB' },
    ar: { name: 'العربية', countryCode: 'AE' },
    tr: { name: 'Türkçe', countryCode: 'TR' },
  };
  
  const isRTL = currentLocale === 'ar';

  if (isMobile) {
    return (
      <div className="w-full">
        <div className="flex items-center justify-between">
          <div className={`flex items-center ${isRTL ? 'space-x-reverse' : 'space-x-2'}`}>
            <ReactCountryFlag
              countryCode={languageMap[currentLocale].countryCode}
              svg
              style={{
                width: '20px',
                height: '20px',
              }}
            />
            <span className="text-lg text-[var(--primary)]">{languageMap[currentLocale].name}</span>
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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        </div>
        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-48 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
          <div className="flex flex-col space-y-2">
            {locales.map((locale) => (
              locale !== currentLocale && (
                <button
                  key={locale}
                  onClick={() => handleLocaleChange(locale)}
                  className="flex items-center px-4 py-2 transition-colors duration-300 hover:bg-gray-50"
                >
                  <ReactCountryFlag
                    countryCode={languageMap[locale].countryCode}
                    svg
                    style={{
                      width: '20px',
                      height: '20px',
                      marginRight: '8px'
                    }}
                  />
                  <span className="text-lg text-[var(--primary)] hover:text-[var(--secondary)]">{languageMap[locale].name}</span>
                </button>
              )
            ))}
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
          countryCode={languageMap[currentLocale].countryCode}
          svg
          style={{
            width: '16px',
            height: '16px',
            marginRight: isRTL ? '0' : '8px',
            marginLeft: isRTL ? '8px' : '0'
          }}
        />
        <span className="text-[var(--primary)] group-hover:text-[var(--secondary)] transition-colors">{currentLocale.toUpperCase()}</span>
        <svg 
          className={`w-4 h-4 ${isRTL ? 'mr-1' : 'ml-1'} text-[var(--primary)] group-hover:text-[var(--secondary)] transition-colors`} 
          fill="none" 
          stroke="currentColor" 
          viewBox="0 0 24 24" 
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      <div className="absolute z-50 invisible mt-2 transition-all duration-300 -translate-x-1/2 bg-white rounded-md shadow-lg opacity-0 left-1/2 group-hover:opacity-100 group-hover:visible">
        <div className={`flex px-2 py-1 ${isRTL ? 'space-x-reverse' : 'space-x-2'}`}>
          {locales.map((locale) => (
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
    countryCode={languageMap[locale].countryCode}
    svg
    style={{
      width: '20px',
      height: '20px',
      marginBottom: '4px'
    }}
  />
  <span className="text-sm whitespace-nowrap">{languageMap[locale].name}</span>
</button>

          ))}
        </div>
      </div>
    </div>
  );
};

export default LanguageSwitcher;