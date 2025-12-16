import { Hand, Layers, Dumbbell, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import dryneedling from "@/assets/dry-needling.jpg";
import kinesio from "@/assets/kinesio-taping.jpg";
import cupping from "@/assets/cupping.jpg";

const Procedures = () => {
  const procedures = [
    {
      icon: Hand,
      title: "Dry Needling Therapy",
      description:
        "Dry needling is a precise and effective treatment for muscle pain and tightness. By inserting fine, sterile needles into trigger points (muscle knots), this technique helps to:",
      points: [
        "Relieve muscle tension and stiffness",
        "Reduce pain and inflammation",
        "Restore normal muscle function",
        "Accelerate recovery and boost performance",
      ],
      image: dryneedling,
    },
    {
      icon: Layers,
      title: "Kinesio Taping",
      description:
        "Kinesio taping supports muscles and joints while allowing full freedom of movement. The elastic tape works with the body’s natural motion, offering benefits such as:",
      points: [
        "Providing support without restricting mobility",
        "Reducing strain and fatigue in overused muscles",
        "Improving blood circulation and lymphatic drainage",
        "Speeding up recovery from injuries during training or competition",
      ],
      image: kinesio,
    },
    {
      icon: Dumbbell,
      title: "Cupping Therapy",
      description:
        "Cupping is a time-tested therapy that promotes healing through suction and improved blood flow. Ideal for athletes, it assists in:",
      points: [
        "Enhancing circulation in muscles and tissues",
        "Relieving soreness, stiffness, and deep muscle tension",
        "Breaking down adhesions for better mobility",
        "Supporting faster recovery after intense physical activity",
      ],
      image: cupping,
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground font-medium text-sm mb-6">
              Treatment Options
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Procedures Done at Our Clinic
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              At PhysioFit Clinic, we follow a scientific and holistic approach
              to athlete care. Using advanced physiotherapy techniques and
              evidence-based procedures, our goal is to reduce pain, accelerate
              recovery, and enhance overall athletic performance.
            </p>
          </div>
        </div>
      </section>

      {/* Procedures Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="space-y-16">
            {procedures.map((procedure, index) => (
              <div
                key={procedure.title}
                className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Left Content */}
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <procedure.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                      {procedure.title}
                    </h2>
                  </div>

                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {procedure.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {procedure.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>

                  {/* <Button variant="outline" asChild>
                    <Link to="/contact">
                      Learn More
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button> */}
                </div>

                {/* Right Image */}
                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="overflow-hidden rounded-2xl border border-border max-w-md mx-auto">
                    <img
                      src={procedure.image}
                      alt={procedure.title}
                      className="w-full h-80 object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center animate-fade-in">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Not Sure Which Procedure Is Right for You?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Schedule a consultation with our team. We'll assess your condition
              and recommend the most effective treatment plan for your unique
              needs.
            </p>
            <Button size="xl" variant="hero" asChild>
              <Link to="/contact">Book Free Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Procedures;
