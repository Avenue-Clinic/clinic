import React from 'react';
import Header from '../components/Header';
import en from '../dictionaries/en.json';
import ar from '../dictionaries/ar.json';
import tr from '../dictionaries/tr.json';

const dictionaries = {
  en,
  ar,
  tr
};

export default function Home({ params: { locale } }) {
  const dictionary = dictionaries[locale] || dictionaries.en;
  console.log('Page Dictionary:', dictionary);

  return (
    <main>
      <Header dictionary={dictionary} locale={locale} />
    </main>
  );
}