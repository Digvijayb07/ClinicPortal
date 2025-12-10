import { Check, ArrowRight, Users, Activity, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

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
              Get back in the game with our specialized sports rehabilitation programs designed to help athletes of all levels recover, rebuild, and return stronger.
            </p>
          </div>
        </div>
      </section>

      {/* Description Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <div className="animate-fade-in">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
                Comprehensive Sports Injury Rehabilitation
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed text-center mb-12">
                <p>
                  Sports injuries can be frustrating and challenging, but with the right care and rehabilitation, you can return to the activities you love. Our Sports & Return to Sports Rehabilitation program combines cutting-edge techniques with personalized treatment plans to help you recover safely and effectively.
                </p>
                <p>
                  Whether you're dealing with an acute injury, recovering from surgery, or managing a chronic condition that's affecting your performance, our team of specialists will work with you every step of the way to ensure a complete and lasting recovery.
                </p>
              </div>
            </div>

            {/* Three Pillars */}
            <div className="grid md:grid-cols-3 gap-6 mb-16">
              {[
                {
                  icon: Users,
                  title: "Expert Assessment",
                  description: "Comprehensive evaluation by sports medicine specialists to understand your injury and goals.",
                },
                {
                  icon: Activity,
                  title: "Progressive Rehabilitation",
                  description: "Structured programs that gradually build strength, flexibility, and sport-specific skills.",
                },
                {
                  icon: Target,
                  title: "Return-to-Sport Protocol",
                  description: "Criteria-based progression ensuring you're fully ready to return to your activity.",
                },
              ].map((item, index) => (
                <div
                  key={item.title}
                  className="text-center p-6 rounded-2xl bg-gradient-subtle border border-border animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <item.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Is It For Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Who Is This Program For?
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                Our sports rehabilitation program is designed for anyone who wants to return to an active lifestyle after an injury. No matter your age or skill level, we're here to help you get back to doing what you love.
              </p>
              <ul className="space-y-4">
                {whoIsItFor.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="bg-card p-8 rounded-2xl shadow-card border border-border">
                <h3 className="font-serif text-2xl font-bold text-foreground mb-6">
                  Our Treatment Approach
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    <strong className="text-foreground">Phase 1: Acute Care</strong> — Focus on reducing pain, swelling, and protecting the injured area while maintaining overall fitness.
                  </p>
                  <p>
                    <strong className="text-foreground">Phase 2: Rehabilitation</strong> — Progressive exercises to restore range of motion, strength, and neuromuscular control.
                  </p>
                  <p>
                    <strong className="text-foreground">Phase 3: Sport-Specific Training</strong> — Advanced exercises and drills that mimic the demands of your specific sport.
                  </p>
                  <p>
                    <strong className="text-foreground">Phase 4: Return to Play</strong> — Gradual return to competition with ongoing monitoring and support.
                  </p>
                </div>
                <Button size="lg" className="mt-8 w-full" asChild>
                  <Link to="/contact">
                    Start Your Recovery
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default SportsRehab;
