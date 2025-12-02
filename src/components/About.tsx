import { Heart, Users, Sparkles } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: Users,
      title: "Community",
      description: "Connect with fellow Eritreans from across the country in a warm, welcoming environment.",
    },
    {
      icon: Heart,
      title: "Culture",
      description: "Celebrate our rich heritage through traditional food, music, dance, and storytelling.",
    },
    {
      icon: Sparkles,
      title: "Memories",
      description: "Create lasting bonds and unforgettable experiences that will stay with you forever.",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-body tracking-widest uppercase text-sm mb-4">
            About the Retreat
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground font-bold mb-6">
            A Weekend to Remember
          </h2>
          <p className="font-body text-muted-foreground text-lg leading-relaxed">
            Join us for an extraordinary weekend where our community comes together to 
            celebrate, reconnect, and strengthen the bonds that make our culture so special. 
            Set against the stunning backdrop of Pine Ridge Lodge, this retreat offers the 
            perfect escape from everyday life.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition-all duration-500 border border-border hover:border-primary/20"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/10 transition-colors duration-300">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display text-2xl text-foreground font-semibold mb-4">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
