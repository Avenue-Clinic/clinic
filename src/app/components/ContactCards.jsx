"use server";

import Image from "next/image";
import { Suspense } from "react";
import dynamic from "next/dynamic";

const ContactCardItem = dynamic(() => import("./ContactCardItem"), {
  ssr: true,
  loading: ({ index }) => (
    <div className="animate-pulse bg-gray-200 p-[30px] rounded-[30px] h-[250px]" />
  ),
});

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

const ContactCards = ({ dictionary, locale }) => {
  const isRTL = locale === 'ar';

  return (
    <section className="mx-auto">
      <div className="pt-[100px] pb-[50px] mx-auto">
        <div className="max-w-[1280px] mx-auto px-[10px] grid grid-cols-1 md:grid-cols-3 gap-[30px]">
          {cards.map((card, index) => {
            const renderedContent = card.content(dictionary);
            return (
              <Suspense 
                key={index} 
                fallback={<div className="animate-pulse bg-gray-200 p-[30px] rounded-[30px] h-[250px]" />}
              >
                <ContactCardItem
                  cardInfo={{
                    icon: card.icon,
                    alt: card.alt,
                    titleKey: card.titleKey,
                    fallbackTitle: card.fallbackTitle,
                  }}
                  renderedContent={renderedContent}
                  dictionary={dictionary}
                  index={index}
                  isRTL={isRTL}
                />
              </Suspense>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactCards;
