import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { CheckCircle2, Target, Heart, Award, ArrowRight } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 bg-hero-pattern">
          <div className="container-custom px-4 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block text-gold font-medium text-sm uppercase tracking-wider mb-3">
                About Us
              </span>
              <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground mb-6">
                Your Trusted Partner in{" "}
                <span className="text-gradient-gold">Financial Excellence</span>
              </h1>
              <p className="text-primary-foreground/80 text-lg">
                Dedicated to providing comprehensive tax and financial services with integrity and expertise.
              </p>
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Story */}
              <div>
                <span className="inline-block text-gold font-medium text-sm uppercase tracking-wider mb-3">
                  Our Story
                </span>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Building Trust Through Excellence
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Sai Associates was founded with a simple mission: to make tax compliance simple, 
                    stress-free, and accessible for everyone. Over the years, we have grown from a 
                    small consultancy to a trusted name in tax and financial services in Navi Mumbai.
                  </p>
                  <p>
                    Under the leadership of <strong className="text-foreground">Vinayak M. Dhas</strong>, 
                    our team brings together deep expertise in taxation, accounting, and financial 
                    compliance. We take pride in our commitment to accuracy, timeliness, and client satisfaction.
                  </p>
                  <p>
                    Located in the heart of Ghansoli, we serve clients ranging from salaried 
                    individuals to small businesses and startups, helping them navigate the 
                    complex world of taxation and compliance with ease.
                  </p>
                </div>
              </div>

              {/* Consultant Profile */}
              <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-20 h-20 rounded-xl bg-navy flex items-center justify-center">
                    <span className="text-gold font-display font-bold text-3xl">V</span>
                  </div>
                  <div>
                    <h3 className="font-display text-2xl font-bold text-foreground">
                      Vinayak M. Dhas
                    </h3>
                    <p className="text-gold font-medium">Proprietor & Tax Consultant</p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-6">
                  With extensive experience in taxation and financial consulting, Vinayak brings 
                  a wealth of knowledge and a client-first approach to every engagement. His 
                  expertise spans income tax, GST, company compliance, and loan assistance.
                </p>
                <div className="space-y-3">
                  {[
                    "Expert in Income Tax & GST",
                    "ROC Compliance Specialist",
                    "Loan Consultation Expert",
                    "Client-Focused Approach",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-gold shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section className="section-padding bg-muted/50">
          <div className="container-custom">
            <div className="text-center mb-12">
              <span className="inline-block text-gold font-medium text-sm uppercase tracking-wider mb-3">
                Our Foundation
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
                Mission & Values
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Target,
                  title: "Our Mission",
                  description:
                    "To simplify taxation and financial compliance for individuals and businesses, enabling them to focus on what matters most – their growth and success.",
                },
                {
                  icon: Heart,
                  title: "Our Values",
                  description:
                    "Integrity, accuracy, and client satisfaction form the core of everything we do. We believe in building lasting relationships through trust and transparency.",
                },
                {
                  icon: Award,
                  title: "Our Promise",
                  description:
                    "We promise timely service, expert guidance, and personalized attention to every client, regardless of the size of their business or complexity of their needs.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 border border-border text-center"
                >
                  <div className="w-16 h-16 rounded-xl bg-gold/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-gold" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-4">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-navy-gradient">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
                Let's Work Together
              </h2>
              <p className="text-primary-foreground/80 text-lg mb-8">
                Ready to experience stress-free tax compliance? Get in touch today.
              </p>
              <Link to="/contact">
                <Button variant="gold" size="xl">
                  Contact Us
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

export default About;
