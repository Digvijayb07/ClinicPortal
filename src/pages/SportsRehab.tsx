import { Check, ArrowRight, Users, Activity, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import sportrehab from "@/assets/sportrehab.jpg";
import { motion, Variants } from "framer-motion";
import { Helmet } from "react-helmet-async";

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
      <Helmet>
        <title>Sports Rehabilitation in Ravet, Pune | Injury Recovery Clinic</title>
        <meta
          name="description"
          content="Advanced sports rehabilitation in Ravet, Pune. Recover faster from injuries with expert physiotherapy and personalized rehab programs."
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
          </motion.div>
        </div>
      </section>

      {/* ================= DESCRIPTION ================= */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div
              variants={slideLeftLong}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
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

              <motion.div
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
              >
                <Button size="lg" className="mt-8" asChild>
                  <Link to="/contact">
                    Schedule Consultation
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </Button>
              </motion.div>
            </motion.div>

            {/* Image */}
            <motion.div
              variants={slideRightLong}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="flex justify-center lg:justify-end"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3"></div>
                <img
                  src={sportrehab}
                  alt="Sports Rehabilitation Therapy"
                  className="relative rounded-3xl shadow-elegant w-full max-w-md object-cover"
                />
              </div>
            </motion.div>
          </div>
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
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Start Your Healing Journey?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Take the first step towards a strong, pain-free recovery. Our
              sports rehabilitation experts help you heal faster, regain
              mobility, and return to peak performance safely.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div whileHover={{ y: -4 }}>
                <Button size="xl" variant="hero" asChild>
                  <Link to="/contact">Book Appointment</Link>
                </Button>
              </motion.div>
              <motion.div whileHover={{ y: -4 }}>
                <Button size="xl" variant="outline" asChild>
                  <Link to="/procedures">View Procedures</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default SportsRehab;
