// src/components/Hero.js
import Image from 'next/image';
import ContactForm from './ContactForm';

export default function Hero({ dictionary, locale }) {
  return (
    <section className="relative bg-[#003b4a] text-white overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Dental Clinic" 
          fill
          priority
          className="object-cover opacity-30"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            {dictionary.hero.title}
          </h1>
          
          <p className="text-lg md:text-xl opacity-90 mb-10 max-w-3xl mx-auto">
            {dictionary.hero.subtitle}
          </p>
          
          <ContactForm dictionary={dictionary} locale={locale} />
        </div>
      </div>
    </section>
  );
}