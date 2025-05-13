import { getDictionary } from '@/app/utils/i18n';
import { generateMetadata as generateMetadataUtil } from '@/app/utils/generateMetadata';
import DentalHero from '@/app/components/DentalHero';
import BenefitsDentalImplants from '@/app/components/BenefitsDentalImplants';
import TransformationSection from '@/app/components/TransformationSection';
import PatientJourneySection from '@/app/components/PatientJourneySection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import LogoShowcase from '@/app/components/LogoShowcase';
import ContactSection from '@/app/components/ContactSection';

export async function generateMetadata({ params: { locale } }) {
  const translations = {
    en: {
      title: 'All-on-4/6 Dental Implants',
      description:
        'Advanced All-on-4 and All-on-6 dental implant solutions in Istanbul. Full arch replacement with permanent, fixed implant-supported dentures.',
      keywords: [
        'all on 4 dental implants turkey',
        'all on 6 implants istanbul',
        'full mouth dental implants',
        'fixed dentures turkey',
        'permanent teeth replacement',
        'full arch implants istanbul',
      ],
    },
    tr: {
      title: 'All-on-4/6 Diş İmplantları',
      description:
        "İstanbul'da ileri All-on-4 ve All-on-6 diş implantı çözümleri. Kalıcı, sabit implant destekli protezlerle tam çene değişimi.",
      keywords: [
        'all on 4 diş implantı türkiye',
        'all on 6 implant istanbul',
        'tam ağız diş implantı',
        'sabit protez türkiye',
        'kalıcı diş değişimi',
        'tam çene implant istanbul',
      ],
    },
    ar: {
      title: 'زراعة الأسنان الكاملة 4/6',
      description:
        'حلول متقدمة لزراعة الأسنان الكاملة بتقنية أول أون 4 و 6 في اسطنبول. استبدال كامل للأسنان بأطقم ثابتة مدعومة بالغرسات.',
      keywords: [
        'زراعة الأسنان الكاملة تركيا',
        'زراعة الأسنان الستة اسطنبول',
        'زراعة الفم الكامل',
        'أطقم أسنان ثابتة تركيا',
        'استبدال الأسنان الدائم',
        'زراعة الفك الكامل اسطنبول',
      ],
    },
  };

  const ogImage = {
    url: '/images/meta/all-on46-implants.jpg',
    width: 1200,
    height: 630,
    alt: translations[locale].title,
  };

  return generateMetadataUtil({
    title: translations[locale].title,
    description: translations[locale].description,
    keywords: translations[locale].keywords,
    locale: locale,
    path: '/treatments/all-on46-implants',
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

export default async function AllOn46ImplantsPage({ params: { lang } }) {
  const dictionary = await getDictionary(lang);

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
