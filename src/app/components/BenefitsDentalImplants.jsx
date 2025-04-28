'use client';

const BenefitsDentalImplants = ({ dictionary }) => {
  const isRTL = dictionary?.dir === 'rtl';
  const benefits = dictionary?.['dental-implants']?.benefits;

  const FeatureCard = ({ title, description }) => (
    <div className="flex gap-6 pl-4">
      <div className="flex-shrink-0">
        <div className="w-[50px] h-[50px] rounded-[10px] bg-[var(--primary)] flex items-center justify-center">
          <img src="/icons/circle-tick.svg" alt="check" className="w-[35px] h-[35px]" />
        </div>
      </div>
      <div>
        <h3 className="text-[20px] leading-[29px] font-semibold mb-1">{title}</h3>
        <p className="text-[16px] leading-[29px] font-normal">{description}</p>
      </div>
    </div>
  );

  return (
    <section className="py-[100px] pb-[100px]">
      <div className="container px-4 mx-auto">
        <div className="max-w-[1290px] mx-auto">
          <div className={`text-left mb-[20px] ${isRTL ? 'rtl' : ''}`}>
            <h2 className="text-[46px] leading-[55px] font-bold mb-6">
              {benefits?.title}
            </h2>
            <p className="text-[16px] leading-[29px] font-normal max-w-[900px] mb-10">
              {benefits?.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-[25px]">
            {Object.entries(benefits?.features || {}).map(([key, feature]) => (
              <FeatureCard
                key={key}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsDentalImplants;
