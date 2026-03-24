import { useState, useEffect, useCallback } from "react";
import { Link, useLocation } from "react-router-dom";
import { Search, Menu, X, Phone, MapPin } from "lucide-react";

const MENU_DATA = [
  {
    title: "JOURNEYS",
    links: [
      { label: "Private Journeys", to: "/journeys" },
      { label: "Small Group", to: "/journeys" },
      { label: "Nile Cruises", to: "/destination/nile-cruises" },
      { label: "Desert Safari", to: "/destination/white-desert" },
      { label: "Family", to: "/journeys" },
      { label: "Extensions", to: "/journeys" },
    ],
  },
  {
    title: "EXPERIENCES",
    links: [
      { label: "Cultural Immersion", to: "/journeys" },
      { label: "Hot Air Balloon", to: "/destination/luxor-karnak" },
      { label: "VIP Tomb Access", to: "/destination/luxor-karnak" },
      { label: "Nile Felucca", to: "/destination/aswan-abu-simbel" },
      { label: "Cooking Class", to: "/journeys" },
      { label: "Photography Tour", to: "/journeys" },
    ],
  },
  {
    title: "INSPIRATION",
    links: [
      { label: "Travel Guides", to: "/article/first-timers-guide-egypt" },
      { label: "The Journal", to: "/article/best-time-to-visit-egypt" },
      { label: "Egypt Insights", to: "/article/hidden-gems-luxor" },
      { label: "Restorative Journeys", to: "/article/guide-to-nile-cruises" },
    ],
  },
  {
    title: "ABOUT EGYPT",
    links: [
      { label: "When to Go", to: "/article/best-time-to-visit-egypt" },
      { label: "Visa & Entry", to: "/article/first-timers-guide-egypt" },
      { label: "Health & Safety", to: "/article/first-timers-guide-egypt" },
      { label: "What to Pack", to: "/article/first-timers-guide-egypt" },
      { label: "Getting Around", to: "/article/first-timers-guide-egypt" },
    ],
  },
  {
    title: "ABOUT US",
    links: [
      { label: "Our Story", to: "/about" },
      { label: "What We Do", to: "/about" },
      { label: "Testimonials", to: "/about" },
      { label: "Press", to: "/about" },
      { label: "Meet the Team", to: "/about" },
      { label: "Careers", to: "/contact" },
    ],
  },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const toggleMenu = useCallback(() => setMenuOpen((v) => !v), []);

  return (
    <>
      {/* Top Bar */}
      <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-white/95 backdrop-blur-sm shadow-[0_1px_8px_rgba(0,0,0,0.06)]"
          : isHome
          ? "bg-transparent"
          : "bg-gold/90"
      }`}>
        <div className="flex items-center justify-between px-6 md:px-10 h-14">
          <div className="flex items-center gap-2 text-xs tracking-widest">
            <Phone size={13} className={scrolled ? "text-foreground" : "text-white"} />
            <span className={`hidden sm:inline ${scrolled ? "text-foreground" : "text-white"}`}>
              +201121012676
            </span>
          </div>

          <Link to="/" className={`font-heading text-xl md:text-2xl tracking-wider ${
            scrolled ? "text-foreground" : "text-white"
          }`}>
            MATEEGO
          </Link>

          <div className="flex items-center gap-4">
            <Link to="/trip-planner" className="pill-button-gold text-xs py-2 px-5 hidden md:inline-flex">
              Start Planning
            </Link>
            <button
              onClick={toggleMenu}
              className={`flex items-center gap-2 text-xs tracking-widest uppercase ${
                scrolled ? "text-foreground" : "text-white"
              }`}
            >
              <span className="hidden sm:inline">Menu</span>
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mega Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 bg-near-black/95" onClick={() => setMenuOpen(false)} />
        <div className={`relative z-10 pt-20 pb-12 px-6 md:px-16 max-h-screen overflow-y-auto transition-transform duration-500 ${
          menuOpen ? "translate-y-0" : "-translate-y-4"
        }`}>
          <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-12">
            {MENU_DATA.map((section) => (
              <div key={section.title}>
                <h3 className="text-gold text-xs tracking-[0.2em] uppercase mb-5 font-body font-bold">
                  {section.title}
                </h3>
                <ul className="space-y-3">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <Link
                        to={link.to}
                        className="text-white/70 text-sm hover:text-gold transition-colors duration-200 font-body"
                        onClick={() => setMenuOpen(false)}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              to="/trip-planner"
              className="pill-button-gold"
              onClick={() => setMenuOpen(false)}
            >
              Start Planning
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
