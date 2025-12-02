import { Button } from "@/components/ui/button";
import { Calendar, MapPin } from "lucide-react";
import heroImage from "@/assets/hero-lodge.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful lodge retreat setting at sunset"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/60 via-foreground/40 to-foreground/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <p 
            className="text-gold font-body text-lg md:text-xl tracking-widest uppercase mb-4 opacity-0 animate-fade-in drop-shadow-lg"
            style={{ animationDelay: "0.2s" }}
          >
            Summer 2025
          </p>
          
          <h1 
            className="font-display text-5xl md:text-7xl lg:text-8xl text-cream font-bold leading-tight mb-6 opacity-0 animate-fade-in-up drop-shadow-2xl"
            style={{ animationDelay: "0.4s", textShadow: "2px 4px 12px rgba(0,0,0,0.5)" }}
          >
            Eritrean Summer
            <span className="block text-gold drop-shadow-lg">Retreat</span>
          </h1>
          
          <p 
            className="font-body text-lg md:text-xl text-cream/90 max-w-2xl mx-auto mb-8 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.6s" }}
          >
            Unite with your community for a weekend of culture, celebration, and connection 
            at a breathtaking mountain lodge retreat.
          </p>

          {/* Event Details */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 mb-10 opacity-0 animate-fade-in"
            style={{ animationDelay: "0.8s" }}
          >
            <div className="flex items-center gap-2 text-cream/90">
              <Calendar className="w-5 h-5 text-gold" />
              <span className="font-body">August 15-17, 2025</span>
            </div>
            <div className="flex items-center gap-2 text-cream/90">
              <MapPin className="w-5 h-5 text-gold" />
              <span className="font-body">Pine Ridge Lodge, Colorado</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-scale-in"
            style={{ animationDelay: "1s" }}
          >
            <Button variant="hero" size="xl">
              Register Now
            </Button>
            <Button variant="heroOutline" size="xl">
              Learn More
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: "1.4s" }}
      >
        <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center p-2">
          <div className="w-1 h-2 bg-cream/70 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
