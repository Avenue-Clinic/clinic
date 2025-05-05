'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { 
  IconBrandFacebook, 
  IconBrandInstagram, 
  IconMenu2, 
  IconChevronDown, 
  IconPhone,
  IconBrandX,
  IconBrandTiktok,
  IconBrandYoutube,
  IconSearch,
  IconX
} from '@tabler/icons-react';

export default function Header({ dictionary = {}, locale = 'en' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const isRTL = locale === 'ar';

  const socialIcons = [
    { icon: IconBrandX, label: 'X' },
    { icon: IconBrandInstagram, label: 'Instagram' },
    { icon: IconBrandFacebook, label: 'Facebook' },
    { icon: IconBrandTiktok, label: 'TikTok' },
    { icon: IconBrandYoutube, label: 'YouTube' }
  ];

  // Provide default values for missing translations
  const translations = {
    home: dictionary?.header?.home || 'Home',
    treatments: dictionary?.header?.treatments || 'Treatments',
    gallery: dictionary?.header?.gallery || 'Gallery',
    aboutUs: dictionary?.header?.aboutUs || 'About Us',
    blog: dictionary?.header?.blog || 'Blog',
    contactUs: dictionary?.header?.contactUs || 'Contact Us',
    getConsultation: dictionary?.header?.getConsultation || 'Get Free Consultation',
    smileCounter: dictionary?.header?.smileCounter || '28,000 Smiles and Counting — Join Us in Istanbul!',
    clinicName: dictionary?.header?.clinicName || 'Avenue Clinic'
  };

  return (
    <header className="bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Top bar with reduced padding */}
      <div className="bg-[var(--primary)] text-[var(--text)] py-1.5">
        <div className="max-w-[1300px] mx-auto px-4">
          <div className="flex items-center justify-between lg:justify-between">
            <div className="flex items-center justify-center w-full text-sm lg:text-left lg:w-auto lg:justify-start">
              <span>{translations.smileCounter}</span>
            </div>
            <div className={`items-center hidden lg:flex ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}>
              {socialIcons.map((item) => (
                <a 
                  key={item.label}
                  href="#" 
                  aria-label={item.label} 
                  className="hover:text-[var(--secondary)] transition-colors duration-300"
                >
                  {item.icon && <item.icon size={16} />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation with three distinct sections in a single flex row */}
      <nav className="max-w-[1300px] mx-auto relative py-2 px-4">
        <div className="flex justify-between">
          {/* Left section - Logo */}
          <div className={`flex items-center ${isRTL ? 'order-1' : 'order-1'}`}>
            <Link href={`/${locale}`} className="site-logo-container">
              <Image src="/logo-filled.svg" alt="Logo" width={150} height={40} className={`w-auto h-12 ${isRTL ? 'xl:pl-16' : 'xl:pr-16'}`} priority />
            </Link>
          </div>

          {/* Center section - Navigation Links (visible on large screens) */}
          <div className={`items-center hidden lg:flex order-2 ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
            <Link href={`/${locale}`} className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300">
              {translations.home}
            </Link>
            <div className="relative group">
              <Link
                href={`/${locale}/treatments`}
                className="flex items-center text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
              >
                <span>{translations.treatments}</span>
                <IconChevronDown className={`w-4 h-4 ${isRTL ? 'mr-1' : 'ml-1'}`} />
              </Link>
              {/* Treatments dropdown menu - now appears on hover via group-hover */}
              <div 
                className={`absolute ${isRTL ? 'right-0' : 'left-0'} z-50 invisible w-64 py-2 mt-1 transition-all duration-300 bg-white rounded-lg shadow-lg opacity-0 top-full group-hover:opacity-100 group-hover:visible`}
              >
                {Object.keys(dictionary?.headerTreatments || {}).map((key) => {
                  const path = key
                    .replace('header', '')
                    .replace(/([A-Z])/g, '-$1')
                    .toLowerCase()
                    .replace(/^-/, '');
                  
                  return (
                    <Link 
                      key={key}
                      href={`/${locale}/treatments/${path}`} 
                      className="block px-4 py-2 text-gray-600 hover:text-[var(--secondary)] hover:bg-gray-50 transition-colors duration-300"
                    >
                      {dictionary?.headerTreatments?.[key]}
                    </Link>
                  );
                })}
              </div>
            </div>
            <Link href={`/${locale}/gallery`} className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300">
              {translations.gallery}
            </Link>
            <Link href={`/${locale}/about`} className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300">
              {translations.aboutUs}
            </Link>
            <Link href={`/${locale}/blog`} className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300">
              {translations.blog}
            </Link>
            <Link href={`/${locale}/contact`} className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300">
              {translations.contactUs}
            </Link>
          </div>

          {/* Right section - Language, Search, Contact (visible on large screens) */}
          <div className={`items-center hidden lg:flex ${isRTL ? 'order-3' : 'order-3'} ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
            <LanguageSwitcher currentLocale={locale} isMobile={false} className="text-[var(--primary)]" />
            <button className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300">
              <IconSearch className="w-5 h-5" />
            </button>
            <Link 
              href={`/${locale}/consultation`} 
              className={`hidden xl:inline-flex items-center bg-[var(--primary)] text-white px-5 py-2 rounded-2xl hover:bg-[var(--secondary)] transition-colors duration-300 text-[13px] font-medium ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
            >
              <IconPhone className="w-4 h-4" />
              <span>{translations.getConsultation}</span>
            </Link>
          </div>

          {/* Mobile menu button (visible on small screens) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
          >
            <IconMenu2 className="w-8 h-8" />
          </button>

          {/* Mobile menu panel */}
          <div className={`fixed inset-y-0 ${isRTL ? 'left-0' : 'right-0'} w-[300px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : isRTL ? '-translate-x-full' : 'translate-x-full'}`}>
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-xl font-semibold text-[var(--primary)]">{translations.clinicName}</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:text-[var(--secondary)] transition-colors duration-300"
                aria-label="Close menu"
              >
                <IconX size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col p-4">
              <div className="space-y-4 text-lg">
                <Link 
                  href={`/${locale}`} 
                  className="block text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {translations.home}
                </Link>
                {/* In the mobile menu section - modify the treatments section */}
                <div>
                <div className="flex items-center justify-between">
                  <Link 
                    href={`/${locale}/treatments`}
                    className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    {translations.treatments}
                  </Link>
                  <button 
                    onClick={(e) => {
                      e.preventDefault();
                      setTreatmentsOpen(!treatmentsOpen);
                    }}
                    className="p-2 rounded-full hover:text-[var(--secondary)] transition-colors duration-300"
                  >
                    <IconChevronDown className={`w-5 h-5 transition-transform duration-300 ${treatmentsOpen ? 'rotate-180' : ''}`} />
                  </button>
                </div>
                <div className={`overflow-hidden transition-all duration-300 ease-in-out ${treatmentsOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
                  <div className="flex flex-col pt-2 space-y-1">
                    {Object.keys(dictionary?.headerTreatments || {}).map((key) => {
                      const path = key
                        .replace('header', '')
                        .replace(/([A-Z])/g, '-$1')
                        .toLowerCase()
                        .replace(/^-/, '');
                      
                      return (
                        <Link 
                          key={key}
                          href={`/${locale}/treatments/${path}`} 
                          className="block pl-4 py-2 text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
                          onClick={() => setIsOpen(false)}
                        >
                          {dictionary?.headerTreatments?.[key]}
                        </Link>
                      );
                    })}
                  </div>
                </div>
                </div>
                <Link 
                  href={`/${locale}/gallery`} 
                  className="block text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {translations.gallery}
                </Link>
                <Link 
                  href={`/${locale}/about`} 
                  className="block text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {translations.aboutUs}
                </Link>
                <Link 
                  href={`/${locale}/blog`} 
                  className="block text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {translations.blog}
                </Link>
                <Link 
                  href={`/${locale}/contact`} 
                  className="block text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {translations.contactUs}
                </Link>
              </div>

              <div className="mt-6">
                <LanguageSwitcher currentLocale={locale} isMobile={true} className="text-gray-950" />
              </div>

              <div className="mt-6">
                <Link 
                  href={`/${locale}/consultation`} 
                  className={`inline-flex items-center justify-center w-full bg-[var(--primary)] text-white px-5 py-3 rounded-full hover:bg-[var(--secondary)] transition-colors duration-300 text-[15px] font-medium ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
                  onClick={() => setIsOpen(false)}
                >
                  <IconPhone className="w-4 h-4" />
                  <span>{translations.getConsultation}</span>
                </Link>
              </div>

              <div className={`flex items-center justify-center mt-8 ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'}`}>
                {socialIcons.map((item) => (
                  <a 
                    key={item.label}
                    href="#" 
                    aria-label={item.label} 
                    className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
                  >
                    {item.icon && <item.icon size={20} />}
                  </a>
                ))}
              </div>
            </nav>
          </div>
          
          {/* Overlay when mobile menu is open */}
          {isOpen && (
            <div 
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
              onClick={() => setIsOpen(false)}
            ></div>
          )}
        </div>
      </nav>
    </header>
  );
}