import { Button } from "@/components/ui/button";
import { Award, GraduationCap, Clock, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import doctorImage from "@/assets/doctor-portrait.jpg";
import ReviewCard from "@/components/ReviewCard";

const Index = () => {
  const reviews = [
    {
      name: "Sarah Johnson",
      review: "Dr. Mitchell and his team have been absolutely wonderful. The chiropractic care I received here completely transformed my quality of life. Highly recommend!",
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
      review: "The clinic is modern, clean, and the atmosphere is so welcoming. Dr. Mitchell takes time to explain everything and really listens to concerns.",
      rating: 5,
      date: "3 weeks ago",
    },
    {
      name: "David Thompson",
      review: "I've been to many chiropractors over the years, but this clinic stands out. The holistic approach and personalized treatment plans make all the difference.",
      rating: 4,
      date: "1 month ago",
    },
  ];

  return (
    <main className="pt-20">
      {/* Hero Section - Doctor */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Doctor Image */}
            <div className="order-2 lg:order-1 animate-fade-in">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-hero rounded-3xl opacity-20 blur-2xl" />
                <img
                  src={doctorImage}
                  alt="Dr. James Mitchell - Lead Chiropractor"
                  className="relative w-full rounded-2xl shadow-lg object-cover aspect-[4/3]"
                />
              </div>
            </div>

            {/* Doctor Info */}
            <div className="order-1 lg:order-2 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
                Welcome to HealthCare Clinic
              </span>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
                Dr. James Mitchell
              </h1>
              <p className="text-xl text-primary font-medium mb-4">
                DC, CCSP, MS in Sports Medicine
              </p>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                With over 15 years of experience in chiropractic care and sports rehabilitation, Dr. Mitchell is dedicated to helping patients achieve optimal health and wellness through personalized, evidence-based treatments.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Award, label: "Board Certified", value: "Chiropractor" },
                  { icon: GraduationCap, label: "Specialization", value: "Sports Medicine" },
                  { icon: Clock, label: "Experience", value: "15+ Years" },
                  { icon: Heart, label: "Patients Treated", value: "10,000+" },
                ].map((stat) => (
                  <div key={stat.label} className="flex items-start gap-3 p-4 rounded-xl bg-card shadow-sm border border-border">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <stat.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{stat.label}</p>
                      <p className="font-semibold text-foreground">{stat.value}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
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

      {/* Clinic Goal Section */}
      <section className="section-padding bg-card">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Our Mission
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8">
              Our Clinic's Goal
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              At HealthCare Clinic, our mission is to provide exceptional, patient-centered care that empowers individuals to achieve their highest level of health and wellness. We believe in treating the whole person, not just symptoms, through innovative techniques and compassionate service.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We are committed to creating a healing environment where every patient feels valued, heard, and supported on their journey to better health. Our goal is to help you move better, feel better, and live your best life.
            </p>
          </div>
        </div>
      </section>

      {/* Google Reviews Section */}
      <section className="section-padding bg-gradient-subtle">
        <div className="container-custom">
          <div className="text-center mb-12 animate-fade-in">
            <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary font-medium text-sm mb-6">
              Testimonials
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              What Our Patients Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Don't just take our word for it — hear from our satisfied patients about their experience at HealthCare Clinic.
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
