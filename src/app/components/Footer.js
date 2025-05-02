import { IconBrandTiktok, IconBrandYoutube, IconBrandX, IconBrandInstagram, IconBrandFacebook, IconBrandWhatsapp, IconHeart } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Footer({ dictionary = {}, locale }) {
  const footerDict = dictionary?.footer || {};
  const isRTL = locale === 'ar';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[--primary] text-white">
      <div className="container px-6 py-16 mx-auto">
        <div className={`grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 text-sm ${isRTL ? 'text-right' : 'text-left'}`}>
          {/* Column 1 - Logo and Social */}
          <div className={isRTL ? 'lg:order-4' : 'lg:order-1'}>
            <Link href={`/${locale}`} className={`inline-block mb-6 ${isRTL ? 'float-right' : ''}`}>
              <Image 
                src="/logo.svg" 
                alt="logo" 
                width={150} 
                height={40} 
                className="w-auto h-10 brightness-0 invert" 
              />
            </Link>
            <p className="mb-8 text-gray-300">
              {footerDict?.description}
            </p>
            <div className={`flex gap-4 ${isRTL ? 'justify-end' : ''}`}>
              <a href="#" className="text-gray-300 hover:text-[#00a9a7] transition-colors" aria-label="Facebook">
                <IconBrandFacebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00a9a7] transition-colors" aria-label="Instagram">
                <IconBrandInstagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00a9a7] transition-colors" aria-label="WhatsApp">
                <IconBrandWhatsapp size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00a9a7] transition-colors" aria-label="TikTok">
                <IconBrandTiktok size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00a9a7] transition-colors" aria-label="YouTube">
                <IconBrandYoutube size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00a9a7] transition-colors" aria-label="X">
                <IconBrandX size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className={isRTL ? 'lg:order-3' : 'lg:order-2'}>
            <h3 className="mb-6 text-xl font-semibold">{footerDict?.quickLinks}</h3>
            <ul className="space-y-4">
              <li><Link href={`/${locale}`} className="text-gray-300 hover:text-white hover:underline">{footerDict?.links?.home}</Link></li>
              <li><Link href={`/${locale}/treatments`} className="text-gray-300 hover:text-white hover:underline">{footerDict?.links?.treatments}</Link></li>
              <li><Link href={`/${locale}/gallery`} className="text-gray-300 hover:text-white hover:underline">{footerDict?.links?.gallery}</Link></li>
              <li><Link href={`/${locale}/about`} className="text-gray-300 hover:text-white hover:underline">{footerDict?.links?.aboutUs}</Link></li>
              <li><Link href={`/${locale}/blog`} className="text-gray-300 hover:text-white hover:underline">{footerDict?.links?.blog}</Link></li>
              <li><Link href={`/${locale}/contact`} className="text-gray-300 hover:text-white hover:underline">{footerDict?.links?.contactUs}</Link></li>
            </ul>
          </div>

          {/* Column 3 - Treatments */}
          <div className={isRTL ? 'lg:order-2' : 'lg:order-3'}>
            <h3 className="mb-6 text-xl font-semibold">{footerDict?.ourTreatments}</h3>
            <ul className="space-y-4">
              <li><Link href={`/${locale}/treatments/dental-implants`} className="text-gray-300 hover:text-white hover:underline">{footerDict?.treatmentLinks?.dentalImplants}</Link></li>
              <li><Link href={`/${locale}/treatments/hollywood-smile`} className="text-gray-300 hover:text-white hover:underline">{footerDict?.treatmentLinks?.hollywoodSmile}</Link></li>
              <li><Link href={`/${locale}/treatments/all-on-4-6-implants`} className="text-gray-300 hover:text-white hover:underline">{footerDict?.treatmentLinks?.allOn4}</Link></li>
              <li><Link href={`/${locale}/treatments/dental-crowns`} className="text-gray-300 hover:text-white hover:underline">{footerDict?.treatmentLinks?.dentalCrowns}</Link></li>
              <li><Link href={`/${locale}/treatments/dental-veneers`} className="text-gray-300 hover:text-white hover:underline">{footerDict?.treatmentLinks?.dentalVeneers}</Link></li>
            </ul>
          </div>

                    {/* Column 4 - Contact */}
          <div className={isRTL ? 'lg:order-1' : 'lg:order-4'}>
            <h3 className="mb-6 text-xl font-semibold">{footerDict?.contact}</h3>
            <div className="space-y-4">
              <div className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                <svg className={`w-5 h-5 mt-1 text-[#00a9a7] shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className={`text-gray-300 ${isRTL ? 'text-right' : 'text-left'}`} dangerouslySetInnerHTML={{ __html: footerDict?.address || '' }} />
              </div>
              <div className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                <svg className={`w-5 h-5 mt-1 text-[#00a9a7] shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className={`text-gray-300 ${isRTL ? 'text-right' : 'text-left'}`}>{footerDict?.phone}</p>
              </div>
              <div className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                <svg className={`w-5 h-5 mt-1 text-[#00a9a7] shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className={`text-gray-300 ${isRTL ? 'text-right' : 'text-left'}`}>{footerDict?.email}</p>
              </div>
              <div className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}>
                <svg className={`w-5 h-5 mt-1 text-[#00a9a7] shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className={`text-gray-300 ${isRTL ? 'text-right' : 'text-left'}`}>
                  <p>{footerDict?.openingHours?.weekdays}</p>
                  <p>{footerDict?.openingHours?.saturday}</p>
                  <p>{footerDict?.openingHours?.sunday}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom line with copyright */}
      <div className="h-[43px] bg-[#222222] flex items-center">
        <div className="container px-6 mx-auto">
          <div className="flex justify-between items-center text-gray-300 text-[16px]">
            <div>{(footerDict?.copyright || '').replace('{year}', currentYear)}</div>
            <div className="flex items-center gap-1">
              {footerDict?.madeWith} <IconHeart className="text-[#00a9a7]" size={20} /> {footerDict?.byTeam}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}