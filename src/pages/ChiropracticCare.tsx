import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ChiropracticCare = () => {
  const benefits = [
    "Effective pain relief for back, neck, and joint issues",
    "Improved posture and spinal alignment",
    "Enhanced nervous system function",
    "Increased flexibility and range of motion",
    "Non-invasive and drug-free treatment",
    "Personalized care plans for lasting results",
    "Prevention of future injuries",
    "Better overall quality of life",
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground font-medium text-sm mb-6">
              Our Services
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Chiropractic Care
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Experience the natural path to pain relief and optimal health through our comprehensive chiropractic services.
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                What is Chiropractic Care?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Chiropractic care is a holistic, non-invasive approach to healthcare that focuses on the diagnosis, treatment, and prevention of musculoskeletal disorders, particularly those affecting the spine. Our skilled chiropractors use hands-on spinal manipulation and other alternative treatments to properly align the body's musculoskeletal structure.
                </p>
                <p>
                  The fundamental principle behind chiropractic care is that proper alignment of the body's structure, particularly the spine, enables the body to heal itself without surgery or medication. This approach addresses the root cause of pain and discomfort rather than just masking symptoms.
                </p>
                <p>
                  At HealthCare Clinic, we combine traditional chiropractic techniques with modern diagnostic tools to provide the most effective treatment for each patient's unique needs.
                </p>
              </div>
              <Button size="lg" className="mt-8" asChild>
                <Link to="/contact">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>

            {/* Benefits */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-gradient-subtle p-8 rounded-2xl border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Benefits of Chiropractic Care
                </h3>
                <ul className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-4 h-4 text-primary" />
                      </div>
                      <span className="text-foreground">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center animate-fade-in">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Healing Journey?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Take the first step towards a pain-free life. Our experienced chiropractors are here to help you achieve optimal health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" variant="hero" asChild>
                <Link to="/contact">Book Appointment</Link>
              </Button>
              <Button size="xl" variant="outline" asChild>
                <Link to="/procedures">View Procedures</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ChiropracticCare;
