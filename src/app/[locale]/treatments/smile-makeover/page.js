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
      title: 'Smile Makeover',
      description: 'Complete smile transformation in Istanbul. Personalized smile makeover treatments combining veneers, crowns, and whitening for your perfect smile.',
      keywords: [
        'smile makeover istanbul',
        'smile design turkey',
        'full mouth restoration',
        'cosmetic dentistry turkey',
        'smile transformation',
        'dental aesthetics istanbul'
      ],
    },
    tr: {
      title: 'Gülüş Tasarımı',
      description: 'İstanbul\'da komple gülüş dönüşümü. Mükemmel gülüşünüz için lamina, kaplama ve beyazlatmayı birleştiren kişiye özel gülüş tasarımı tedavileri.',
      keywords: [
        'gülüş tasarımı istanbul',
        'gülüş estetiği türkiye',
        'tam ağız restorasyonu',
        'estetik diş hekimliği',
        'gülüş dönüşümü',
        'diş estetiği istanbul'
      ],
    },
    ar: {
      title: 'تصميم الابتسامة',
      description: 'تحويل كامل للابتسامة في اسطنبول. علاجات تصميم الابتسامة المخصصة تجمع بين الفينير، التيجان، والتبييض لابتسامتك المثالية.',
      keywords: [
        'تصميم الابتسامة اسطنبول',
        'تجميل الابتسامة تركيا',
        'ترميم الفم الكامل',
        'طب الأسنان التجميلي',
        'تحويل الابتسامة',
        'تجميل الأسنان اسطنبول'
      ],
    },
  };

  const ogImage = {
    url: '/images/meta/smile-makeover.jpg',
    width: 1200,
    height: 630,
    alt: translations[locale].title,
  };

  return generateMetadataUtil({
    title: translations[locale].title,
    description: translations[locale].description,
    keywords: translations[locale].keywords,
    locale: locale,
    path: '/treatments/smile-makeover',
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
