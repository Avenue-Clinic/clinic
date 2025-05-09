import { getDictionary } from '@/app/utils/i18n';
import GalleryHeader from '@/app/components/GalleryHeader';
import Gallery from '@/app/components/Gallery';
import ContactSection from '@/app/components/ContactSection';
import Footer from '@/app/components/Footer';

export default async function GalleryPage({ params: { locale } }) {
  const dictionary = await getDictionary(locale);

  return (
    <main>
      <GalleryHeader dictionary={dictionary} />
      <Gallery dictionary={dictionary} />
      <ContactSection dictionary={dictionary} />
    </main>
  );
}
