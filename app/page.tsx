import ScrollReveal from "@/components/ui/ScrollReveal";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Technology from "@/components/home/Technology";
import Cases from "@/components/home/Cases";
import Inspection from "@/components/home/Inspection";
import Brands from "@/components/home/Brands";
import WhyUs from "@/components/home/WhyUs";
import ContactCTA from "@/components/home/ContactCTA";
import Location from "@/components/home/Location";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <>
      <ScrollReveal />
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Technology />
        <Cases />
        <Inspection />
        <Brands />
        <WhyUs />
        <ContactCTA />
        <Location />
      </main>
      <Footer />
    </>
  );
}
