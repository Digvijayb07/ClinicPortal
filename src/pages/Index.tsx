import { Button } from "@/components/ui/button";
import { Award, GraduationCap, Dumbbell, Heart, Activity, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import ReviewCard from "@/components/ReviewCard";
import draditi from "@/assets/draditi.jpeg";

const Index = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      review: "Dr. Aditi and her team have been absolutely wonderful. The physiotherapy care I received here completely transformed my quality of life. Highly recommend!",
      rating: 5,
      date: "2 weeks ago",
    },
    {
      name: "Michael Chen",
      review: "After my sports injury, the rehabilitation program here got me back on the field faster than I expected. Professional, knowledgeable, and genuinely caring staff.",
      rating: 5,
      date: "1 month ago",
    },
    {
      name: "Emily Rodriguez",
      review: "The clinic is modern, clean, and the atmosphere is so welcoming. Dr. Aditi takes time to explain everything and really listens to concerns.",
      rating: 5,
      date: "3 weeks ago",
    },
    {
      name: "David Thompson",
      review: "I've been to many physiotherapists over the years, but this clinic stands out. The holistic approach and personalized treatment plans make all the difference.",
      rating: 4,
      date: "1 month ago",
    },
  ];

  const expertise = [
    {
      icon: Dumbbell,
      title: "Sports & Return to Sports Rehabilitation",
      description: "Tailored strength & conditioning, biomechanical correction, posture alignment, agility & performance enhancement."
    },
    {
      icon: Activity,
      title: "Chiropractic Care",
      description: "Pain relief, spinal adjustments, posture improvement, flexibility, nervous system optimization."
    }
  ];

  return (
    <main className="pt-20">
      {/* Hero Section - Doctor */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center animate-fade-in">
            {/* Left - Photo */}
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 rounded-3xl transform rotate-3"></div>
                <img 
                  src={draditi} 
                  alt="Dr. Aditi Kulkarni" 
                  className="relative rounded-3xl shadow-elegant w-full max-w-md object-cover"
                />
              </div>
            </div>

            {/* Right - Info */}
            <div className="text-center lg:text-left">
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                Welcome to PhysioFit Clinic
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 leading-tight">
                Dr. Aditi Kulkarni
              </h1>
              <p className="text-xl text-primary font-medium mb-6">
                Founder | Sports & Orthopaedic Physiotherapist | Chiropractor | Gold Medalist
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Dr. Aditi Kulkarni is a passionate and dedicated physiotherapist with advanced expertise in Sports Rehabilitation and Chiropractic Care. A Gold Medalist in Sports Physiotherapy, she is also the founder of Dr. Aditi's PhysioFit — Advanced Physiotherapy and Sports Clinic.
              </p>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                With multiple advanced certifications in Manual Therapy and Chiropractic Treatment, Dr. Aditi has worked extensively with athletes, including serving as a Sports Physiotherapist for the Mangalore Badminton Association and Dakshin Kannada Kabaddi Association, as well as providing on-field physiotherapy across tournaments in Pune.
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-medium">
                Her specialized approach ensures athletes not only recover safely but also return to their sport with enhanced strength, agility, and resilience.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Award, label: "Achievement", value: "Gold Medalist" },
                  { icon: GraduationCap, label: "Specialization", value: "Sports Physio" },
                  { icon: Sparkles, label: "Certification", value: "Manual Therapy" },
                  { icon: Heart, label: "Approach", value: "Patient-Centered" },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col items-center gap-2 p-4 rounded-xl bg-card shadow-sm border border-border">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                    <p className="font-semibold text-foreground text-sm">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="xl" variant="hero" asChild>
                  <Link to="/contact">Book Appointment</Link>
                </Button>
                <Button size="xl" variant="outline" asChild>
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Expertise
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Areas of Specialization
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {expertise.map((item, index) => (
              <div 
                key={item.title} 
                className="p-8 rounded-2xl bg-gradient-subtle border border-border shadow-sm animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Clinic Goal Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Our Mission
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Our Clinic's Goal
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At PhysioFit Clinic, our mission is to provide exceptional, patient-centered care that empowers individuals to achieve their highest level of health and wellness. We believe in treating the whole person, not just symptoms, through innovative techniques and compassionate service.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are committed to creating a healing environment where every patient feels valued, heard, and supported on their journey to better health. Our goal is to help you move better, feel better, and live your best life.
            </p>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Testimonials
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it — hear from our satisfied patients about their experience at PhysioFit Clinic.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {reviews.map((review, index) => (
              <div
                key={review.name}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <ReviewCard {...review} />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button size="lg" variant="outline" asChild>
              <a
                href="https://www.google.com/maps"
                target="_blank"
                rel="noopener noreferrer"
              >
                See More Reviews
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-hero">
        <div className="container-custom">
          <div className="text-center animate-fade-in">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-6">
              Ready to Start Your Journey to Better Health?
            </h2>
            <p className="text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Schedule your consultation today and take the first step towards a pain-free, active lifestyle.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="xl" className="bg-card text-primary hover:bg-card/90" asChild>
                <Link to="/contact">Book Your Appointment</Link>
              </Button>
              <Button size="xl" variant="heroOutline" asChild>
                <a href="tel:+15551234567">Call (555) 123-4567</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Index;
