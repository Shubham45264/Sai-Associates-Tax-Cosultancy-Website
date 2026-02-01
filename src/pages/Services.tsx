import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Calculator,
  FileText,
  Building2,
  CreditCard,
  Shield,
  FileCheck,
  Home,
  Briefcase,
  Umbrella,
  Scale,
  ArrowRight,
} from "lucide-react";

const services = [
  {
    icon: FileCheck,
    title: "Accounting Services",
    description:
      "Professional bookkeeping and accounting services tailored to your business needs. We maintain accurate financial records, prepare financial statements, and ensure your books are always audit-ready.",
    features: ["Bookkeeping", "Financial Statements", "Account Reconciliation", "Audit Support"],
  },
  {
    icon: Calculator,
    title: "Income Tax Return (ITR) Filing",
    description:
      "Expert ITR filing for individuals, professionals, and businesses. We ensure maximum tax savings through legitimate deductions and timely filing to avoid penalties.",
    features: ["Individual ITR", "Business ITR", "Tax Planning", "Refund Processing"],
  },
  {
    icon: FileText,
    title: "GST Registration & Returns",
    description:
      "Complete GST services including new registration, return filing (GSTR-1, GSTR-3B), and compliance management. Stay compliant with all GST regulations hassle-free.",
    features: ["GST Registration", "Monthly/Quarterly Returns", "Annual Returns", "GST Audit"],
  },
  {
    icon: CreditCard,
    title: "TDS Return Filing",
    description:
      "Accurate and timely TDS return filing to ensure compliance with tax regulations. We handle all aspects of TDS including calculations, deductions, and quarterly filings.",
    features: ["TDS Calculations", "Quarterly Filings", "TDS Certificates", "Compliance Review"],
  },
  {
    icon: Shield,
    title: "Digital Signature (DSC)",
    description:
      "Obtain Class 2 and Class 3 Digital Signature Certificates for secure online transactions, e-filing, and document signing. Quick processing and delivery.",
    features: ["Class 2 DSC", "Class 3 DSC", "USB Token", "Quick Processing"],
  },
  {
    icon: Building2,
    title: "ROC Filing & Compliance",
    description:
      "Complete company compliance services including annual filings, director KYC, company registration, and all ROC-related matters handled efficiently.",
    features: ["Annual Filing", "Director KYC", "Company Registration", "Compliance Calendar"],
  },
  {
    icon: Home,
    title: "Home Loan Assistance",
    description:
      "Get the best home loan deals with our expert assistance. We help you compare rates, prepare documentation, and liaise with banks for quick approvals.",
    features: ["Rate Comparison", "Documentation Support", "Bank Liaison", "Quick Processing"],
  },
  {
    icon: Briefcase,
    title: "Business Loan Assistance",
    description:
      "Secure business loans with competitive interest rates. We assist with loan applications, business projections, and documentation for smooth approvals.",
    features: ["Working Capital", "Term Loans", "Project Finance", "Documentation"],
  },
  {
    icon: Umbrella,
    title: "Insurance Services",
    description:
      "Comprehensive insurance advisory services including life insurance, health insurance, and business insurance to protect what matters most.",
    features: ["Life Insurance", "Health Insurance", "Business Insurance", "Claims Support"],
  },
  {
    icon: Scale,
    title: "Legal Compliances",
    description:
      "Stay compliant with all legal requirements including labor laws, shop act registration, professional tax, and other statutory compliances.",
    features: ["Shop Act", "Professional Tax", "Labor Compliance", "MSME Registration"],
  },
];

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-hero-pattern">
          <div className="container-custom px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-gold font-medium text-sm uppercase tracking-wider mb-3">
                Our Services
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Comprehensive{" "}
                <span className="text-gradient-gold">Financial Solutions</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                From tax filing to business loans, we offer complete financial services tailored to your needs.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid gap-8">
              {services.map((service, index) => (
                <div
                  key={index}
                  className="bg-card rounded-2xl p-6 lg:p-8 border border-border hover:border-gold/30 hover:shadow-lg transition-all"
                >
                  <div className="grid lg:grid-cols-[1fr,2fr,1fr] gap-6 items-center">
                    {/* Icon & Title */}
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 rounded-xl bg-navy/5 flex items-center justify-center shrink-0">
                        <service.icon className="w-8 h-8 text-navy" />
                      </div>
                      <div className="lg:hidden">
                        <h3 className="font-display text-xl font-semibold text-foreground">
                          {service.title}
                        </h3>
                      </div>
                    </div>

                    {/* Description */}
                    <div>
                      <h3 className="hidden lg:block font-display text-xl font-semibold text-foreground mb-3">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {service.features.map((feature, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* CTA */}
                    <div className="flex lg:justify-end">
                      <Link to="/contact">
                        <Button variant="outline-gold" className="w-full lg:w-auto">
                          Enquire Now
                          <ArrowRight className="w-4 h-4" />
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding bg-navy-gradient">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                We offer personalized services based on your specific requirements. Let's discuss how we can help.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="xl">
                  Get Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Services;
