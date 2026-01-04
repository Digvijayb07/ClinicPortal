import { Play } from "lucide-react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
const videos = Array.from({ length: 10 }, (_, i) => ({
  src: `/videos/video${i + 1}.mp4`,
}));

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const Gallery = () => {
  return (
    <main className="pt-20">
      <Helmet>
        <title>Patient Recovery Videos & Testimonials | PhysioFit Clinic</title>
        <meta
          name="description"
          content="Watch real patient recovery videos and testimonials from Dr. Aditi’s PhysioFit Clinic in Ravet, Pune."
        />
      </Helmet>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground font-medium text-sm mb-6">
              Patient Stories
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Gallery
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Watch real treatment sessions and patient experiences from our clinic.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Patient Videos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Real stories, real recoveries.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {videos.map((video, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group rounded-2xl overflow-hidden border border-border bg-muted hover:shadow-card transition-smooth"
              >
                <div className="relative aspect-video">
                  <video
                    src={video.src}
                    controls
                    preload="metadata"
                    playsInline
                    className="w-full h-full object-cover"
                  />

                  <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-smooth">
                    <div className="w-16 h-16 rounded-full bg-black/40 flex items-center justify-center">
                      <Play className="w-8 h-8 text-white" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
