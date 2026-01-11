import { Phone, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4 text-gold">
              Eritrean Summer Retreat
            </h3>
            <p className="font-body text-background/70 leading-relaxed mb-6">
              Bringing our community together to celebrate culture, build connections, 
              and create lasting memories.
            </p>
            <div className="flex gap-4">
              <a 
                href="https://www.instagram.com/dehai.retreat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-background/10 rounded-full flex items-center justify-center hover:bg-gold/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-3 font-body">
              <li>
                <a href="#about" className="text-background/70 hover:text-gold transition-colors">
                  About the Event
                </a>
              </li>
              <li>
                <a href="#schedule" className="text-background/70 hover:text-gold transition-colors">
                  Schedule
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-background/70 hover:text-gold transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-4 font-body">
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-gold" />
                <a href="tel:+17034036971" className="text-background/70 hover:text-gold transition-colors">
                  (703) 403-6971
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Instagram className="w-5 h-5 text-gold" />
                <a 
                  href="https://www.instagram.com/dehai.retreat?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-background/70 hover:text-gold transition-colors"
                >
                  @dehai.retreat
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/10 pt-8 text-center">
          <p className="font-body text-background/50 text-sm">
            © 2026 Eritrean Summer Retreat. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
