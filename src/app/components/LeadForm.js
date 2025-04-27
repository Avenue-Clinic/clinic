'use client';

import { useState } from 'react';
import CustomPhoneInput from './CustomPhoneInput';
import { IconSend } from '@tabler/icons-react';

export default function LeadForm({ dictionary = {} }) {
  const [phone, setPhone] = useState('');
  const formDict = dictionary?.form || {};

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="relative z-10 -mt-[70px]">
      <div className="px-4 mx-auto max-w-[1350px] sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 p-14 pt-7 bg-white rounded-[50px] sm:grid-cols-3">
          <input
            type="text"
            placeholder={formDict.name || ''}
            required
            className="w-full h-11 px-4 text-sm border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
          />
          <div className="w-full">
            <CustomPhoneInput
              value={phone}
              onChange={setPhone}
              dictionary={dictionary}
              placeholder={formDict.phone || ''}
            />
          </div>
          <input
            type="email"
            placeholder={formDict.email || ''}
            required
            className="w-full h-11 px-4 text-sm border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
          />
          <div className="flex justify-center w-full sm:col-span-3">
            <button
              type="submit"
              className="mt-4 inline-flex items-center justify-center space-x-1 px-7 py-6 h-11 text-[12px] font-medium text-white bg-[var(--primary)] rounded-full hover:bg-[var(--secondary)] transition-colors duration-300"
            >
              <span>{formDict.submit || ''}</span>
              <IconSend size={18} className="ms-4 " />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
