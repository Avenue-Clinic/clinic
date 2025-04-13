// src/components/Hero.js
import Image from 'next/image';
import Link from 'next/link';

export default function Hero({ dictionary, locale }) {
  return (
    <section className="relative min-h-screen bg-[#003b4a] text-white pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/hero-bg.jpg" 
          alt="Dental Clinic" 
          fill
          priority
          className="object-cover opacity-20"
        />
      </div>
      
      <div className="relative z-10 container mx-auto px-6 py-16 md:py-24">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              {dictionary.hero.title || "Crafting Beautiful Smiles, Ensuring Healthier Tomorrow"}
            </h1>
            
            <p className="text-lg md:text-xl opacity-90 mb-10">
              {dictionary.hero.subtitle || "Experience world-class dental care in Istanbul at 70% more affordable costs. Your perfect smile journey begins here."}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Link 
                href={`/${locale}/contact`}
                className="bg-[#00a9a7] text-white px-8 py-3 rounded-full hover:bg-[#008f8d] transition-colors text-lg font-medium"
              >
                {dictionary.hero.primaryCTA || "Get Free Consultation"}
              </Link>
              <Link 
                href={`/${locale}/treatments`}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full hover:bg-white hover:text-[#003b4a] transition-colors text-lg font-medium"
              >
                {dictionary.hero.secondaryCTA || "View Treatments"}
              </Link>
            </div>
            
            <div className="mt-12 flex items-center gap-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-[#00a9a7]">28k+</p>
                <p className="text-sm opacity-90">Happy Patients</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#00a9a7]">15+</p>
                <p className="text-sm opacity-90">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-[#00a9a7]">98%</p>
                <p className="text-sm opacity-90">Success Rate</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-xl">
            <h3 className="text-[#003b4a] text-2xl font-bold mb-6">Book Your Free Consultation</h3>
            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00a9a7]"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00a9a7]"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00a9a7]"
                />
              </div>
              <div>
                <select className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#00a9a7] text-gray-600">
                  <option value="">Select Treatment</option>
                  <option value="dental-implants">Dental Implants</option>
                  <option value="hollywood-smile">Hollywood Smile</option>
                  <option value="all-on-implants">All-on-4 Implants</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full bg-[#00a9a7] text-white py-3 px-6 rounded-lg hover:bg-[#008f8d] transition-colors font-medium"
              >
                Get Free Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}