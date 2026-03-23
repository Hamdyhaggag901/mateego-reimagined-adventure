import { Link } from "react-router-dom";

const TEAM = [
  { name: "Ahmed Hassan", role: "Founder & Lead Guide", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80" },
  { name: "Sarah Mitchell", role: "Head of Journeys", img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80" },
  { name: "Omar Farouk", role: "Senior Egyptologist", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80" },
];

export default function AboutPage() {
  return (
    <main className="pb-14">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end">
        <img src="https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1200&q=80" alt="About Mateego" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-6 md:px-10 pb-12 max-w-7xl mx-auto w-full">
          <h1 className="heading-display text-white text-4xl md:text-6xl">About Mateego Explorers</h1>
        </div>
      </section>

      {/* Our Story */}
      <section className="section-cream py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gold text-xs uppercase tracking-[0.2em] font-body font-bold mb-4 block">Our Story</span>
            <h2 className="heading-serif text-3xl md:text-4xl text-foreground mb-6">
              Born from a love of Egypt
            </h2>
            <p className="text-muted-foreground font-body leading-relaxed mb-4">
              Mateego Explorers was founded with a single belief: that travel to Egypt should be extraordinary, deeply personal, and transformative. We are a team of passionate Egyptologists, travel designers, and local experts who have spent decades uncovering the hidden wonders of this ancient land.
            </p>
            <p className="text-muted-foreground font-body leading-relaxed">
              Every journey we create is crafted from the ground up — no templates, no cookie-cutter itineraries. Just authentic experiences that bring Egypt's 5,000-year story to vivid, unforgettable life.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img src="https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=800&q=80" alt="Our team" className="w-full h-80 object-cover" loading="lazy" />
          </div>
        </div>
      </section>

      {/* Our Promise */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-serif text-3xl md:text-4xl text-center text-foreground mb-14">Our Promise</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { num: "01", title: "Deeply Personal", desc: "Every trip starts with understanding you — your interests, your pace, your curiosities." },
              { num: "02", title: "Expert-Led", desc: "Our Egyptologists are among the finest in the country, with decades of field experience." },
              { num: "03", title: "Responsibly Crafted", desc: "We work with local communities to ensure tourism benefits those who call Egypt home." },
            ].map(p => (
              <div key={p.num} className="bg-cream rounded-lg p-8">
                <span className="text-gold text-4xl font-heading">{p.num}</span>
                <h3 className="font-heading text-xl text-foreground mt-3 mb-3">{p.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-cream py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-serif text-3xl md:text-4xl text-center text-foreground mb-14">Why Choose Us</h2>
          {[
            { num: "01", title: "Unmatched Local Knowledge", desc: "Our team lives and breathes Egypt. We know the secret corners, the best times to visit, and the people who make each place special." },
            { num: "02", title: "Private Access", desc: "From VIP tomb openings to after-hours museum visits, we unlock experiences most travellers never see." },
            { num: "03", title: "24/7 Concierge Support", desc: "From the moment you arrive to the moment you leave, our concierge team is there to ensure everything runs seamlessly." },
            { num: "04", title: "Award-Winning Service", desc: "Recognised by Condé Nast Traveller, Travel+Leisure, and trusted by hundreds of discerning travellers worldwide." },
          ].map(item => (
            <div key={item.num} className="flex gap-6 mb-10">
              <span className="text-gold font-heading text-3xl flex-shrink-0">{item.num}</span>
              <div>
                <h3 className="font-heading text-xl text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-serif text-3xl md:text-4xl text-center text-foreground mb-14">Meet the Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {TEAM.map(t => (
              <div key={t.name} className="text-center">
                <div className="w-40 h-40 rounded-full mx-auto overflow-hidden mb-5">
                  <img src={t.img} alt={t.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
                <h3 className="font-heading text-xl text-foreground">{t.name}</h3>
                <p className="text-sm text-muted-foreground font-body">{t.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
