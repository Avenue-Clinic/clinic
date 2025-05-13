'use client';

// Dynamic imports for icons to reduce initial bundle size
const IconBrandTiktok = dynamic(() => import('@tabler/icons-react/dist/esm/icons/IconBrandTiktok'));
const IconBrandYoutube = dynamic(() => import('@tabler/icons-react/dist/esm/icons/IconBrandYoutube'));
const IconBrandX = dynamic(() => import('@tabler/icons-react/dist/esm/icons/IconBrandX'));
const IconBrandInstagram = dynamic(() => import('@tabler/icons-react/dist/esm/icons/IconBrandInstagram'));
const IconBrandFacebook = dynamic(() => import('@tabler/icons-react/dist/esm/icons/IconBrandFacebook'));
const IconBrandWhatsapp = dynamic(() => import('@tabler/icons-react/dist/esm/icons/IconBrandWhatsapp'));
const IconHeart = dynamic(() => import('@tabler/icons-react/dist/esm/icons/IconHeart'));
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from 'react-i18next';
import dynamic from 'next/dynamic';

export default function Footer({ locale = 'en' }) {
  const { t } = useTranslation(['footer', 'navigation'], { locale });
  const isRTL = locale === 'ar';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[--primary] text-white">
      <div className="container px-6 py-16 mx-auto" style={{ minHeight: '400px' }}>
        <div
          className={`grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4 text-sm ${isRTL ? 'text-right' : 'text-left'}`}
        >
          {/* Column 1 - Logo and Social */}
          <div className={isRTL ? 'lg:order-4' : 'lg:order-1'}>
            <Link
              href={`/${locale}`}
              className={`inline-block mb-6 ${isRTL ? 'float-right' : ''}`}
            >
              <Image
                src="/logo.svg"
                alt="logo"
                width={150}
                height={40}
                className="w-[150px] h-10 brightness-0 invert"
              />
            </Link>
            <p className="mb-8 text-gray-300">
              {t('footer:footer.description')}
            </p>
            <div className={`flex gap-4 ${isRTL ? 'justify-end' : ''}`}>
              <a
                href={t('navigation:socialNav.facebook')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#00a9a7] transition-colors"
                aria-label="Facebook"
              >
                <IconBrandFacebook size={20} />
              </a>
              <a
                href={t('navigation:socialNav.instagram')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#00a9a7] transition-colors"
                aria-label="Instagram"
              >
                <IconBrandInstagram size={20} />
              </a>
              <a
                href={t('navigation:socialNav.whatsapp')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#00a9a7] transition-colors"
                aria-label="WhatsApp"
              >
                <IconBrandWhatsapp size={20} />
              </a>
              <a
                href={t('navigation:socialNav.tiktok')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#00a9a7] transition-colors"
                aria-label="TikTok"
              >
                <IconBrandTiktok size={20} />
              </a>
              <a
                href={t('navigation:socialNav.youtube')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#00a9a7] transition-colors"
                aria-label="YouTube"
              >
                <IconBrandYoutube size={20} />
              </a>
              <a
                href={t('navigation:socialNav.x')}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-[#00a9a7] transition-colors"
                aria-label="X"
              >
                <IconBrandX size={20} />
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div className={isRTL ? 'lg:order-3' : 'lg:order-2'}>
            <h3 className="mb-6 text-xl font-semibold">
              {t('navigation:footerNav.columns.quickLinks.title')}
            </h3>
            <ul className="space-y-4">
              {(Array.isArray(
                t('navigation:footerNav.columns.quickLinks.items', {
                  returnObjects: true,
                }),
              )
                ? t('navigation:footerNav.columns.quickLinks.items', {
                    returnObjects: true,
                  })
                : []
              ).map((itemKey) => {
                const link = t(`navigation:mainNav.${itemKey}.link`);
                const title = t(`navigation:mainNav.${itemKey}.title`);
                return (
                  <li key={itemKey}>
                    <Link
                      href={`/${locale}${link || '/'}`}
                      className="text-gray-300 hover:text-white hover:underline"
                    >
                      {title || itemKey}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 3 - Our Treatments */}
          <div className={isRTL ? 'lg:order-2' : 'lg:order-3'}>
            <h3 className="mb-6 text-xl font-semibold">
              {t('navigation:footerNav.columns.ourTreatments.title')}
            </h3>
            <ul className="space-y-4">
              {(
                t('navigation:footerNav.columns.ourTreatments.items', {
                  returnObjects: true,
                  defaultValue: [],
                }) || []
              ).map((itemKey) => {
                const link = t(`navigation:treatmentsNav.${itemKey}.link`, {
                  defaultValue: '/',
                });
                const title = t(`navigation:treatmentsNav.${itemKey}.title`, {
                  defaultValue: itemKey,
                });
                return (
                  <li key={itemKey}>
                    <Link
                      href={`/${locale}${link || '/'}`}
                      className="text-gray-300 hover:text-white hover:underline"
                    >
                      {title || itemKey}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Column 4 - Contact Info */}
          <div className={isRTL ? 'lg:order-1' : 'lg:order-4'}>
            <h3 className="mb-6 text-xl font-semibold">{t('footer:footer.contact')}</h3>
            <div className="space-y-6">
              <div
                className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}
              >
                <svg
                  className={`w-5 h-5 mt-1 text-[#00a9a7] shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <div
                  className={`whitespace-pre-line ${isRTL ? 'text-right' : 'text-left'}`}
                  dangerouslySetInnerHTML={{
                    __html: t('footer:footer.address') || '',
                  }}
                />
              </div>
              <div
                className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}
              >
                <svg
                  className={`w-5 h-5 mt-1 text-[#00a9a7] shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <p
                  className={`text-gray-300 ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  {t('footer:footer.phone')}
                </p>
              </div>
              <div
                className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}
              >
                <svg
                  className={`w-5 h-5 mt-1 text-[#00a9a7] shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p
                  className={`text-gray-300 ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  {t('footer:footer.email')}
                </p>
              </div>
              <div
                className={`flex items-start ${isRTL ? 'flex-row-reverse text-right' : 'text-left'}`}
              >
                <svg
                  className={`w-5 h-5 mt-1 text-[#00a9a7] shrink-0 ${isRTL ? 'ml-3' : 'mr-3'}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <div
                  className={`text-gray-300 ${isRTL ? 'text-right' : 'text-left'}`}
                >
                  <p>{t('footer:footer.openingHours.weekdays')}</p>
                  <p>{t('footer:footer.openingHours.saturday')}</p>
                  <p>{t('footer:footer.openingHours.sunday')}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Bottom line with copyright */}
      <div className="h-[43px] bg-[#222222] flex items-center">
        <div className="container px-6 mx-auto">
          <div className="flex flex-wrap items-center justify-between text-xs text-gray-300 sm:text-sm md:text-base">
            <div className="max-w-full truncate">
              {t('footer:footer.copyright', { year: currentYear })}
            </div>
            <div className="flex items-center gap-1 text-xs sm:text-sm md:text-base">
              <span className="truncate max-w-[80px] sm:max-w-none">
                {t('footer:footer.madeWith')}
              </span>
              <IconHeart className="text-[#00a9a7]" size={16} />
              <span className="truncate max-w-[80px] sm:max-w-none">
                {t('footer:footer.byTeam')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
