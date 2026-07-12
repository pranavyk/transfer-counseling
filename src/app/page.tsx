import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import PhotoCarousel from "@/components/PhotoCarousel";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#faf7f0]">
      <Nav />
      <Hero />
      <Services />
      <About />
      <Testimonials />
      <Contact />
      <PhotoCarousel />
      <Footer />
    </div>
  );
}
