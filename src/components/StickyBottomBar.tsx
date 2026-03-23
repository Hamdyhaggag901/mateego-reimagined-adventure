import { Link } from "react-router-dom";

export default function StickyBottomBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-[999] bg-near-black">
      <div className="max-w-7xl mx-auto px-4 md:px-10 py-3 flex items-center justify-between">
        <span className="hidden md:inline font-heading text-white text-lg italic">
          Where would you like to travel?
        </span>
        <Link
          to="/trip-planner"
          className="pill-button-gold text-xs py-2.5 px-6 w-full md:w-auto text-center"
        >
          Start Planning
        </Link>
      </div>
    </div>
  );
}
