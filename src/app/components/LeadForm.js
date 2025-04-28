'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import CustomPhoneInput from './CustomPhoneInput';
import { IconSend } from '@tabler/icons-react';

export default function LeadForm({ dictionary = {} }) {
  const [phone, setPhone] = useState('');
  const formDict = dictionary?.form || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  // Animation variants for inputs only
  const inputVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Staggered animation for all inputs
  const staggerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  // Button animation
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.5 }
    },
    hover: {
      scale: 1.05,
      backgroundColor: "var(--secondary)",
      transition: { duration: 0.3 }
    }
  };

  return (
    <section className="relative z-10 -mt-[70px]">
      <div className="px-4 mx-auto max-w-[1350px] sm:px-6 lg:px-8">
        {/* No animation on the form container */}
        <form 
          onSubmit={handleSubmit} 
          className="grid grid-cols-1 gap-6 p-14 pt-7 bg-white rounded-[50px] sm:grid-cols-3"
        >
          {/* Wrap inputs in a motion.div for staggered animation */}
          <motion.div
            variants={staggerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 gap-6 sm:grid-cols-3 col-span-full"
          >
            <motion.div variants={inputVariants}>
              <input
                type="text"
                placeholder={formDict.name || ''}
                required
                className="w-full h-11 px-4 text-sm border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
              />
            </motion.div>
            
            <motion.div className="w-full" variants={inputVariants}>
              <CustomPhoneInput
                value={phone}
                onChange={setPhone}
                dictionary={dictionary}
                placeholder={formDict.phone || ''}
              />
            </motion.div>
            
            <motion.div variants={inputVariants}>
              <input
                type="email"
                placeholder={formDict.email || ''}
                required
                className="w-full h-11 px-4 text-sm border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
              />
            </motion.div>
          </motion.div>
          
          <div className="flex justify-center w-full sm:col-span-3">
            <motion.button
              type="submit"
              className="mt-4 inline-flex items-center justify-center space-x-1 px-7 py-6 h-11 text-[12px] font-medium text-white bg-[var(--primary)] rounded-full transition-colors duration-300"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <span>{formDict.submit || ''}</span>
              <IconSend size={18} className="ms-4 " />
            </motion.button>
          </div>
        </form>
      </div>
    </section>
  );
}