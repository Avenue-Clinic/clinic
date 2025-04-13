// src/app/[locale]/page.js
import { getDictionary } from '../utils/i18n';
import Header from '../components/Header';
import Hero from '../components/Hero';
import Footer from '../components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export async function generateMetadata({ params: { locale } }) {
  const dictionary = await getDictionary(locale);
  
  return {
    title: 'Medico Dental Clinic | Expert Dental Care in Istanbul',
    description: 'Discover expert dental care that prioritizes top-quality treatments for your smile\'s health and beauty at 70% more affordable costs.',
  }
}

export default async function Home({ params: { locale } }) {
  const dictionary = await getDictionary(locale);
  
  return (
    <main>
      <Header dictionary={dictionary} locale={locale} />
      <Hero dictionary={dictionary} locale={locale} />
      
      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003b4a] mb-4">Why Choose Medico</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide world-class dental care with the latest technology and experienced professionals at affordable prices.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#00a9a7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#003b4a]">Advanced Technology</h3>
              <p className="text-gray-600">Latest dental equipment and innovative treatment methods for optimal results.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#00a9a7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#003b4a]">Affordable Prices</h3>
              <p className="text-gray-600">70% more affordable costs compared to worldwide standards without compromising quality.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#00a9a7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#003b4a]">Expert Dentists</h3>
              <p className="text-gray-600">Experienced professionals with international training and a passion for excellence.</p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-xl transition-shadow">
              <div className="bg-[#00a9a7] w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-[#003b4a]">Patient-First Approach</h3>
              <p className="text-gray-600">Personalized care and attention to ensure your comfort throughout treatment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-[#003b4a] mb-4">Our Services</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive dental care using cutting-edge technology and proven techniques
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dental Implants",
                description: "Permanent solution for missing teeth with natural-looking results",
                icon: "M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
              },
              {
                title: "Cosmetic Dentistry",
                description: "Transform your smile with veneers, whitening, and aesthetic procedures",
                icon: "M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              },
              {
                title: "Orthodontics",
                description: "Straighten your teeth with modern braces and clear aligners",
                icon: "M4 6h16M4 12h16m-7 6h7"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md hover:shadow-xl transition-shadow">
                <div className="bg-[#00a9a7] w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={service.icon}></path>
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#003b4a]">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-8 bg-[#00a9a7] text-white">
                <h3 className="text-2xl font-bold mb-4">Get in Touch</h3>
                <p className="mb-6">Schedule your consultation today and take the first step towards your perfect smile.</p>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                    <div>
                      <h4 className="font-semibold">Location</h4>
                      <p className="text-sm">Istanbul, Turkey</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <svg className="w-6 h-6 mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                    <div>
                      <h4 className="font-semibold">Phone</h4>
                      <p className="text-sm">+90 123 456 7890</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-8">
                <form className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Name Surname"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a9a7]"
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone Number"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a9a7]"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00a9a7]"
                    />
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-[#00a9a7] text-white py-2 px-4 rounded-md hover:bg-[#008f8d] transition-colors"
                  >
                    Get a FREE Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer dictionary={dictionary} locale={locale} />
    </main>
  );
}