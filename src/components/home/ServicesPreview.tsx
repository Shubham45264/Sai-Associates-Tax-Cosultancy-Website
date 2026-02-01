import { Link } from "react-router-dom";
import { ArrowRight, Calculator, FileText, Building2, CreditCard, Shield, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

const services = [
  {
    icon: Calculator,
    title: "Income Tax Filing",
    description: "Expert ITR filing services for individuals, professionals, and businesses with maximum tax savings.",
  },
  {
    icon: FileText,
    title: "GST Services",
    description: "Complete GST registration, monthly/quarterly returns filing, and compliance management.",
  },
  {
    icon: Building2,
    title: "Business Loans",
    description: "Assistance in securing business and home loans with best interest rates from leading banks.",
  },
  {
    icon: CreditCard,
    title: "TDS Returns",
    description: "Accurate TDS return filing and compliance to avoid penalties and ensure smooth operations.",
  },
  {
    icon: Shield,
    title: "ROC Compliance",
    description: "Company registration, annual filings, and complete ROC compliance services.",
  },
  {
    icon: FileCheck,
    title: "Accounting",
    description: "Professional bookkeeping and accounting services tailored to your business needs.",
  },
];

const ServicesPreview = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-16">
          <span className="inline-block text-gold font-medium text-sm uppercase tracking-wider mb-3">
            What We Offer
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Comprehensive Tax Solutions
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From individual tax returns to complete business compliance, we provide end-to-end financial services.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-card rounded-xl p-6 lg:p-8 border border-border card-hover hover:border-gold/30"
            >
              <div className="w-14 h-14 rounded-xl bg-navy/5 flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors">
                <service.icon className="w-7 h-7 text-navy group-hover:text-gold transition-colors" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-gold font-medium text-sm group-hover:gap-3 transition-all"
              >
                Learn More
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Link to="/services">
            <Button variant="default" size="lg">
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;
