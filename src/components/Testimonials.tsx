import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "This retreat reminded me why our community is so special. The connections I made will last a lifetime.",
      name: "Miriam Tesfay",
      role: "Seattle, WA",
    },
    {
      quote: "My children got to experience our culture in such a beautiful setting. They still talk about it every day!",
      name: "Samuel Haile",
      role: "Denver, CO",
    },
    {
      quote: "The food, the music, the people—everything was perfect. I felt truly at home surrounded by family.",
      name: "Helen Berhe",
      role: "Los Angeles, CA",
    },
  ];

  return (
    <section className="py-24 bg-primary text-primary-foreground overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-gold font-body tracking-widest uppercase text-sm mb-4">
            From Our Community
          </p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Voices of the Retreat
          </h2>
          <p className="font-body text-primary-foreground/80 text-lg">
            Hear from those who have experienced the magic of our gatherings.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="relative bg-primary-foreground/5 backdrop-blur-sm rounded-2xl p-8 border border-primary-foreground/10"
            >
              <Quote className="w-10 h-10 text-gold/60 mb-4" />
              <p className="font-body text-lg text-primary-foreground/90 leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gold/20 rounded-full flex items-center justify-center">
                  <span className="font-display text-lg text-gold font-semibold">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-body font-semibold text-primary-foreground">
                    {testimonial.name}
                  </p>
                  <p className="font-body text-sm text-primary-foreground/60">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
