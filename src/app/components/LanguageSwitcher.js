'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { locales } from '../utils/i18n';
import ReactCountryFlag from 'react-country-flag';

const LanguageSwitcher = ({ currentLocale }) => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  
  const pathWithoutLocale = pathname.split('/').slice(2).join('/');
  
  const handleLocaleChange = (locale) => {
    const newPath = `/${locale}${pathWithoutLocale ? `/${pathWithoutLocale}` : ''}`;
    router.push(newPath);
    setIsOpen(false);
  };
  
  const languageMap = {
    en: { name: 'English', countryCode: 'GB' },
    ar: { name: 'العربية', countryCode: 'AE' },
    tr: { name: 'Türkçe', countryCode: 'TR' },
  };
  
  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center px-4 py-2 space-x-2 bg-white rounded-md border border-gray-300 hover:bg-gray-50"
      >
        <ReactCountryFlag
          countryCode={languageMap[currentLocale].countryCode}
          svg
          style={{
            width: '16px',
            height: '16px',
          }}
        />
        <span>{currentLocale.toUpperCase()}</span>
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      
      {isOpen && (
        <div className="absolute right-0 z-50 mt-2 w-48 bg-white rounded-md border border-gray-200 shadow-lg">
          <div className="py-1">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLocaleChange(locale)}
                className={`flex items-center w-full px-4 py-2 text-left ${
                  currentLocale === locale ? 'bg-gray-100 text-[#00a9a7]' : 'hover:bg-gray-50'
                }`}
              >
                <ReactCountryFlag
                  countryCode={languageMap[locale].countryCode}
                  svg
                  style={{
                    width: '16px',
                    height: '16px',
                    marginRight: '8px'
                  }}
                />
                <span>{languageMap[locale].name}</span>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;