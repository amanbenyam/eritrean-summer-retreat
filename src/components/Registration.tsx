import { Button } from "@/components/ui/button";
import { Check, Calendar, MapPin, Users } from "lucide-react";

const Registration = () => {
  const packages = [
    {
      name: "Individual",
      price: "$299",
      description: "Perfect for solo attendees",
      features: [
        "3 days, 2 nights accommodation",
        "All meals included",
        "Full activity access",
        "Welcome gift bag",
      ],
      popular: false,
    },
    {
      name: "Family",
      price: "$699",
      description: "Up to 4 family members",
      features: [
        "Private family cabin",
        "All meals for family",
        "Kids activities program",
        "Family photo session",
        "Priority seating at events",
      ],
      popular: true,
    },
    {
      name: "Group",
      price: "$249",
      description: "Per person (5+ people)",
      features: [
        "Shared accommodations",
        "All meals included",
        "Full activity access",
        "Group coordination support",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-body tracking-widest uppercase text-sm mb-4">
            Secure Your Spot
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground font-bold mb-6">
            Registration Packages
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Choose the package that fits your needs. Early bird pricing ends July 1st.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.name}
              className={`relative bg-card rounded-2xl p-8 border-2 transition-all duration-300 hover:shadow-xl ${
                pkg.popular 
                  ? "border-primary shadow-lg scale-105" 
                  : "border-border hover:border-primary/30"
              }`}
            >
              {pkg.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground text-xs font-body font-semibold px-4 py-1.5 rounded-full">
                    Most Popular
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <h3 className="font-display text-2xl text-foreground font-semibold mb-2">
                  {pkg.name}
                </h3>
                <p className="font-body text-muted-foreground text-sm mb-4">
                  {pkg.description}
                </p>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="font-display text-4xl text-primary font-bold">
                    {pkg.price}
                  </span>
                  <span className="font-body text-muted-foreground text-sm">
                    /person
                  </span>
                </div>
              </div>

              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                    <span className="font-body text-foreground text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button 
                variant={pkg.popular ? "warm" : "outline"} 
                className="w-full"
                size="lg"
              >
                Register Now
              </Button>
            </div>
          ))}
        </div>

        {/* Event Details Summary */}
        <div className="mt-20 max-w-4xl mx-auto bg-secondary/50 rounded-2xl p-8 md:p-12">
          <div className="grid sm:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Calendar className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-display text-lg text-foreground font-semibold mb-1">When</h4>
              <p className="font-body text-muted-foreground text-sm">August 15-17, 2025</p>
              <p className="font-body text-muted-foreground text-sm">Friday 4pm - Sunday 2pm</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-display text-lg text-foreground font-semibold mb-1">Where</h4>
              <p className="font-body text-muted-foreground text-sm">Pine Ridge Lodge</p>
              <p className="font-body text-muted-foreground text-sm">Estes Park, Colorado</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Users className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-display text-lg text-foreground font-semibold mb-1">Capacity</h4>
              <p className="font-body text-muted-foreground text-sm">Limited to 150 guests</p>
              <p className="font-body text-muted-foreground text-sm">Register early!</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
