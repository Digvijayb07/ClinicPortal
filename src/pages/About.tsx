import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  Users,
  Heart,
} from "lucide-react";
import { motion, Variants } from "framer-motion";
import { Helmet } from "react-helmet-async";

const viewport = { once: true, margin: "-120px" };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const slideLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const slideRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
  },
};


const About = () => {
  return (
    <main className="pt-20">
      <Helmet>
        <title>About Dr. Aditi Kulkarni | Best Physiotherapist in Ravet, Pune</title>
        <meta
          name="description"
          content="Meet Dr. Aditi Kulkarni, Sports & Orthopaedic Physiotherapist and Chiropractor in Ravet, Pune. Gold medalist with years of clinical experience."
        />
      </Helmet>

      {/* ================= HERO ================= */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Your Partner in Health & Wellness
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At PhysioFit Clinic, we provide advanced physiotherapy and sports
              rehabilitation services led by Dr. Aditi Kulkarni.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= STORY + WHY ================= */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Story */}
            <motion.div
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dr. Aditi’s PhysioFit was founded with a vision to deliver
                  world-class physiotherapy and chiropractic care.
                </p>
                <p>
                  A Gold Medalist in Sports Physiotherapy, Dr. Aditi has worked
                  with professional athletes and sports associations.
                </p>
                <p>
                  Today, PhysioFit Clinic combines expertise, compassion, and
                  modern techniques for long-term recovery.
                </p>
              </div>
            </motion.div>

            {/* Why Choose Us */}
            <motion.div
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6">
                Why Choose Us
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: "Expert Care",
                    description:
                      "Specialized training in chiropractic care and sports medicine.",
                  },
                  {
                    icon: Users,
                    title: "Patient-Centered",
                    description:
                      "Customized treatment plans tailored to your needs.",
                  },
                  {
                    icon: Heart,
                    title: "Compassionate",
                    description:
                      "Warm, supportive care in a comfortable environment.",
                  },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    whileHover={{
                      y: -4,
                      boxShadow: "0 16px 40px rgba(0,0,0,0.15)",
                    }}
                    transition={{ type: "spring", stiffness: 220, damping: 18 }}
                    className="flex gap-4 p-6 rounded-xl bg-background border border-border will-change-transform"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= VISIT ================= */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Visit Our Clinic
            </h2>
            <p className="text-muted-foreground">
              We’d love to welcome you to our modern facility.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "Address",
                content:
                  "Shop no 20, Bansal Plaza, Ravet, Pune, Maharashtra 412101",
              },
              {
                icon: Phone,
                title: "Phone",
                content: "+91 7219289369",
              },
              {
                icon: Mail,
                title: "Email",
                content: "aditikulkarni2205@gmail.com",
              },
              {
                icon: Clock,
                title: "Clinic Hours",
                content:
                  "Morning: 8:00 AM - 1:00 PM\nEvening: 5:00 PM - 9:00 PM\nSunday Closed",
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ delay: i * 0.08 }}
                whileHover={{
                  y: -4,
                  boxShadow: "0 16px 40px rgba(0,0,0,0.15)",
                }}
                className="text-center p-6 rounded-2xl bg-card border border-border will-change-transform"
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg mb-2">
                  {item.title}
                </h3>
                <p className="text-muted-foreground whitespace-pre-line">
                  {item.content}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
