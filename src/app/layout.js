// src/app/layout.js
import './globals.css';
import { defaultLocale } from './utils/i18n';
import { redirect } from 'next/navigation';

export const metadata = {
  title: 'Medico Dental Clinic',
  description: 'Expert dental care at affordable costs in Istanbul',
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  );
}