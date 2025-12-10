import { Play } from "lucide-react";

const Gallery = () => {
  // Placeholder video slots
  const videoSlots = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground font-medium text-sm mb-6">
              Patient Stories
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
              Gallery
            </h1>
            <p className="text-xl text-primary-foreground/80 leading-relaxed">
              Watch testimonials and success stories from our patients. See the real impact of our treatments.
            </p>
          </div>
        </div>
      </section>

      {/* Video Grid */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Patient Videos
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Coming soon! We'll be adding patient testimonial videos and treatment demonstrations here.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {videoSlots.map((slot, index) => (
              <div
                key={slot}
                className="aspect-video bg-gradient-subtle rounded-2xl border-2 border-dashed border-border flex items-center justify-center group hover:border-primary/50 transition-smooth cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto rounded-full bg-muted flex items-center justify-center mb-3 group-hover:bg-primary/10 transition-smooth">
                    <Play className="w-8 h-8 text-muted-foreground group-hover:text-primary transition-smooth" />
                  </div>
                  <p className="text-sm text-muted-foreground">Video {slot}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12 animate-fade-in">
            <p className="text-muted-foreground">
              Want to share your success story?{" "}
              <a href="/contact" className="text-primary hover:underline">
                Contact us
              </a>{" "}
              to learn how you can be featured.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Gallery;
