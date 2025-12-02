import { Music, UtensilsCrossed, Flame, TreePine, Coffee, Moon } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      icon: UtensilsCrossed,
      title: "Traditional Cuisine",
      description: "Savor authentic Eritrean dishes prepared by community members, including injera, tsebhi, and more.",
      time: "All Weekend",
    },
    {
      icon: Music,
      title: "Live Music & Dance",
      description: "Experience the rhythms of traditional music and learn cultural dances under the stars.",
      time: "Saturday Evening",
    },
    {
      icon: Flame,
      title: "Bonfire Stories",
      description: "Gather around the fire for storytelling, sharing wisdom, and building connections.",
      time: "Friday & Saturday Night",
    },
    {
      icon: TreePine,
      title: "Nature Hikes",
      description: "Explore scenic mountain trails and breathe in the fresh alpine air together.",
      time: "Saturday Morning",
    },
    {
      icon: Coffee,
      title: "Coffee Ceremony",
      description: "Participate in the beloved traditional coffee ceremony, a cornerstone of Eritrean hospitality.",
      time: "Sunday Morning",
    },
    {
      icon: Moon,
      title: "Stargazing",
      description: "End your evenings gazing at the brilliant night sky, far from city lights.",
      time: "Every Night",
    },
  ];

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-body tracking-widest uppercase text-sm mb-4">
            What Awaits You
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground font-bold mb-6">
            Weekend Activities
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            From traditional celebrations to outdoor adventures, every moment is designed 
            to bring joy and connection.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {activities.map((activity, index) => (
            <div
              key={activity.title}
              className="group relative bg-card rounded-2xl p-6 overflow-hidden hover:shadow-lg transition-all duration-500 border border-border"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700" />
              
              <div className="relative">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <activity.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-body text-muted-foreground bg-secondary px-3 py-1 rounded-full">
                    {activity.time}
                  </span>
                </div>
                
                <h3 className="font-display text-xl text-foreground font-semibold mb-2">
                  {activity.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
