'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const LogoShowcase = () => {
  // Array of brand logos with correct file names and extensions
  const brands = [
    '/images/brands/Brand1.svg',
    '/images/brands/brand2.svg',
    '/images/brands/brand3.svg',
    '/images/brands/brand4.svg',
    '/images/brands/brand5.svg',
    '/images/brands/brand6.svg',
    '/images/brands/brand7.svg',
    '/images/brands/brand8.svg',
    '/images/brands/brand9.svg',
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container px-4 mx-auto">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={50}
          slidesPerView="auto"
          loop={true}
          speed={5000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
            stopOnLastSlide: false,
          }}
          className="select-none"
          allowTouchMove={false}
        >
          {/* Double the logos to make the transition smoother */}
          {[...brands, ...brands].map((brand, index) => (
            <SwiperSlide
              key={index}
              className="!w-auto"
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <img
                src={brand}
                alt={`Brand ${index % brands.length + 1}`}
                className="object-contain w-auto h-12 transition-all duration-300 grayscale hover:grayscale-0"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default LogoShowcase;