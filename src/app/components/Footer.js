// src/components/Footer.js
import Link from 'next/link';
import Image from 'next/image';

export default function Footer({ dictionary, locale }) {
  return (
    <footer className="bg-[#003b4a] text-white">
      <div className="container px-6 py-16 mx-auto">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Column 1 - Logo and Social */}
          <div>
            <Link href={`/${locale}`} className="inline-block mb-6">
              <Image 
                src="/images/logo.svg" 
                alt="Medico" 
                width={150} 
                height={40} 
                className="w-auto h-10 brightness-0 invert" 
              />
            </Link>
            <p className="mb-8 text-gray-300">
              Experience world-class dental care in Istanbul at 70% more affordable costs. Your perfect smile journey begins here.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-300 hover:text-[#00a9a7] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00a9a7] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                </svg>
              </a>
              <a href="#" className="text-gray-300 hover:text-[#00a9a7] transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Column 2 - Quick Links */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href={`/${locale}`} className="text-gray-300 hover:text-white hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/about`} className="text-gray-300 hover:text-white hover:underline">
                  About Us
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/treatments`} className="text-gray-300 hover:text-white hover:underline">
                  Treatments
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/gallery`} className="text-gray-300 hover:text-white hover:underline">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/blog`} className="text-gray-300 hover:text-white hover:underline">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-gray-300 hover:text-white hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3 - Treatments */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Treatments</h3>
            <ul className="space-y-4">
              <li>
                <Link href={`/${locale}/treatments/dental-implants`} className="text-gray-300 hover:text-white hover:underline">
                  Dental Implants
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/treatments/hollywood-smile`} className="text-gray-300 hover:text-white hover:underline">
                  Hollywood Smile
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/treatments/all-on-implants`} className="text-gray-300 hover:text-white hover:underline">
                  All-on-4 Implants
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/treatments/dental-crowns`} className="text-gray-300 hover:text-white hover:underline">
                  Dental Crowns
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/treatments/dental-veneers`} className="text-gray-300 hover:text-white hover:underline">
                  Dental Veneers
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4 - Contact */}
          <div>
            <h3 className="mb-6 text-xl font-semibold">Contact</h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-3 text-[#00a9a7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-gray-300">
                  123 Dental Street<br />
                  Istanbul, Turkey
                </p>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-3 text-[#00a9a7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <p className="text-gray-300">+90 123 456 7890</p>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-3 text-[#00a9a7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className="text-gray-300">info@medicodental.com</p>
              </div>
              <div className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-3 text-[#00a9a7]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div className="text-gray-300">
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p>Saturday: 10:00 AM - 4:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 mt-12 border-t border-gray-700">
          <div className="text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Medico Dental Clinic. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}