'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import { Facebook, Instagram, Menu, ChevronDown, Phone } from 'lucide-react';

export default function Header({ dictionary = {}, locale = 'en' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);

  // Provide default values for missing translations
  const translations = {
    home: dictionary?.header?.home || 'Home',
    treatments: dictionary?.header?.treatments || 'Treatments',
    gallery: dictionary?.header?.gallery || 'Gallery',
    aboutUs: dictionary?.header?.aboutUs || 'About Us',
    blog: dictionary?.header?.blog || 'Blog',
    contactUs: dictionary?.header?.contactUs || 'Contact Us',
    getConsultation: dictionary?.header?.getConsultation || 'Get Free Consultation',
  };

  return (
    <header className="fixed top-0 right-0 left-0 z-50 bg-white">
      {/* Top Bar */}
      <div className="bg-[#003b4a] text-white py-2">
        <div className="container flex justify-between items-center px-4 mx-auto">
          <p className="text-sm font-medium">28,000 Smiles and Counting — Join Us in Istanbul!</p>
          <div className="flex gap-4 items-center">
            <a href="#" aria-label="Facebook" className="hover:text-[#00a9a7] transition-colors">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#00a9a7] transition-colors">
              <Instagram className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container px-4 py-4 mx-auto border-b">
        <div className="flex justify-between items-center">
          <Link href={`/${locale}`} className="flex-shrink-0">
            <Image
              src="/images/logo.svg"
              alt="Medico Logo"
              width={150}
              height={40}
              className="w-auto h-10"
            />
          </Link>

          <nav className="hidden items-center space-x-8 lg:flex">
            <Link 
              href={`/${locale}`} 
              className="text-sm font-medium text-gray-700 hover:text-[#00a9a7] transition-colors"
            >
              {translations.home}
            </Link>
            <div className="relative group">
              <button 
                className="flex items-center space-x-1 text-sm font-medium text-gray-700 hover:text-[#00a9a7] transition-colors"
                onClick={() => setTreatmentsOpen(!treatmentsOpen)}
              >
                <span>{translations.treatments}</span>
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>
            <Link 
              href={`/${locale}/gallery`} 
              className="text-sm font-medium text-gray-700 hover:text-[#00a9a7] transition-colors"
            >
              {translations.gallery}
            </Link>
            <Link 
              href={`/${locale}/about`} 
              className="text-sm font-medium text-gray-700 hover:text-[#00a9a7] transition-colors"
            >
              {translations.aboutUs}
            </Link>
            <Link 
              href={`/${locale}/blog`} 
              className="text-sm font-medium text-gray-700 hover:text-[#00a9a7] transition-colors"
            >
              {translations.blog}
            </Link>
            <Link 
              href={`/${locale}/contact`} 
              className="text-sm font-medium text-gray-700 hover:text-[#00a9a7] transition-colors"
            >
              {translations.contactUs}
            </Link>
          </nav>

          <div className="hidden items-center space-x-4 lg:flex">
            <LanguageSwitcher currentLocale={locale} />
            <Link 
              href={`/${locale}/contact`} 
              className="inline-flex items-center space-x-2 bg-[#00a9a7] text-white px-6 py-2.5 rounded-full hover:bg-[#008f8d] transition-colors text-sm font-medium"
            >
              <Phone className="w-4 h-4" />
              <span>{translations.getConsultation}</span>
            </Link>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-gray-700 hover:text-[#00a9a7] transition-colors"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="pb-4 mt-4 lg:hidden">
            <nav className="flex flex-col space-y-4">
              <Link 
                href={`/${locale}`} 
                className="text-sm font-medium text-gray-700 hover:text-[#00a9a7] transition-colors"
              >
                {translations.home}
              </Link>
              <button 
                onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                className="flex items-center justify-between text-sm font-medium text-gray-700 hover:text-[#00a9a7] transition-colors"
              >
                <span>{translations.treatments}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${treatmentsOpen ? 'rotate-180' : ''}`} />
              </button>
              {treatmentsOpen && (
                <div className="flex flex-col pl-4 space-y-3">
                  <Link 
                    href={`/${locale}/treatments/dental-implants`} 
                    className="text-sm text-gray-600 hover:text-[#00a9a7] transition-colors"
                  >
                    {dictionary?.treatments?.dentalImplants || 'Dental Implants'}
                  </Link>
                  <Link 
                    href={`/${locale}/treatments/hollywood-smile`} 
                    className="text-sm text-gray-600 hover:text-[#00a9a7] transition-colors"
                  >
                    {dictionary?.treatments?.hollywoodSmile || 'Hollywood Smile'}
                  </Link>
                  <Link 
                    href={`/${locale}/treatments/all-on-implants`} 
                    className="text-sm text-gray-600 hover:text-[#00a9a7] transition-colors"
                  >
                    {dictionary?.treatments?.allOnImplants || 'All-on-Implants'}
                  </Link>
                </div>
              )}
              <Link 
                href={`/${locale}/gallery`} 
                className="text-sm font-medium text-gray-700 hover:text-[#00a9a7] transition-colors"
              >
                {translations.gallery}
              </Link>
              <Link 
                href={`/${locale}/about`} 
                className="text-sm font-medium text-gray-700 hover:text-[#00a9a7] transition-colors"
              >
                {translations.aboutUs}
              </Link>
              <Link 
                href={`/${locale}/blog`} 
                className="text-sm font-medium text-gray-700 hover:text-[#00a9a7] transition-colors"
              >
                {translations.blog}
              </Link>
              <Link 
                href={`/${locale}/contact`} 
                className="text-sm font-medium text-gray-700 hover:text-[#00a9a7] transition-colors"
              >
                {translations.contactUs}
              </Link>
              <div className="flex flex-col pt-4 space-y-4">
                <LanguageSwitcher currentLocale={locale} />
                <Link 
                  href={`/${locale}/contact`} 
                  className="inline-flex items-center justify-center space-x-2 bg-[#00a9a7] text-white px-6 py-2.5 rounded-full hover:bg-[#008f8d] transition-colors text-sm font-medium"
                >
                  <Phone className="w-4 h-4" />
                  <span>{translations.getConsultation}</span>
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}