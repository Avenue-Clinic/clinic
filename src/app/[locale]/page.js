import React from 'react';
import { getDictionary } from '../utils/i18n';

export default async function Home({ params: { locale } }) {
  const dictionary = await getDictionary(locale);

  return (
    <main>
      {/* Header is already included in layout.js, no need to include it here */}
    </main>
  );
}