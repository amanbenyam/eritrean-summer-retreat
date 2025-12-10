import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Schedule from "@/components/Schedule";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="schedule">
        <Schedule />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
