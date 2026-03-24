import { useParams, Link } from "react-router-dom";

const IMAGES = {
  pyramids: "https://images.unsplash.com/photo-1539768942893-daf53e448371?w=1200&q=80",
  nile: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?w=1200&q=80",
  luxor: "https://images.unsplash.com/photo-1562679299-9d7e5d5c4fc0?w=1200&q=80",
  desert: "https://images.unsplash.com/photo-1504450758481-7338eba7524a?w=1200&q=80",
  cairo: "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1200&q=80",
};

interface DestinationData {
  name: string;
  heroImage: string;
  metaTitle: string;
  metaDesc: string;
  intro: string;
  highlights: { title: string; desc: string }[];
  experiences: string[];
  bestTime: string;
  duration: string;
  gallery: string[];
}

const DESTINATIONS: Record<string, DestinationData> = {
  "cairo-giza": {
    name: "Cairo & Giza",
    heroImage: IMAGES.cairo,
    metaTitle: "Cairo Tours & Giza Pyramids Trips | Egypt Travel | Mateego Explorers",
    metaDesc: "Discover Cairo tours and Giza pyramids trips with Mateego Explorers. Experience the best of Egypt travel with private guided tours to the Great Pyramids, Sphinx, and Egyptian Museum.",
    intro: "Cairo, Egypt's sprawling capital, is a city where ancient wonders meet modern energy. Standing at the edge of the Giza plateau, the Great Pyramids rise from the desert — the last surviving Wonder of the Ancient World. Our private Cairo tours and Giza pyramids trips are designed for discerning travellers who want exclusive access, expert Egyptologist guides, and experiences far beyond the ordinary tourist trail. From the treasures of the Egyptian Museum to the vibrant Khan el-Khalili bazaar, every moment of your Egypt travel experience is thoughtfully curated.",
    highlights: [
      { title: "Great Pyramids of Giza", desc: "Stand before the only surviving Wonder of the Ancient World with a private Egyptologist who brings 4,500 years of history to life." },
      { title: "The Egyptian Museum", desc: "Explore King Tutankhamun's golden treasures and thousands of ancient artifacts with VIP early-morning access." },
      { title: "Khan el-Khalili Bazaar", desc: "Wander through one of the oldest bazaars in the Middle East, sampling traditional Egyptian coffee and discovering handcrafted souvenirs." },
      { title: "Islamic Cairo & The Citadel", desc: "Discover the stunning mosques, madrasas, and medieval architecture of Historic Cairo, a UNESCO World Heritage Site." },
    ],
    experiences: ["Private sunrise visit to the Pyramids", "Camel ride across the Giza plateau", "Sound & Light Show at the Pyramids", "Dinner cruise on the Nile", "Street food tour of Old Cairo"],
    bestTime: "October to April offers the most pleasant temperatures for exploring Cairo's outdoor sites. The winter months (December–February) are ideal for Giza pyramids trips.",
    duration: "3–5 days recommended",
    gallery: [IMAGES.pyramids, IMAGES.cairo],
  },
  "luxor-karnak": {
    name: "Luxor & Karnak",
    heroImage: IMAGES.luxor,
    metaTitle: "Luxor Temple Tours & Karnak Temple Egypt | Mateego Explorers",
    metaDesc: "Explore Luxor temple tours and Karnak temple in Egypt with expert guides. Private access to the Valley of the Kings, hot air balloon rides, and ancient temple experiences.",
    intro: "Luxor is often called the world's greatest open-air museum, and for good reason. Home to the Valley of the Kings, Karnak Temple, and Luxor Temple, this ancient city on the banks of the Nile contains more historic monuments than almost any other place on earth. Our Luxor temple tours offer private access to royal tombs, sunrise hot air balloon flights over the West Bank, and intimate experiences guided by leading Egyptologists. Whether you're exploring the towering columns of Karnak Temple Egypt or watching the sunset from the Nile, Luxor delivers an unforgettable Egypt travel experience.",
    highlights: [
      { title: "Valley of the Kings", desc: "Enter the elaborately decorated tombs of pharaohs including Tutankhamun, Ramses II, and Seti I with VIP access." },
      { title: "Karnak Temple Complex", desc: "Walk through the Great Hypostyle Hall — 134 massive columns covering an area larger than most European cathedrals." },
      { title: "Hot Air Balloon at Sunrise", desc: "Soar above the West Bank as dawn light illuminates the temples, colossi, and green ribbon of the Nile Valley." },
      { title: "Luxor Temple at Night", desc: "Experience the dramatic floodlit beauty of Luxor Temple during an exclusive after-hours visit." },
    ],
    experiences: ["Private tomb access in the Valley of the Kings", "Hot air balloon ride at dawn", "Felucca sailing on the Nile", "Visit the Temple of Hatshepsut", "Explore the Colossi of Memnon"],
    bestTime: "October through March provides comfortable temperatures for Luxor temple tours. Early morning visits are recommended to avoid midday heat.",
    duration: "3–4 days recommended",
    gallery: [IMAGES.luxor, IMAGES.nile],
  },
  "aswan-abu-simbel": {
    name: "Aswan & Abu Simbel",
    heroImage: IMAGES.nile,
    metaTitle: "Aswan Travel & Abu Simbel Day Trip | Egypt Tours | Mateego Explorers",
    metaDesc: "Plan your Aswan travel and Abu Simbel day trip with Mateego Explorers. Discover Philae Temple, sail on a traditional felucca, and witness the colossal temples of Ramses II.",
    intro: "Aswan is Egypt at its most serene — a place where golden sand dunes meet the sparkling blue Nile, and Nubian villages paint the riverbanks in brilliant colours. From here, the legendary Abu Simbel day trip takes you deep into the southern desert to witness the colossal temples of Ramses II, one of ancient Egypt's most awe-inspiring achievements. Our Aswan travel itineraries combine relaxed Nile sailing, temple exploration, and authentic Nubian cultural encounters for a truly immersive Egypt experience.",
    highlights: [
      { title: "Abu Simbel Temples", desc: "Marvel at the four colossal statues of Ramses II and the incredible engineering feat of relocating these temples in the 1960s." },
      { title: "Philae Temple", desc: "Take a boat to the island sanctuary of Isis, one of Egypt's most beautifully preserved Ptolemaic temples." },
      { title: "Nubian Village Visit", desc: "Cross the Nile to experience the warmth and vibrant culture of a traditional Nubian community." },
      { title: "Felucca Sailing", desc: "Glide past Elephantine Island, Kitchener's Botanical Garden, and the Aga Khan Mausoleum on a traditional wooden sailboat." },
    ],
    experiences: ["Sunrise at Abu Simbel", "Felucca sailing at sunset", "Nubian dinner with traditional music", "Visit the Unfinished Obelisk", "Explore the Aswan souk"],
    bestTime: "November through February offers the best weather for Aswan travel and Abu Simbel day trips. The Sun Festival at Abu Simbel occurs on February 22 and October 22.",
    duration: "2–3 days recommended",
    gallery: [IMAGES.nile, IMAGES.desert],
  },
  "nile-cruises": {
    name: "Nile Cruises",
    heroImage: IMAGES.nile,
    metaTitle: "Nile Cruise Packages & Egypt Nile River Tours | Mateego Explorers",
    metaDesc: "Explore luxury Nile cruise packages and Egypt Nile river tours. Sail between Luxor and Aswan on a private dahabiya or 5-star cruise ship with expert Egyptologist guides.",
    intro: "A Nile cruise is the quintessential Egypt experience — sailing the same waters that pharaohs navigated thousands of years ago, watching ancient temples and lush palm-fringed villages drift past your deck. Our Nile cruise packages range from intimate private dahabiya sailboats to luxurious 5-star vessels, all accompanied by expert Egyptologist guides. Whether you choose a classic Luxor-to-Aswan itinerary or a longer Egypt Nile river tour, every moment on the water is designed for wonder, relaxation, and discovery.",
    highlights: [
      { title: "Private Dahabiya Cruises", desc: "Sail on a traditional two-masted vessel with just 6–10 guests, stopping at temples and villages that larger boats can't reach." },
      { title: "Luxury 5-Star Vessels", desc: "Enjoy world-class dining, spa facilities, and panoramic sun decks on Egypt's finest cruise ships." },
      { title: "Temple Stops Along the Nile", desc: "Visit Edfu, Kom Ombo, Esna, and other magnificent temples accessible only by river." },
      { title: "Onboard Egyptology Lectures", desc: "Our expert guides bring ancient history to life with evening talks and Q&A sessions under the stars." },
    ],
    experiences: ["Sunset cocktails on deck", "Private temple visits at each stop", "Traditional Egyptian cooking class", "Star-gazing on the upper deck", "Nubian music & dance performance"],
    bestTime: "October to April is ideal for Nile cruise packages. December and January offer the most comfortable temperatures for Egypt Nile river tours.",
    duration: "4–7 nights recommended",
    gallery: [IMAGES.nile, IMAGES.luxor],
  },
  "siwa-oasis": {
    name: "Siwa Oasis",
    heroImage: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80",
    metaTitle: "Siwa Oasis Tours & Egypt Desert Experience | Mateego Explorers",
    metaDesc: "Discover Siwa Oasis tours and the ultimate Egypt desert experience. Explore ancient ruins, bathe in natural springs, and sleep under the stars in this remote paradise.",
    intro: "Siwa Oasis is one of Egypt's most magical and remote destinations — a lush palm-fringed haven nestled deep in the Western Desert, just 50 kilometers from the Libyan border. Our Siwa Oasis tours take you far from the crowds to discover ancient Oracle temples, crystal-clear natural springs, and vast sand seas stretching to the horizon. This Egypt desert experience offers a profound sense of tranquility, adventure, and connection with nature that's impossible to find anywhere else.",
    highlights: [
      { title: "Temple of the Oracle", desc: "Visit the ancient sanctuary where Alexander the Great was proclaimed a god — one of the most significant sites in the ancient world." },
      { title: "Cleopatra's Spring", desc: "Swim in a natural spring pool surrounded by palm trees, said to have been visited by Cleopatra herself." },
      { title: "Great Sand Sea", desc: "Explore the endless dunes of the Great Sand Sea on a 4x4 desert safari, watching sunset paint the landscape gold." },
      { title: "Shali Fortress", desc: "Wander the atmospheric ruins of the 13th-century mud-brick fortress that once housed the entire Siwan community." },
    ],
    experiences: ["4x4 desert safari into the Great Sand Sea", "Swimming in natural hot and cold springs", "Overnight camping under the stars", "Visit traditional Siwan homes", "Salt lake sunset experience"],
    bestTime: "October to March is best for Siwa Oasis tours. Summer temperatures can exceed 45°C, making the Egypt desert experience quite challenging.",
    duration: "2–3 days recommended",
    gallery: [IMAGES.desert, IMAGES.pyramids],
  },
  "white-desert": {
    name: "White Desert",
    heroImage: IMAGES.desert,
    metaTitle: "White Desert Egypt & Egypt Safari Tours | Mateego Explorers",
    metaDesc: "Experience the surreal White Desert Egypt landscape on our Egypt safari tours. Camp under the stars among chalk-white rock formations in one of the world's most otherworldly landscapes.",
    intro: "The White Desert is one of Egypt's most extraordinary natural wonders — a surreal landscape of chalk-white rock formations sculpted by millions of years of wind erosion into mushroom shapes, pillars, and fantastical forms. Our White Desert Egypt tours take you deep into this otherworldly terrain for an unforgettable Egypt safari experience. Camp under a canopy of stars, explore crystal mountains, and discover the Black Desert's volcanic hills on a journey that feels like travelling to another planet.",
    highlights: [
      { title: "Chalk Rock Formations", desc: "Witness the iconic white limestone sculptures that have been shaped by wind and sand into extraordinary forms over millennia." },
      { title: "Desert Camping", desc: "Sleep under one of the darkest, most star-filled skies on Earth, surrounded by ghostly white formations lit by campfire." },
      { title: "Crystal Mountain", desc: "Visit a hill embedded with quartz crystals that sparkle in the desert sun — a geological wonder unique to this region." },
      { title: "Black Desert", desc: "Contrast the white landscape with the volcanic Black Desert, where dark dolerite stones cover golden sand dunes." },
    ],
    experiences: ["Overnight camping with Bedouin guides", "4x4 safari across desert landscapes", "Sandboarding on golden dunes", "Exploring Bahariya Oasis", "Stargazing in total darkness"],
    bestTime: "November to March offers pleasant daytime temperatures for White Desert Egypt tours. Nights can be very cold (near freezing), so warm layers are essential.",
    duration: "2–3 days recommended",
    gallery: [IMAGES.desert, IMAGES.pyramids],
  },
  "alexandria": {
    name: "Alexandria",
    heroImage: IMAGES.cairo,
    metaTitle: "Alexandria Egypt Tours & Mediterranean Egypt | Mateego Explorers",
    metaDesc: "Explore Alexandria Egypt tours along the Mediterranean coast. Discover the Bibliotheca Alexandrina, Roman amphitheatre, and the rich Greco-Roman heritage of this legendary city.",
    intro: "Alexandria is Egypt's Mediterranean jewel — a cosmopolitan port city founded by Alexander the Great in 331 BC that once housed the greatest library in the ancient world. Our Alexandria Egypt tours reveal a different side of the country: Greco-Roman ruins, belle époque architecture, fresh seafood, and a breezy Mediterranean atmosphere. From the striking modern Bibliotheca Alexandrina to the atmospheric catacombs of Kom el-Shoqafa, Mediterranean Egypt offers a fascinating contrast to the pharaonic wonders of Upper Egypt.",
    highlights: [
      { title: "Bibliotheca Alexandrina", desc: "Visit the stunning modern library built to honor the legendary ancient Library of Alexandria, one of the world's great centers of learning." },
      { title: "Catacombs of Kom el-Shoqafa", desc: "Descend into extraordinary underground tombs that blend Egyptian, Greek, and Roman artistic traditions." },
      { title: "Citadel of Qaitbay", desc: "Explore this 15th-century fortress built on the site of the ancient Lighthouse of Alexandria, one of the Seven Wonders." },
      { title: "Roman Amphitheatre", desc: "Discover the well-preserved Kom el-Dikka amphitheatre, the only Roman theatre found in Egypt." },
    ],
    experiences: ["Seafood lunch along the Corniche", "Walking tour of the old European quarter", "Visit the Alexandria National Museum", "Explore Montaza Palace gardens", "Coffee at a historic literary café"],
    bestTime: "April to June and September to November offer the most pleasant Mediterranean weather for Alexandria Egypt tours.",
    duration: "1–2 days recommended",
    gallery: [IMAGES.cairo, IMAGES.nile],
  },
  "sinai": {
    name: "Sinai",
    heroImage: IMAGES.desert,
    metaTitle: "Sinai Peninsula Tours & Mount Sinai Egypt | Mateego Explorers",
    metaDesc: "Discover Sinai Peninsula tours and climb Mount Sinai Egypt at sunrise. Explore St. Catherine's Monastery, Red Sea coral reefs, and dramatic desert landscapes.",
    intro: "The Sinai Peninsula is a land of dramatic contrasts — towering granite mountains, vast desert plains, and pristine Red Sea coastline. Our Sinai Peninsula tours combine spiritual journeys to Mount Sinai Egypt and St. Catherine's Monastery with adventurous desert treks and world-class snorkelling. Whether you're watching sunrise from the summit of Mount Sinai, diving coral reefs at Dahab, or exploring remote wadis with Bedouin guides, the Sinai offers an Egypt experience unlike any other.",
    highlights: [
      { title: "Mount Sinai Sunrise Trek", desc: "Climb the sacred mountain where Moses is said to have received the Ten Commandments and witness a breathtaking sunrise above the clouds." },
      { title: "St. Catherine's Monastery", desc: "Visit one of the oldest Christian monasteries in the world, home to an extraordinary collection of ancient manuscripts and icons." },
      { title: "Dahab & Blue Hole", desc: "Snorkel or dive at the famous Blue Hole, one of the world's most spectacular underwater sinkholes." },
      { title: "Coloured Canyon", desc: "Hike through a narrow canyon with walls striped in vivid red, orange, yellow, and purple mineral formations." },
    ],
    experiences: ["Sunrise trek up Mount Sinai", "Snorkelling in the Red Sea", "Bedouin desert camp experience", "Star-gazing in the Sinai mountains", "Camel trek through desert wadis"],
    bestTime: "October to April is ideal for Sinai Peninsula tours. Summer heat can be extreme at lower elevations but Mount Sinai Egypt remains pleasant year-round.",
    duration: "3–5 days recommended",
    gallery: [IMAGES.desert, IMAGES.nile],
  },
};

