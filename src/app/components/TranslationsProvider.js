'use client';

import { I18nextProvider } from 'react-i18next';
import initTranslations from '../utils/i18n';
import { createInstance } from 'i18next';
import { useEffect, useState } from 'react';

export default function TranslationsProvider({
  children,
  locale,
  namespaces,
  resources,
}) {
  const [instance, setInstance] = useState(null);

  useEffect(() => {
    const init = async () => {
      const i18n = createInstance();
      await initTranslations(locale, namespaces, i18n, resources);
      setInstance(i18n);
    };
    init();
  }, [locale, namespaces, resources]);

  if (!instance) {
    return null;
  }

  return <I18nextProvider i18n={instance}>{children}</I18nextProvider>;
}
