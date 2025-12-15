import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PoojaServices from "@/components/PoojaServices";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import Location from "@/components/Location";
import PriestBio from "@/components/PriestBio";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import PhoneCTA from "@/components/PhoneCTA";

export default function Home() {
  return (
    <main className="min-h-screen bg-cream selection:bg-saffron selection:text-white">
      <Header />
      <Hero />
      <PoojaServices />
      <Benefits />
      <Testimonials />
      <Location />
      <PriestBio />
      <FAQ />
      <Footer />
      <PhoneCTA />
    </main>
  );
}
