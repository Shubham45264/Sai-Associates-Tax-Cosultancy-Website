import { useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  /* CONTACT FORM STATE */
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  /* CAREER FORM STATE */
  const [careerData, setCareerData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    message: "",
  });

  /* HANDLERS */
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleCareerChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCareerData({ ...careerData, [e.target.name]: e.target.value });
  };

  /* CONTACT FORM SUBMIT → EMAIL */
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formData.name || !formData.phone || !formData.message) {
      toast({
        title: "Please fill all required fields",
        description: "Name, phone, and message are required.",
        variant: "destructive",
      });
      setIsSubmitting(false);
      return;
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const res = await fetch(`${apiUrl}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error();

      toast({
        title: "Message Sent Successfully!",
        description: "We will get back to you within 24 hours.",
      });

      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* CAREER FORM SUBMIT → EMAIL */
  const handleCareerSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!careerData.name || !careerData.phone || !careerData.position) {
      toast({
        title: "Please fill all required fields",
        description: "Name, phone & position are required.",
        variant: "destructive",
      });
      return;
    }

    try {
      const apiUrl = import.meta.env.VITE_API_URL || "http://localhost:5000";
      const res = await fetch(`${apiUrl}/api/career`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(careerData),
      });

      if (!res.ok) throw new Error();

      toast({
        title: "Application Submitted!",
        description: "Our team will contact you if shortlisted.",
      });

      setCareerData({
        name: "",
        email: "",
        phone: "",
        position: "",
        message: "",
      });
    } catch {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["90828 82276", "84250 29286"],
      action: "tel:+919082882276",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@saiassociatestax.com"],
      action: "mailto:info@saiassociatestax.com",
    },
    {
      icon: MapPin,
      title: "Address",
      details: [
        "Shop No. 21, Aum Shree CHS,",
        "Plot No. 04, Sector 5,",
        "Opp. Mukambika Temple,",
        "Ghansoli, Navi Mumbai – 400701",
      ],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: ["Mon - Sat: 10:00 AM - 7:00 PM", "Sunday: Closed"],
    },
  ];

  return (
    <div className="min-h-screen">
      <Header />

      <main>
        {/* HERO */}
        <section className="pt-32 pb-16 bg-hero-pattern text-center">
          <h1 className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
            Get in <span className="text-gradient-gold">Touch</span>
          </h1>
        </section>

        {/* CONTENT */}
        <section className="section-padding bg-background">
          <div className="container-custom">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">

              {/* LEFT COLUMN */}
              <div className="space-y-12">

                {/* CONTACT FORM */}
                <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border shadow-lg">
                  <h2 className="font-display text-2xl font-bold mb-6">
                    Send Us a Message
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    <Input name="name" placeholder="Full Name *" value={formData.name} onChange={handleChange} />
                    <Input name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                    <Input name="phone" placeholder="Phone *" value={formData.phone} onChange={handleChange} />
                    <Textarea name="message" placeholder="Message *" rows={5} value={formData.message} onChange={handleChange} />
                    <Button type="submit" className="w-full" disabled={isSubmitting}>
                      Send Message <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </div>

                {/* CAREER FORM */}
                <div className="bg-card rounded-2xl p-6 lg:p-8 border border-border shadow-lg">
                  <h2 className="font-display text-2xl font-bold mb-6">
                    Join Our Team
                  </h2>

                  <form onSubmit={handleCareerSubmit} className="space-y-5">
                    <Input name="name" placeholder="Full Name *" value={careerData.name} onChange={handleCareerChange} />
                    <Input name="email" placeholder="Email" value={careerData.email} onChange={handleCareerChange} />
                    <Input name="phone" placeholder="Phone *" value={careerData.phone} onChange={handleCareerChange} />
                    <Input name="position" placeholder="Position Interested In *" value={careerData.position} onChange={handleCareerChange} />
                    <Textarea name="message" placeholder="Tell us about yourself" rows={4} value={careerData.message} onChange={handleCareerChange} />
                    <Button type="submit" className="w-full">
                      Apply Now <Send className="ml-2 w-4 h-4" />
                    </Button>
                  </form>
                </div>

              </div>

              {/* RIGHT COLUMN */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="bg-card rounded-xl p-6 border border-border">
                    <div className="flex gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-gold" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{info.title}</h3>
                        {info.details.map((d, i) => (
                          <p key={i} className="text-muted-foreground">{d}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}

                {/* GOOGLE MAP */}
                <div className="bg-card rounded-xl overflow-hidden border border-border">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.5599!2d73.0095!3d19.1163!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c125cc88b1f1%3A0x8e12a9ba6a89f788!2sGhansoli%2C%20Navi%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1234567890"
                    width="100%"
                    height="250"
                    style={{ border: 0 }}
                    loading="lazy"
                    allowFullScreen
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sai Associates Location"
                  />
                </div>

              </div>

            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default Contact;
