import { Link } from "react-router-dom";
import { Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CTASection = () => {
  return (
    <section className="section-padding bg-navy-gradient relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Simplify Your{" "}
            <span className="text-gradient-gold">Tax Matters?</span>
          </h2>
          <p className="text-primary-foreground/80 text-lg mb-8 max-w-xl mx-auto">
            Get expert guidance for all your taxation and financial compliance needs. Book a free consultation today!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button variant="gold" size="xl" className="w-full sm:w-auto">
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Button>
            </Link>
            <a href="tel:+919082882276">
              <Button variant="outline-white" size="xl" className="w-full sm:w-auto">
                <Phone className="w-5 h-5" />
                Call: 90828 82276
              </Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
