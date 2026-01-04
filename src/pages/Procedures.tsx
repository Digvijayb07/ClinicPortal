import { Hand, Layers, Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion, Variants } from "framer-motion";
import { Helmet } from "react-helmet-async";
import dryneedling from "@/assets/dry-needling.jpg";
import kinesio from "@/assets/kinesio-taping.jpg";
import cupping from "@/assets/cupping.jpg";

/* ---------------- ANIMATION CONFIG ---------------- */

const viewport = { once: true, margin: "-120px" };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const slideLeftLong: Variants = {
  hidden: { opacity: 0, x: -120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const slideRightLong: Variants = {
  hidden: { opacity: 0, x: 120 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1, ease: [0.25, 0.8, 0.25, 1] },
  },
};

/* ---------------- PAGE ---------------- */

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
        "Kinesio taping supports muscles and joints while allowing full freedom of movement.",
      points: [
        "Providing support without restricting mobility",
        "Reducing strain and fatigue",
        "Improving blood circulation",
        "Speeding up recovery",
      ],
      image: kinesio,
    },
    {
      icon: Dumbbell,
      title: "Cupping Therapy",
      description:
        "Cupping is a time-tested therapy that promotes healing through suction.",
      points: [
        "Enhancing circulation",
        "Relieving deep muscle tension",
        "Improving mobility",
        "Supporting faster recovery",
      ],
      image: cupping,
    },
  ];

  return (
    <main className="pt-20 overflow-hidden">
      <Helmet>
        <title>Physiotherapy Treatments & Procedures | Dr. Aditi PhysioFit</title>
        <meta
          name="description"
          content="Explore physiotherapy procedures including dry needling, kinesio taping, pain management and rehabilitation at PhysioFit Clinic, Ravet."
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm mb-6">
              Treatment Options
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Procedures Done at Our Clinic
            </h1>
            <p className="text-xl text-primary-foreground/80">
              Evidence-based physiotherapy techniques designed to reduce pain
              and improve performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= PROCEDURES ================= */}
      <section className="section-padding bg-card">
        <div className="container-custom space-y-24">
          {procedures.map((procedure, index) => {
            const isReverse = index % 2 === 1;

            return (
              <motion.div
                key={procedure.title}
                variants={isReverse ? slideRightLong : slideLeftLong}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div className={isReverse ? "lg:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center">
                      <procedure.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-bold">
                      {procedure.title}
                    </h2>
                  </div>

                  <p className="text-muted-foreground mb-4">
                    {procedure.description}
                  </p>

                  <ul className="space-y-2">
                    {procedure.points.map((point) => (
                      <li key={point} className="flex gap-3">
                        <span className="text-primary font-bold">•</span>
                        <span className="text-muted-foreground">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={isReverse ? "lg:order-1" : ""}>
                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="overflow-hidden rounded-2xl border border-border max-w-md mx-auto"
                  >
                    <img
                      src={procedure.image}
                      alt={procedure.title}
                      className="w-full h-80 object-cover"
                    />
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* ================= CTA ================= */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
              Not Sure Which Procedure Is Right for You?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Schedule a consultation and get a personalized treatment plan.
            </p>
            <Button size="xl" variant="hero" asChild>
              <Link to="/contact">Book Consultation</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Procedures;
