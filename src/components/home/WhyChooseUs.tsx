import { CheckCircle2, Clock, Users, Award, Headphones, ShieldCheck } from "lucide-react";

const reasons = [
  {
    icon: Award,
    title: "Expert Knowledge",
    description: "Deep expertise in tax laws, GST regulations, and financial compliance with years of experience.",
  },
  {
    icon: Clock,
    title: "Timely Filing",
    description: "We ensure all your returns are filed well before deadlines, avoiding penalties and interest.",
  },
  {
    icon: Users,
    title: "Personalized Service",
    description: "Tailored solutions based on your unique financial situation and business requirements.",
  },
  {
    icon: Headphones,
    title: "Dedicated Support",
    description: "Get prompt assistance and guidance whenever you need it, throughout the year.",
  },
  {
    icon: ShieldCheck,
    title: "Complete Compliance",
    description: "Stay 100% compliant with all tax laws and regulations with our comprehensive services.",
  },
  {
    icon: CheckCircle2,
    title: "Transparent Pricing",
    description: "No hidden charges. Clear and competitive pricing for all our services.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="section-padding bg-muted/50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div>
            <span className="inline-block text-gold font-medium text-sm uppercase tracking-wider mb-3">
              Why Choose Us
            </span>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Your Trusted Partner for{" "}
              <span className="text-gradient-gold">Financial Success</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              At Sai Associates, we combine professional expertise with personalized attention to deliver exceptional tax and financial services. Our commitment to accuracy, timeliness, and client satisfaction sets us apart.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {[
                { value: "500+", label: "Happy Clients" },
                { value: "10+", label: "Years Experience" },
                { value: "100%", label: "Satisfaction" },
              ].map((stat, index) => (
                <div key={index} className="text-center lg:text-left">
                  <p className="font-display text-3xl lg:text-4xl font-bold text-gold mb-1">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-5 border border-border hover:border-gold/30 hover:shadow-md transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <reason.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{reason.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
