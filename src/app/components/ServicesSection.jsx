'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { DentistryIcon, ConsultationIcon, AppointmentIcon } from './icons';

const ServiceCard = ({ title, description, icon, button, index }) => {
  const bgColors = ['var(--card3-bg)', 'var(--card2-bg)', 'var(--card1-bg)'];
  const bgColor = bgColors[index % 3];
  const IconComponent = () => {
    switch (icon) {
      case 'dentistry':
        return (
          <DentistryIcon className="text-white w-8 h-8 transition-colors duration-300 group-hover/card:text-[var(--secondary)]" />
        );
      case 'consultation':
        return (
          <ConsultationIcon className="text-white w-8 h-8 transition-colors duration-300 group-hover/card:text-[var(--secondary)]" />
        );
      case 'appointment':
        return (
          <AppointmentIcon className="text-white w-8 h-8 transition-colors duration-300 group-hover/card:text-[var(--secondary)]" />
        );
      default:
        return null;
    }
  };
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      className="w-full md:w-auto max-w-[390px] h-[390px]  text-center md:text-left group/card"
      style={{ backgroundColor: bgColor }}
    >
      <div className="relative flex flex-col justify-between h-full p-10 overflow-hidden transition-all duration-300 group-hover/card:bg-white group-hover/card:shadow-xl">
        <div>
          <div className="flex justify-center mb-8 md:block">
            <IconComponent />
          </div>
          <h3 className="text-xl font-medium leading-[26px] text-white mb-6 transition-colors duration-300 group-hover/card:text-[var(--secondary)]">
            {title}
          </h3>
          <p className="text-base leading-[32px] text-[var(--secondary-text)] group-hover/card:text-gray-600">
            {description}
          </p>
        </div>
        <div className="mt-6 text-center md:text-left">
          <Link href={button.toLowerCase().replace(/\s+/g, '-')}>
            <button className="px-6 py-2 text-base font-medium leading-[23px] text-white border border-white rounded-full transition-all duration-300 group-hover/card:border-[var(--secondary)] group-hover/card:text-[var(--secondary)] group-hover/card:bg-transparent hover:bg-white group-hover/card:hover:bg-[var(--secondary)] group-hover/card:hover:text-white">
              {button}
            </button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default function ServicesSection({ dictionary }) {
  const { services } = dictionary;
  if (!services) return null;
  return (
    <section className="w-full pb-[50px]">
      <div className="flex flex-col items-center justify-center md:flex-row">
        {services.items.map((service, index) => (
          <ServiceCard
            key={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            button={service.button}
            index={index}
          />
        ))}
      </div>
    </section>
  );
}
