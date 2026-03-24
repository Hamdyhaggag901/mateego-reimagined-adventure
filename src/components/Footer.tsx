import { Link } from "react-router-dom";
import { Facebook, Youtube, Instagram } from "lucide-react";

const destinations = [
  { label: "Cairo", to: "/destination/cairo-giza" },
  { label: "Luxor", to: "/destination/luxor-karnak" },
  { label: "Aswan", to: "/destination/aswan-abu-simbel" },
  { label: "Nile Cruises", to: "/destination/nile-cruises" },
  { label: "Siwa", to: "/destination/siwa-oasis" },
  { label: "White Desert", to: "/destination/white-desert" },
  { label: "Alexandria", to: "/destination/alexandria" },
  { label: "Sinai", to: "/destination/sinai" },
];
const journeys = ["Classic Egypt", "Nile Cruises", "Desert Safari", "Private Tours", "Family Trips", "About Us", "Careers"];

export default function Footer() {
  return (
    <footer className="bg-near-black text-white/80 pt-16 pb-0 font-body">
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Newsletter */}
          <div>
            <h4 className="text-gold font-heading text-xl mb-6 leading-snug">
              Receive Egypt Travel Inspiration in your Inbox
            </h4>
            <div className="space-y-3">
              <input className="pill-input w-full bg-transparent text-white placeholder-white/40" placeholder="First Name*" />
              <input className="pill-input w-full bg-transparent text-white placeholder-white/40" placeholder="Last Name*" />
              <input className="pill-input w-full bg-transparent text-white placeholder-white/40" placeholder="Email*" />
            </div>
            <label className="flex items-start gap-2 mt-4 text-xs text-white/50 cursor-pointer">
              <input type="checkbox" className="mt-0.5 accent-gold" />
              <span>I am happy to receive emails from Mateego Explorers</span>
            </label>
            <button className="pill-button-gold mt-5 text-xs">Sign Up</button>

            <div className="flex gap-4 mt-8">
              <div className="w-20 h-20 rounded-full bg-red-700 flex flex-col items-center justify-center text-center text-[8px] leading-tight text-white font-bold p-2">
                <span>Condé Nast</span>
                <span className="text-[7px] font-normal">TOP TRAVEL SPECIALISTS</span>
                <span>2026</span>
              </div>
              <div className="w-20 h-20 rounded-full bg-red-700 flex flex-col items-center justify-center text-center text-[8px] leading-tight text-white font-bold p-2">
                <span>Condé Nast</span>
                <span className="text-[7px] font-normal">READERS' CHOICE</span>
                <span>2025</span>
              </div>
            </div>
          </div>

          {/* Destinations */}
          <div>
            <h4 className="text-gold font-heading text-xl mb-6">Destinations</h4>
            <ul className="space-y-2.5">
              {destinations.map((d) => (
                <li key={d.label}>
                  <Link to={d.to} className="text-sm hover:text-gold transition-colors">{d.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get in Touch */}
          <div>
            <h4 className="text-gold font-heading text-xl mb-6">Get in Touch</h4>
            <p className="text-sm mb-2">+201121012676</p>
            <p className="text-sm mb-2">enquire@mateegoexplorers.com</p>
            <p className="text-sm mb-4">
              <span className="text-white/50 text-xs">Press Enquiries:</span><br />
              press@mateegoexplorers.com
            </p>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs text-white/50">Find us on</span>
              <Facebook size={16} className="hover:text-gold transition-colors cursor-pointer" />
              <Youtube size={16} className="hover:text-gold transition-colors cursor-pointer" />
              <Instagram size={16} className="hover:text-gold transition-colors cursor-pointer" />
            </div>
            <div className="text-sm">
              <span className="font-bold text-white">Excellent</span>
              <div className="flex gap-0.5 my-1">
                {[1,2,3,4,5].map(i => (
                  <div key={i} className="w-5 h-5 bg-green-500 flex items-center justify-center text-white text-xs">★</div>
                ))}
              </div>
              <span className="text-xs text-white/50">based on 847 reviews</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-gold font-heading text-xl mb-6">Journeys</h4>
            <ul className="space-y-2.5">
              {journeys.map((j) => (
                <li key={j}>
                  <Link to="/journeys" className="text-sm hover:text-gold transition-colors">{j}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <span className="font-heading text-lg tracking-wider text-white/60">MATEEGO</span>
          <span className="text-xs text-white/40">
            Privacy Policy · Terms · © 2025 Mateego Explorers
          </span>
        </div>
      </div>
    </footer>
  );
}
