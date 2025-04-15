'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
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
  IconSearch
} from '@tabler/icons-react';

export default function Header({ dictionary = {}, locale = 'en' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const isRTL = locale === 'ar';

  // Provide default values for missing translations
  const translations = {
    home: dictionary?.header?.home || 'Home',
    treatments: dictionary?.header?.treatments || 'Treatments',
    gallery: dictionary?.header?.gallery || 'Gallery',
    aboutUs: dictionary?.header?.aboutUs || 'About Us',
    blog: dictionary?.header?.blog || 'Blog',
    contactUs: dictionary?.header?.contactUs || 'Contact Us',
    getConsultation: dictionary?.header?.getConsultation || 'Get Free Consultation',
    smileCounter: dictionary?.header?.smileCounter || '28,000 Smiles and Counting — Join Us in Istanbul!'
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Top bar with reduced padding */}
      <div className="bg-[#023752] text-white py-1.5">
        <div className="max-w-[1350px] flex items-center justify-between mx-auto px-10">
          <div className="flex items-center text-sm">
            <span>{translations.smileCounter}</span>
          </div>
          <div className="flex items-center space-x-4">
            <a href="#" aria-label="X" className="hover:text-[#95E8E0] transition-colors duration-300">
              <IconBrandX size={16} />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#95E8E0] transition-colors duration-300">
              <IconBrandInstagram size={16} />
            </a>
            <a href="#" aria-label="Facebook" className="hover:text-[#95E8E0] transition-colors duration-300">
              <IconBrandFacebook size={16} />
            </a>
            <a href="#" aria-label="TikTok" className="hover:text-[#95E8E0] transition-colors duration-300">
              <IconBrandTiktok size={16} />
            </a>
            <a href="#" aria-label="YouTube" className="hover:text-[#95E8E0] transition-colors duration-300">
              <IconBrandYoutube size={16} />
            </a>
          </div>
        </div>
      </div>

{/* Main navigation with three distinct sections */}
<nav className="max-w-[1350px] mx-auto relative">
  <div className="flex items-center justify-between ct-container">
    {/* Left section - Logo */}
    <div data-column="start" className="flex-shrink-0">
      <div className="site-branding">
        <Link href={`/${locale}`} className="site-logo-container">
          <Image src="/logo.svg" alt="Logo" width={150} height={40} className="w-auto h-12" priority />
        </Link>
      </div>
    </div>

    {/* Middle section - Navigation menu and language switcher */}
    <div data-column="middle" className="flex justify-center flex-grow">
      {/* Desktop menu */}
      <div className="hidden lg:flex lg:items-center">
        <nav className="header-menu-1">
          <ul className="flex items-center space-x-6 whitespace-nowrap text-[17px]">
            <li>
              <Link href={`/${locale}`} className="text-[#0B132A] hover:text-[#05BBB5] transition-colors duration-300">
                {translations.home}
              </Link>
            </li>
            <li className="relative group">
              <button
                className="flex items-center space-x-1 text-[#0B132A] hover:text-[#05BBB5] transition-colors duration-300"
                onMouseEnter={() => setTreatmentsOpen(true)}
                onMouseLeave={() => setTreatmentsOpen(false)}
              >
                <span>{translations.treatments}</span>
                <IconChevronDown size={16} />
              </button>
              <ul 
                className={`absolute ${isRTL ? 'right-0' : 'left-0'} w-48 py-2 bg-white rounded-md shadow-lg top-full opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300`}
                onMouseEnter={() => setTreatmentsOpen(true)}
                onMouseLeave={() => setTreatmentsOpen(false)}
              >
                <li>
                  <Link 
                    href={`/${locale}/treatments/dental-implants`} 
                    className="text-sm text-[#4F5665] hover:text-[#05BBB5] transition-colors duration-300 block px-4 py-2"
                  >
                    {dictionary?.treatments?.dentalImplants || 'Dental Implants'}
                  </Link>
                </li>
                <li>
                  <Link 
                    href={`/${locale}/treatments/hollywood-smile`} 
                    className="text-sm text-[#4F5665] hover:text-[#05BBB5] transition-colors duration-300 block px-4 py-2"
                  >
                    {dictionary?.treatments?.hollywoodSmile || 'Hollywood Smile'}
                  </Link>
                </li>
                <li>
                  <Link 
                    href={`/${locale}/treatments/all-on-implants`} 
                    className="text-sm text-[#4F5665] hover:text-[#05BBB5] transition-colors duration-300 block px-4 py-2"
                  >
                    {dictionary?.treatments?.allOnImplants || 'All-on-Implants'}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link href={`/${locale}/gallery`} className="text-[#0B132A] hover:text-[#05BBB5] transition-colors duration-300">
                {translations.gallery}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/about`} className="text-[#0B132A] hover:text-[#05BBB5] transition-colors duration-300">
                {translations.aboutUs}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/blog`} className="text-[#0B132A] hover:text-[#05BBB5] transition-colors duration-300">
                {translations.blog}
              </Link>
            </li>
            <li>
              <Link href={`/${locale}/contact`} className="text-[#0B132A] hover:text-[#05BBB5] transition-colors duration-300">
                {translations.contactUs}
              </Link>
            </li>
          </ul>
        </nav>
        
        {/* Language switcher in the middle section */}
        <div className={`${isRTL ? 'mr-6' : 'ml-6'}`}>
          <LanguageSwitcher currentLocale={locale} />
        </div>
      </div>
      
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="p-2 lg:hidden"
        aria-label="Toggle menu"
      >
        <IconMenu2 size={24} />
      </button>
    </div>

    {/* Right section - Search and Consultation */}
    <div data-column="end" className="flex-shrink-0">
      <div className="flex items-center" style={{ gap: isRTL ? '1rem' : '0.75rem' }}>
        <button 
          className="text-[#0B132A] hover:text-[#05BBB5] transition-colors duration-300"
          aria-label="Search"
        >
          <IconSearch size={20} />
        </button>
        <Link
          href={`/${locale}/consultation`}
          className="bg-[#023752] text-white px-4 py-2 rounded-md hover:bg-[#05BBB5] transition-colors duration-300 flex items-center space-x-2 text-[16px]"
        >
          <IconPhone size={16} />
          <span>{translations.getConsultation}</span>
        </Link>
      </div>
    </div>
  </div>

  {/* Mobile menu */}
  {isOpen && (
    <div className="mt-2 bg-white lg:hidden">
      <nav className="flex flex-col p-4 space-y-4">
        <Link 
          href={`/${locale}`} 
          className="text-sm font-medium text-gray-700 hover:text-[#05BBB5] transition-colors duration-300"
        >
          {translations.home}
        </Link>
        <button 
          onClick={() => setTreatmentsOpen(!treatmentsOpen)}
          className="flex items-center justify-between text-sm font-medium text-gray-700 hover:text-[#05BBB5] transition-colors duration-300"
        >
          <span>{translations.treatments}</span>
          <IconChevronDown className={`w-4 h-4 transition-transform ${treatmentsOpen ? 'rotate-180' : ''}`} />
        </button>
        {treatmentsOpen && (
          <div className={`flex flex-col ${isRTL ? 'pr-4' : 'pl-4'} space-y-3`}>
            <Link 
              href={`/${locale}/treatments/dental-implants`} 
              className="text-sm text-gray-600 hover:text-[#05BBB5] transition-colors duration-300"
            >
              {dictionary?.treatments?.dentalImplants || 'Dental Implants'}
            </Link>
            <Link 
              href={`/${locale}/treatments/hollywood-smile`} 
              className="text-sm text-gray-600 hover:text-[#05BBB5] transition-colors duration-300"
            >
              {dictionary?.treatments?.hollywoodSmile || 'Hollywood Smile'}
            </Link>
            <Link 
              href={`/${locale}/treatments/all-on-implants`} 
              className="text-sm text-gray-600 hover:text-[#05BBB5] transition-colors duration-300"
            >
              {dictionary?.treatments?.allOnImplants || 'All-on-Implants'}
            </Link>
          </div>
        )}
        <Link 
          href={`/${locale}/gallery`} 
          className="text-sm font-medium text-gray-700 hover:text-[#05BBB5] transition-colors duration-300"
        >
          {translations.gallery}
        </Link>
        <Link 
          href={`/${locale}/about`} 
          className="text-sm font-medium text-gray-700 hover:text-[#05BBB5] transition-colors duration-300"
        >
          {translations.aboutUs}
        </Link>
        <Link 
          href={`/${locale}/blog`} 
          className="text-sm font-medium text-gray-700 hover:text-[#05BBB5] transition-colors duration-300"
        >
          {translations.blog}
        </Link>
        <Link 
          href={`/${locale}/contact`} 
          className="text-sm font-medium text-gray-700 hover:text-[#05BBB5] transition-colors duration-300"
        >
          {translations.contactUs}
        </Link>
        <div className="flex flex-col pt-4 space-y-4">
          <LanguageSwitcher currentLocale={locale} />
          <Link 
            href={`/${locale}/consultation`} 
            className="inline-flex items-center justify-center space-x-2 bg-[#023752] text-white px-6 py-2.5 rounded-full hover:bg-[#05BBB5] transition-colors duration-300 text-sm font-medium"
          >
            <IconPhone className="w-4 h-4" />
            <span>{translations.getConsultation}</span>
          </Link>
        </div>
      </nav>
    </div>
  )}
</nav>
    </header>
  );
}