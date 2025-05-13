import TreatmentsHeader from '@/app/components/TreatmentsHeader';
import TreatmentsSection from '@/app/components/TreatmentsSection';
import WhyUs from '@/app/components/WhyUs';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import ContactSection from '@/app/components/ContactSection';
import { generateMetadata as generateMetadataUtil } from '@/app/utils/generateMetadata';

export async function generateMetadata({ params: { lang } }) {
  const translations = {
    en: {
      title: 'Smile Makeover',
      description:
        'Complete smile transformation in Istanbul. Personalized smile makeover treatments combining veneers, crowns, and whitening for your perfect smile.',
      keywords: [
        'smile makeover istanbul',
        'smile design turkey',
        'full mouth restoration',
        'cosmetic dentistry turkey',
        'smile transformation',
        'dental aesthetics istanbul',
      ],
    },
    tr: {
      title: 'Gülüş Tasarımı',
      description:
        "İstanbul'da komple gülüş dönüşümü. Mükemmel gülüşünüz için lamina, kaplama ve beyazlatmayı birleştiren kişiye özel gülüş tasarımı tedavileri.",
      keywords: [
        'gülüş tasarımı istanbul',
        'gülüş estetiği türkiye',
        'tam ağız restorasyonu',
        'estetik diş hekimliği',
        'gülüş dönüşümü',
        'diş estetiği istanbul',
      ],
    },
    ar: {
      title: 'تصميم الابتسامة',
      description:
        'تحويل كامل للابتسامة في اسطنبول. علاجات تصميم الابتسامة المخصصة تجمع بين الفينير، التيجان، والتبييض لابتسامتك المثالية.',
      keywords: [
        'تصميم الابتسامة اسطنبول',
        'تجميل الابتسامة تركيا',
        'ترميم الفم الكامل',
        'طب الأسنان التجميلي',
        'تحويل الابتسامة',
        'تجميل الأسنان اسطنبول',
      ],
    },
  };

  const ogImage = {
    url: '/images/meta/smile-makeover.jpg',
    width: 1200,
    height: 630,
    alt: translations[lang].title,
  };

  return generateMetadataUtil({
    title: translations[lang].title,
    description: translations[lang].description,
    keywords: translations[lang].keywords,
    locale: lang,
    path: '/treatments/smile-makeover',
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

export default async function TreatmentsPage({ params: { lang } }) {
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
