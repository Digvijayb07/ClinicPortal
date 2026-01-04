import { Button } from "@/components/ui/button";
import {
  Award,
  GraduationCap,
  Dumbbell,
  Heart,
  Activity,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Link } from "react-router-dom";
import ReviewCard from "@/components/ReviewCard";
import draditi from "@/assets/draditi.jpeg";
import { motion } from "framer-motion";

/* ---------------- SAFE MOTION CONFIG ---------------- */

const viewport = { once: true, margin: "-120px" };

const shapeVariant = {
  hidden: { opacity: 0, y: 80 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.4, ease: [0.25, 0.8, 0.25, 1] },
  },
};

const slideLR = (index: number) => ({
  hidden: { opacity: 0, x: index % 2 === 0 ? -80 : 80 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: [0.25, 0.8, 0.25, 1] },
  },
});

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.25, 0.8, 0.25, 1] },
  },
};

/* ---------------- PAGE ---------------- */

const Index = () => {
  const stats = [
    { icon: Award, value: "Gold Medalist" },
    { icon: GraduationCap, value: "Sports Physio" },
    { icon: Sparkles, value: "Manual Therapy" },
    { icon: Heart, value: "Patient-Centric" },
  ];

  const expertise = [
    {
      icon: Dumbbell,
      title: "Sports Rehabilitation",
      description:
        "Return-to-sport training, strength conditioning, injury prevention.",
    },
    {
      icon: Activity,
      title: "Chiropractic Care",
      description:
        "Spinal alignment, posture correction, mobility & pain relief.",
    },
  ];

  const reviews = [
    {
      name: "Jeetendra Patil",
      review:
        "My father took treatment for neck pain. His neck was blocked and unable to move the neck. After taking 6days physiotherapy in PhysioFit improvement was good. Dr.Aditi mam gave treatment for spine , soldder and neck excercise.",
      rating: 5,
      date: "2 days ago",
    },
    {
      name: "Trupti Sapate",
      review: "I visited Dr Aditi for consultation for my back pain and thyroid disorder. Ma'am helped me with exercises that relieved my pain and also reduced my thyroid levels surprisingly which I hadn't expected. So happy to see wonderful results that I can get rid of my thyroid medicine now. Ma'am also gave me some self hypnotic tools that helped me improve my mental wellness and reduce anxiety. Clinic has state of the art facility, staff is really nice. Thanks Dr Aditi for being so supportive and understanding. Lots of good wishes to u. I would definitely recommend this clinic to all",
      rating: 5,
      date: "6 days ago",
    },
    {
      name: "Christy Francis",
      review: "PhysioFit Clinic provides excellent physiotherapy care with a highly skilled and friendly team. The treatments are personalized, effective, and focused on long-term recovery. The clinic is well-maintained, the staff is supportive, and the overall experience is smooth and comfortable.",
      rating: 5,
      date: "3 weeks ago",
    },
    {
      name: "Nitin Aade",
      review: "When I came to the clinic, I was having back pain and now after three sessions, my pain has reduced by 90 percent.Thankyou for your review. Wishing you the best",
      rating: 5,
      date: "4 weeks ago",
    },
  ];

  return (
    <main className="pt-20 overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative py-24">
        <motion.div
          variants={shapeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="absolute left-[-160px] top-1/2 -translate-y-1/2 w-[520px] h-[520px] bg-primary/25 rounded-full blur-3xl"
        />

        <div className="container-custom relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
              className="flex justify-center"
            >
              <div className="relative">
                <div className=" absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3"></div>
                <img
                  src={draditi}
                  alt="Dr. Aditi Kulkarni"
                  className=" relative rounded-3xl shadow-elegant w-full max-w-md object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 80 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={viewport}
              transition={{ duration: 0.8, ease: [0.25, 0.8, 0.25, 1] }}
            >
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                PhysioFit Clinic
              </span>

              <h1 className="font-serif text-5xl lg:text-6xl font-bold mb-4">
                Dr. Aditi Kulkarni
              </h1>

              <p className="text-primary font-medium mb-6">
                Sports & Orthopaedic Physiotherapist · Chiropractor
              </p>

              <p className="text-muted-foreground mb-10 max-w-xl">
                Evidence-based rehabilitation and chiropractic care with a
                patient-first approach.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10">
                {stats.map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={viewport}
                    transition={{ duration: 0.6 }}
                    whileHover={{
                      y: -4,
                      boxShadow: "0 16px 40px rgba(0,0,0,0.15)",
                    }}
                    className="p-4 rounded-xl bg-card border border-border text-center will-change-transform"
                  >
                    <stat.icon className="w-5 h-5 text-primary mx-auto mb-2" />
                    <p className="text-sm font-semibold">{stat.value}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 300, damping: 22 }}
              >
                <Button size="xl" variant="hero" asChild>
                  <Link to="/contact">Book Appointment</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= SPECIALIZATION ================= */}
      <section className="relative py-24 bg-card">
        <motion.div
          variants={shapeVariant}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="absolute right-[-180px] top-32 w-[480px] h-[480px] bg-primary/15 rounded-full blur-3xl"
        />

        <div className="container-custom relative">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="font-serif text-4xl font-bold mb-4">
              Areas of Specialization
            </h2>
            <p className="text-muted-foreground">
              Focused treatments designed for long-term recovery.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {expertise.map((item, index) => (
              <motion.div
                key={item.title}
                variants={slideLR(index)}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                whileHover={{
                  y: -6,
                  boxShadow: "0 20px 60px rgba(0,0,0,0.18)",
                }}
                className="p-8 rounded-2xl bg-gradient-subtle border border-border will-change-transform"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold mb-3">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= REVIEWS ================= */}
      <section className="py-24 bg-card">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <motion.div
                key={review.name}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                transition={{ delay: index * 0.08 }}
                whileHover={{
                  y: -6,
                  boxShadow: "0 24px 70px rgba(0,0,0,0.22)",
                }}
                className="h-[260px] rounded-2xl will-change-transform flex"
              >
                <div className="flex h-full w-full">
                  <ReviewCard {...review} />
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="flex justify-center mt-14"
          >
            <Button variant="outline" size="lg" asChild>
              <a
                href="https://www.google.com/maps/place/Dr.+Aditi%E2%80%99s+PhysioFit+Clinic/@18.6441493,73.7568632,17z/data=!4m18!1m9!3m8!1s0x3bc2b1b91726d477:0x62fa68e482662b2d!2sDr.+Aditi%E2%80%99s+PhysioFit+Clinic!8m2!3d18.6441493!4d73.7568632!9m1!1b1!16s%2Fg%2F11vxtzc616!3m7!1s0x3bc2b1b91726d477:0x62fa68e482662b2d!8m2!3d18.6441493!4d73.7568632!9m1!1b1!16s%2Fg%2F11vxtzc616?hl=en&entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA3M0gBUAM%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                See more reviews
                <ExternalLink className="w-4 h-4" />
              </a>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Index;