export default function DestinationPage() {
  const { slug } = useParams<{ slug: string }>();
  const dest = slug ? DESTINATIONS[slug] : null;

  if (!dest) {
    return (
      <main className="pb-14 pt-20 text-center">
        <h1 className="heading-serif text-3xl text-foreground">Destination not found</h1>
        <Link to="/" className="pill-button-gold mt-6 inline-block">Back to Home</Link>
      </main>
    );
  }

  return (
    <main className="pb-14">
      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-end">
        <img src={dest.heroImage} alt={dest.name} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-6 md:px-10 pb-12 max-w-7xl mx-auto w-full">
          <nav className="text-white/60 text-sm font-body mb-4">
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <span className="mx-2">›</span>
            <span className="text-white">{dest.name}</span>
          </nav>
          <h1 className="heading-display text-white text-4xl md:text-6xl">{dest.name}</h1>
        </div>
      </section>

      {/* Intro */}
      <section className="section-cream py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <p className="text-muted-foreground font-body leading-relaxed text-lg">{dest.intro}</p>
          <div className="flex gap-6 mt-8 text-sm font-body">
            <div className="bg-white rounded-full px-5 py-2">
              <span className="text-gold font-bold">Best time:</span> <span className="text-foreground">{dest.bestTime.split('.')[0]}</span>
            </div>
            <div className="bg-white rounded-full px-5 py-2">
              <span className="text-gold font-bold">Duration:</span> <span className="text-foreground">{dest.duration}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading-serif text-3xl md:text-4xl text-foreground text-center mb-14">Highlights & Must-See Experiences</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {dest.highlights.map((h) => (
              <div key={h.title} className="bg-cream rounded-lg p-8">
                <h3 className="font-heading text-xl text-foreground mb-3">{h.title}</h3>
                <p className="text-sm text-muted-foreground font-body leading-relaxed">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="section-cream py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading-serif text-3xl md:text-4xl text-foreground text-center mb-10">What You'll Experience</h2>
          <ul className="space-y-4">
            {dest.experiences.map((exp) => (
              <li key={exp} className="flex items-start gap-3 font-body text-muted-foreground">
                <span className="text-gold mt-1">✦</span>
                <span>{exp}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Best Time */}
      <section className="py-16 md:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-serif text-3xl md:text-4xl text-foreground mb-6">Best Time to Visit</h2>
          <p className="text-muted-foreground font-body leading-relaxed">{dest.bestTime}</p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-dark py-16 md:py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-serif text-3xl md:text-4xl text-white mb-6">
            Ready to explore <em className="italic">{dest.name}</em>?
          </h2>
          <p className="text-white/60 font-body mb-10 max-w-lg mx-auto">
            Let our Egypt specialists craft a bespoke journey tailored to your interests and travel style.
          </p>
          <Link to="/trip-planner" className="pill-button-gold">Start Planning</Link>
        </div>
      </section>
    </main>
  );
}
