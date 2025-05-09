"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const ContactCardItem = ({ cardInfo, renderedContent, dictionary, index, isRTL }) => {
  const cardVariants = {
    hidden: { 
      opacity: 0,
      x: isRTL ? 20 : -20
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        delay: index * 0.2
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={cardVariants}
      className="group relative overflow-hidden bg-white p-[30px] text-center shadow-[0px_4px_40px_0px_rgba(0,0,0,0.06)] transition-colors duration-500 hover:bg-[var(--primary)] rounded-[30px]"
    >
      <div className="relative z-10">
        <div className="mb-[20px] mx-auto w-[60px] h-[60px] relative">
          <Image
            src={cardInfo.icon}
            alt={cardInfo.alt}
            fill
            className="transition-all group-hover:brightness-0 group-hover:invert"
          />
        </div>
        <h3 className="text-[20px] font-[700] leading-[24px] text-[var(--primary)] mb-[20px] group-hover:text-white transition-colors">
          {dictionary?.form?.[cardInfo.titleKey] || cardInfo.fallbackTitle}
        </h3>
        <p className="text-[16px] font-[400] leading-[29px] text-[var(--secondary-text)] group-hover:text-white transition-colors">
          {renderedContent}
        </p>
      </div>
    </motion.div>
  );
};

export default ContactCardItem;
