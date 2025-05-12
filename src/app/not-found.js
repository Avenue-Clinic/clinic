import Image from 'next/image';
import Link from 'next/link';
import { Rubik, Plus_Jakarta_Sans } from 'next/font/google';
import Header from './components/Header';
import Footer from './components/Footer';
import { getDictionary, defaultLocale } from './utils/i18n';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-plus-jakarta-sans',
  weight: ['400', '500', '700'],
});

const rubik = Rubik({
  subsets: ['latin'],
  variable: '--font-rubik',
  weight: ['400', '500', '700'],
});

export default async function NotFound() {
  const locale = 'en'; // Default to English for 404 page
  const dictionary = await getDictionary(locale);
  const dir = locale === 'ar' ? 'rtl' : 'ltr';

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${plusJakartaSans.variable} ${rubik.variable}`}
      style={{
        fontFamily:
          locale === 'ar'
            ? 'var(--font-rubik)'
            : 'var(--font-plus-jakarta-sans)',
      }}
    >
      <body
        className={`${dir} text-lg antialiased`}
        style={{
          fontFamily:
            locale === 'ar'
              ? 'var(--font-rubik)'
              : 'var(--font-plus-jakarta-sans)',
        }}
      >
        <Header dictionary={dictionary} locale={locale} />
        <div
          style={{ background: 'var(--notfound-bg, #f4f6fa)' }}
          className="w-full border-t border-[rgba(0,0,0,0.07)]"
        >
          <section className="container mx-auto px-4 py-16 md:py-0 min-h-[700px]">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between max-w-6xl mx-auto gap-10 md:gap-12">
              {/* Image - Shows first on mobile */}
              <div className="relative w-[min(100%,280px)] h-[210px] md:w-[400px] md:h-[300px] order-1 md:order-2 mx-auto md:mx-0">
                <Image
                  src="/images/not-found.png"
                  alt="Page Not Found"
                  fill
                  className="object-contain"
                  priority
                />
              </div>

              {/* Content - Shows second on mobile */}
              <div className="flex flex-col items-center md:items-start text-center md:text-left order-2 md:order-1 md:flex-1">
                <h1 className="mb-5 md:mb-8 text-[28px] md:text-[38px] lg:text-[46px] leading-[38px] md:leading-[46px] font-bold text-[var(--primary)]">
                  {dictionary.NotFound.title}
                </h1>
                <p className="mb-8 text-[15px] leading-[24px] md:text-[18px] md:leading-[35px] text-[var(--secondary-text)] max-w-[500px]">
                  {dictionary.NotFound.description}
                </p>
                <Link
                  href={`/${locale}/`}
                  className="inline-flex items-center justify-center min-w-[180px] px-8 py-3.5 rounded-lg border-2 border-[var(--accent)] text-[var(--accent)] bg-white transition-all duration-300 hover:text-white hover:bg-[var(--accent)] text-[15px] md:text-base font-medium"
                >
                  {dictionary.NotFound.returnHome}
                </Link>
              </div>
            </div>
          </section>
        </div>
        <Footer dictionary={dictionary} locale={locale} />
      </body>
    </html>
  );
}
