import { getDictionary } from '@/app/utils/i18n';
import { generateMetadata as generateMetadataUtil } from '@/app/utils/generateMetadata';
import DentalHero from '@/app/components/DentalHero';
import BenefitsDentalImplants from '@/app/components/BenefitsDentalImplants';
import TransformationSection from '@/app/components/TransformationSection';
import PatientJourneySection from '@/app/components/PatientJourneySection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import LogoShowcase from '@/app/components/LogoShowcase';
import ContactSection from '@/app/components/ContactSection';
import Footer from '@/app/components/Footer';

export async function generateMetadata({ params: { locale } }) {
  const translations = {
    en: {
      title: 'Dental Veneers',
      description: 'Transform your smile with premium dental veneers in Istanbul. Natural-looking, durable porcelain veneers crafted by expert cosmetic dentists.',
      keywords: [
        'dental veneers istanbul',
        'porcelain veneers turkey',
        'cosmetic veneers',
        'smile makeover veneers',
        'laminate veneers turkey',
        'dental aesthetics istanbul'
      ],
    },
    tr: {
      title: 'Diş Laminaları',
      description: 'İstanbul\'da premium diş laminaları ile gülüşünüzü değiştirin. Uzman estetik diş hekimleri tarafından uygulanan doğal görünümlü, dayanıklı porselen laminalar.',
      keywords: [
        'diş laminaları istanbul',
        'porselen lamina türkiye',
        'estetik laminalar',
        'gülüş tasarımı lamina',
        'laminate diş türkiye',
        'diş estetiği istanbul'
      ],
    },
    ar: {
      title: 'فينير الأسنان',
      description: 'حول ابتسامتك مع فينير الأسنان المتميز في اسطنبول. فينير بورسلين طبيعي المظهر ودائم من أطباء التجميل الخبراء.',
      keywords: [
        'فينير الأسنان اسطنبول',
        'فينير بورسلين تركيا',
        'فينير تجميلي',
        'تجميل الابتسامة فينير',
        'لامينيت الأسنان تركيا',
        'تجميل الأسنان اسطنبول'
      ],
    },
  };

  const ogImage = {
    url: '/images/meta/dental-veneers.jpg',
    width: 1200,
    height: 630,
    alt: translations[locale].title,
  };

  return generateMetadataUtil({
    title: translations[locale].title,
    description: translations[locale].description,
    keywords: translations[locale].keywords,
    locale: locale,
    path: '/treatments/dental-veneers',
    openGraph: {
      type: 'website',
      title: translations[locale].title,
      description: translations[locale].description,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: translations[locale].title,
      description: translations[locale].description,
      images: [ogImage.url],
    },
  });
}

export default async function DentalVeneersPage({ params: { locale } }) {
  const dictionary = await getDictionary(locale);

  return (
    <main>
      <DentalHero dictionary={dictionary} />
      <BenefitsDentalImplants dictionary={dictionary} />
      <TransformationSection dictionary={dictionary} />
      <PatientJourneySection dictionary={dictionary} />
      <TestimonialsSection dictionary={dictionary} />
      <LogoShowcase dictionary={dictionary} />
      <ContactSection dictionary={dictionary} />
    </main>
  );
}
