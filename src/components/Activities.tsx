import { Music, UtensilsCrossed, Flame, TreePine, Coffee } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      icon: TreePine,
      title: "Group Morning Hike",
      description: "Start the day with an energizing group hike through scenic trails, breathing in fresh mountain air together.",
      time: "Saturday Morning",
    },
    {
      icon: UtensilsCrossed,
      title: "Community Barbeque",
      description: "Enjoy delicious food and refreshing drinks at our community barbeque—a time to eat, laugh, and connect.",
      time: "Saturday Afternoon",
    },
    {
      icon: Coffee,
      title: "Speaker Panel",
      description: "Hear from inspiring community members as they share insights and stories on topics that matter to us.",
      time: "Saturday Night",
    },
    {
      icon: Music,
      title: "ጓይላ Party",
      description: "Dance the night away at our traditional ጓይላ celebration—live music, cultural rhythms, and pure joy.",
      time: "Saturday Night",
    },
    {
      icon: Flame,
      title: "Flag Raising Ceremony",
      description: "Come together for a meaningful flag raising ceremony to honor our heritage and community spirit.",
      time: "Sunday Morning",
    },
    {
      icon: Flame,
      title: "Bonfire Stories",
      description: "Gather around the fire for storytelling, sharing wisdom, and building lasting connections under the stars.",
      time: "Friday & Saturday Night",
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
