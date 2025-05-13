'use client';
import { useTranslation } from 'react-i18next';

const About1 = () => {
  const { t, i18n } = useTranslation(['content']);
  const isRTL = i18n.language === 'ar';

  return (
    <section className="bg-[var(--primary)] border-t-4 border-b-4 border-white">
      <div className="mx-auto max-w-[1290px] px-4 sm:px-6 lg:px-8 pt-[100px] pb-[330px]">
        <div
          className={`flex items-center justify-between ${isRTL ? 'flex-row-reverse' : ''}`}
        >
          <div className="max-w-[820px]">
            <h3 className="text-[14px] font-bold leading-[17px] tracking-[0.2em] mb-5 text-white">
              {t(
                'content:about.committed_excellence',
                'COMMITTED TO EXCELLENCE',
              )}
            </h3>
            <h2 className="text-[46px] font-bold leading-[55px] text-[rgb(249,244,235)]">
              {t(
                'content:about.healthy_smiles_trust',
                'Driven by a Vision of Healthy Smiles and Lasting Trust.',
              )}
            </h2>
          </div>
          <button className="px-7 py-4 text-[16px] font-semibold transition-all rounded-full bg-white text-[var(--primary)] hover:bg-opacity-90">
            {t('content:about.contact_now', 'Contact Now')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About1;
