import { useState } from "react";
import { Link } from "react-router-dom";

const CATEGORIES = ["All", "Classic Tours", "Nile Cruises", "Desert Adventures", "Private Experiences"] as const;

const journeys = [
  {
    title: "Classic Egypt Tour",
    tagline: "Cairo, Luxor, Aswan",
    category: "Classic Tours",
    image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=80",
  },
  {
    title: "Luxury Nile Cruise",
    tagline: "Sail the ancient river",
    category: "Nile Cruises",
    image: "https://images.unsplash.com/photo-1539768942893-daf3538e9819?w=800&q=80",
  },
  {
    title: "White Desert Adventure",
    tagline: "Under the stars",
    category: "Desert Adventures",
    image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80",
  },
  {
    title: "Private Pyramids Experience",
    tagline: "Exclusive access",
    category: "Private Experiences",
    image: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=800&q=80",
  },
  {
    title: "Red Sea Escape",
    tagline: "Hurghada & Sinai",
    category: "Classic Tours",
    image: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800&q=80",
  },
  {
    title: "Siwa Oasis Journey",
    tagline: "The hidden gem of Egypt",
    category: "Desert Adventures",
    image: "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800&q=80",
  },
];

export default function JourneySection() {
  const [active, setActive] = useState<string>("All");

  const filtered = active === "All" ? journeys : journeys.filter((j) => j.category === active);

  return (
    <section className="bg-background py-20 md:py-28 px-6">
      {/* Heading */}
      <div className="max-w-[600px] mx-auto text-center mb-10">
        <h2 className="heading-serif text-3xl md:text-5xl text-foreground mb-6">
          Your Journey. Your Egypt. <em className="italic">Your Story.</em>
        </h2>
        <p className="text-muted-foreground font-body text-base leading-[1.8] max-w-[520px] mx-auto">
          Every Egypt travel experience we craft is uniquely yours. Our expert Egypt tour specialists
          combine first-hand knowledge, honest advice, and deep local connections to design private
          Egypt trips that go beyond the ordinary — from the pyramids of Giza to the silence of the
          White Desert.
        </p>
      </div>

      {/* Tab filters */}
      <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-14">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`font-body text-sm uppercase tracking-[0.15em] pb-1 border-b-2 transition-all duration-300 ${
              active === cat
                ? "border-accent text-accent font-bold"
                : "border-transparent text-muted-foreground hover:text-foreground"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Cards grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
        {filtered.map((journey) => (
          <Link
            to="/journeys"
            key={journey.title}
            className="relative aspect-[3/4] overflow-hidden group rounded-sm"
          >
            <img
              src={journey.image}
              alt={journey.title}
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-[400ms] ease-out group-hover:scale-[1.03]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-heading text-white text-2xl leading-tight">{journey.title}</h3>
              <p className="font-body text-white/75 text-sm mt-1">{journey.tagline}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center">
        <Link
          to="/journeys"
          className="inline-block border border-foreground text-foreground uppercase tracking-[0.2em] text-xs font-body px-8 py-3 transition-all duration-300 hover:bg-foreground hover:text-background"
        >
          Explore All Journeys
        </Link>
      </div>
    </section>
  );
}
