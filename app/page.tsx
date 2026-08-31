import About from "@/components/About";
import ContactCTA from "@/components/ContactCTA";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar";
import Projects from "@/components/Projects";
import Services from "@/components/Services";
import Skills from "@/components/Skills";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#08090b] text-white selection:bg-white selection:text-black">
      <Navbar />

      <Hero />

      <About />

      <Skills />

      <Services />

      <Projects />

      <ContactCTA />

      <Footer />
    </main>
  );
}