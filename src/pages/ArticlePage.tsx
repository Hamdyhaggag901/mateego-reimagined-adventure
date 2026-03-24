import { useParams, Link } from "react-router-dom";

const IMAGES = {
  pyramids: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1200&q=80",
  nile: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1200&q=80",
  luxor: "https://images.unsplash.com/photo-1562679299-9d7e5d5c4fc0?w=1200&q=80",
  desert: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=1200&q=80",
  cairo: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1200&q=80",
};

interface Article {
  title: string;
  heroImage: string;
  metaTitle: string;
  metaDesc: string;
  date: string;
  readTime: string;
  sections: { heading: string; content: string }[];
}

const ARTICLES: Record<string, Article> = {
  "best-time-to-visit-egypt": {
    title: "Best Time to Visit Egypt in 2026",
    heroImage: IMAGES.pyramids,
    metaTitle: "Best Time to Visit Egypt in 2026 | Weather, Crowds & Tips | Mateego Explorers",
    metaDesc: "Plan your 2026 Egypt trip with our expert guide on the best time to visit Egypt. Learn about weather seasons, crowd levels, festivals, and insider tips for every month.",
    date: "January 15, 2026",
    readTime: "8 min read",
    sections: [
      { heading: "When Should You Visit Egypt?", content: "Egypt is a year-round destination, but the best time to visit depends on what you want to experience. The peak tourist season runs from October through April, when temperatures are comfortable for exploring outdoor sites like the Pyramids of Giza, the Valley of the Kings, and Abu Simbel. Winter months (December–February) offer the most pleasant weather with daytime highs around 20–25°C in Upper Egypt." },
      { heading: "Spring (March–May): Shoulder Season", content: "Spring offers a sweet spot of pleasant temperatures and fewer crowds than the peak winter months. March and April are excellent for Nile cruises and temple visits. Be aware of the Khamsin — occasional hot, dusty winds that can blow in from the Sahara, typically in April and May. The Red Sea coast is beautiful during spring, with warm water temperatures perfect for snorkelling and diving." },
      { heading: "Summer (June–September): Desert Heat", content: "Summer in Egypt means intense heat, particularly in Upper Egypt where temperatures can exceed 45°C. However, this is actually an excellent time for Red Sea beach holidays and Sinai adventures, as coastal areas remain comfortable. Cairo can be hot but manageable with early morning and evening sightseeing. Summer also brings significantly lower prices and virtually no crowds at major sites." },
      { heading: "Autumn (October–November): Perfect Season", content: "October and November are widely considered the best months to visit Egypt. Temperatures have cooled from summer extremes, tourist crowds haven't yet reached winter peaks, and prices remain reasonable. This is the ideal time for a comprehensive Egypt tour combining Cairo, Luxor, Aswan, and a Nile cruise." },
      { heading: "Winter (December–February): Peak Season", content: "Winter is Egypt's busiest tourist season, and for good reason. Comfortable temperatures make it ideal for exploring archaeological sites. Christmas and New Year's are particularly popular, so book well in advance. The Abu Simbel Sun Festival on February 22nd is a remarkable event when sunlight illuminates the inner sanctuary of Ramses II's temple." },
      { heading: "Our Expert Recommendation", content: "For first-time visitors, we recommend October or November for the perfect balance of weather, crowd levels, and pricing. For Nile cruises, January and February offer magical cool mornings on the water. For budget-conscious travellers, May and September provide good weather at lower prices. Whatever month you choose, our Egypt specialists will design your trip to make the most of every moment." },
    ],
  },
  "luxury-hotels-cairo": {
    title: "19 Top Luxury Hotels in Cairo",
    heroImage: IMAGES.cairo,
    metaTitle: "19 Best Luxury Hotels in Cairo 2026 | 5-Star Stays | Mateego Explorers",
    metaDesc: "Discover the finest luxury hotels in Cairo for 2026. From historic palaces to modern 5-star properties with Nile views and pyramid panoramas.",
    date: "February 3, 2026",
    readTime: "12 min read",
    sections: [
      { heading: "Cairo's Finest Luxury Accommodations", content: "Cairo's luxury hotel scene has undergone a remarkable transformation in recent years. From grand colonial-era palaces that have hosted royalty to sleek contemporary towers with floor-to-ceiling Nile views, the city offers world-class accommodation for every taste. Our Egypt travel specialists have personally inspected and stayed at each of these properties to bring you an honest, insider perspective." },
      { heading: "Historic Palace Hotels", content: "The Marriott Mena House sits at the foot of the Giza Pyramids, offering guests the extraordinary privilege of waking up to pyramid views from their bedroom window. Originally built as a hunting lodge for Khedive Ismail in 1869, it combines old-world elegance with modern luxury. The Sofitel Legend Old Cataract in nearby Aswan (included for its legendary status) inspired Agatha Christie's 'Death on the Nile' and remains one of Africa's most storied hotels." },
      { heading: "Modern Luxury on the Nile", content: "The Four Seasons Hotel Cairo at Nile Plaza sets the standard for contemporary luxury in the city. Its riverside terrace restaurants, lavish spa, and impeccable service make it a perennial favourite among discerning travellers. The St. Regis Cairo offers butler service in every room and stunning views of the Nile from its prime Garden City location." },
      { heading: "Boutique & Design Hotels", content: "For travellers seeking character and intimacy, Cairo's boutique hotel scene is blossoming. Restored Ottoman houses in Islamic Cairo, design-forward properties in Zamalek, and art-filled guesthouses offer alternatives to the large international chains. These properties often provide the most authentic Cairo experience, with personalised service and deep neighbourhood connections." },
      { heading: "Hotels with Pyramid Views", content: "Nothing compares to watching the Pyramids glow golden at sunset from your private balcony. The Mena House leads this category, but several newer properties in the Giza area now offer comparable views with more contemporary design. Our specialists can match you with the perfect property based on your priorities — whether that's proximity to the Pyramids, Nile-side location, or central Cairo convenience." },
      { heading: "How We Can Help", content: "At Mateego Explorers, we have preferred rates and VIP arrangements at Cairo's finest hotels. Our relationships with hotel management mean our guests receive room upgrades, spa credits, and special amenities that aren't available through standard booking channels. Let us handle every detail of your Cairo stay." },
    ],
  },
  "guide-to-nile-cruises": {
    title: "Ultimate Guide to Nile Cruises",
    heroImage: IMAGES.nile,
    metaTitle: "Ultimate Guide to Nile Cruises in Egypt 2026 | Mateego Explorers",
    metaDesc: "Everything you need to know about Nile cruises in Egypt. Compare dahabiya vs luxury ships, routes, best season, and what to expect on your Nile river journey.",
    date: "March 1, 2026",
    readTime: "10 min read",
    sections: [
      { heading: "Why a Nile Cruise Should Be on Your Bucket List", content: "Sailing the Nile is the most iconic way to experience Egypt. For millennia, this river has been Egypt's lifeline — the pharaohs sailed it, Cleopatra floated upon it, and today's travellers discover its magic from the deck of beautifully appointed vessels. A Nile cruise connects the great temple sites of Upper Egypt in a seamless, relaxing journey that combines exploration with pure luxury." },
      { heading: "Dahabiya vs. Large Cruise Ships", content: "The traditional dahabiya is a two-masted wooden sailing vessel carrying just 6–16 passengers. These intimate boats can dock at smaller temples and villages that large ships bypass, offering a more authentic and exclusive experience. Large cruise ships (typically 50–150 passengers) offer more amenities — swimming pools, spas, multiple restaurants — and tend to be more affordable. Our recommendation for discerning travellers is always the dahabiya for its intimacy and flexibility." },
      { heading: "The Classic Route: Luxor to Aswan", content: "The most popular Nile cruise route runs between Luxor and Aswan (or vice versa), typically taking 4–5 nights. Key stops include Edfu Temple (dedicated to Horus), Kom Ombo (the unique double temple), and the lock at Esna. Some itineraries include Dendera and Abydos temples on extended 7-night sailings. We always recommend the southbound direction (Luxor to Aswan) to follow the river's current." },
      { heading: "What to Expect Onboard", content: "Life aboard a Nile cruise is a perfect balance of exploration and relaxation. Mornings typically involve guided temple visits with your private Egyptologist. Afternoons are spent sailing, with tea and refreshments on deck as palm-fringed villages and desert landscapes drift past. Evenings bring gourmet dining (often Egyptian and international cuisine), followed by stargazing or cultural performances." },
      { heading: "Best Time for a Nile Cruise", content: "The Nile cruise season runs from October through April, with December through February being peak season. October and November offer the best combination of pleasant weather and manageable crowds. We advise booking at least 4–6 months in advance for peak-season departures, especially for dahabiya sailings which have very limited capacity." },
      { heading: "Planning Your Perfect Nile Cruise", content: "Our Egypt specialists have personally sailed every vessel we recommend. We'll match you with the right boat based on your travel style, budget, and preferred dates. Whether you dream of a romantic dahabiya sailing or a family-friendly luxury ship, we ensure every detail is perfect — from your cabin selection to your onboard dining preferences." },
    ],
  },
  "hidden-gems-luxor": {
    title: "Hidden Gems of Luxor Temple",
    heroImage: IMAGES.luxor,
    metaTitle: "Hidden Gems of Luxor Temple | Secret Spots & History | Mateego Explorers",
    metaDesc: "Discover the hidden gems of Luxor Temple that most visitors miss. Expert Egyptologist insights on secret chambers, rare carvings, and the best times to visit.",
    date: "February 18, 2026",
    readTime: "7 min read",
    sections: [
      { heading: "Beyond the Tourist Trail at Luxor Temple", content: "Luxor Temple is one of Egypt's most visited monuments, yet most tourists see only a fraction of what it has to offer. Built primarily by Amenhotep III and Ramses II, this magnificent temple has served as a place of worship for over 3,400 years — and remarkably, it's still used for religious purposes today. Our expert Egyptologists reveal the hidden details and secret stories that make Luxor Temple one of the ancient world's greatest achievements." },
      { heading: "The Roman Frescoes", content: "Deep within the temple, a chamber contains remarkably preserved Roman-era frescoes painted over the original pharaonic reliefs. These colourful paintings date from the 3rd century AD when the temple was converted into a Roman military camp. Most visitors walk right past them, but they represent a fascinating layer of Luxor's multi-faith history — Egyptian, Roman, and Islamic architecture all coexist within the same walls." },
      { heading: "The Birth Room of Amenhotep III", content: "One of Luxor Temple's most intimate spaces is the 'Birth Room,' which contains elaborate reliefs depicting the divine conception and birth of Pharaoh Amenhotep III. The god Amun visits Queen Mutemwiya in these beautifully carved scenes, establishing the pharaoh's divine right to rule. The artistic quality and storytelling in this chamber rival anything in the Valley of the Kings." },
      { heading: "The Mosque of Abu el-Haggag", content: "Perched impossibly atop the ancient walls of Luxor Temple sits a functioning medieval mosque. Built in the 13th century when the temple was buried under centuries of Nile silt and debris, the mosque of Abu el-Haggag is a living reminder of how Luxor has continuously reinvented itself. During excavation, the mosque was preserved in place — creating one of Egypt's most extraordinary architectural juxtapositions." },
      { heading: "The Avenue of Sphinxes", content: "Recently restored after decades of excavation, the 2.7-kilometer Avenue of Sphinxes connecting Luxor Temple to Karnak Temple is one of Egypt's most ambitious archaeological achievements. Lined with over 1,350 sphinx statues, this ceremonial processional road was used during the annual Opet Festival when statues of the gods were carried between the two temples." },
      { heading: "Visiting at Night", content: "Luxor Temple is one of the few Egyptian monuments that can be visited after dark, and the experience is transformative. Dramatically lit against the night sky, the massive columns and statues take on an entirely different character. The crowds thin considerably after sunset, allowing for a more intimate and contemplative experience. We always recommend an evening visit as part of any Luxor itinerary." },
    ],
  },
  "first-timers-guide-egypt": {
    title: "A First-Timer's Guide to Egypt",
    heroImage: IMAGES.pyramids,
    metaTitle: "First-Timer's Guide to Egypt Travel 2026 | Tips & Advice | Mateego Explorers",
    metaDesc: "Everything first-time Egypt travellers need to know. From visa requirements and safety to packing tips, cultural etiquette, and must-see destinations.",
    date: "January 28, 2026",
    readTime: "11 min read",
    sections: [
      { heading: "Your First Trip to Egypt: What to Expect", content: "Egypt is one of the world's most rewarding travel destinations — a place where 5,000 years of history come alive before your eyes. For first-time visitors, the sheer scale of what's available can feel overwhelming. How many days do you need? What should you see first? Is it safe? This comprehensive guide answers every question and helps you plan the perfect first Egypt trip." },
      { heading: "Visa & Entry Requirements", content: "Most nationalities can obtain a visa on arrival at Egyptian airports for approximately $25 USD, or apply for an e-visa online before departure. Your passport must be valid for at least 6 months beyond your travel dates. The e-visa process is straightforward and typically processed within 5–7 business days. Our team handles all visa guidance as part of your trip planning." },
      { heading: "How Many Days Do You Need?", content: "For a comprehensive first visit, we recommend 10–14 days to cover Cairo, Luxor, Aswan, and a Nile cruise without feeling rushed. A shorter 7-day trip can comfortably cover Cairo and either a Nile cruise or a focused Luxor-Aswan itinerary. If you have only 5 days, focus on Cairo (2 days) and Luxor (3 days) for the most impactful introduction to ancient Egypt." },
      { heading: "Safety & Health", content: "Egypt is very safe for tourists. The main tourist areas — Cairo, Luxor, Aswan, the Red Sea, and the Nile corridor — are well-patrolled and welcoming. Standard travel precautions apply: stay hydrated, use sunscreen, and drink bottled water. Our on-the-ground team provides 24/7 support, and all our guides are trained in safety protocols. Travel insurance is strongly recommended." },
      { heading: "What to Pack", content: "Pack light, breathable clothing in natural fabrics. Both men and women should bring modest clothing for mosque visits (covering shoulders and knees). Comfortable walking shoes are essential — you'll cover significant distances at archaeological sites. Don't forget: high-SPF sunscreen, a wide-brimmed hat, sunglasses, and a light scarf for sun protection and mosque visits. A small daypack is invaluable for carrying water and a camera." },
      { heading: "Cultural Etiquette & Tips", content: "Egyptians are famously warm and hospitable. Learning a few Arabic phrases (like 'Shukran' for thank you) goes a long way. Tipping (baksheesh) is customary — small amounts for services rendered. Photography is usually welcome, but always ask before photographing people. At religious sites, dress modestly and remove shoes when entering mosques. Your private guide will navigate all cultural nuances, ensuring respectful and enriching interactions throughout your journey." },
    ],
  },
};

