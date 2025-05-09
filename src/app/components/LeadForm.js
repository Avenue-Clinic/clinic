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
      transition: { duration: 0.5 },
    },
  };

  // Staggered animation for all inputs
  const staggerVariants = {
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Button animation
  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
    hover: {
      scale: 1.05,
      backgroundColor: 'var(--secondary)',
      transition: { duration: 0.3 },
    },
  };

  return (
    <section className="relative z-10 -mt-[100px] sm:-mt-[70px] ">
      <div className="px-4 mx-auto max-w-[1350px] sm:px-6 lg:px-8 ">
        {/* No animation on the form container */}
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-6 p-8 sm:p-14 pt-7 bg-white rounded-[50px] sm:grid-cols-3"
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
                placeholder={formDict.name}
                required
                className="w-full h-11 px-4 text-sm border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent text-center"
              />
            </motion.div>

            <motion.div className="relative w-full " variants={inputVariants}>
              <CustomPhoneInput
                value={phone}
                onChange={setPhone}
                dictionary={dictionary}
                placeholder={formDict.phone}
                className="phone-input-container "
              />
              {/* Add custom styling for the phone input */}
              <style jsx global>{`
                .phone-input-container .PhoneInputInput {
                  text-align: center;
                  z-index: -1; /* Lower z-index for the input */
                }

                .phone-input-container .PhoneInputCountrySelect {
                  z-index: 1; /* Higher z-index for the country selector */
                }

                /* Make the phone input field appear to be behind the country selector */
                .phone-input-container .PhoneInput {
                  position: relative;
                }

                /* When the input is focused, make it appear as if the entire component is focused */
                .phone-input-container
                  .PhoneInputInput:focus
                  + .PhoneInputCountryIcon {
                  outline: 2px solid var(--teal-400);
                  border-radius: 5px;
                }
              `}</style>
            </motion.div>

            <motion.div variants={inputVariants}>
              <input
                type="email"
                placeholder={formDict.email}
                required
                className="w-full h-11 px-4 text-sm border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-[var(--secondary)] focus:border-transparent text-center"
              />
            </motion.div>
          </motion.div>

          <div className="flex justify-center w-full sm:col-span-3">
            <motion.div
              type="submit"
              className="mt-4 inline-flex items-center justify-center space-x-1 px-7 py-6 h-11 text-[12px] font-medium text-white bg-[var(--primary)] rounded-full transition-colors duration-150"
              variants={buttonVariants}
              initial="hidden"
              animate="visible"
              whileHover="hover"
            >
              <span>{formDict.submit}</span>
              <IconSend size={18} className="ms-4" />
            </motion.div>
          </div>
        </form>
      </div>
    </section>
  );
}
