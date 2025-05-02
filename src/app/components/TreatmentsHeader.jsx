"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const TreatmentsHeader = ({ dictionary }) => {
  const pathname = usePathname();
  const currentLocale = pathname.split('/')[1]; // Extract locale from path ('en', 'tr', 'ar')
  
  // Ensure dictionary and header are loaded
  const headerDict = dictionary?.header || {};
  const treatmentsTitle = headerDict.treatmentsTitle || 'Treatments'; // Default fallback

  const getOppositeLocalePath = (targetLocale) => {
    // Replaces the current locale segment in the path with the target locale
    return pathname.replace(`/${currentLocale}`, `/${targetLocale}`);
  };

  return (
    <div className="relative w-full py-[130px] md:py-[160px]"
         style={{
           background: "linear-gradient(90deg, #252D62 0%, #023752 100%)"
         }}
    >
      <div className="container relative z-10 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-white"
        >
          <h1 className="text-[48px] md:text-[64px] font-bold mb-4">{treatmentsTitle}</h1>
          <div className="flex items-center justify-center space-x-2">
            <Link href={`/${currentLocale}`}>{headerDict.home || 'Home'}</Link>
            <span className="text-white">/</span>
            <span className="font-semibold text-white">{treatmentsTitle}</span>
          </div>
          {/* Language switcher - Simplified using dictionary */} 
          {headerDict.en && headerDict.tr && headerDict.ar && (
            <div className="flex items-center justify-center mt-4 space-x-2 text-[16px] font-[400] leading-[26px]">
              {currentLocale !== 'en' && (
                <Link href={getOppositeLocalePath('en')}
                      className="text-white transition-colors hover:text-[var(--secondary)]">
                  {headerDict.en} {/* Use title from dictionary */}
                </Link>
              )}
              {currentLocale !== 'en' && currentLocale !== 'tr' && <span className="text-white">/</span>}
              {currentLocale !== 'tr' && (
                <Link href={getOppositeLocalePath('tr')}
                      className="text-white transition-colors hover:text-[var(--secondary)]">
                  {headerDict.tr} {/* Use title from dictionary */}
                </Link>
              )}
              {currentLocale !== 'ar' && (currentLocale === 'en' || currentLocale === 'tr') && <span className="text-white">/</span>}
              {currentLocale !== 'ar' && (
                <Link href={getOppositeLocalePath('ar')}
                      className="text-white transition-colors hover:text-[var(--secondary)]">
                  {headerDict.ar} {/* Use title from dictionary */}
                </Link>
              )}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default TreatmentsHeader;
