import { getDictionary } from '@/app/utils/i18n';
import DentalHero from '@/app/components/DentalHero';
import BenefitsDentalImplants from '@/app/components/BenefitsDentalImplants';
import TransformationSection from '@/app/components/TransformationSection';
import PatientJourneySection from '@/app/components/PatientJourneySection';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import LogoShowcase from '@/app/components/LogoShowcase';
import ContactSection from '@/app/components/ContactSection';
import Footer from '@/app/components/Footer';

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
