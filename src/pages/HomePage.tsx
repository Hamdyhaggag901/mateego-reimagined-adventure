import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, ChevronLeft, ChevronRight, Star, Search } from "lucide-react";
import HorizontalCarousel from "@/components/HorizontalCarousel";

const IMAGES = {
  hero: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1200&q=80",
  pyramids: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1200&q=80",
  nile: "https://images.unsplash.com/photo-1539768942893-daf3538e9819?w=1200&q=80",
  desert: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=1200&q=80",
  temple: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1200&q=80",
  family: "https://images.unsplash.com/photo-1541300613939-71366a840d8a?w=1200&q=80",
  cairo: "https://images.unsplash.com/photo-1601580391937-e9e2f5584a2e?w=1200&q=80",
  luxor: "https://images.unsplash.com/photo-1559628376-f3fe5f782a2e?w=1200&q=80",
  siwa: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80",
};

const journeyCards = [
  { title: "Classic Egypt", image: IMAGES.pyramids },
  { title: "Nile Cruise", image: IMAGES.nile },
  { title: "White Desert", image: IMAGES.desert },
  { title: "Luxor Temples", image: IMAGES.temple },
];

const destinations = [
  { name: "Cairo & Giza", image: IMAGES.cairo },
  { name: "Luxor & Karnak", image: IMAGES.luxor },
  { name: "Aswan & Abu Simbel", image: IMAGES.nile },
  { name: "Nile Cruises", image: IMAGES.nile },
  { name: "Siwa Oasis", image: IMAGES.siwa },
  { name: "White Desert", image: IMAGES.desert },
  { name: "Alexandria", image: IMAGES.pyramids },
  { name: "Sinai", image: IMAGES.desert },
];

const testimonials = [
  { quote: "This was our best trip ever through Mateego", text: "From the moment we arrived in Cairo, every detail was perfect. Our guide was extraordinary, and the private access to the Valley of the Kings was a once-in-a-lifetime experience.", author: "Margaret H., New York", trip: "Classic Egypt Journey", date: "March 2026" },
  { quote: "An unforgettable journey along the Nile", text: "The dahabiya cruise was intimate and luxurious. Watching the sunset from the deck while ancient temples drifted by was pure magic. Mateego understood exactly what we wanted.", author: "James & Sarah P., California", trip: "Nile Dahabiya Cruise", date: "January 2026" },
  { quote: "Our children still talk about Egypt every day", text: "Mateego crafted the perfect family adventure. The treasure hunts in the temples kept our kids engaged, and the private Egyptologist made history come alive for everyone.", author: "The Williams Family, Texas", trip: "Family Egypt Adventure", date: "February 2026" },
];

const blogArticles = [
  { title: "Best Time to Visit Egypt in 2026", image: IMAGES.pyramids },
  { title: "19 Top Luxury Hotels in Cairo", image: IMAGES.cairo },
  { title: "Ultimate Guide to Nile Cruises", image: IMAGES.nile },
  { title: "Hidden Gems of Luxor Temple", image: IMAGES.luxor },
  { title: "A First-Timer's Guide to Egypt", image: IMAGES.temple },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("revealed");
          e.target.querySelectorAll(".reveal").forEach((c) => c.classList.add("revealed"));
        }
      }),
      { threshold: 0.12 }
    );
    el.querySelectorAll(".reveal").forEach((c) => obs.observe(c));
    if (el.classList.contains("reveal")) obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return ref;
}

