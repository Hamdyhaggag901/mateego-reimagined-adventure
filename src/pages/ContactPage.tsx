import { useState } from "react";
import { ChevronDown, MessageCircle } from "lucide-react";

const FAQS = [
  { q: "How far in advance should I book?", a: "We recommend booking at least 3–6 months in advance to secure the best guides and accommodation, though we can accommodate shorter lead times." },
  { q: "What's included in the journey price?", a: "All private guiding, accommodation, internal flights, most meals, and all entrance fees are included. International flights are not included." },
  { q: "Can you arrange trips for large groups?", a: "Absolutely. We regularly arrange journeys for groups of up to 20 people, including multi-family trips and corporate retreats." },
  { q: "Is Egypt safe to visit?", a: "Yes. Egypt is one of the safest countries in the region for tourists. Our local team monitors conditions constantly and all our guides are trained in safety protocols." },
  { q: "Do you offer travel insurance?", a: "While we don't sell insurance directly, we strongly recommend comprehensive travel insurance and can suggest trusted providers." },
  { q: "Can I customise a journey from your collection?", a: "Every journey in our collection is a starting point. We tailor every detail — duration, pace, hotels, experiences — to suit your preferences." },
];

export default function ContactPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="pb-14">
      {/* Hero */}
      <section className="relative h-[40vh] min-h-[300px] flex items-end">
        <img src="https://images.unsplash.com/photo-1572252009286-268acec5ca0a?w=1200&q=80" alt="Contact" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 px-6 md:px-10 pb-12 max-w-7xl mx-auto w-full">
          <h1 className="heading-display text-white text-4xl md:text-6xl">Get in Touch</h1>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="section-cream py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Form */}
          <div>
            <h2 className="heading-serif text-3xl text-foreground mb-6">Send us a message</h2>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input className="pill-input w-full" placeholder="First Name*" />
                <input className="pill-input w-full" placeholder="Last Name*" />
              </div>
              <input className="pill-input w-full" placeholder="Email Address*" />
              <input className="pill-input w-full" placeholder="Phone Number" />
              <input className="pill-input w-full" placeholder="Subject" />
              <textarea className="pill-input w-full rounded-2xl h-32 resize-none" placeholder="Your Message*" />
              <button type="button" className="pill-button-gold">Send Message</button>
            </form>
          </div>

          {/* Info */}
          <div>
            <h2 className="heading-serif text-3xl text-foreground mb-6">Contact Information</h2>
            <div className="space-y-5 font-body text-sm">
              <div>
                <h4 className="font-bold text-foreground mb-1">Phone</h4>
                <p className="text-muted-foreground">+201121012676</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Email</h4>
                <p className="text-muted-foreground">enquire@mateegoexplorers.com</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Office Hours</h4>
                <p className="text-muted-foreground">Monday — Friday: 9:00 AM — 6:00 PM (EST)</p>
                <p className="text-muted-foreground">Saturday: 10:00 AM — 4:00 PM (EST)</p>
              </div>
              <div>
                <h4 className="font-bold text-foreground mb-1">Address</h4>
                <p className="text-muted-foreground">123 Nile View Street, Cairo, Egypt</p>
              </div>
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/201121012676"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex items-center gap-3 rounded-full px-6 py-3 text-sm font-body text-white transition-all hover:opacity-90 active:scale-95"
              style={{ backgroundColor: "#25D366" }}
            >
              <MessageCircle size={18} />
              Chat with us on WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="heading-serif text-3xl text-center text-foreground mb-12">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {FAQS.map((faq, i) => (
              <div key={i} className="bg-cream rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="font-heading text-lg text-foreground">{faq.q}</span>
                  <ChevronDown size={18} className={`text-muted-foreground flex-shrink-0 ml-4 transition-transform duration-300 ${openFaq === i ? "rotate-180" : ""}`} />
                </button>
                {openFaq === i && (
                  <div className="px-5 pb-5 text-sm text-muted-foreground font-body leading-relaxed animate-fade-up">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
