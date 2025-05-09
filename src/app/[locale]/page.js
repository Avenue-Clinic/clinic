import React from 'react';
import { getDictionary } from '../utils/i18n';
import Hero from '../components/Hero';
import LeadForm from '../components/LeadForm';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import { Plus_Jakarta_Sans } from 'next/font/google';
import TreatmentsSection from '../components/TreatmentsSection';
import ExpertiseSection from '../components/ExpertiseSection';
import WhyUs from '../components/WhyUs';
import PatientJourneySection from '../components/PatientJourneySection';
import TestimonialsSection from '../components/TestimonialsSection';
import TransformationSection from '../components/TransformationSection';
import Footer from '../components/Footer';
import ContactSection from '../components/ContactSection';

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
});

export default async function Home({ params: { locale } }) {
  const dictionary = await getDictionary(locale);

  return (
    <main className={dictionary.dir === 'rtl' ? 'rtl' : 'ltr'}>
      <Hero dictionary={dictionary} />
      <ServicesSection dictionary={dictionary} />
      <AboutSection dictionary={dictionary} />
      <TreatmentsSection dictionary={dictionary} />
      <ExpertiseSection dictionary={dictionary} />
      <WhyUs dictionary={dictionary} />
      <PatientJourneySection dictionary={dictionary} />
      <TestimonialsSection dictionary={dictionary} />
      <TransformationSection dictionary={dictionary} />
      <ContactSection dictionary={dictionary} />
    </main>
  );
}
