import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ChevronDown, MapPin, Users, Calendar, DollarSign } from "lucide-react";

const ITINERARY = [
  { day: "Day 1", title: "Arrive in Cairo", desc: "Welcome to Egypt. Private transfer to your luxury hotel in central Cairo. Evening welcome dinner on a rooftop overlooking the Nile." },
  { day: "Day 2", title: "The Great Pyramids & Sphinx", desc: "Private guided tour of the Giza Plateau with early morning access before the crowds. Explore the interior chambers with your Egyptologist." },
  { day: "Day 3", title: "Egyptian Museum & Old Cairo", desc: "Discover the treasures of Tutankhamun at the Grand Egyptian Museum, followed by a walking tour of Islamic Cairo's medieval streets." },
  { day: "Day 4", title: "Fly to Luxor", desc: "Morning flight to Luxor. Afternoon exploring the east bank — Karnak Temple and Luxor Temple at sunset." },
  { day: "Day 5", title: "Valley of the Kings", desc: "Early morning hot air balloon ride over the west bank. Private access to select tombs in the Valley of the Kings." },
  { day: "Day 6", title: "Board the Dahabiya", desc: "Embark on your private dahabiya sailboat for a three-night Nile cruise. Afternoon sailing with tea on deck." },
  { day: "Day 7", title: "Temples Along the Nile", desc: "Stop at Edfu and Kom Ombo temples. Evening cooking class with your onboard chef preparing traditional Egyptian dishes." },
  { day: "Day 8", title: "Arrive in Aswan", desc: "Disembark in Aswan. Visit Philae Temple and sail a felucca around Elephantine Island. Evening at leisure." },
  { day: "Day 9", title: "Abu Simbel Excursion", desc: "Dawn drive to Abu Simbel to witness the colossal temples of Ramesses II. Return to Aswan for a Nubian village visit." },
  { day: "Day 10", title: "Departure", desc: "Final morning at leisure. Private transfer to Aswan airport for your flight home, carrying memories that will last a lifetime." },
];

export default function SingleJourneyPage() {
  const { id } = useParams();
  const [openDay, setOpenDay] = useState<number | null>(0);

  return (
    <main className="pb-14">
      {/* Breadcrumb */}
      <div className="section-cream pt-20 px-6 md:px-10">
        <div className="max-w-7xl mx-auto py-4 text-xs text-muted-foreground font-body">
          <Link to="/" className="hover:text-gold transition-colors">Home</Link>
          <span className="mx-2">›</span>
          <Link to="/journeys" className="hover:text-gold transition-colors">Egypt Journeys</Link>
          <span className="mx-2">›</span>
          <span className="text-foreground">Classic Egypt Journey</span>
        </div>
      </div>

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end">
        <img src="https://images.unsplash.com/photo-1553913861-c0fddf2619ee?w=1200&q=80" alt="Classic Egypt" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-6 md:px-10 pb-12 max-w-7xl mx-auto w-full">
          <h1 className="heading-display text-white text-4xl md:text-6xl">Classic Egypt Journey</h1>
        </div>
      </section>

      {/* Content */}
      <section className="section-cream py-16 px-6">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12">
          {/* Itinerary */}
          <div className="lg:w-[65%]">
            <h2 className="heading-serif text-3xl text-foreground mb-8">Your Itinerary</h2>
            <div className="space-y-3">
              {ITINERARY.map((item, i) => (
                <div key={i} className="bg-white rounded-lg overflow-hidden shadow-sm">
                  <button
                    onClick={() => setOpenDay(openDay === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left hover:bg-cream/50 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="text-gold font-body text-sm font-bold">{item.day}</span>
                      <span className="font-heading text-lg text-foreground">{item.title}</span>
                    </div>
                    <ChevronDown size={18} className={`text-muted-foreground transition-transform duration-300 ${openDay === i ? "rotate-180" : ""}`} />
                  </button>
                  {openDay === i && (
                    <div className="px-5 pb-5 text-sm text-muted-foreground font-body leading-relaxed animate-fade-up">
                      {item.desc}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:w-[35%]">
            <div className="bg-white rounded-lg shadow-sm p-8 lg:sticky lg:top-20">
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-sm font-body">
                  <DollarSign size={16} className="text-gold" />
                  <span>from <strong>$4,950</strong> per person</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-body">
                  <Calendar size={16} className="text-gold" />
                  <span>10 Days</span>
                </div>
                <div className="flex items-center gap-3 text-sm font-body">
                  <Users size={16} className="text-gold" />
                  <span>Max 12 guests</span>
                </div>
              </div>

              <h3 className="font-heading text-xl text-foreground mb-5">Enquire About This Journey</h3>
              <form className="space-y-3">
                <input className="pill-input w-full" placeholder="Your Name" />
                <input className="pill-input w-full" placeholder="Email Address" />
                <input className="pill-input w-full" placeholder="Travel Dates" />
                <input className="pill-input w-full" placeholder="No. Travellers" />
                <textarea className="pill-input w-full rounded-2xl h-24 resize-none" placeholder="Message" />
                <button type="button" className="pill-button-gold w-full">Enquire About This Journey</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="section-cream py-16 px-6 border-t border-foreground/5">
        <div className="max-w-7xl mx-auto">
          <h2 className="heading-serif text-3xl text-center text-foreground mb-10">You might also like</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: "Luxury Nile Cruise", image: "https://images.unsplash.com/photo-1539768942893-daf3538e9819?w=600&q=80", price: "$6,200" },
              { title: "White Desert Safari", image: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?w=600&q=80", price: "$3,800" },
              { title: "Family Egypt Adventure", image: "https://images.unsplash.com/photo-1541300613939-71366a840d8a?w=600&q=80", price: "$4,200" },
            ].map(j => (
              <Link to="/journeys" key={j.title} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
                <div className="h-48 overflow-hidden">
                  <img src={j.image} alt={j.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
                </div>
                <div className="p-5">
                  <h3 className="font-heading text-xl text-foreground">{j.title}</h3>
                  <span className="text-gold text-sm font-body font-bold">from {j.price}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
