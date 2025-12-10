import { Hand, Layers, Dumbbell, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Procedures = () => {
  const procedures = [
    {
      icon: Hand,
      title: "Manual Therapy Technique",
      description:
        "Manual therapy involves skilled, hands-on techniques used to diagnose and treat soft tissues and joint structures. Our certified therapists use various manual techniques to reduce pain, increase range of motion, and promote tissue healing.",
      details: [
        "Joint mobilization and manipulation",
        "Muscle energy techniques",
        "Neural mobilization",
        "Myofascial release",
      ],
    },
    {
      icon: Layers,
      title: "Soft Tissue Mobilization",
      description:
        "Soft tissue mobilization is a form of manual physical therapy where our therapists use hands-on techniques on your muscles, ligaments, and fascia to break adhesions and optimize muscle function. This technique helps relieve muscle tension and restore normal texture to muscle tissue.",
      details: [
        "Deep tissue massage",
        "Instrument-assisted soft tissue mobilization",
        "Active release techniques",
        "Trigger point therapy",
      ],
    },
    {
      icon: Dumbbell,
      title: "Corrective Exercise Program",
      description:
        "Our corrective exercise programs are designed to address movement dysfunctions and muscle imbalances that contribute to pain and injury. Through targeted exercises, we help retrain your body to move more efficiently and prevent future problems.",
      details: [
        "Functional movement assessment",
        "Personalized exercise prescription",
        "Core stabilization training",
        "Postural correction exercises",
      ],
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
              Our Procedures
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              We offer a comprehensive range of evidence-based procedures designed to address your specific needs and help you achieve lasting results.
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
                className={`grid lg:grid-cols-2 gap-12 items-center animate-fade-in ${
                  index % 2 === 1 ? "lg:flex-row-reverse" : ""
                }`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <procedure.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground">
                      {procedure.title}
                    </h2>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {procedure.description}
                  </p>
                  <Button variant="outline" asChild>
                    <Link to="/contact">
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="bg-gradient-subtle p-8 rounded-2xl border border-border">
                    <h3 className="font-semibold text-lg text-foreground mb-4">
                      What's Included:
                    </h3>
                    <ul className="space-y-3">
                      {procedure.details.map((detail) => (
                        <li key={detail} className="flex items-center gap-3">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span className="text-muted-foreground">{detail}</span>
                        </li>
                      ))}
                    </ul>
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
              Schedule a consultation with our team. We'll assess your condition and recommend the most effective treatment plan for your unique needs.
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
