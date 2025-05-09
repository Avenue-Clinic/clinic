import { getDictionary } from '@/app/utils/i18n';
import AboutHeader from '@/app/components/AboutHeader';
import AboutHero from '@/app/components/AboutHero';
import WhyUs from '@/app/components/WhyUs';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import ContactSection from '@/app/components/ContactSection';
import Footer from '@/app/components/Footer';
import PatientJourneySection from '@/app/components/PatientJourneySection';
import About1 from '@/app/components/About1';
import VisionSection from '@/app/components/VisionSection';

export default async function AboutPage({ params: { locale } }) {
  const dictionary = await getDictionary(locale);

  return (
    <main>
      <AboutHeader dictionary={dictionary} />
      <AboutHero dictionary={dictionary} />
      <About1 dictionary={dictionary} />
      <VisionSection dictionary={dictionary} />
      <PatientJourneySection dictionary={dictionary} />
      <WhyUs dictionary={dictionary} />
      <TestimonialsSection dictionary={dictionary} inverted={true} />
      <ContactSection dictionary={dictionary} />
    </main>
  );
}
