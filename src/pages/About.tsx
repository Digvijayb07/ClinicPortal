import { MapPin, Phone, Mail, Clock, Award, Users, Heart } from "lucide-react";

const About = () => {
  return (
    <main className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              About Us
            </span>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
              Your Partner in Health & Wellness
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At PhysioFit Clinic, we provide advanced physiotherapy and sports rehabilitation services. Our mission is simple: to help you achieve optimal health through personalized, evidence-based care led by Dr. Aditi Kulkarni.
            </p>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Introduction */}
            <div className="animate-fade-in">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Our Story
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dr. Aditi's PhysioFit — Advanced Physiotherapy and Sports Clinic was founded with a vision to provide world-class physiotherapy and chiropractic care. Dr. Aditi Kulkarni, a Gold Medalist in Sports Physiotherapy, built this practice on the belief that every patient deserves a personalized approach to their health journey.
                </p>
                <p>
                  With advanced certifications in Manual Therapy and Chiropractic Treatment, Dr. Aditi has worked extensively with athletes, including serving as a Sports Physiotherapist for the Mangalore Badminton Association and Dakshin Kannada Kabaddi Association.
                </p>
                <p>
                  Today, PhysioFit Clinic continues to invest in the latest techniques and technologies to ensure our patients receive the highest quality care possible. We're proud to be a trusted healthcare partner for athletes and individuals seeking optimal recovery.
                </p>
              </div>
            </div>

            {/* Why Choose Us */}
            <div className="animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-6">
                Why Choose Us
              </h2>
              <div className="space-y-6">
                {[
                  {
                    icon: Award,
                    title: "Expert Care",
                    description: "Board-certified professionals with specialized training in chiropractic care and sports medicine.",
                  },
                  {
                    icon: Users,
                    title: "Patient-Centered Approach",
                    description: "We listen to your concerns and develop customized treatment plans tailored to your unique needs.",
                  },
                  {
                    icon: Heart,
                    title: "Compassionate Service",
                    description: "We treat every patient like family, providing warm, supportive care in a comfortable environment.",
                  },
                ].map((item) => (
                  <div key={item.title} className="flex gap-4 p-6 rounded-xl bg-background border border-border">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Visit Our Clinic
            </h2>
            <p className="text-lg text-muted-foreground">
              We'd love to welcome you to our modern, comfortable facility.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "Address",
                content: "PhysioFit Clinic: Shop no 20, Bansal Plaza, Dr. Aditi’s PhysioFit Clinic, Ravet, Pune, Maharashtra 412101",
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
                content: "Morning: 8:00 AM - 1:00 PM\nEvening: 5:00 PM - 9:00 PM\nSunday Closed",
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className="text-center p-6 rounded-2xl bg-card shadow-card border border-border animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-semibold text-lg text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground whitespace-pre-line">{item.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
