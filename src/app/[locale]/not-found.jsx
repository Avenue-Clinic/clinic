import Image from 'next/image';
import Link from 'next/link';
import initTranslations from '../utils/i18n';

export default async function NotFound() {
  let t = (k, d) => d;
  let locale = 'en';
  let error = null;
  try {
    const translations = await import('../utils/i18n');
    const result = await translations.default(locale, ['common']);
    t = result.t;
  } catch (e) {
    error = e;
    console.error('Translation or import failed:', e);
  }

  // Translation keys
  const titleKey = 'NotFound.title';
  const descriptionKey = 'NotFound.description';
  const returnHomeKey = 'NotFound.returnHome';
  const altTextKey = 'NotFound.altText';

  // Fallback if error or nothing renders
  if (error) {
    return (
      <div
        style={{
          padding: '4rem',
          textAlign: 'center',
          fontSize: '2rem',
          color: 'red',
        }}
      >
        404 – Page Not Found
        <br />
        Error: {error.message}
      </div>
    );
  }

  // If not-found image is missing, fallback to text
  try {
    return (
      <div
        style={{ background: 'var(--notfound-bg, #f4f6fa)' }}
        className="w-full border-t border-[rgba(0,0,0,0.07)]"
      >
        <section className="container mx-auto px-4 py-16 md:py-0 min-h-[700px]">
          <div className="flex flex-col max-w-6xl gap-10 mx-auto md:flex-row md:items-center md:justify-between md:gap-12">
            {/* Image - Shows first on mobile */}
            <div className="relative w-[min(100%,280px)] h-[210px] md:w-[400px] md:h-[300px] order-1 md:order-2 mx-auto md:mx-0">
              <Image
                src="/images/not-found.png"
                alt={t('NotFound.altText', 'Page Not Found illustration')}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Content - Shows second on mobile */}
            <div className="flex flex-col items-center order-2 text-center md:items-start md:text-left md:order-1 md:flex-1">
              <h1 className="mb-5 md:mb-8 text-[28px] md:text-[38px] lg:text-[46px] leading-[38px] md:leading-[46px] font-bold text-[var(--primary)]">
                {t('NotFound.title', 'Page Not Found')}
              </h1>
              <p className="mb-8 text-[15px] leading-[24px] md:text-[18px] md:leading-[35px] text-[var(--secondary-text)] max-w-[500px]">
                {t(
                  'NotFound.description',
                  'The page you were looking for could not be found.',
                )}
              </p>
              <Link
                href={`/${locale}/`}
                className="inline-flex items-center justify-center min-w-[180px] px-8 py-3.5 rounded-lg border-2 border-[var(--accent)] text-[var(--accent)] bg-white transition-all duration-300 hover:text-white hover:bg-[var(--accent)] text-[15px] md:text-base font-medium"
              >
                {t('NotFound.returnHome', 'Return Home')}
              </Link>
            </div>
          </div>
        </section>
      </div>
    );
  } catch (imgErr) {
    console.error('Image or render failed:', imgErr);
    return (
      <div
        style={{
          padding: '4rem',
          textAlign: 'center',
          fontSize: '2rem',
          color: 'red',
        }}
      >
        404 – Page Not Found
        <br />
        Image failed to load.
      </div>
    );
  }
}
