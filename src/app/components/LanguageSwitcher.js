'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useState } from 'react';
import { locales } from '../utils/i18n';
import ReactCountryFlag from 'react-country-flag';

const LanguageSwitcher = ({ currentLocale, isMobile = false }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  
  const pathWithoutLocale = pathname.split('/').slice(2).join('/');
  
  const handleLocaleChange = (locale) => {
    const newPath = `/${locale}${pathWithoutLocale ? `/${pathWithoutLocale}` : ''}`;
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
            <span className="text-lg text-gray-700">{languageMap[currentLocale].name}</span>
          </div>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full hover:text-[#05BBB5] transition-colors duration-300"
          >
            <svg 
              className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
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
                  className="flex items-center px-4 py-2 text-gray-600 hover:text-[#05BBB5] hover:bg-gray-50 transition-colors duration-300"
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
                  <span className="text-lg">{languageMap[locale].name}</span>
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
        className={`flex items-center hover:text-[#05BBB5] transition-colors duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}
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
        <span>{currentLocale.toUpperCase()}</span>
        <svg 
          className={`w-4 h-4 ${isRTL ? 'mr-1' : 'ml-1'}`} 
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
              className={`flex flex-col items-center p-2 rounded hover:bg-gray-50 ${
                currentLocale === locale ? 'text-[#05BBB5]' : 'text-[#0B132A]'
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