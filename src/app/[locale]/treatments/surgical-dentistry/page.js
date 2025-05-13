import { generateMetadata as generateMetadataUtil } from '@/app/utils/generateMetadata';
import DentalHero from '@/app/components/DentalHero';
import BenefitsDentalImplants from '@/app/components/BenefitsDentalImplants';
import TransformationSection from '@/app/components/TransformationSection';
import PatientJourneySection from '@/app/components/PatientJourneySection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import LogoShowcase from '@/app/components/LogoShowcase';
import ContactSection from '@/app/components/ContactSection';

export async function generateMetadata({ params: { lang } }) {
  const translations = {
    en: {
      title: 'Surgical Dentistry',
      description:
        'Expert surgical dentistry services in Istanbul. Advanced dental surgery procedures including extractions, bone grafting, and periodontal surgery.',
      keywords: [
        'dental surgery istanbul',
        'oral surgery turkey',
        'wisdom teeth removal',
        'bone grafting turkey',
        'periodontal surgery istanbul',
        'dental extraction specialist',
      ],
    },
    tr: {
      title: 'Cerrahi Diş Hekimliği',
      description:
        "İstanbul'da uzman cerrahi diş hekimliği hizmetleri. Çekim, kemik greftleme ve periodontal cerrahi dahil ileri diş cerrahisi prosedürleri.",
      keywords: [
        'diş cerrahisi istanbul',
        'ağız cerrahisi türkiye',
        '20 yaş dişi çekimi',
        'kemik greftleme türkiye',
        'periodontal cerrahi istanbul',
        'diş çekim uzmanı',
      ],
    },
    ar: {
      title: 'جراحة الأسنان',
      description:
        'خدمات جراحة الأسنان المتخصصة في اسطنبول. عمليات جراحة الأسنان المتقدمة تشمل الخلع، زراعة العظام، وجراحة اللثة.',
      keywords: [
        'جراحة الأسنان اسطنبول',
        'جراحة الفم تركيا',
        'خلع ضرس العقل',
        'زراعة العظام تركيا',
        'جراحة اللثة اسطنبول',
        'أخصائي خلع الأسنان',
      ],
    },
  };

  const ogImage = {
    url: '/images/meta/surgical-dentistry.jpg',
    width: 1200,
    height: 630,
    alt: translations[lang].title,
  };

  return generateMetadataUtil({
    title: translations[lang].title,
    description: translations[lang].description,
    keywords: translations[lang].keywords,
    locale: lang,
    path: '/treatments/surgical-dentistry',
    openGraph: {
      type: 'website',
      title: translations[lang].title,
      description: translations[lang].description,
      images: [ogImage],
    },
    twitter: {
      card: 'summary_large_image',
      title: translations[lang].title,
      description: translations[lang].description,
      images: [ogImage.url],
    },
  });
}

export default async function SurgicalDentistryPage({ params: { lang } }) {
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
