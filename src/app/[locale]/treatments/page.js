import TreatmentsHeader from '@/app/components/TreatmentsHeader';
import TreatmentsSection from '@/app/components/TreatmentsSection';
import WhyUs from '@/app/components/WhyUs';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import ContactSection from '@/app/components/ContactSection';
import Footer from '@/app/components/Footer';
import { getDictionary } from '@/app/utils/i18n';
import { generateMetadata as generateMetadataUtil } from '@/app/utils/generateMetadata';

export async function generateMetadata({ params: { locale } }) {
  const translations = {
    en: {
      title: 'Dental Treatments',
      description: 'Advanced dental treatments including implants, veneers, crowns, and cosmetic dentistry. Expert care with modern technology in Istanbul.',
      keywords: [
        'dental treatments istanbul',
        'dental implants turkey',
        'veneers turkey',
        'dental crowns istanbul',
        'cosmetic dentistry turkey',
        'dental procedures istanbul'
      ],
    },
    tr: {
      title: 'Diş Tedavileri',
      description: 'İmplant, laminate, kaplama ve estetik diş hekimliği dahil ileri diş tedavileri. İstanbul\'da modern teknoloji ile uzman bakım.',
      keywords: [
        'diş tedavileri istanbul',
        'diş implantı türkiye',
        'laminate diş',
        'diş kaplama istanbul',
        'estetik diş hekimliği',
        'diş prosedürleri'
      ],
    },
    ar: {
      title: 'علاجات الأسنان',
      description: 'علاجات أسنان متقدمة تشمل زراعة الأسنان، الفينير، التيجان، وطب الأسنان التجميلي. رعاية متخصصة بتقنيات حديثة في اسطنبول.',
      keywords: [
        'علاجات الأسنان اسطنبول',
        'زراعة الأسنان تركيا',
        'فينير اسنان تركيا',
        'تيجان الأسنان اسطنبول',
        'طب الأسنان التجميلي تركيا',
        'إجراءات طب الأسنان'
      ],
    },
  };

  const ogImage = {
    url: '/images/meta/treatments.jpg',
    width: 1200,
    height: 630,
    alt: translations[locale].title,
  };

  return generateMetadataUtil({
    title: translations[locale].title,
    description: translations[locale].description,
    keywords: translations[locale].keywords,
    locale: locale,
    path: '/treatments',
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

export default async function TreatmentsPage({ params: { locale } }) {
  const dictionary = await getDictionary(locale);

  return (
    <main>
      <TreatmentsHeader dictionary={dictionary} />
      <TreatmentsSection dictionary={dictionary} />
      <WhyUs dictionary={dictionary} />
      <div className="bg-white">
        <TestimonialsSection dictionary={dictionary} inverted={true} />
      </div>
      <ContactSection dictionary={dictionary} />
    </main>
  );
}
