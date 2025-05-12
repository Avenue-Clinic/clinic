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
      title: 'Hollywood Smile',
      description: 'Get your dream Hollywood smile in Istanbul. Premium cosmetic dentistry combining veneers, whitening, and advanced techniques for a perfect celebrity smile.',
      keywords: [
        'hollywood smile istanbul',
        'celebrity smile turkey',
        'perfect smile makeover',
        'hollywood teeth turkey',
        'dental aesthetics istanbul',
        'smile transformation'
      ],
    },
    tr: {
      title: 'Hollywood Gülüşü',
      description: 'İstanbul\'da hayalinizdeki Hollywood gülüşüne kavuşun. Mükemmel bir yıldız gülüşü için lamina, beyazlatma ve ileri teknikleri birleştiren premium estetik diş hekimliği.',
      keywords: [
        'hollywood gülüşü istanbul',
        'yıldız gülüşü türkiye',
        'mükemmel gülüş tasarımı',
        'hollywood dişleri türkiye',
        'diş estetiği istanbul',
        'gülüş dönüşümü'
      ],
    },
    ar: {
      title: 'ابتسامة هوليوود',
      description: 'احصل على ابتسامة هوليوود التي تحلم بها في اسطنبول. طب أسنان تجميلي متميز يجمع بين الفينير، التبييض، والتقنيات المتقدمة للحصول على ابتسامة المشاهير المثالية.',
      keywords: [
        'ابتسامة هوليوود اسطنبول',
        'ابتسامة المشاهير تركيا',
        'تصميم الابتسامة المثالية',
        'أسنان هوليوود تركيا',
        'تجميل الأسنان اسطنبول',
        'تحويل الابتسامة'
      ],
    },
  };

  const ogImage = {
    url: '/images/meta/hollywood-smile.jpg',
    width: 1200,
    height: 630,
    alt: translations[locale].title,
  };

  return generateMetadataUtil({
    title: translations[locale].title,
    description: translations[locale].description,
    keywords: translations[locale].keywords,
    locale: locale,
    path: '/treatments/hollywood-smile',
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

export default async function HollywoodSmilePage({ params: { locale } }) {
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
