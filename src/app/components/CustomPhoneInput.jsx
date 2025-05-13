'use client'

import { useState } from 'react'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function CustomPhoneInput({ value, onChange, dictionary = {}, placeholder = 'Phone Number' }) {
  const isRTL = dictionary?.dir === 'rtl'
  const [focused, setFocused] = useState(false)

  return (
    <div className={`relative ${focused ? 'phone-input-focused' : ''}`}>
      <PhoneInput
        country={'tr'}
        value={value}
        onChange={onChange}
        enableSearch={true}
        placeholder={placeholder}
        containerClass={`w-full ${isRTL ? 'phone-input-rtl' : ''}`}
        inputClass={`w-full px-4 py-3 rounded-lg border border-[#E5E7EB] focus:outline-none focus:border-[var(--secondary)] ${
          isRTL ? 'text-right pr-[50px]' : ''
        }`}
        buttonClass={isRTL ? 'right-0' : ''}
        searchClass={isRTL ? 'search-rtl' : ''}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      <style jsx global>{`
        .phone-input-rtl .react-tel-input .selected-flag {
          right: 0;
          left: auto;
          border-radius: 0 8px 8px 0;
        }
        .phone-input-rtl .react-tel-input .form-control {
          padding-right: 48px !important;
          padding-left: 12px !important;
          text-align: right;
        }
        .phone-input-rtl .react-tel-input .country-list {
          right: 0;
          left: auto;
          text-align: right;
        }
        .search-rtl {
          text-align: right;
        }
        .search-rtl input {
          text-align: right;
        }
      `}</style>
    </div>
  )
}
