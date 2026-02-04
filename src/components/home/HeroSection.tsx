import { ArrowRight, Shield, Award, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-hero-pattern pt-20">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gold/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-20 w-60 h-60 bg-gold/5 rounded-full blur-3xl" />
      </div>

      <div className="container-custom relative z-10 px-4 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-2 mb-6">
              <Shield className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">
                Trusted Tax Experts Since Years
              </span>
            </div>

            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
              Your Partner in{" "}
              <span className="text-gradient-gold">Tax Excellence</span>
            </h1>

            <p className="text-primary-foreground/80 text-lg md:text-xl mb-8 max-w-xl mx-auto lg:mx-0">
              Professional tax consultation, GST filing, accounting services, and financial compliance solutions for individuals and businesses.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/contact">
                <Button variant="gold" size="xl" className="w-full sm:w-auto">
                  Free Consultation
                  <ArrowRight className="w-5 h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline-white" size="xl" className="w-full sm:w-auto">
                  Our Services
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mt-12">
              {[
                { icon: Users, label: "500+ Clients", sublabel: "Served" },
                { icon: Award, label: "10+ Years", sublabel: "Experience" },
                { icon: Shield, label: "100%", sublabel: "Compliance" },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-gold" />
                  </div>
                  <div className="text-left">
                    <p className="text-primary-foreground font-semibold">{item.label}</p>
                    <p className="text-primary-foreground/60 text-sm">{item.sublabel}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Visual Element */}
          <div className="hidden lg:flex justify-center items-center">
            <div className="relative">
              
              {/* Main Card */}
              <div className="w-80 h-96 bg-card rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="h-full flex flex-col justify-between">
                  
                  <div>
                    {/* ✅ LOGO – FINAL MANAGED LOOK */}
                    <div className="mb-6">
  <img
    src="/Sai associates logo.png"
    alt="Sai Associates Tax Consultancy"
    className="w-16 h-16 object-contain"
  />
</div>


                    <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                      Sai Associates
                    </h3>
                    <p className="text-muted-foreground">Tax Consultant</p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                      ITR Filing
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                      GST Services
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-2 h-2 rounded-full bg-gold" />
                      Business Loans
                    </div>
                  </div>

                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 bg-gold text-navy-dark px-4 py-2 rounded-full font-semibold text-sm shadow-gold animate-float">
                ⭐ Trusted Expert
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
