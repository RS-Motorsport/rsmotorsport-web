import ScrollReveal from "@/components/ui/ScrollReveal";
import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import Services from "@/components/home/Services";
import Technology from "@/components/home/Technology";
import Cases from "@/components/home/Cases";
import WhyUs from "@/components/home/WhyUs";
import ContactCTA from "@/components/home/ContactCTA";
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
        <WhyUs />
        <ContactCTA />
      </main>
      <Footer />
    </>
  );
}
