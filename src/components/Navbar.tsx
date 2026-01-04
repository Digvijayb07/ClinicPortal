import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { Menu, X, ChevronDown, Stethoscope } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

/* ---------------- DATA ---------------- */

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  {
    name: "Services",
    path: "/services",
    dropdown: [
      { name: "Chiropractic Care", path: "/services/chiropractic" },
      {
        name: "Sports & Return to Sports Rehabilitation",
        path: "/services/sports-rehab",
      },
    ],
  },
  { name: "Procedures", path: "/procedures" },
  { name: "Gallery", path: "/gallery" },
  { name: "Contact Us", path: "/contact" },
];

/* ---------------- ANIMATIONS ---------------- */

const navVariants: Variants = {
  hidden: { y: -100 },
  visible: {
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const dropdownVariants: Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 10 },
};

/* ---------------- COMPONENT ---------------- */

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  const isActive = (path: string) => location.pathname === path;
  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

  return (
    <motion.nav
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-card"
          : "bg-transparent"
      )}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div whileHover={{ scale: 1.03 }}>
            <Link to="/" className="flex items-center gap-2">
               <img
                  src="/logo2.png"
                  alt="PhysioFit Clinic Logo"
                  className="h-12 rounded-full"
                />
              <span className="font-serif text-xl font-semibold">
                PhysioFit Clinic
              </span>
            </Link>
          </motion.div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div
                key={link.name}
                className="relative"
                onMouseEnter={() =>
                  link.dropdown && setActiveDropdown(link.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {link.dropdown ? (
                  <>
                    <motion.button
                      whileHover={{ y: -2 }}
                      className={cn(
                        "flex items-center gap-1 px-4 py-2 rounded-lg font-medium",
                        isActive(link.path) ||
                          link.dropdown.some((d) => isActive(d.path))
                          ? "text-primary bg-primary/10"
                          : "text-foreground hover:text-primary"
                      )}
                    >
                      {link.name}
                      <ChevronDown className="w-4 h-4" />
                    </motion.button>

                    <AnimatePresence>
                      {activeDropdown === link.name && (
                        <motion.div
                          variants={dropdownVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-full left-0 mt-2 w-72 bg-card rounded-xl shadow-lg border border-border overflow-hidden"
                        >
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.name}
                              to={item.path}
                              className={cn(
                                "block px-4 py-3 transition-smooth",
                                isActive(item.path)
                                  ? "bg-primary/10 text-primary"
                                  : "hover:bg-primary/5"
                              )}
                            >
                              {item.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </>
                ) : (
                  <motion.div whileHover={{ y: -2 }}>
                    <Link
                      to={link.path}
                      className={cn(
                        "px-4 py-2 rounded-lg font-medium",
                        isActive(link.path)
                          ? "text-primary bg-primary/10"
                          : "hover:text-primary"
                      )}
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                )}
              </div>
            ))}

            <motion.div whileHover={{ scale: 1.05 }}>
              <Button asChild size="sm" className="ml-2">
                <Link to="/contact">Book Appointment</Link>
              </Button>
            </motion.div>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="lg:hidden fixed top-20 left-0 right-0 z-40
                 bg-background/95 backdrop-blur-md
                 border-t border-border shadow-lg"
            >
              <div className="container-custom py-6 space-y-2">
                {navLinks.map((link) => (
                  <div key={link.name}>
                    {link.dropdown ? (
                      <>
                        {/* Services button (NO navigation) */}
                        <button
                          onClick={() =>
                            setMobileDropdown(
                              mobileDropdown === link.name ? null : link.name
                            )
                          }
                          className="w-full flex items-center justify-between
            px-4 py-3 rounded-lg text-base font-medium
            text-foreground hover:bg-muted transition-smooth"
                        >
                          {link.name}
                          <ChevronDown
                            className={cn(
                              "w-4 h-4 transition-transform",
                              mobileDropdown === link.name && "rotate-180"
                            )}
                          />
                        </button>

                        {/* Dropdown items */}
                        <AnimatePresence>
                          {mobileDropdown === link.name && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              className="ml-4 overflow-hidden"
                            >
                              {link.dropdown.map((item) => (
                                <Link
                                  key={item.name}
                                  to={item.path}
                                  onClick={() => {
                                    setIsOpen(false);
                                    setMobileDropdown(null);
                                  }}
                                  className="block px-4 py-2 rounded-lg text-sm
                    text-muted-foreground hover:bg-muted"
                                >
                                  {item.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </>
                    ) : (
                      <Link
                        to={link.path}
                        onClick={() => setIsOpen(false)}
                        className="block px-4 py-3 rounded-lg text-base font-medium
          text-foreground hover:bg-muted transition-smooth"
                      >
                        {link.name}
                      </Link>
                    )}
                  </div>
                ))}


                <Button asChild className="w-full mt-4">
                  <Link to="/contact">Book Appointment</Link>
                </Button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </motion.nav>
  );
};

export default Navbar;
