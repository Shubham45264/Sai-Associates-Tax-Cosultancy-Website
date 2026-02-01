import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gold flex items-center justify-center">
                <span className="text-navy-dark font-bold text-xl font-display">S</span>
              </div>
              <div className="flex flex-col">
                <span className="font-display font-semibold text-lg leading-tight">
                  Sai Associates
                </span>
                <span className="text-primary-foreground/70 text-xs">
                  Tax Consultant
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed">
              Your trusted partner for all taxation, accounting, and financial compliance needs.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-gold">
              Quick Links
            </h4>
            <ul className="space-y-2">
              {["Home", "About", "Services", "Contact"].map((link) => (
                <li key={link}>
                  <Link
                    to={link === "Home" ? "/" : `/${link.toLowerCase()}`}
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-gold">
              Services
            </h4>
            <ul className="space-y-2">
              {[
                "Income Tax Filing",
                "GST Registration",
                "TDS Returns",
                "Business Loans",
              ].map((service) => (
                <li key={service}>
                  <Link
                    to="/services"
                    className="text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4 text-gold">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+919082882276"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>90828 82276 / 84250 29286</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@saiassociatestax.com"
                  className="flex items-start gap-3 text-primary-foreground/70 hover:text-gold transition-colors text-sm"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>info@saiassociatestax.com</span>
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 text-primary-foreground/70 text-sm">
                  <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>
                    Shop No. 21, Aum Shree CHS, Ghansoli, Navi Mumbai – 400701
                  </span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm text-center md:text-left">
            © {currentYear} Sai Associates. All rights reserved.
          </p>
          <p className="text-primary-foreground/60 text-sm">
            Proprietor: <span className="text-gold">Vinayak M. Dhas</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
