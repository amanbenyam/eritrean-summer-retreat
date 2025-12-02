import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Activities from "@/components/Activities";
import Testimonials from "@/components/Testimonials";
import Registration from "@/components/Registration";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <section id="about">
        <About />
      </section>
      <section id="activities">
        <Activities />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="register">
        <Registration />
      </section>
      <Footer />
    </main>
  );
};

export default Index;
