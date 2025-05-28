'use client';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import VideoPlayButton from './playButton';
import { useTranslation } from 'react-i18next';

const TestimonialsSection = ({ inverted = false }) => {
  const { t, i18n } = useTranslation('content');
  const isRTL = i18n.language === 'ar';

  return (
    <section className={inverted ? 'bg-[#FAFAFA]' : 'bg-[var(--primary)]'}>
      <div className="container mx-auto py-[100px]">
        <div
          className={`flex flex-col md:flex-row items-start md:items-center justify-between mb-[80px] gap-6 ${isRTL ? 'md:flex-row-reverse' : ''}`}
        >
          <div className="max-w-[820px]">
            <h3
              className={`text-[14px] font-bold leading-[17px] tracking-[0.2em] mb-5 ${inverted ? 'text-[var(--secondary)]' : 'text-white'}`}
            >
              {t('testimonials.sectionTitle')}
            </h3>
            <h2
              className={`text-[30px] md:text-[38px] lg:text-[46px] font-bold leading-[42px] lg:leading-[55px] ${inverted ? 'text-[var(--primary)]' : 'text-[rgb(249,244,235)]'}`}
            >
              {t('testimonials.title')}
            </h2>
          </div>
          <Link href="/gallery" passHref>
            <button
              className={`px-7 py-4 text-[16px] font-semibold transition-all rounded-full ${
                inverted
                  ? 'bg-[var(--primary)] text-white hover:bg-[var(--secondary)]'
                  : 'bg-white text-[var(--primary)] hover:bg-opacity-90'
              } lg:mt-0 mt-5`}
            >
              {t('testimonials.button')}
            </button>
          </Link>
        </div>

        <motion.div
          className="flex flex-col md:flex-row gap-[40px] md:gap-[20px] px-4 md:px-0 mt-[60px] w-full overflow-x-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {Array.from({ length: 3 }, (_, index) => (
            <motion.div
              key={index}
              className="w-full"
              variants={{
                hidden: { opacity: 0, y: 50 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
              }}
            >
              <div className="relative w-full">
                <div className="w-full aspect-[4/5] relative">
                  <Image
                    src={`/images/test${index + 1}.jpg`}
                    fill
                    style={{ objectFit: 'cover' }}
                    alt={`Testimonial ${index + 1}`}
                    className="rounded-2xl"
                  />

                  {/* This overlay covers the entire image area */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-20 rounded-2xl">
                    <VideoPlayButton
                      videoId={`your-youtube-id-here`} // Replace with your actual YouTube ID
                      color="var(--red)"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
