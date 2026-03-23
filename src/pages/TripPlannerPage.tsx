import { useState } from "react";
import { Link } from "react-router-dom";
import { X, ChevronLeft, ChevronRight, Check } from "lucide-react";

const DESTINATIONS_OPTIONS = ["Cairo & Giza", "Luxor", "Aswan", "Nile Cruise", "Siwa", "White Desert", "Alexandria"];
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const TRAVEL_WITH = ["Couple", "Family", "Group of Friends", "Solo", "2+ Families", "Other"];
const APPEALS = [
  "Seeing the Pyramids up close", "Sailing the Nile", "Sleeping under the stars in the desert",
  "Exploring ancient temples", "Visiting a Nubian village", "Soaring above Luxor in a hot air balloon",
  "Discovering hidden oases", "Private Egyptologist access", "Experiencing local food & culture",
];
const BUDGET_STOPS = ["$3,500", "$5,000", "$7,500", "$10,000", "$15,000", "$20,000", "$35,000", "$50,000+"];

const TOTAL_STEPS = 7;

export default function TripPlannerPage() {
  const [step, setStep] = useState(1);
  const [destinations, setDestinations] = useState<string[]>([]);
  const [destInput, setDestInput] = useState("");
  const [year, setYear] = useState(2026);
  const [months, setMonths] = useState<string[]>([]);
  const [travelWith, setTravelWith] = useState("");
  const [travelers, setTravelers] = useState(2);
  const [under18, setUnder18] = useState(0);
  const [appeals, setAppeals] = useState<string[]>([]);
  const [budget, setBudget] = useState(3);
  const [formData, setFormData] = useState({ firstName: "", lastName: "", phone: "", email: "" });

  const addDest = () => {
    const d = destInput.trim();
    if (d && !destinations.includes(d)) setDestinations([...destinations, d]);
    setDestInput("");
  };

  const toggleMonth = (m: string) => setMonths(months.includes(m) ? months.filter(x => x !== m) : [...months, m]);
  const toggleAppeal = (a: string) => {
    if (appeals.includes(a)) setAppeals(appeals.filter(x => x !== a));
    else if (appeals.length < 3) setAppeals([...appeals, a]);
  };

  const canNext = () => {
    if (step === 1) return destinations.length > 0;
    if (step === 2) return months.length > 0;
    if (step === 3) return travelWith !== "";
    return true;
  };

  return (
    <main className="min-h-screen section-cream pt-20 pb-20 px-6">
      {/* Progress */}
      <div className="max-w-2xl mx-auto mb-12">
        <div className="flex items-center justify-center gap-2 mb-2">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => (
            <div key={i} className={`h-1.5 rounded-full transition-all duration-500 ${
              i < step ? "w-8 bg-gold" : "w-4 bg-foreground/15"
            }`} />
          ))}
        </div>
        <p className="text-center text-xs text-muted-foreground font-body">Step {step} of {TOTAL_STEPS}</p>
      </div>

      <div className="max-w-2xl mx-auto">
        {/* STEP 1 */}
        {step === 1 && (
          <div>
            <h2 className="heading-serif text-3xl md:text-4xl text-center text-foreground mb-3">
              Where <em className="italic">would you like</em> to travel?
            </h2>
            <p className="text-center text-muted-foreground font-body mb-10 text-sm">
              Please select the destinations you'd like to visit
            </p>

            <div className="flex gap-2 mb-6">
              <input
                className="pill-input flex-1"
                placeholder="Type a destination..."
                value={destInput}
                onChange={(e) => setDestInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && addDest()}
              />
              <button onClick={addDest} className="pill-button-gold text-sm py-2 px-5">Add</button>
            </div>

            <div className="flex flex-wrap gap-2 mb-6">
              {DESTINATIONS_OPTIONS.filter(d => !destinations.includes(d)).map(d => (
                <button
                  key={d}
                  onClick={() => setDestinations([...destinations, d])}
                  className="rounded-full border border-foreground/15 px-4 py-2 text-sm font-body text-foreground/70 hover:border-gold hover:text-gold transition-all active:scale-95"
                >
                  {d}
                </button>
              ))}
            </div>

            {destinations.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-8">
                {destinations.map(d => (
                  <span key={d} className="flex items-center gap-1.5 bg-gold text-white rounded-full px-4 py-2 text-sm font-body">
                    {d}
                    <button onClick={() => setDestinations(destinations.filter(x => x !== d))}><X size={14} /></button>
                  </span>
                ))}
              </div>
            )}
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div>
            <h2 className="heading-serif text-3xl md:text-4xl text-center text-foreground mb-3">
              When <em className="italic">would you like</em> to travel to Egypt?
            </h2>
            <div className="flex items-center justify-center gap-6 my-8">
              <button onClick={() => setYear(year - 1)} className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center hover:border-gold transition-colors active:scale-95">
                <ChevronLeft size={16} />
              </button>
              <span className="font-heading text-2xl">{year}</span>
              <button onClick={() => setYear(year + 1)} className="w-8 h-8 rounded-full border border-foreground/20 flex items-center justify-center hover:border-gold transition-colors active:scale-95">
                <ChevronRight size={16} />
              </button>
            </div>
            <div className="grid grid-cols-3 md:grid-cols-4 gap-3">
              {MONTHS.map(m => (
                <button
                  key={m}
                  onClick={() => toggleMonth(m)}
                  className={`rounded-full py-3 text-sm font-body transition-all duration-300 active:scale-95 ${
                    months.includes(m)
                      ? "bg-gold text-white"
                      : "border border-foreground/15 text-foreground hover:border-gold"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div>
            <h2 className="heading-serif text-3xl md:text-4xl text-center text-foreground mb-10">
              Who are you travelling <em className="italic">to Egypt</em> with?
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
              {TRAVEL_WITH.map(t => (
                <button
                  key={t}
                  onClick={() => setTravelWith(t)}
                  className={`rounded-lg border-2 py-6 text-sm font-body transition-all duration-300 active:scale-95 ${
                    travelWith === t
                      ? "border-gold bg-gold/10 text-foreground"
                      : "border-foreground/10 text-foreground/70 hover:border-gold/50"
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div>
            <h2 className="heading-serif text-3xl md:text-4xl text-center text-foreground mb-10">
              How many <em className="italic">travellers?</em>
            </h2>
            <div className="space-y-6 max-w-sm mx-auto">
              <div>
                <label className="text-sm font-body text-muted-foreground mb-2 block">How many people will be travelling?</label>
                <select
                  value={travelers}
                  onChange={(e) => setTravelers(+e.target.value)}
                  className="pill-input w-full"
                >
                  {Array.from({ length: 21 }, (_, i) => <option key={i} value={i}>{i}</option>)}
                </select>
              </div>
              <div>
                <label className="text-sm font-body text-muted-foreground mb-2 block">How many of the group are under 18?</label>
                <select
                  value={under18}
                  onChange={(e) => setUnder18(+e.target.value)}
                  className="pill-input w-full"
                >
                  {Array.from({ length: 11 }, (_, i) => <option key={i} value={i}>{i}</option>)}
                </select>
              </div>
            </div>
          </div>
        )}

        {/* STEP 5 */}
        {step === 5 && (
          <div>
            <h2 className="heading-serif text-3xl md:text-4xl text-center text-foreground mb-3">
              Which of these are most <em className="italic">appealing?</em>
            </h2>
            <p className="text-center text-muted-foreground font-body mb-8 text-sm">Please select up to three things</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {APPEALS.map(a => (
                <button
                  key={a}
                  onClick={() => toggleAppeal(a)}
                  className={`rounded-full px-5 py-3 text-sm font-body transition-all duration-300 active:scale-95 flex items-center gap-2 ${
                    appeals.includes(a)
                      ? "bg-gold text-white"
                      : "border border-foreground/15 text-foreground/70 hover:border-gold"
                  }`}
                >
                  {appeals.includes(a) && <Check size={14} />}
                  {a}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 6 */}
        {step === 6 && (
          <div>
            <h2 className="heading-serif text-3xl md:text-4xl text-center text-foreground mb-3">
              What is your <em className="italic">budget</em> for this trip?
            </h2>
            <p className="text-center text-muted-foreground font-body mb-10 text-sm">Price per person</p>
            <div className="max-w-lg mx-auto">
              <input
                type="range"
                min={0}
                max={BUDGET_STOPS.length - 1}
                value={budget}
                onChange={(e) => setBudget(+e.target.value)}
                className="w-full accent-gold"
              />
              <div className="flex justify-between mt-2">
                {BUDGET_STOPS.map((s, i) => (
                  <span key={s} className={`text-xs font-body ${i === budget ? "text-gold font-bold" : "text-muted-foreground"}`}>
                    {i % 2 === 0 || i === budget ? s : ""}
                  </span>
                ))}
              </div>
              <p className="text-center mt-6 font-heading text-2xl text-foreground">{BUDGET_STOPS[budget]}</p>
            </div>
          </div>
        )}

        {/* STEP 7 */}
        {step === 7 && (
          <div>
            <h2 className="heading-serif text-3xl md:text-4xl text-center text-foreground mb-10">
              Finally, how should we <em className="italic">contact you?</em>
            </h2>
            <div className="space-y-4 max-w-md mx-auto">
              <input className="pill-input w-full" placeholder="First Name" value={formData.firstName} onChange={e => setFormData({...formData, firstName: e.target.value})} />
              <input className="pill-input w-full" placeholder="Last Name" value={formData.lastName} onChange={e => setFormData({...formData, lastName: e.target.value})} />
              <input className="pill-input w-full" placeholder="Phone (+20)" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} />
              <input className="pill-input w-full" placeholder="Email Address" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} />
              <div className="space-y-3 pt-4">
                <label className="flex items-start gap-2 text-xs text-muted-foreground font-body cursor-pointer">
                  <input type="checkbox" className="mt-0.5 accent-gold" />
                  <span>I am happy to receive emails from Mateego Explorers</span>
                </label>
                <label className="flex items-start gap-2 text-xs text-muted-foreground font-body cursor-pointer">
                  <input type="checkbox" className="mt-0.5 accent-gold" />
                  <span>I am happy for Mateego to contact me by SMS</span>
                </label>
                <label className="flex items-start gap-2 text-xs text-muted-foreground font-body cursor-pointer">
                  <input type="checkbox" className="mt-0.5 accent-gold" />
                  <span>I am happy for Mateego to contact me using the details provided</span>
                </label>
              </div>
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-between mt-12">
          {step > 1 ? (
            <button onClick={() => setStep(step - 1)} className="pill-button-outline text-sm">Previous</button>
          ) : <div />}
          {step < TOTAL_STEPS ? (
            <button
              onClick={() => canNext() && setStep(step + 1)}
              className={`pill-button-gold text-sm ${!canNext() ? "opacity-40 pointer-events-none" : ""}`}
            >
              Next Step
            </button>
          ) : (
            <button className="pill-button-gold text-sm">Submit</button>
          )}
        </div>
      </div>
    </main>
  );
}
