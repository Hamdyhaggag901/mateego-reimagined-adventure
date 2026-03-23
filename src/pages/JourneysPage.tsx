import { useState } from "react";
import { Link } from "react-router-dom";

const JOURNEYS = [
  { id: "classic-egypt", title: "Classic Egypt Journey", tag: "Classic Egypt", duration: "10 Days", price: "$4,950", desc: "Discover the best of Egypt from Cairo to Luxor with a private Egyptologist.", image: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=800&q=80", category: "Classic Egypt" },
  { id: "nile-cruise", title: "Luxury Nile Cruise", tag: "Nile Cruises", duration: "7 Days", price: "$6,200", desc: "Sail the Nile aboard a luxury dahabiya, stopping at ancient temples along the way.", image: "https://images.unsplash.com/photo-1539768942893-daf3538e9819?w=800&q=80", category: "Nile Cruises" },
  { id: "white-desert", title: "White Desert Safari", tag: "Desert", duration: "5 Days", price: "$3,800", desc: "Camp under the stars amid surreal chalk-white rock formations in Egypt's Western Desert.", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=800&q=80", category: "Desert" },
  { id: "private-luxor", title: "Private Luxor & Valley", tag: "Private", duration: "6 Days", price: "$5,500", desc: "Exclusive access to tombs and temples with a leading Egyptologist as your personal guide.", image: "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=800&q=80", category: "Private" },
  { id: "family-adventure", title: "Family Egypt Adventure", tag: "Family", duration: "8 Days", price: "$4,200", desc: "An adventure crafted for families — treasure hunts in temples, camel rides, and felucca sailing.", image: "https://images.unsplash.com/photo-1541300613939-71366a840d8a?w=800&q=80", category: "Family" },
  { id: "cairo-explorer", title: "Cairo & Giza Explorer", tag: "Classic Egypt", duration: "4 Days", price: "$2,800", desc: "An immersive deep-dive into Cairo's markets, mosques, and the Giza plateau.", image: "https://images.unsplash.com/photo-1601580391937-e9e2f5584a2e?w=800&q=80", category: "Classic Egypt" },
];

const FILTERS = ["All", "Classic Egypt", "Nile Cruises", "Desert", "Private", "Family"];

export default function JourneysPage() {
  const [filter, setFilter] = useState("All");
  const filtered = filter === "All" ? JOURNEYS : JOURNEYS.filter(j => j.category === filter);

  return (
    <main className="pb-14">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end">
        <img src="https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1200&q=80" alt="Egypt Journeys" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-6 md:px-10 pb-12 max-w-7xl mx-auto w-full">
          <h1 className="heading-display text-white text-4xl md:text-6xl">Egypt Journeys</h1>
        </div>
      </section>

      <section className="section-cream py-16 px-6">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <p className="text-muted-foreground font-body leading-relaxed max-w-2xl mx-auto">
            Every Egypt journey we create is entirely bespoke — crafted around your interests, travel style, and sense of wonder. Browse our collection for inspiration, then let us tailor-make the perfect trip for you.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FILTERS.map(f => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full px-5 py-2 text-sm font-body transition-all duration-300 active:scale-95 ${
                filter === f ? "bg-gold text-white" : "bg-white text-foreground border border-foreground/15 hover:border-gold hover:text-gold"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
          {filtered.map(j => (
            <Link to={`/journey/${j.id}`} key={j.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-shadow duration-300 group">
              <div className="relative h-72 overflow-hidden">
                <img src={j.image} alt={j.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <span className="absolute top-4 left-4 bg-gold text-white text-xs px-3 py-1 rounded-full font-body">{j.tag}</span>
              </div>
              <div className="p-6">
                <h3 className="font-heading text-2xl text-foreground mb-2">{j.title}</h3>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs bg-cream rounded-full px-3 py-1 font-body">{j.duration}</span>
                  <span className="text-gold font-bold text-sm font-body">from {j.price}</span>
                </div>
                <p className="text-sm text-muted-foreground font-body mb-4">{j.desc}</p>
                <span className="text-gold text-sm font-body font-bold">View Journey →</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
