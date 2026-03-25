import { useState } from "react";
import { Link } from "react-router-dom";

const TABS = ["Destinations We Love", "Journeys to Book Now", "Exclusive Offers"] as const;

const destinations = [
  {
    name: "Egypt",
    description: "Discover ancient wonders from the Great Pyramids to the temples of Luxor, sailing the timeless Nile.",
    image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=80",
    slug: "cairo-giza",
  },
  {
    name: "Jordan",
    description: "Walk through the rose-red city of Petra and float in the Dead Sea on an unforgettable Arabian journey.",
    image: "https://images.unsplash.com/photo-1579606032821-4e6161c81571?w=800&q=80",
    slug: "jordan",
  },
  {
    name: "Dubai",
    description: "Experience the futuristic skyline, golden deserts, and world-class luxury of the UAE's crown jewel.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80",
    slug: "dubai",
  },
];

export default function JourneySection() {
  const [activeTab, setActiveTab] = useState<string>(TABS[0]);

  return (
    <section className="bg-background py-20 md:py-28 px-6">
      {/* Heading */}
      <div className="max-w-[600px] mx-auto text-center mb-8">
        <h2 className="font-heading text-3xl md:text-[42px] text-foreground leading-snug italic">
          Where do you want to go?
        </h2>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 mb-14">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`font-body text-sm md:text-base transition-all duration-300 pb-1 border-b ${
              activeTab === tab
                ? "border-accent text-accent"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Destination Cards — 3 column, tall portrait, full-bleed */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
        {destinations.map((dest) => (
          <Link
            to={`/destination/${dest.slug}`}
            key={dest.name}
            className="relative aspect-[3/4] overflow-hidden group"
          >
            <img
              src={dest.image}
              alt={dest.name}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-heading text-white text-3xl md:text-4xl italic leading-tight">
                {dest.name}
              </h3>
              <p className="font-body text-white/80 text-sm mt-2 leading-relaxed">
                {dest.description}
              </p>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          to="/journeys"
          className="inline-block bg-foreground text-background uppercase tracking-[0.15em] text-xs font-body px-8 py-3.5 transition-all duration-300 hover:opacity-90"
        >
          View All Destinations
        </Link>
      </div>
    </section>
  );
}
