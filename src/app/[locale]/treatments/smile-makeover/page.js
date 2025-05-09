import TreatmentsHeader from '@/app/components/TreatmentsHeader';
import TreatmentsSection from '@/app/components/TreatmentsSection';
import WhyUs from '@/app/components/WhyUs';
import TestimonialsSection from '@/app/components/TestimonialsSection';
import ContactSection from '@/app/components/ContactSection';
import Footer from '@/app/components/Footer';
import { getDictionary } from '@/app/utils/i18n';

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
