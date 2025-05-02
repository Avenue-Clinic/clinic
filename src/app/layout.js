// src/app/layout.js
import './globals.css';
import { defaultLocale } from './utils/i18n';
import { defaultMetadata } from './utils/metadata';
import { redirect } from 'next/navigation';

export const metadata = defaultMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang={defaultLocale}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}