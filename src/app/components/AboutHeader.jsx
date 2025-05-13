"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AboutHeader = () => {
  const pathname = usePathname();
  
  const getOppositeLocale = (currentPath) => {
    if (currentPath.startsWith("/tr")) {
      return currentPath.replace("/tr", "/en");
    } else if (currentPath.startsWith("/ar")) {
      return currentPath.replace("/ar", "/en");
    } else {
      return currentPath.replace("/en", "/tr");
    }
  };

  const { t } = useTranslation(['content']);

  const translations = {
    en: t('about.label', 'About Us'),
    tr: t('about.labelTr', 'Hakkımızda'),
    ar: t('about.labelAr', 'معلومات عنا')
  };

  return (
    <div className="relative w-full py-[130px] md:py-[160px]"
         style={{
           background: "linear-gradient(90deg, #252D62 0%, #023752 100%)"
         }}>
      <div className="container px-4 mx-auto">
        <motion.h1 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-center text-white"
          style={{
            fontSize: "54px",
            fontWeight: 700,
            lineHeight: "65px"
          }}>
          {t('about.label')}
        </motion.h1>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="flex justify-center gap-4 mt-4">
          {pathname.startsWith("/ar") ? (
            <>
              <Link href={pathname.replace("/ar", "/en")}
                    className="text-white transition-colors hover:text-[var(--secondary)]"
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "26px"
                    }}>
                {translations.en}
              </Link>
              <span className="text-white">/</span>
              <Link href={pathname.replace("/ar", "/tr")}
                    className="text-white transition-colors hover:text-[var(--secondary)]"
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "26px"
                    }}>
                {translations.tr}
              </Link>
            </>
          ) : (
            <>
              <Link href={getOppositeLocale(pathname)}
                    className="text-white transition-colors hover:text-[var(--secondary)]"
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "26px"
                    }}>
                {pathname.startsWith("/tr") ? translations.en : translations.tr}
              </Link>
              <span className="text-white">/</span>
              <Link href={pathname.replace(/(\/en|\/tr)/, "/ar")}
                    className="text-white transition-colors hover:text-[var(--secondary)]"
                    style={{
                      fontSize: "16px",
                      fontWeight: 400,
                      lineHeight: "26px"
                    }}>
                {translations.ar}
              </Link>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default AboutHeader;
