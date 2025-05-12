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
      title: 'Dental Crowns',
      description: 'Expert dental crown treatments in Istanbul. Restore damaged teeth with durable, natural-looking crowns using advanced materials and techniques.',
      keywords: [
        'dental crowns istanbul',
        'tooth crown turkey',
        'porcelain crowns',
        'zirconia crowns turkey',
        'dental restoration istanbul',
        'crown treatment turkey'
      ],
    },
    tr: {
      title: 'Diş Kaplamaları',
      description: 'İstanbul\'da uzman diş kaplama tedavileri. İleri malzemeler ve tekniklerle hasar görmüş dişleri dayanıklı, doğal görünümlü kaplamalarla restore edin.',
      keywords: [
        'diş kaplama istanbul',
        'diş kronu türkiye',
        'porselen kaplamalar',
        'zirkon kaplama türkiye',
        'diş restorasyonu istanbul',
        'kaplama tedavisi'
      ],
    },
    ar: {
      title: 'تيجان الأسنان',
      description: 'علاجات تيجان الأسنان المتخصصة في اسطنبول. ترميم الأسنان المتضررة بتيجان دائمة وطبيعية المظهر باستخدام مواد وتقنيات متقدمة.',
      keywords: [
        'تيجان الأسنان اسطنبول',
        'تاج الأسنان تركيا',
        'تيجان بورسلين',
        'تيجان زركونيا تركيا',
        'ترميم الأسنان اسطنبول',
        'علاج التيجان'
      ],
    },
  };

  const ogImage = {
    url: '/images/meta/dental-crowns.jpg',
    width: 1200,
    height: 630,
    alt: translations[locale].title,
  };

  return generateMetadataUtil({
    title: translations[locale].title,
    description: translations[locale].description,
    keywords: translations[locale].keywords,
    locale: locale,
    path: '/treatments/dental-crowns',
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

export default async function DentalCrownsPage({ params: { locale } }) {
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
