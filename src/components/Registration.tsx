import { Calendar, MapPin } from "lucide-react";

const Registration = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-primary font-body tracking-widest uppercase text-sm mb-4">
            Join Us
          </p>
          <h2 className="font-display text-3xl md:text-5xl text-foreground font-bold mb-6">
            Event Details
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            This is a free community event. All are welcome to join us for a memorable weekend.
          </p>
        </div>

        {/* Event Details Summary */}
        <div className="max-w-4xl mx-auto bg-secondary/50 rounded-2xl p-8 md:p-12">
          <div className="grid sm:grid-cols-2 gap-8 text-center max-w-2xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <Calendar className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-display text-lg text-foreground font-semibold mb-1">When</h4>
              <p className="font-body text-muted-foreground text-sm">June 19th, 2026</p>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-14 h-14 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                <MapPin className="w-7 h-7 text-primary" />
              </div>
              <h4 className="font-display text-lg text-foreground font-semibold mb-1">Where</h4>
              <p className="font-body text-muted-foreground text-sm">Cedar Lakes Conference Center</p>
              <p className="font-body text-muted-foreground text-sm">82 FFA Dr, Ripley, WV 25271</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Registration;