export default function ArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = slug ? ARTICLES[slug] : null;

  if (!article) {
    return (
      <main className="pb-14 pt-20 text-center">
        <h1 className="heading-serif text-3xl text-foreground">Article not found</h1>
        <Link to="/" className="pill-button-gold mt-6 inline-block">Back to Home</Link>
      </main>
    );
  }

  return (
    <main className="pb-14">
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-end">
        <img src={article.heroImage} alt={article.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 px-6 md:px-10 pb-12 max-w-7xl mx-auto w-full">
          <nav className="text-white/60 text-sm font-body mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">Journal</span>
          </nav>
          <h1 className="heading-display text-white text-3xl md:text-5xl max-w-3xl">{article.title}</h1>
          <div className="flex items-center gap-4 mt-4 text-white/60 text-sm font-body">
            <span>{article.date}</span>
            <span>·</span>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="section-cream py-16 md:py-24 px-6">
        <article className="max-w-3xl mx-auto">
          {article.sections.map((section, i) => (
            <div key={i} className="mb-12">
              <h2 className="font-heading text-2xl md:text-3xl text-foreground mb-4">{section.heading}</h2>
              <p className="text-muted-foreground font-body leading-relaxed text-base">{section.content}</p>
            </div>
          ))}
        </article>
      </section>

      {/* CTA */}
      <section className="section-dark py-16 md:py-20 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-serif text-3xl text-white mb-6">Ready to plan your Egypt journey?</h2>
          <p className="text-white/60 font-body mb-8">Our specialists are here to craft your perfect trip.</p>
          <Link to="/trip-planner" className="pill-button-gold">Start Planning</Link>
        </div>
      </section>
    </main>
  );
}
