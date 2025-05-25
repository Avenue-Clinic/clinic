import GalleryHeader from '@/app/components/GalleryHeader';
import Gallery from '@/app/components/Gallery';
import ContactSection from '@/app/components/ContactSection';
import { generateMetadata as baseGenerateMetadata } from '@/app/utils/generateMetadata';

export const dynamic = 'force-static';

export function generateStaticParams() {
  return [{ locale: 'en' }, { locale: 'tr' }, { locale: 'ar' }];
}

export async function generateMetadata({ params: { locale } }) {
  return baseGenerateMetadata({
    pageKey: 'gallery',
    locale,
    path: '/gallery',
  });
}

export default async function GalleryPage() {
  return (
    <main>
      <GalleryHeader />
      <Gallery />
      <ContactSection />
    </main>
  );
}
