import { Link } from "react-router-dom";
import {
  Stethoscope,
  Phone,
  MapPin,
  Clock,
  Instagram,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-primary-foreground">
      <div className="container-custom py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-primary flex items-center justify-center">
                <Stethoscope className="w-4 h-4 text-primary-foreground" />
              </div>
              <span className="font-serif text-lg font-semibold">
                PhysioFit Clinic
              </span>
            </Link>

            <p className="text-sm text-primary-foreground/70 leading-relaxed">
              Dr. Aditi’s PhysioFit Clinic <br />
              Advanced Physiotherapy & Sports Care
            </p>

            <a
              href="https://www.instagram.com/doctorsports.in/"
              target="_blank"
              className="inline-flex items-center gap-2 text-primary-foreground/70 hover:text-primary transition-smooth"
            >
              <Instagram className="w-4 h-4" />
              <span className="text-sm">Instagram</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Procedures", path: "/procedures" },
                { name: "Gallery", path: "/gallery" },
                { name: "Contact", path: "/contact" },
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
            <h4 className="font-serif text-base font-semibold mb-4">
              Services
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  to="/services/chiropractic"
                  className="text-primary-foreground/70 hover:text-primary transition-smooth"
                >
                  Chiropractic Care
                </Link>
              </li>
              <li>
                <Link
                  to="/services/sports-rehab"
                  className="text-primary-foreground/70 hover:text-primary transition-smooth"
                >
                  Sports Rehabilitation
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-3 text-sm">
            <h4 className="font-serif text-base font-semibold mb-4">
              Contact
            </h4>

            <div className="flex items-start gap-3 text-primary-foreground/70">
              <MapPin className="w-4 h-4 mt-0.5 text-secondary shrink-0 drop-shadow-[0_0_6px_hsl(184_85%_45%/0.6)]" />
              <span>
                Bansal Plaza, Ravet <br />
                Pune, Maharashtra
              </span>
            </div>

            <div className="flex items-center gap-3 text-primary-foreground/70">
              <Phone className="w-4 h-4 text-secondary shrink-0 drop-shadow-[0_0_6px_hsl(184_85%_45%/0.6)]" />
              <span>+91 72192 89369</span>
            </div>

            <div className="flex items-start gap-3 text-primary-foreground/70">
              <Clock className="w-4 h-4 mt-0.5 text-secondary shrink-0 drop-shadow-[0_0_6px_hsl(184_85%_45%/0.6)]" />
              <span>
                Mon – Sat <br />
                10:30 AM – 1:30 PM <br />
                5:00 PM – 9:00 PM
              </span>
            </div>
          </div>


        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-custom py-4">
          <p className="text-center text-xs text-primary-foreground/50">
            © {new Date().getFullYear()} PhysioFit Clinic. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
