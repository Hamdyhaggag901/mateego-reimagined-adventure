import { useRef, useState, ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  children: ReactNode;
  showDots?: boolean;
  dotCount?: number;
  className?: string;
}

export default function HorizontalCarousel({ children, showDots, dotCount = 5, className = "" }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeDot, setActiveDot] = useState(0);

  const scroll = (dir: "left" | "right") => {
    const el = scrollRef.current;
    if (!el) return;
    const amount = el.clientWidth * 0.7;
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el || !showDots) return;
    const progress = el.scrollLeft / (el.scrollWidth - el.clientWidth);
    setActiveDot(Math.round(progress * (dotCount - 1)));
  };

  return (
    <div className={`relative group ${className}`}>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {children}
      </div>

      {/* Arrows */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white active:scale-95"
      >
        <ChevronLeft size={18} />
      </button>
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/90 shadow-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white active:scale-95"
      >
        <ChevronRight size={18} />
      </button>

      {/* Dots */}
      {showDots && (
        <div className="flex justify-center gap-2 mt-6">
          {Array.from({ length: dotCount }).map((_, i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === activeDot ? "bg-gold scale-125" : "bg-foreground/20"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
