import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground font-medium text-sm mb-6">
              Contact & Visit
            </span>

            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Visit Our Clinic
            </h1>

            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Get in touch with us or book your appointment online in just a few clicks.
            </p>

            <div className="mt-8 flex justify-center">
              <Button asChild size="lg" variant="hero">
                <Link to="/book-appointment">
                  Book Appointment Online
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-card">
        <div className="container-custom max-w-4xl">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Info */}
            <div className="space-y-8 animate-fade-in">
              <div>
                <h2 className="font-serif text-3xl font-bold text-foreground mb-4">
                  Clinic Information
                </h2>
                <p className="text-muted-foreground">
                  You can reach us using the details below or directly book an appointment online.
                </p>
              </div>

              {[
                {
                  icon: MapPin,
                  title: "Address",
                  content:
                    "Dr. Aditi’s PhysioFit Clinic: Shop no 20, Bansal Plaza, Ravet, Pune, Maharashtra 412101",
                  link: "https://maps.app.goo.gl/yVk26AiBeeyFdq5j6",
                },
                {
                  icon: Phone,
                  title: "Phone",
                  content: "+91 7219289369",
                  link: "tel:+917219289369",
                },
                {
                  icon: Mail,
                  title: "Email",
                  content: "aditikulkarni2205@gmail.com",
                  link: "mailto:aditikulkarni2205@gmail.com",
                },
                {
                  icon: Clock,
                  title: "Hours",
                  content: (
                    <>
                      Mon – Sat:
                      <br />
                      Morning: 10:00 AM – 01:00 PM
                      <br />
                      Evening: 05:00 PM – 09:00 PM
                      <br />
                      Sunday: Closed
                    </>
                  ),
                },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground mb-1">
                      {item.title}
                    </h3>
                    {item.link ? (
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-smooth whitespace-pre-line"
                      >
                        {item.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground whitespace-pre-line">
                        {item.content}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="rounded-2xl overflow-hidden border border-border shadow-card animate-fade-in">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.378623882226!2d73.754675!3d18.6441493!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b1b91726d477%3A0x62fa68e482662b2d!2sDr.%20Aditi%E2%80%99s%20PhysioFit%20Clinic!5e0!3m2!1sen!2sin!4v1733740000000"
                width="100%"
                height="350"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. Aditi’s PhysioFit Clinic Location"
              />
            </div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
