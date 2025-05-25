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
import { useTranslation } from 'react-i18next'; // Or 'next-i18next'

// The 'dictionary' prop is no longer needed here, only 'locale'
export default function Header({ locale = 'en' }) {
  const { t } = useTranslation(['header', 'common', 'navigation']); // Added 'navigation' namespace
  const [isOpen, setIsOpen] = useState(false);
  const [treatmentsOpen, setTreatmentsOpen] = useState(false);
  const isRTL = locale === 'ar';

  const scrollToContact = (e) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu if open
    }
  };

  // Helper function to get the correct path
  const getLocalizedPath = (path) => {
    // Ensure leading slash if path doesn't have one and isn't just '#'
    const ensureLeadingSlash = (p) =>
      p && p !== '#' && !p.startsWith('/') ? `/${p}` : p;
    return `/${locale}${ensureLeadingSlash(path)}`;
  };

  const socialNavLinks = {
    x: t('socialNav.x', '#'),
    instagram: t('socialNav.instagram', '#'),
    facebook: t('socialNav.facebook', '#'),
    tiktok: t('socialNav.tiktok', '#'),
    youtube: t('socialNav.youtube', '#'),
    whatsapp: t('socialNav.whatsapp', '#'),
  };

  const socialIcons = [
    {
      icon: IconBrandX,
      label: t('header:socialNav.xLabel', 'X'),
      href: t('navigation:socialNav.x'),
    },
    {
      icon: IconBrandInstagram,
      label: t('header:socialNav.instagramLabel', 'Instagram'),
      href: t('navigation:socialNav.instagram'),
    },
    {
      icon: IconBrandFacebook,
      label: t('header:socialNav.facebookLabel', 'Facebook'),
      href: t('navigation:socialNav.facebook'),
    },
    {
      icon: IconBrandTiktok,
      label: t('header:socialNav.tiktokLabel', 'TikTok'),
      href: t('navigation:socialNav.tiktok'),
    },
    {
      icon: IconBrandYoutube,
      label: t('header:socialNav.youtubeLabel', 'YouTube'),
      href: t('navigation:socialNav.youtube'),
    },
    {
      icon: IconBrandWhatsapp,
      label: t('header:socialNav.whatsappLabel', 'WhatsApp'),
      href: t('navigation:socialNav.whatsapp'),
    },
  ].filter((item) => item.href && item.href !== '#'); // Filter out if href is not set

  // Main navigation items from 'navigation' namespace
  const mainNav = {
    home: {
      title: t('navigation:mainNav.home.title', 'Home'),
      link: t('navigation:mainNav.home.link', '/'),
    },
    treatments: {
      title: t('navigation:mainNav.treatments.title', 'Treatments'),
      link: t('navigation:mainNav.treatments.link', '/treatments'),
    },
    gallery: {
      title: t('navigation:mainNav.gallery.title', 'Gallery'),
      link: t('navigation:mainNav.gallery.link', '/gallery'),
    },
    aboutUs: {
      title: t('navigation:mainNav.aboutUs.title', 'About Us'),
      link: t('navigation:mainNav.aboutUs.link', '/about'),
    },
    blog: {
      title: t('navigation:mainNav.blog.title', 'Blog'),
      link: t('navigation:mainNav.blog.link', '/blog'),
    },
    contactUs: {
      title: t('navigation:mainNav.contactUs.title', 'Contact Us'),
      link: t('navigation:mainNav.contactUs.link', '/contact'),
    },
  };

  // Treatment items from 'navigation' namespace
  const treatmentItems = [
    {
      key: 'dentalImplants',
      title: t(
        'navigation:treatmentsNav.dentalImplants.title',
        'Dental Implants',
      ),
      link: t(
        'navigation:treatmentsNav.dentalImplants.link',
        '/treatments/dental-implants',
      ),
    },
    {
      key: 'hollywoodSmile',
      title: t(
        'navigation:treatmentsNav.hollywoodSmile.title',
        'Hollywood Smile',
      ),
      link: t(
        'navigation:treatmentsNav.hollywoodSmile.link',
        '/treatments/hollywood-smile',
      ),
    },
    {
      key: 'dentalVeneers',
      title: t(
        'navigation:treatmentsNav.dentalVeneers.title',
        'Dental Veneers',
      ),
      link: t(
        'navigation:treatmentsNav.dentalVeneers.link',
        '/treatments/dental-veneers',
      ),
    },
    {
      key: 'allOn46Implants',
      title: t(
        'navigation:treatmentsNav.allOn46Implants.title',
        'All-on-4/6 Implants',
      ),
      link: t(
        'navigation:treatmentsNav.allOn46Implants.link',
        '/treatments/all-on46-implants',
      ),
    },
    {
      key: 'dentalCrowns',
      title: t('navigation:treatmentsNav.dentalCrowns.title', 'Dental Crowns'),
      link: t(
        'navigation:treatmentsNav.dentalCrowns.link',
        '/treatments/dental-crowns',
      ),
    },
    {
      key: 'surgicalDentistry',
      title: t(
        'navigation:treatmentsNav.surgicalDentistry.title',
        'Surgical Dentistry',
      ),
      link: t(
        'navigation:treatmentsNav.surgicalDentistry.link',
        '/treatments/surgical-dentistry',
      ),
    },
    {
      key: 'smileMakeover',
      title: t(
        'navigation:treatmentsNav.smileMakeover.title',
        'Smile Makeover',
      ),
      link: t(
        'navigation:treatmentsNav.smileMakeover.link',
        '/treatments/smile-makeover',
      ),
    },
  ];

  return (
    <header className="bg-white" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Top bar with reduced padding */}
      <div className="bg-[var(--primary)] text-[var(--text)] py-1.5">
        <div className="max-w-[1300px] mx-auto px-4">
          <div className="flex items-center justify-between lg:justify-between">
            <div className="flex items-center justify-center w-full text-sm lg:text-left lg:w-auto lg:justify-start">
              <span>
                {t(
                  'header:smileCounter',
                  '28,000 Smiles and Counting — Join Us in Istanbul!',
                )}
              </span>
            </div>
            <div
              className={`items-center hidden lg:flex ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}
            >
              {socialIcons.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
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
            <Link
              href={getLocalizedPath(mainNav.home.link)}
              className="site-logo-container"
            >
              <Image
                src="/logo-filled.svg"
                alt={t('header:clinicNameAlt', 'Avenue Clinic Logo')}
                width={150}
                height={40}
                className={`w-auto h-12 ${isRTL ? 'xl:pl-16' : 'xl:pr-16'}`}
                priority
              />
            </Link>
          </div>

          {/* Center section - Navigation links (Desktop) */}
          <div className="items-center justify-center order-2 hidden mx-auto text-[18px] font-normal text-center lg:flex">
            <div
              className={`flex ${isRTL ? 'space-x-reverse space-x-5' : 'space-x-5'} items-center`}
            >
              <Link
                href={getLocalizedPath(mainNav.home.link)}
                className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
              >
                {mainNav.home.title}
              </Link>

              <div
                className="relative group"
                onMouseEnter={() => setTreatmentsOpen(true)}
                onMouseLeave={() => setTreatmentsOpen(false)}
              >
                <button
                  className={`flex items-center text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300 ${isRTL ? 'space-x-reverse space-x-1' : 'space-x-1'}`}
                  onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                >
                  <span>{mainNav.treatments.title}</span>
                  <IconChevronDown
                    size={16}
                    className={`transition-transform duration-200 ${treatmentsOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {treatmentsOpen && (
                  <div className="absolute z-20 w-56 py-2 text-left transform -translate-x-1/2 bg-white rounded-md shadow-lg left-1/2">
                    {treatmentItems.map((treatment) => (
                      <Link
                        key={treatment.key}
                        href={getLocalizedPath(treatment.link)}
                        className="block px-4 py-2 text-base text-[var(--primary)] hover:bg-gray-100 hover:text-[var(--secondary)] transition-colors duration-300"
                      >
                        {treatment.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href={getLocalizedPath(mainNav.gallery.link)}
                className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
              >
                {mainNav.gallery.title}
              </Link>
              <Link
                href={getLocalizedPath(mainNav.aboutUs.link)}
                className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
              >
                {mainNav.aboutUs.title}
              </Link>
              <Link
                href={getLocalizedPath(mainNav.blog.link)}
                className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
              >
                {mainNav.blog.title}
              </Link>
              <Link
                href={getLocalizedPath(mainNav.contactUs.link)}
                className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
              >
                {mainNav.contactUs.title}
              </Link>
            </div>
          </div>

          {/* Right section - Language switcher and Call to action (Desktop) */}
          <div
            className={`items-center hidden order-3 lg:flex ${isRTL ? 'space-x-reverse space-x-4' : 'space-x-4'}`}
          >
            <LanguageSwitcher currentLocale={locale} />
            <Link
              href="#contact"
              className={`inline-flex items-center bg-[var(--primary)] text-white px-5 py-2.5 rounded-full hover:bg-[var(--secondary)] transition-colors duration-300 text-[15px] font-medium ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
              onClick={scrollToContact}
            >
              <IconPhone className="w-4 h-4" />
              <span>
                {t('header:getConsultation', 'Get Free Consultation')}
              </span>
            </Link>
          </div>

          {/* Mobile menu button (Hamburger icon) - Only on small screens */}
          <div
            className={`flex items-center order-3 lg:hidden ${isRTL ? 'order-1' : ''}`}
          >
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label={t('header:toggleNavigation', 'Toggle navigation')}
              className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300 p-2"
            >
              {isOpen ? <IconX size={28} /> : <IconMenu2 size={28} />}
            </button>
          </div>

          {/* Mobile navigation menu */}
          <div
            className={`fixed inset-y-0 ${isRTL ? 'right-0' : 'left-0'} z-50 w-[85%] max-w-[400px] bg-white transform transition-transform duration-300 ease-in-out lg:hidden ${
              isOpen
                ? 'translate-x-0'
                : isRTL
                  ? 'translate-x-full'
                  : '-translate-x-full'
            }`}
          >
            {/* Mobile menu header */}
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
              <Link
                href={getLocalizedPath(mainNav.home.link)}
                onClick={() => setIsOpen(false)}
                className="site-logo-container"
              >
                <Image
                  src="/logo-filled.svg"
                  alt={t('header:clinicNameAlt', 'Avenue Clinic Logo')}
                  width={140}
                  height={35}
                  className="w-auto h-10"
                />
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                aria-label={t('header:closeMenu', 'Close menu')}
                className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300 p-2"
              >
                <IconX size={28} />
              </button>
            </div>

            {/* Mobile menu links (Scrollable) */}
            <nav className="flex-grow px-6 py-6 space-y-5 overflow-y-auto text-lg font-medium">
              <Link
                href={getLocalizedPath(mainNav.home.link)}
                className="block text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {mainNav.home.title}
              </Link>
              <div>
                <button
                  className={`flex items-center justify-between w-full text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300 ${isRTL ? 'flex-row-reverse' : ''}`}
                  onClick={() => setTreatmentsOpen(!treatmentsOpen)}
                >
                  <span>{mainNav.treatments.title}</span>
                  <IconChevronDown
                    size={20}
                    className={`transition-transform duration-200 ${treatmentsOpen ? 'rotate-180' : ''} ${isRTL ? 'mr-auto' : 'ml-auto'}`}
                  />
                </button>
                {treatmentsOpen && (
                  <div
                    className={`pt-3 ${isRTL ? 'pr-4 space-y-3' : 'pl-4 space-y-3'}`}
                  >
                    {treatmentItems.map((treatment) => (
                      <Link
                        key={treatment.key}
                        href={getLocalizedPath(treatment.link)}
                        className="block py-2 text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
                        onClick={() => setIsOpen(false)}
                      >
                        {treatment.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href={getLocalizedPath(mainNav.gallery.link)}
                className="block text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {mainNav.gallery.title}
              </Link>
              <Link
                href={getLocalizedPath(mainNav.aboutUs.link)}
                className="block text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {mainNav.aboutUs.title}
              </Link>
              <Link
                href={getLocalizedPath(mainNav.blog.link)}
                className="block text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {mainNav.blog.title}
              </Link>
              <Link
                href={getLocalizedPath(mainNav.contactUs.link)}
                className="block text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
                onClick={() => setIsOpen(false)}
              >
                {mainNav.contactUs.title}
              </Link>
            </nav>

            {/* Mobile menu footer items */}
            <div className="px-6 pt-6 mt-auto border-t border-gray-200">
              <div className="mb-6">
                <LanguageSwitcher
                  currentLocale={locale}
                  isMobile={true} // Ensure this prop is handled by LanguageSwitcher if it changes styles
                  className="text-gray-950" // Example class, adjust as needed
                />
              </div>

              <div className="mb-6">
                <Link
                  href="#contact"
                  className={`inline-flex items-center justify-center w-full bg-[var(--primary)] text-white px-5 py-3 rounded-full hover:bg-[var(--secondary)] transition-colors duration-300 text-[15px] font-medium ${isRTL ? 'space-x-reverse space-x-2' : 'space-x-2'}`}
                  onClick={scrollToContact} // This already closes menu: setIsOpen(false)
                >
                  <IconPhone className="w-4 h-4" />
                  <span>
                    {t('header:getConsultation', 'Get Free Consultation')}
                  </span>
                </Link>
              </div>

              <div
                className={`flex items-center justify-center ${isRTL ? 'space-x-reverse space-x-6' : 'space-x-6'}`}
              >
                {socialIcons.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    aria-label={item.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[var(--primary)] hover:text-[var(--secondary)] transition-colors duration-300"
                  >
                    {item.icon && <item.icon size={20} />}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Overlay when mobile menu is open */}
          {isOpen && (
            <div
              className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm lg:hidden"
              onClick={() => setIsOpen(false)}
            ></div>
          )}
        </div>
      </nav>
    </header>
  );
}
