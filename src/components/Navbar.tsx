import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setServicesOpen(false);
  }, [location]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    {
      name: "Services",
      path: "/services",
      dropdown: [
        { name: "Chiropractic Care", path: "/services/chiropractic" },
        { name: "Sports & Return to Sports Rehabilitation", path: "/services/sports-rehab" },
      ],
    },
    { name: "Procedures", path: "/procedures" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-hero flex items-center justify-center shadow-md group-hover:shadow-glow transition-smooth">
              <Stethoscope className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-serif text-xl font-semibold text-foreground">
              PhysioFit Clinic
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group">
                {link.dropdown ? (
                  <div className="relative">
                    <button
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-lg font-medium transition-smooth",
                        isActive(link.path) || link.dropdown.some((d) => isActive(d.path))
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary hover:bg-primary/5"
                      )}
                      onClick={() => setServicesOpen(!servicesOpen)}
                      onMouseEnter={() => setServicesOpen(true)}
                    >
                      {link.name}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform",
                          servicesOpen && "rotate-180"
                        )}
                      />
                    </button>
                    <div
                      className={cn(
                        "absolute top-full left-0 mt-2 w-72 bg-card rounded-xl shadow-lg border border-border overflow-hidden transition-all duration-200",
                        servicesOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2"
                      )}
                      onMouseLeave={() => setServicesOpen(false)}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.path}
                          className={cn(
                            "block px-4 py-3 transition-smooth",
                            isActive(item.path)
                              ? "bg-primary/10 text-primary"
                              : "text-foreground hover:bg-primary/5 hover:text-primary"
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={link.path}
                    className={cn(
                      "px-4 py-2 rounded-lg font-medium transition-smooth",
                      isActive(link.path)
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:text-primary hover:bg-primary/5"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Button className="ml-2" size="sm" variant="outline" asChild>
              <Link to="/login/patient">Patient Login</Link>
            </Button>
            <Button className="ml-2" size="sm" asChild>
              <Link to="/login/therapist">Therapist Login</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "lg:hidden overflow-hidden transition-all duration-300",
            isOpen ? "max-h-[500px] pb-6" : "max-h-0"
          )}
        >
          <div className="flex flex-col gap-2 pt-4">
            {navLinks.map((link) => (
              <div key={link.name}>
                {link.dropdown ? (
                  <>
                    <button
                      className={cn(
                        "w-full flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-smooth",
                        link.dropdown.some((d) => isActive(d.path))
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:bg-muted"
                      )}
                      onClick={() => setServicesOpen(!servicesOpen)}
                    >
                      {link.name}
                      <ChevronDown
                        className={cn(
                          "w-4 h-4 transition-transform",
                          servicesOpen && "rotate-180"
                        )}
                      />
                    </button>
                    {servicesOpen && (
                      <div className="ml-4 mt-1 flex flex-col gap-1">
                        {link.dropdown.map((item) => (
                          <Link
                            key={item.name}
                            to={item.path}
                            className={cn(
                              "px-4 py-2 rounded-lg transition-smooth text-sm",
                              isActive(item.path)
                                ? "bg-primary/10 text-primary"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={cn(
                      "block px-4 py-3 rounded-lg font-medium transition-smooth",
                      isActive(link.path)
                        ? "text-primary bg-primary/10"
                        : "text-foreground hover:bg-muted"
                    )}
                  >
                    {link.name}
                  </Link>
                )}
              </div>
            ))}
            <Button className="mt-4 w-full" size="lg" variant="outline" asChild>
              <Link to="/login/patient">Patient Login</Link>
            </Button>
            <Button className="mt-2 w-full" size="lg" asChild>
              <Link to="/login/therapist">Therapist Login</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
