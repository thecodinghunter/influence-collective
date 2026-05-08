import { MessageCircle } from "lucide-react";

export function FloatingContact() {
  return (
    <a
      href="https://wa.me/10000000000"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-40 size-14 rounded-full bg-gold text-primary-foreground flex items-center justify-center glow-gold hover:scale-110 transition-transform"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={22} />
    </a>
  );
}
