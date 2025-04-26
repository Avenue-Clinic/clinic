'use client';

import { useState } from 'react';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/high-res.css';
import './PhoneInput.css';
import { IconSend } from '@tabler/icons-react';

export default function LeadForm() {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <section className="relative z-10 -mt-[70px]">
      <div className="px-4 mx-auto max-w-[1350px] sm:px-6 lg:px-8">
        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6 p-14 pt-8 bg-white rounded-[50px] sm:grid-cols-3">
          <input
            type="text"
            placeholder="Name Surname"
            required
            className="w-full h-11 px-4 text-sm border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
          />
          <div className="w-full">
            <PhoneInput
              country={'tr'}
              value={phone}
              onChange={setPhone}
              inputClass="!w-full !h-11 !text-sm"
              containerClass="!w-full"
              buttonClass="!h-11"
              inputProps={{
                required: true,
              }}
              enableSearch
              searchClass="!text-sm !p-2"
              searchPlaceholder="Search countries"
              dropdownClass="!text-sm"
            />
          </div>
          <input
            type="email"
            placeholder="Email Address"
            required
            className="w-full h-11 px-4 text-sm border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-teal-400 focus:border-transparent"
          />
<div className="flex justify-center w-full sm:col-span-3">
  <button
    type="submit"
    className="inline-flex items-center justify-center space-x-2 px-5 py-2 h-11 text-[12px] font-medium text-white bg-[#023752] rounded-full hover:bg-[#05BBB5] transition-colors duration-300"
  >
    <span>Get a FREE Dental Report</span>
    <IconSend size={18} className="ms-2" />
  </button>
</div>
        </form>
      </div>
    </section>
  );
}
