import { Check, ArrowRight, Users, Activity, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import sportrehab from "@/assets/sportrehab.jpg";

const SportsRehab = () => {
  const whoIsItFor = [
    "Professional and amateur athletes recovering from injuries",
    "Weekend warriors dealing with sports-related strains",
    "Individuals returning to physical activity after surgery",
    "Active adults wanting to prevent future injuries",
    "Young athletes needing specialized pediatric sports care",
    "Seniors looking to maintain an active lifestyle",
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
              Sports & Return to Sports Rehabilitation
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Get back in the game with our specialized sports rehabilitation
              programs designed to help athletes of all levels recover, rebuild,
              and return stronger.
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
                What is Sports & Return to Sports Rehabilitation?
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Led by Dr. Aditi Kulkarni (Sports & Orthopaedic
                  Physiotherapist, Chiropractor, Gold Medalist)
                </p>
                <p>
                  Our rehabilitation program helps athletes recover fully and
                  return stronger to their sport. We focus on:
                </p>
                <ul className="list-disc list-inside mt-4 space-y-1">
                  <li>Tailored strength & conditioning programs</li>
                  <li>Correcting biomechanical links and muscle imbalances</li>
                  <li>Posture correction & body alignment</li>
                  <li>Enhancing agility, power, strength, and reaction time</li>
                </ul>
                <p>
                  Ensuring a safe return to sports while preventing future
                  injuries.
                </p>
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
                  src={sportrehab}
                  alt="Sports Rehabilitation Therapy"
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
              Take the first step towards a strong, pain-free recovery. Our sports rehabilitation experts help you heal faster, regain mobility, and return to peak performance safely.

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

export default SportsRehab;
