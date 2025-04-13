// src/components/Header.js
'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';

export default function Header({ dictionary, locale }) {
  const [isOpen, setIsOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="bg-[#003b4a] text-white py-2 px-4">
        <div className="container mx-auto flex justify-between items-center">
          <p className="text-sm">28,000 Smiles and Counting — Join Us in Istanbul!</p>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook" className="hover:text-[#00a9a7]">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram" className="hover:text-[#00a9a7]">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="#" aria-label="TikTok" className="hover:text-[#00a9a7]">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <Link href={`/${locale}`} className="flex items-center">
            <Image src="/images/logo.svg" alt="Medico" width={150} height={40} className="h-10 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center space-x-8">
            <Link href={`/${locale}`} className="text-gray-700 hover:text-[#00a9a7]">
              {dictionary.header.home}
            </Link>
            <div className="relative group">
              <button 
                onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                className="text-gray-700 hover:text-[#00a9a7] flex items-center"
              >
                {dictionary.header.treatments}
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute left-0 mt-2 w-56 bg-white rounded-lg shadow-lg p-4 hidden group-hover:block">
                <Link href={`/${locale}/treatments/dental-implants`} className="block py-2 text-gray-700 hover:text-[#00a9a7]">
                  {dictionary.treatments.dentalImplants}
                </Link>
                <Link href={`/${locale}/treatments/hollywood-smile`} className="block py-2 text-gray-700 hover:text-[#00a9a7]">
                  {dictionary.treatments.hollywoodSmile}
                </Link>
                <Link href={`/${locale}/treatments/all-on-implants`} className="block py-2 text-gray-700 hover:text-[#00a9a7]">
                  {dictionary.treatments.allOnImplants}
                </Link>
              </div>
            </div>
            <Link href={`/${locale}/gallery`} className="text-gray-700 hover:text-[#00a9a7]">
              {dictionary.header.gallery}
            </Link>
            <Link href={`/${locale}/about`} className="text-gray-700 hover:text-[#00a9a7]">
              {dictionary.header.aboutUs}
            </Link>
            <Link href={`/${locale}/blog`} className="text-gray-700 hover:text-[#00a9a7]">
              {dictionary.header.blog}
            </Link>
            <Link href={`/${locale}/contact`} className="text-gray-700 hover:text-[#00a9a7]">
              {dictionary.header.contactUs}
            </Link>
          </nav>

          <div className="hidden lg:flex items-center space-x-4">
            <LanguageSwitcher currentLocale={locale} />
            <Link 
              href={`/${locale}/contact`} 
              className="bg-[#00a9a7] text-white px-6 py-2 rounded-full hover:bg-[#008f8d] transition-colors"
            >
              {dictionary.header.getConsultation}
            </Link>
          </div>

          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="lg:hidden text-gray-700 focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <nav className="flex flex-col space-y-4">
              <Link href={`/${locale}`} className="text-gray-700 hover:text-[#00a9a7]">
                {dictionary.header.home}
              </Link>
              <button 
                onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                className="text-gray-700 hover:text-[#00a9a7] flex items-center justify-between"
              >
                {dictionary.header.treatments}
                <svg className={`w-4 h-4 transition-transform ${treatmentsOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {treatmentsOpen && (
                <div className="pl-4 flex flex-col space-y-3">
                  <Link href={`/${locale}/treatments/dental-implants`} className="text-gray-700 hover:text-[#00a9a7]">
                    {dictionary.treatments.dentalImplants}
                  </Link>
                  <Link href={`/${locale}/treatments/hollywood-smile`} className="text-gray-700 hover:text-[#00a9a7]">
                    {dictionary.treatments.hollywoodSmile}
                  </Link>
                  <Link href={`/${locale}/treatments/all-on-implants`} className="text-gray-700 hover:text-[#00a9a7]">
                    {dictionary.treatments.allOnImplants}
                  </Link>
                </div>
              )}
              <Link href={`/${locale}/gallery`} className="text-gray-700 hover:text-[#00a9a7]">
                {dictionary.header.gallery}
              </Link>
              <Link href={`/${locale}/about`} className="text-gray-700 hover:text-[#00a9a7]">
                {dictionary.header.aboutUs}
              </Link>
              <Link href={`/${locale}/blog`} className="text-gray-700 hover:text-[#00a9a7]">
                {dictionary.header.blog}
              </Link>
              <Link href={`/${locale}/contact`} className="text-gray-700 hover:text-[#00a9a7]">
                {dictionary.header.contactUs}
              </Link>
              <div className="pt-4 flex flex-col space-y-4">
                <LanguageSwitcher currentLocale={locale} />
                <Link 
                  href={`/${locale}/contact`} 
                  className="bg-[#00a9a7] text-white px-6 py-2 rounded-full text-center hover:bg-[#008f8d] transition-colors"
                >
                  {dictionary.header.getConsultation}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}