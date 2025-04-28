import ContactHeader from "@/app/components/ContactHeader";
import Footer from "@/app/components/Footer";
import ContactCards from "@/app/components/ContactCards";
import ContactMapSection from "@/app/components/ContactMapSection";
import { getDictionary } from "@/app/utils/i18n";

export default async function Contact({ params: { locale } }) {
  const dictionary = await getDictionary(locale);

  return (
    <main>
      <ContactHeader dictionary={dictionary} />
      <ContactCards dictionary={dictionary} />
      <ContactMapSection dictionary={dictionary} />
      <Footer dictionary={dictionary} />
    </main>
  );
}