export default function HomePage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [activeDest, setActiveDest] = useState(0);
  const heroRef = useReveal();
  const storyRef = useReveal();
  const destRef = useReveal();
  const testRef = useReveal();
  const typesRef = useReveal();
  const whyRef = useReveal();
  const ctaRef = useReveal();
  const blogRef = useReveal();

  const nextTest = () => setActiveTestimonial((v) => (v + 1) % testimonials.length);
  const prevTest = () => setActiveTestimonial((v) => (v - 1 + testimonials.length) % testimonials.length);

  return (
    <main className="pb-14">
      {/* SECTION 1 — HERO */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <img
          src={IMAGES.hero}
          alt="Egyptian landscape"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="relative z-10 text-center px-6 max-w-4xl">
          <h1 className="reveal heading-display text-white text-5xl md:text-7xl lg:text-[90px] mb-6">
            Exceptional Journeys
          </h1>
          <p className="reveal reveal-delay-1 text-white/85 text-lg md:text-xl font-body max-w-2xl mx-auto mb-10 text-balance">
            Set off on remarkable, deeply personal trips planned by Egypt specialists
          </p>
          <div className="reveal reveal-delay-2 flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="text-center">
              <span className="text-white/60 text-xs uppercase tracking-widest block mb-2 font-body">Take me to Egypt</span>
              <div className="flex items-center bg-white/10 backdrop-blur-sm rounded-full border border-white/20 overflow-hidden">
                <input
                  className="bg-transparent text-white placeholder-white/50 px-5 py-3 text-sm outline-none w-48 font-body"
                  placeholder="Search destinations..."
                />
                <button className="pill-button-dark rounded-l-none py-3 px-5">
                  <Search size={16} />
                </button>
              </div>
            </div>
            <div className="text-center">
              <span className="text-white/60 text-xs uppercase tracking-widest block mb-2 font-body">Not sure where?</span>
              <Link to="/trip-planner" className="pill-button-gold">
                Use our trip planner
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 — Your trip, your story */}
      <section ref={storyRef} className="section-cream py-20 md:py-28 px-6">
        <div className="max-w-4xl mx-auto text-center mb-14">
          <h2 className="reveal heading-serif text-3xl md:text-5xl text-foreground mb-6">
            Your trip, <em className="italic">your story</em>
          </h2>
          <p className="reveal reveal-delay-1 text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            Every trip we plan is one of a kind. No matter where in Egypt you want to go, our experts' honest advice and first-hand knowledge ensure each adventure is more memorable than the last.
          </p>
        </div>
        <div className="reveal reveal-delay-2 max-w-6xl mx-auto">
          <HorizontalCarousel>
            {journeyCards.map((card) => (
              <Link
                to="/journeys"
                key={card.title}
                className="flex-shrink-0 w-72 md:w-80 h-96 rounded-lg overflow-hidden relative group"
              >
                <img src={card.image} alt={card.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-6 left-6 flex items-center gap-2">
                  <MapPin size={14} className="text-gold" />
                  <span className="text-white font-heading text-xl">{card.title}</span>
                </div>
              </Link>
            ))}
          </HorizontalCarousel>
        </div>
      </section>

      {/* SECTION 3 — Destinations Split */}
      <section ref={destRef} className="flex flex-col md:flex-row min-h-[80vh]">
        <div className="reveal md:w-1/2 h-80 md:h-auto relative overflow-hidden">
          <img
            src={destinations[activeDest].image}
            alt={destinations[activeDest].name}
            className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-black/20" />
          <div className="absolute bottom-8 left-8">
            <span className="text-white font-heading text-2xl">{destinations[activeDest].name}</span>
          </div>
        </div>
        <div className="reveal reveal-delay-1 md:w-1/2 section-cream p-10 md:p-16 flex flex-col justify-center">
          <span className="text-gold text-xs uppercase tracking-[0.2em] font-body font-bold mb-4">Our destinations</span>
          <div className="gold-divider mb-8 !mx-0 w-12" />
          <ul className="space-y-4">
            {destinations.map((d, i) => (
              <li key={d.name}>
                <button
                  onMouseEnter={() => setActiveDest(i)}
                  className={`font-heading text-xl md:text-2xl transition-all duration-300 text-left ${
                    i === activeDest ? "text-foreground font-semibold" : "text-foreground/35"
                  }`}
                >
                  {d.name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 4 — Testimonials */}
      <section ref={testRef} className="section-cream py-20 md:py-28 px-6">
        <div className="reveal max-w-2xl mx-auto text-center relative">
          <button onClick={prevTest} className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-16 w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors active:scale-95">
            <ChevronLeft size={18} />
          </button>
          <button onClick={nextTest} className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-16 w-10 h-10 rounded-full border border-foreground/20 flex items-center justify-center hover:border-gold hover:text-gold transition-colors active:scale-95">
            <ChevronRight size={18} />
          </button>

          <p className="font-heading text-2xl md:text-4xl italic text-foreground mb-6 leading-snug">
            "{testimonials[activeTestimonial].quote}"
          </p>
          <p className="text-muted-foreground text-sm font-body leading-relaxed mb-6 max-w-lg mx-auto">
            {testimonials[activeTestimonial].text}
          </p>
          <div className="flex justify-center gap-1 mb-4">
            {[1,2,3,4,5].map(i => <Star key={i} size={16} className="text-gold fill-gold" />)}
          </div>
          <p className="font-body text-sm font-bold text-foreground">{testimonials[activeTestimonial].author}</p>
          <p className="text-xs text-muted-foreground mt-1">Published {testimonials[activeTestimonial].date} on Trustpilot</p>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveTestimonial(i)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  i === activeTestimonial ? "bg-gold scale-125" : "bg-foreground/20"
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — Trip Types */}
      <section ref={typesRef} className="py-4 px-4">
        <div className="reveal max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <Link to="/journeys" className="relative h-[500px] overflow-hidden rounded-lg group">
            <img src={IMAGES.temple} alt="Private Journeys" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8 bg-cream/90 backdrop-blur-sm p-6 rounded-lg max-w-xs">
              <span className="text-xs text-gold uppercase tracking-widest font-body">Tailor-made</span>
              <h3 className="font-heading text-2xl text-foreground mt-1">Private Journeys</h3>
              <p className="text-sm text-muted-foreground font-body mt-2">Find your perfect Egypt experience</p>
            </div>
          </Link>
          <Link to="/journeys" className="relative h-[500px] overflow-hidden rounded-lg group">
            <img src={IMAGES.family} alt="Family Adventures" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            <div className="absolute bottom-8 right-8 bg-near-black/90 backdrop-blur-sm p-6 rounded-lg max-w-xs">
              <span className="text-xs text-gold uppercase tracking-widest font-body">Lasting memories</span>
              <h3 className="font-heading text-2xl text-white mt-1">Family Adventures</h3>
              <p className="text-sm text-white/70 font-body mt-2">Set off on a bespoke trip, guided by experts</p>
            </div>
          </Link>
        </div>
      </section>

      {/* SECTION 6 — Why book with Mateego */}
      <section ref={whyRef} className="section-cream py-20 md:py-28 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="reveal heading-serif text-3xl md:text-5xl text-center text-foreground mb-16">
            Why book with Mateego?
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: (
                  <svg viewBox="0 0 150 150" className="w-28 h-28 mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M30 120c0-20 15-30 30-35s25-20 25-40c0-15 10-20 20-20s20 10 20 25c0 20-5 30 10 40s25 15 15 35" />
                    <circle cx="75" cy="25" r="8" /><path d="M50 80h50M55 90h40M60 100h30" />
                    <path d="M20 130h110" strokeDasharray="4 4" />
                  </svg>
                ),
                title: "Original experiences",
                text: "We plan your Egypt trip around your personal interests. We get to know you first, so we craft a journey — and a story — that's uniquely yours.",
              },
              {
                icon: (
                  <svg viewBox="0 0 150 150" className="w-28 h-28 mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="25" y="30" width="70" height="90" rx="3" />
                    <path d="M35 50h50M35 60h40M35 70h45M35 80h35" />
                    <circle cx="110" cy="100" r="25" /><path d="M110 80v20M100 90l10 10 15-20" />
                  </svg>
                ),
                title: "The personal touch",
                text: "Our Egypt specialists, expert guides, and brilliant concierges are hand-picked for their ability to bring the destination to life.",
              },
              {
                icon: (
                  <svg viewBox="0 0 150 150" className="w-28 h-28 mx-auto mb-6" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <ellipse cx="75" cy="85" rx="35" ry="25" /><path d="M55 85c5-20 35-20 40 0" />
                    <path d="M75 60V30M65 35l10-5 10 5" />
                    <path d="M40 100c-10 10-5 25 10 25h50c15 0 20-15 10-25" />
                    <circle cx="75" cy="115" r="5" />
                  </svg>
                ),
                title: "Responsible travel",
                text: "We seek to ensure your trip helps preserve, support and regenerate Egypt's culture, heritage, and local communities.",
              },
            ].map((item, i) => (
              <div key={item.title} className={`reveal reveal-delay-${i + 1} text-center`}>
                <div className="text-foreground/70">{item.icon}</div>
                <h3 className="font-heading text-2xl text-foreground mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — Dark CTA */}
      <section ref={ctaRef} className="section-dark py-20 md:py-28 px-6">
        <div className="reveal max-w-3xl mx-auto text-center">
          <h2 className="heading-serif text-3xl md:text-5xl text-white mb-6">
            Your adventure starts <em className="italic">now</em>
          </h2>
          <p className="text-white/60 font-body mb-10 max-w-lg mx-auto">
            Let our Egypt specialists craft an unforgettable journey tailored to your dreams. Every detail, perfected.
          </p>
          <Link to="/trip-planner" className="pill-button-gold">Start Planning</Link>
        </div>
      </section>

      {/* SECTION 8 — Blog / Get Inspired */}
      <section ref={blogRef} className="section-cream py-20 md:py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="reveal text-center mb-14">
            <h2 className="heading-serif text-3xl md:text-5xl text-foreground mb-4">Get inspired</h2>
            <div className="gold-divider mb-6" />
            <p className="text-muted-foreground font-body max-w-lg mx-auto">
              Stories, guides and insights from our Egypt travel specialists
            </p>
          </div>
          <div className="reveal reveal-delay-1">
            <HorizontalCarousel showDots dotCount={5}>
              {blogArticles.map((article) => (
                <div key={article.title} className="flex-shrink-0 w-64 md:w-72 group cursor-pointer">
                  <div className="relative h-80 rounded-lg overflow-hidden border-4 border-white shadow-sm">
                    <img src={article.image} alt={article.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h4 className="text-white font-heading text-lg leading-snug">{article.title}</h4>
                      <span className="text-gold text-xs font-body mt-2 inline-block">Read more →</span>
                    </div>
                  </div>
                </div>
              ))}
            </HorizontalCarousel>
          </div>
        </div>
      </section>

      {/* SECTION 9 — Press Bar */}
      <section className="section-black py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-8">
            <div className="flex-1 h-px bg-white/15" />
            <span className="text-white/40 text-xs uppercase tracking-widest font-body">As seen in</span>
            <div className="flex-1 h-px bg-white/15" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 text-white/40 text-sm md:text-base font-body tracking-wider">
            <span className="font-bold italic">AFAR</span>
            <span>Bloomberg</span>
            <span className="uppercase text-xs tracking-[0.15em]">HONG KONG TATLER</span>
            <span className="italic">Robb Report</span>
            <span>The Telegraph</span>
            <span className="uppercase text-xs tracking-[0.1em]">TRAVEL+LEISURE</span>
            <span className="italic tracking-widest">VOGUE</span>
          </div>
        </div>
      </section>
    </main>
  );
}
