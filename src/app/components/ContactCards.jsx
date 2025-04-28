"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

const ContactCards = ({ dictionary }) => {
  const pathname = usePathname();
  const isRTL = pathname.startsWith("/ar");

  const cards = [
    {
      icon: "/icons/address.svg",
      alt: "Address",
      titleKey: "address",
      fallbackTitle: "Address",
      content: (dict) => dict?.form?.address || "Beyoğlu mah. 2, Cami sokak, Küçükçekmece/ Istanbul"
    },
    {
      icon: "/icons/contact.svg",
      alt: "Contact",
      titleKey: "contact",
      fallbackTitle: "Contact",
      content: (dict) => (
        <>
          {dict?.form?.email || "info@medicclinic.net"}
          <br />
          {dict?.form?.phone || "+90 552 663 0630"}
        </>
      )
    },
    {
      icon: "/icons/hours.svg",
      alt: "Opening Hours",
      titleKey: "hours",
      fallbackTitle: "Opening Hours",
      content: (dict) => (
        <>
          {dict?.form?.weekdays || "Monday to Friday: 9am - 7pm"}
          <br />
          {dict?.form?.saturday || "Saturday: 9am - 4pm"}
          <br />
          {dict?.form?.sunday || "Sunday: Closed"}
        </>
      )
    }
  ];

  return (
    <section className="mx-auto">
      <div className="pt-[100px] pb-[50px] mx-auto">
        <div className="max-w-[1280px] mx-auto px-[10px] grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {cards.map((card, index) => (
            <div key={index} className="group relative overflow-hidden bg-white p-[30px] text-center shadow-[0px_4px_40px_0px_rgba(0,0,0,0.06)] transition-colors duration-500 hover:bg-[var(--primary)] rounded-[30px]">
              <div className="relative z-10">
                <div className="mb-[20px] mx-auto w-[60px] h-[60px] relative">
                  <Image
                    src={card.icon}
                    alt={card.alt}
                    fill
                    className="transition-all group-hover:brightness-0 group-hover:invert"
                  />
                </div>
                <h3 className="text-[20px] font-[700] leading-[24px] text-[var(--primary)] mb-[20px] group-hover:text-white transition-colors">
                  {dictionary?.form?.[card.titleKey] || card.fallbackTitle}
                </h3>
                <p className="text-[16px] font-[400] leading-[29px] text-[var(--text)] group-hover:text-white transition-colors">
                  {card.content(dictionary)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
