import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Services", path: "/services" },
  { name: "Contact", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-primary/95 backdrop-blur-md shadow-lg">
      <div className="container-custom">
        <nav className="flex items-center justify-between h-20 px-4 lg:px-8">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img
              src="/Sai associates logo.png"
              alt="Sai Associates Tax Consultant Logo"
              className="h-10 w-auto object-contain"
            />
            <div className="flex flex-col">
              <span className="text-primary-foreground font-display font-semibold text-lg leading-tight">
                Sai Associates
              </span>
              <span className="text-primary-foreground/70 text-xs">
                Tax Consultancy
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant="nav"
                  className={
                    isActive(link.path)
                      ? "text-gold bg-primary-foreground/10"
                      : ""
                  }
                >
                  {link.name}
                </Button>
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+919082882276">
              <Button variant="gold" size="lg" className="gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </Button>
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-primary-foreground p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border animate-slide-up">
            <div className="flex flex-col p-4 gap-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Button
                    variant="nav-mobile"
                    className={`w-full ${
                      isActive(link.path)
                        ? "bg-muted text-gold"
                        : ""
                    }`}
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
              <a href="tel:+919082882276" className="mt-2">
                <Button variant="gold" className="w-full gap-2">
                  <Phone className="w-4 h-4" />
                  Call Now
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
