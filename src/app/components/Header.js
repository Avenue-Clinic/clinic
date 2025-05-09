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
  IconSearch,
  IconX,
  IconBrandWhatsapp,
} from '@tabler/icons-react';

export default function Header({ dictionary = {}, locale = 'en' }) {
  const [isOpen, setIsOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const isRTL = locale === 'ar';
  const navDict = dictionary?.navigation || {};
  const socialNavLinks = navDict?.socialNav || {};

  const socialIcons = [
    { icon: IconBrandX, label: 'X', href: socialNavLinks.x },
    {
      icon: IconBrandInstagram,
      label: 'Instagram',
      href: socialNavLinks.instagram,
    },
    {
      icon: IconBrandFacebook,
      label: 'Facebook',
      href: socialNavLinks.facebook,
    },
    { icon: IconBrandTiktok, label: 'TikTok', href: socialNavLinks.tiktok },
    { icon: IconBrandYoutube, label: 'YouTube', href: socialNavLinks.youtube },
    {
      icon: IconBrandWhatsapp,
      label: 'WhatsApp',
      href: socialNavLinks.whatsapp,
    },
  ];

  // Get translations from dictionary
  const translations = {
    getConsultation:
      dictionary?.header?.getConsultation || 'Get Free Consultation',
    smileCounter:
      dictionary?.header?.smileCounter ||
      '28,000 Smiles and Counting — Join Us in Istanbul!',
    clinicName: dictionary?.header?.clinicName || 'Avenue Clinic',
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
            <div
              className={`items-center hidden lg:flex ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}
            >
              {socialIcons.map((item) => (
                <a
                  key={item.label}
                  href={item.href || '#'}
                  aria-label={item.label}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[var(--secondary)] transition-colors duration-300"
                >
                  {item.icon && <item.icon size={18} />}
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
              <Image
                src="/logo-filled.svg"
                alt="Logo"
                width={150}
                height={40}
                className={`w-auto h-12 ${isRTL ? 'xl:pl-16' : 'xl:pr-16'}`}
                priority
              />
            </Link>
          </div>

          {/* Center section - Navigation Links (visible on large screens) */}
          <div
            className={`items-center hidden lg:flex order-2 ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'}`}
          >
            {Object.entries(navDict?.mainNav || {}).map(([key, item]) => {
              if (key === 'treatments') {
                return (
                  <div key={key} className="relative group">
                    <div className="flex items-center">
                      <Link
                        href={`/${locale}${item.link}`}
                        className="flex items-center text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
                      >
                        <span>{item.title}</span>
                      </Link>
                      <IconChevronDown
                        size={16}
                        className={`${isRTL ? 'mr-1' : 'ml-1'} transition-transform group-hover:rotate-180`}
                      />
                    </div>

                    {/* Treatments dropdown */}
                    <div
                      className={`absolute z-50 invisible group-hover:visible opacity-0 group-hover:opacity-100 bg-white shadow-lg rounded-lg py-2 mt-0 w-64 ${isRTL ? 'right-0' : 'left-0'} transition-all duration-300`}
                      style={{ top: '100%' }}
                    >
                      {Object.entries(navDict?.treatmentsNav || {}).map(
                        ([treatmentKey, treatment]) => (
                          <Link
                            key={treatmentKey}
                            href={`/${locale}${treatment.link}`}
                            className="block px-4 py-2 text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
                          >
                            {treatment.title}
                          </Link>
                        ),
                      )}
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={key}
                  href={`/${locale}${item.link}`}
                  className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
                >
                  {item.title}
                </Link>
              );
            })}
          </div>

          {/* Right section - Language, Search, Contact (visible on large screens) */}
          <div
            className={`items-center hidden lg:flex ${isRTL ? 'order-3' : 'order-3'} ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'}`}
          >
            <LanguageSwitcher
              currentLocale={locale}
              isMobile={false}
              className="text-[var(--primary)]"
            />
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
            className={`lg:hidden text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300 ${isRTL ? 'order-1' : 'order-1'}`}
          >
            <IconMenu2 className="w-8 h-8" />
          </button>

          {/* Mobile menu panel */}
          <div
            className={`fixed inset-y-0 ${isRTL ? 'left-0' : 'right-0'} w-[300px] bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : isRTL ? '-translate-x-full' : 'translate-x-full'}`}
          >
            <div className="flex items-center justify-between p-4 border-b">
              <span className="text-xl font-semibold text-[var(--primary)]">
                {translations.clinicName}
              </span>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 rounded-full text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-200"
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
                  {navDict?.mainNav?.home?.title || 'Home'}
                </Link>
                {/* In the mobile menu section - modify the treatments section */}
                <div className="relative">
                  <button
                    onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                    className="flex items-center justify-between w-full text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
                  >
                    <span>
                      {navDict?.mainNav?.treatments?.title || 'Treatments'}
                    </span>
                    <IconChevronDown
                      size={20}
                      className={`transition-transform ${treatmentsOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {treatmentsOpen && (
                    <div className={`py-2 ${isRTL ? 'pr-4' : 'pl-4'}`}>
                      {Object.entries(navDict?.treatmentsNav || {}).map(
                        ([treatmentKey, treatment]) => (
                          <Link
                            key={treatmentKey}
                            href={`/${locale}${treatment.link}`}
                            className="block py-2 text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
                            onClick={() => setIsOpen(false)}
                          >
                            {treatment.title}
                          </Link>
                        ),
                      )}
                    </div>
                  )}
                </div>
                <Link
                  href={`/${locale}${navDict?.mainNav?.gallery?.link || '/gallery'}`}
                  className="block text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {navDict?.mainNav?.gallery?.title || 'Gallery'}
                </Link>
                <Link
                  href={`/${locale}${navDict?.mainNav?.aboutUs?.link || '/about'}`}
                  className="block text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {navDict?.mainNav?.aboutUs?.title || 'About Us'}
                </Link>
                <Link
                  href={`/${locale}${navDict?.mainNav?.blog?.link || '/blog'}`}
                  className="block text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {navDict?.mainNav?.blog?.title || 'Blog'}
                </Link>
                <Link
                  href={`/${locale}${navDict?.mainNav?.contactUs?.link || '/contact'}`}
                  className="block text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
                  onClick={() => setIsOpen(false)}
                >
                  {navDict?.mainNav?.contactUs?.title || 'Contact Us'}
                </Link>
              </div>

              <div className="mt-6">
                <LanguageSwitcher
                  currentLocale={locale}
                  isMobile={true}
                  className="text-gray-950"
                />
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

              <div
                className={`flex items-center justify-center mt-8 ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'}`}
              >
                {socialIcons.map((item) => (
                  <a
                    key={item.label}
                    href={item.href || '#'}
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
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
