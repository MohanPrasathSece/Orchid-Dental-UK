import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logo from "/orchid_dental_logo-removebg-preview.png";

const links = [
  { to: "/", label: "Home" },
  { to: "/team", label: "Our Team" },
  { to: "/treatments", label: "Treatments" },
  { to: "/fees", label: "Fees" },
  { to: "/contact", label: "Contact" },
];

const Navbar = () => {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-card/80" style={{ boxShadow: "var(--shadow-sm)" }}>
      <div className="container mx-auto flex items-center justify-between py-3 px-6">
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Orchid Dental" className="h-10 w-10 object-contain" />
          <span className="text-xl font-bold text-foreground tracking-tight">
            Orchid <span className="text-primary">Dental</span>
          </span>
        </Link>

        {/* Desktop links */}
        <div className="hidden lg:flex items-center gap-1">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="relative px-4 py-2 text-sm font-medium text-muted hover:text-foreground transition-colors duration-200"
            >
              {link.label}
              {location.pathname === link.to && (
                <motion.div
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-primary rounded-full"
                  transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                />
              )}
            </Link>
          ))}
        </div>

        <Link
          to="/booking"
          className="hidden lg:inline-flex items-center px-6 py-3 rounded-lg bg-primary text-primary-foreground text-sm font-semibold hover:brightness-110 active:scale-95 transition-all duration-200"
        >
          Book Appointment
        </Link>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="lg:hidden p-2 text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[60] bg-white flex flex-col p-8 lg:hidden"
          >
            <div className="flex justify-between items-center mb-12">
              <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-2">
                <img src={logo} alt="Orchid Dental" className="h-8 w-8 object-contain" />
                <span className="text-lg font-bold text-foreground">
                  Orchid <span className="text-primary">Dental</span>
                </span>
              </Link>
              <button 
                onClick={() => setMobileOpen(false)}
                className="p-2 bg-slate-100 rounded-full text-foreground hover:bg-slate-200 transition-colors"
                aria-label="Close menu"
              >
                <X size={24} />
              </button>
            </div>

            <div className="flex flex-col gap-6">
              {links.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className={`text-3xl font-bold transition-colors ${
                      location.pathname === link.to ? "text-primary px-4 border-l-4 border-primary" : "text-slate-800 hover:text-primary"
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="mt-auto pt-8 border-t border-slate-100"
            >
              <Link
                to="/booking"
                onClick={() => setMobileOpen(false)}
                className="w-full inline-flex items-center justify-center px-8 py-4 rounded-xl bg-primary text-primary-foreground text-lg font-bold shadow-lg shadow-primary/20 active:scale-95 transition-all"
              >
                Book Appointment
              </Link>
              <div className="mt-8 space-y-2 text-slate-500 text-sm">
                <p className="font-mono">020 8459 2626</p>
                <p>158–160 High Road, London NW10 2PB</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
