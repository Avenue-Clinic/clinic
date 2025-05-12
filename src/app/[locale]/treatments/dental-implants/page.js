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
      title: 'Dental Implants',
      description: 'Premium dental implant treatments in Istanbul. Long-lasting, natural-looking tooth replacement with advanced technology and expert care.',
      keywords: [
        'dental implants istanbul',
        'tooth implants turkey',
        'dental implant procedure',
        'permanent tooth replacement',
        'all on 4 implants',
        'implant dentistry turkey'
      ],
    },
    tr: {
      title: 'Diş İmplantları',
      description: 'İstanbul\'da premium diş implantı tedavileri. İleri teknoloji ve uzman bakımı ile uzun ömürlü, doğal görünümlü diş değişimi.',
      keywords: [
        'diş implantı istanbul',
        'implant tedavisi türkiye',
        'diş implant prosedürü',
        'kalıcı diş değişimi',
        'all on 4 implant',
        'implant diş hekimliği'
      ],
    },
    ar: {
      title: 'زراعة الأسنان',
      description: 'علاجات زراعة أسنان متميزة في اسطنبول. استبدال أسنان دائم وطبيعي المظهر مع تقنيات متطورة ورعاية متخصصة.',
      keywords: [
        'زراعة الأسنان اسطنبول',
        'زراعة الأسنان تركيا',
        'إجراءات زراعة الأسنان',
        'استبدال الأسنان الدائم',
        'زراعة الأسنان الشاملة',
        'طب زراعة الأسنان'
      ],
    },
  };

  const ogImage = {
    url: '/images/meta/dental-implants.jpg',
    width: 1200,
    height: 630,
    alt: translations[locale].title,
  };

  return generateMetadataUtil({
    title: translations[locale].title,
    description: translations[locale].description,
    keywords: translations[locale].keywords,
    locale: locale,
    path: '/treatments/dental-implants',
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

export default async function DentalImplantsPage({ params: { locale } }) {
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
