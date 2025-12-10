import { Flame, TreePine, UtensilsCrossed, Coffee, Music, Flag } from "lucide-react";

const Schedule = () => {
  const schedule = [
    {
      day: "Friday",
      date: "June 19th",
      events: [
        {
          icon: Flame,
          time: "Evening",
          title: "Bonfire Stories",
          description: "Gather around the fire for storytelling, sharing wisdom, and building lasting connections under the stars.",
        },
      ],
    },
    {
      day: "Saturday",
      date: "June 20th",
      events: [
        {
          icon: TreePine,
          time: "Morning",
          title: "Group Morning Hike",
          description: "Start the day with an energizing group hike through scenic trails, breathing in fresh mountain air together.",
        },
        {
          icon: UtensilsCrossed,
          time: "Afternoon",
          title: "Community Barbeque",
          description: "Enjoy delicious food and refreshing drinks at our community barbeque—a time to eat, laugh, and connect.",
        },
        {
          icon: Coffee,
          time: "Evening",
          title: "Speaker Panel",
          description: "Hear from inspiring community members as they share insights and stories on topics that matter to us.",
        },
        {
          icon: Music,
          time: "Night",
          title: "ጓይላ Party",
          description: "Dance the night away at our traditional ጓይላ celebration—live music, cultural rhythms, and pure joy.",
        },
        {
          icon: Flame,
          time: "Late Night",
          title: "Bonfire Stories",
          description: "Wind down the evening with more stories and connections around the fire.",
        },
      ],
    },
    {
      day: "Sunday",
      date: "June 21st",
      events: [
        {
          icon: Flag,
          time: "Morning",
          title: "Flag Raising Ceremony",
          description: "Come together for a meaningful flag raising ceremony to honor our heritage and community spirit.",
        },
      ],
    },
  ];

  return (
    <section className="py-24 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-body tracking-widest uppercase text-sm mb-4">
            Weekend Itinerary
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground font-bold mb-6">
            Schedule
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Three days of celebration, connection, and unforgettable memories.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {schedule.map((day) => (
            <div key={day.day} className="relative">
              {/* Day Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="bg-primary text-primary-foreground px-4 py-2 rounded-lg">
                  <h3 className="font-display text-xl font-bold">{day.day}</h3>
                  <p className="font-body text-sm opacity-90">{day.date}</p>
                </div>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Events Timeline */}
              <div className="space-y-4 pl-4 border-l-2 border-primary/30">
                {day.events.map((event, index) => (
                  <div
                    key={`${day.day}-${index}`}
                    className="relative pl-6 pb-4 last:pb-0"
                  >
                    {/* Timeline dot */}
                    <div className="absolute -left-[9px] top-0 w-4 h-4 bg-primary rounded-full border-2 border-background" />
                    
                    {/* Event Card */}
                    <div className="bg-card rounded-xl p-5 border border-border hover:shadow-md transition-shadow">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <event.icon className="w-5 h-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-xs font-body text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                              {event.time}
                            </span>
                          </div>
                          <h4 className="font-display text-lg text-foreground font-semibold mb-1">
                            {event.title}
                          </h4>
                          <p className="font-body text-muted-foreground text-sm leading-relaxed">
                            {event.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Schedule;
