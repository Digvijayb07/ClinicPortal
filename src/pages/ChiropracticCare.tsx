import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import chiro from "@/assets/chiro.jpg";

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
              Experience the natural path to pain relief and optimal health
              through our comprehensive chiropractic services.
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
                  Led by Dr. Aditi Kulkarni (Sports & Orthopaedic
                  Physiotherapist, Chiropractor, Gold Medalist)
                </p>
                <p>
                  Our chiropractic services restore balance and alignment in the
                  spine and musculoskeletal system. Benefits include:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-1">
                  <li>Relief from pain & stiffness</li>
                  <li>Correction of spinal misalignments</li>
                  <li>Improved posture & flexibility</li>
                  <li>Enhanced nervous system function</li>
                </ul>
              </div>
              <Button size="lg" className="mt-8" asChild>
                <Link to="/contact">
                  Schedule Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3"></div>
                <img
                  src={chiro}
                  alt="Chiropractic Care"
                  className="relative rounded-3xl shadow-elegant w-full max-w-md object-cover"
                />
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
              Take the first step towards a pain-free life. Our experienced
              chiropractors are here to help you achieve optimal health.
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
