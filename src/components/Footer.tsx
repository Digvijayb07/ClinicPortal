import { Link } from "react-router-dom";
import {
  Stethoscope,
  Phone,
  Mail,
  MapPin,
  Clock,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2 mb-6">
              <div className="w-10 h-10 rounded-xl bg-primary flex items-center justify-center">
                <Stethoscope className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-serif text-xl font-semibold">
                PhysioFit Clinic
              </span>
            </Link>
            <p className="text-primary-foreground/70 mb-6">
              Dr. Aditi’s
              <br />
              PhysioFit Clinic
              <br />
              Advance Physiotherapy & Sports Clinic
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/your.physiofit?igsh=MW9yM3pmZzMycXlleQ=="
                target="_blank"
                className="w-10 h-10 rounded-full bg-primary-foreground/10 flex items-center justify-center hover:bg-primary transition-smooth"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {[
                { name: "Home", path: "/" },
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services/chiropractic" },
                { name: "Procedures", path: "/procedures" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-primary-foreground/70 hover:text-primary transition-smooth"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">
              Our Services
            </h4>

            <ul className="list-none space-y-3">
              {[
                { name: "Chiropractic Care", path: "chiropractic" },
                {
                  name: "Sports and Return to Sports Rehabilitation",
                  path: "sports-rehab",
                },
              ].map((service) => (
                <li key={service.name}>
                  <a
                    href={service.path}
                    className="text-primary-foreground/70 hover:text-primary transition"
                  >
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-semibold mb-6">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-primary-foreground/70">
                  Shop no 20, Bansal Plaza, Dr. Aditi’s PhysioFit Clinic, Ravet,
                  Pune, Maharashtra 412101
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-primary-foreground/70">
                  Phone Number: <br />
                  +91 07219289369
                </span>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <div className="text-primary-foreground/70">
                  Mon - Sat:
                  <br />
                  Morning: 10:00 AM - 01:00 PM
                  <br />
                  Evening: 05:00 PM - 09:00 PM
                  <br />
                  Sunday Closed
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-primary-foreground/50 text-sm">
            <p>© 2024 PhysioFit Clinic. All rights reserved.</p>
            <div className="flex gap-6">
              <a
                href="#"
                className="hover:text-primary-foreground transition-smooth"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="hover:text-primary-foreground transition-smooth"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
