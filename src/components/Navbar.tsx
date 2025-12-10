import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import eritreanFlag from "@/assets/eritrean-flag.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Schedule", href: "#schedule" },
    { label: "Testimonials", href: "#testimonials" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-background/95 backdrop-blur-md shadow-md py-4" 
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img 
              src={eritreanFlag} 
              alt="Eritrean Flag" 
              className="w-8 h-5 md:w-10 md:h-6 object-cover rounded-sm shadow-sm"
            />
            <span 
              className={`font-display text-xl md:text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? "text-foreground" : "text-cream"
              }`}
            >
              Dehai<span className="text-gold">Retreat</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-body text-sm font-medium transition-colors duration-300 hover:text-gold ${
                  isScrolled ? "text-foreground" : "text-cream"
                }`}
              >
                {link.label}
              </a>
            ))}
            <Link
              to="/gallery"
              className={`font-body text-sm font-medium transition-colors duration-300 hover:text-gold ${
                isScrolled ? "text-foreground" : "text-cream"
              }`}
            >
              Gallery
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-cream"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? "text-foreground" : "text-cream"}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border/20">
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`font-body text-sm font-medium transition-colors ${
                    isScrolled ? "text-foreground" : "text-cream"
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <Link
                to="/gallery"
                className={`font-body text-sm font-medium transition-colors ${
                  isScrolled ? "text-foreground" : "text-cream"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Gallery
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
