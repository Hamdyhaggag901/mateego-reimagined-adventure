import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/201121012676"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 right-4 z-[998] w-14 h-14 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110 active:scale-95"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} className="text-white" />
    </a>
  );
}
