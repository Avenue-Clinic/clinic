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
    <header className="bg-white">
      {/* Top bar with reduced padding */}
      <div className="bg-[#023752] text-white py-1.5">
        <div className="max-w-[1350px] mx-auto px-10">
          <div className={`flex items-center justify-between lg:justify-between ${isRTL ? 'flex-row-reverse' : ''}`}>
          <div className="flex items-center justify-center w-full text-sm lg:text-left lg:w-auto lg:justify-start">
              <span>{translations.smileCounter}</span>
            </div>
            <div className={`items-center hidden space-x-4 lg:flex ${isRTL ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <a href="#" aria-label="X" className={`hover:text-[#95E8E0] transition-colors duration-300 ${isRTL ? 'mr-4' : ''}`}>
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
      </div>

      {/* Main navigation with three distinct sections */}
      <nav className="max-w-[1350px] mx-auto relative py-2 px-4">
        <div className="flex items-center justify-between">
          {/* Left section - Logo */}
          <div className={`flex items-center ${isRTL ? 'order-2' : ''}`}>
            <Link href={`/${locale}`} className="site-logo-container">
              <Image src="/logo.svg" alt="Logo" width={150} height={40} className="w-auto h-12" priority />
            </Link>
          </div>

          {/* Center section - Navigation Links (visible on large screens) */}
          <div className="items-center hidden space-x-6 lg:flex">
            <Link href={`/${locale}`} className="text-gray-700 hover:text-[#05BBB5] transition-colors duration-300">
              {translations.home}
            </Link>
            <div className="relative group">
              <button
                onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                className="flex items-center text-gray-700 hover:text-[#05BBB5] transition-colors duration-300"
              >
                <span>{translations.treatments}</span>
                <IconChevronDown className={`w-4 h-4 ml-1 transform transition-transform duration-200 ${treatmentsOpen ? 'rotate-180' : ''}`} />
              </button>
              {/* Treatments dropdown menu */}
              <div 
                className={`absolute ${isRTL ? 'right-0' : 'left-0'} top-full z-50 mt-1 w-64 bg-white rounded-lg shadow-lg py-2 transition-all duration-300 ${
                  treatmentsOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
                }`}
                onMouseEnter={() => setTreatmentsOpen(true)}
                onMouseLeave={() => setTreatmentsOpen(false)}
              >
                <Link 
                  href={`/${locale}/treatments/dental-implants`} 
                  className="block px-4 py-2 text-gray-600 hover:text-[#05BBB5] hover:bg-gray-50 transition-colors duration-300"
                >
                  {dictionary?.treatments?.dentalImplants || 'Dental Implants'}
                </Link>
                <Link 
                  href={`/${locale}/treatments/hollywood-smile`} 
                  className="block px-4 py-2 text-gray-600 hover:text-[#05BBB5] hover:bg-gray-50 transition-colors duration-300"
                >
                  {dictionary?.treatments?.hollywoodSmile || 'Hollywood Smile'}
                </Link>
                <Link 
                  href={`/${locale}/treatments/all-on-implants`} 
                  className="block px-4 py-2 text-gray-600 hover:text-[#05BBB5] hover:bg-gray-50 transition-colors duration-300"
                >
                  {dictionary?.treatments?.allOnImplants || 'All-on-4/6 Implants'}
                </Link>
                <Link 
                  href={`/${locale}/treatments/dental-crowns`} 
                  className="block px-4 py-2 text-gray-600 hover:text-[#05BBB5] hover:bg-gray-50 transition-colors duration-300"
                >
                  {dictionary?.treatments?.dentalCrowns || 'Dental Crowns'}
                </Link>
                <Link 
                  href={`/${locale}/treatments/dental-veneers`} 
                  className="block px-4 py-2 text-gray-600 hover:text-[#05BBB5] hover:bg-gray-50 transition-colors duration-300"
                >
                  {dictionary?.treatments?.dentalVeneers || 'Dental Veneers'}
                </Link>
                <Link 
                  href={`/${locale}/treatments/surgical-dentistry`} 
                  className="block px-4 py-2 text-gray-600 hover:text-[#05BBB5] hover:bg-gray-50 transition-colors duration-300"
                >
                  {dictionary?.treatments?.surgicalDentistry || 'Surgical Dentistry'}
                </Link>
              </div>
            </div>
            <Link href={`/${locale}/gallery`} className="text-gray-700 hover:text-[#05BBB5] transition-colors duration-300">
              {translations.gallery}
            </Link>
            <Link href={`/${locale}/about`} className="text-gray-700 hover:text-[#05BBB5] transition-colors duration-300">
              {translations.aboutUs}
            </Link>
            <Link href={`/${locale}/blog`} className="text-gray-700 hover:text-[#05BBB5] transition-colors duration-300">
              {translations.blog}
            </Link>
            <Link href={`/${locale}/contact`} className="text-gray-700 hover:text-[#05BBB5] transition-colors duration-300">
              {translations.contactUs}
            </Link>
          </div>

          {/* Right section - Language, Search, Contact (visible on large screens) */}
          <div className="items-center hidden space-x-4 lg:flex">
            <LanguageSwitcher currentLocale={locale} />
            <button className="text-gray-700 hover:text-[#05BBB5] transition-colors duration-300">
              <IconSearch className="w-5 h-5" />
            </button>
            <Link 
              href={`/${locale}/consultation`} 
              className="hidden xl:inline-flex items-center space-x-2 bg-[#023752] text-white px-5 py-3 rounded-full hover:bg-[#05BBB5] transition-colors duration-300 text-[15px] font-medium"
            >
              <IconPhone className="w-4 h-4" />
              <span>{translations.getConsultation}</span>
            </Link>
          </div>

          {/* Mobile menu button (visible on small screens) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-gray-700 hover:text-[#05BBB5] transition-colors duration-300"
          >
            <IconMenu2 className="w-8 h-8" />
          </button>

          {/* Mobile menu panel */}
          <div className={`fixed inset-y-0 ${!isRTL ? 'right-0' : 'left-0'} w-[300px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : !isRTL ? 'translate-x-full' : '-translate-x-full'}`}>
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-xl font-semibold text-[#023752]">{translations.clinicName}</span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full hover:text-[#05BBB5] transition-colors duration-300"
                aria-label="Close menu"
              >
                <IconX size={24} />
              </button>
            </div>
            
            <nav className="flex flex-col p-4">
              <div className="space-y-4 text-lg">
                <Link 
                  href={`/${locale}`} 
                  className="block text-gray-700 hover:text-[#05BBB5] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {translations.home}
                </Link>
                {/* In the mobile menu section - modify the treatments section */}
                <div>
                  <div className="flex items-center justify-between">
                    <button 
                      onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                      className="text-gray-700 hover:text-[#05BBB5] transition-colors duration-300 w-full text-left flex items-center justify-between"
                    >
                      <span>{translations.treatments}</span>
                      <IconChevronDown className={`w-5 h-5 transition-transform duration-300 ${treatmentsOpen ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                  <div className={`overflow-hidden transition-all duration-300 ease-in-out ${treatmentsOpen ? 'max-h-72 opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="flex flex-col pt-2 space-y-1">
                      <Link 
                        href={`/${locale}/treatments/dental-implants`} 
                        className="block pl-4 py-2 text-[#4F5665] text-[16px] hover:text-[#05BBB5] transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {dictionary?.treatments?.dentalImplants || 'Dental Implants'}
                      </Link>
                      <Link 
                        href={`/${locale}/treatments/hollywood-smile`} 
                        className="block pl-4 py-2 text-[#4F5665] text-[16px] hover:text-[#05BBB5] transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {dictionary?.treatments?.hollywoodSmile || 'Hollywood Smile'}
                      </Link>
                      <Link 
                        href={`/${locale}/treatments/all-on-implants`} 
                        className="block pl-4 py-2 text-[#4F5665] text-[16px] hover:text-[#05BBB5] transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {dictionary?.treatments?.allOnImplants || 'All-on-4/6 Implants'}
                      </Link>
                      <Link 
                        href={`/${locale}/treatments/dental-crowns`} 
                        className="block pl-4 py-2 text-[#4F5665] text-[16px] hover:text-[#05BBB5] transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {dictionary?.treatments?.dentalCrowns || 'Dental Crowns'}
                      </Link>
                      <Link 
                        href={`/${locale}/treatments/dental-veneers`} 
                        className="block pl-4 py-2 text-[#4F5665] text-[16px] hover:text-[#05BBB5] transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {dictionary?.treatments?.dentalVeneers || 'Dental Veneers'}
                      </Link>
                      <Link 
                        href={`/${locale}/treatments/surgical-dentistry`} 
                        className="block pl-4 py-2 text-[#4F5665] text-[16px] hover:text-[#05BBB5] transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {dictionary?.treatments?.surgicalDentistry || 'Surgical Dentistry'}
                      </Link>
                    </div>
                  </div>
                </div>
                <Link 
                  href={`/${locale}/gallery`} 
                  className="block text-gray-700 hover:text-[#05BBB5] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {translations.gallery}
                </Link>
                <Link 
                  href={`/${locale}/about`} 
                  className="block text-gray-700 hover:text-[#05BBB5] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {translations.aboutUs}
                </Link>
                <Link 
                  href={`/${locale}/blog`} 
                  className="block text-gray-700 hover:text-[#05BBB5] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {translations.blog}
                </Link>
                <Link 
                  href={`/${locale}/contact`} 
                  className="block text-gray-700 hover:text-[#05BBB5] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {translations.contactUs}
                </Link>
              </div>

              <div className="mt-6">
                <LanguageSwitcher currentLocale={locale} isMobile={true} />
              </div>

              <div className="mt-6">
                <Link 
                  href={`/${locale}/consultation`} 
                  className="inline-flex items-center justify-center w-full space-x-2 bg-[#023752] text-white px-5 py-3 rounded-full hover:bg-[#05BBB5] transition-colors duration-300 text-[15px] font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  <IconPhone className="w-4 h-4" />
                  <span>{translations.getConsultation}</span>
                </Link>
              </div>

              <div className={`flex items-center justify-center mt-8 space-x-6 ${isRTL ? 'flex-row-reverse' : ''}`}>
                <a href="#" aria-label="X" className="text-gray-600 hover:text-[#05BBB5] transition-colors duration-300">
                  <IconBrandX size={20} />
                </a>
                <a href="#" aria-label="Instagram" className="text-gray-600 hover:text-[#05BBB5] transition-colors duration-300">
                  <IconBrandInstagram size={20} />
                </a>
                <a href="#" aria-label="Facebook" className="text-gray-600 hover:text-[#05BBB5] transition-colors duration-300">
                  <IconBrandFacebook size={20} />
                </a>
                <a href="#" aria-label="TikTok" className="text-gray-600 hover:text-[#05BBB5] transition-colors duration-300">
                  <IconBrandTiktok size={20} />
                </a>
                <a href="#" aria-label="YouTube" className="text-gray-600 hover:text-[#05BBB5] transition-colors duration-300">
                  <IconBrandYoutube size={20} />
                </a>
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
      <style jsx global>{`
        .rtl-text:hover {
          color: #05BBB5;
        }
      `}</style>
    </header>
  );
}