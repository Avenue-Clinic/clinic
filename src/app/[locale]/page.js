import React from 'react';
import { getDictionary } from '../utils/dictionary';
import Hero from '../components/Hero';
import LeadForm from '../components/LeadForm';
import AboutSection from '../components/AboutSection';
import { Plus_Jakarta_Sans } from 'next/font/google';
import TreatmentsSection from '../components/TreatmentsSection';
import ExpertiseSection from '../components/ExpertiseSection';
import WhyUs from '../components/WhyUs';
import PatientJourneySection from '../components/PatientJourneySection';
import TestimonialsSection from '../components/TestimonialsSection';
import TransformationSection from '../components/TransformationSection';
import Footer from '../components/Footer';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export default async function Home({ params: { locale } }) {
  const dictionary = await getDictionary(locale);

  return (
    <main className={dictionary.dir === 'rtl' ? 'rtl' : 'ltr'}>
      <Hero dictionary={dictionary} />
      <LeadForm dictionary={dictionary} />
      <AboutSection dictionary={dictionary} />
      <TreatmentsSection dictionary={dictionary} />
      <ExpertiseSection dictionary={dictionary} />
      <WhyUs dictionary={dictionary} />
      <PatientJourneySection dictionary={dictionary} />
      <TestimonialsSection dictionary={dictionary} />
      <TransformationSection dictionary={dictionary} />
      <Footer dictionary={dictionary} />
    </main>
  );
}