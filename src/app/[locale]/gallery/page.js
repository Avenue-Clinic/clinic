import GalleryHeader from '@/app/components/GalleryHeader';
import Gallery from '@/app/components/Gallery';
import ContactSection from '@/app/components/ContactSection';

export default async function GalleryPage() {
  return (
    <main>
      <GalleryHeader />
      <Gallery />
      <ContactSection />
    </main>
  );
}
