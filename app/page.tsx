import type { Metadata } from "next";
import Header from "@/components/Header";
import HomeJsonLd from "@/components/HomeJsonLd";

export const metadata: Metadata = {
  title: "Narayana Bali Pooja Gokarna | Pitru Dosha & Ancestral Rituals",
  description: "Book authentic Narayana Bali and Pitru Dosha pooja in Gokarna. 20+ years Vedic experience. Complete ancestral peace.",
  alternates: {
    canonical: 'https://www.gokarnatemples.com/',
  },
};
import Hero from "@/components/Hero";
import PoojaServices from "@/components/PoojaServices";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import PriestBio from "@/components/PriestBio";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import PhoneCTA from "@/components/PhoneCTA";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream selection:bg-saffron selection:text-white">
      <HomeJsonLd />
      <Header />
      <Hero />
      <PoojaServices />
      <Benefits />
      <Testimonials />
      <Location />
      <PriestBio />
      <FAQ />
      <ContactForm />
      <Footer />
      <PhoneCTA />
    </main>
  );
}
