export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 items-center justify-between text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <div className="size-6 rounded-full bg-gradient-to-br from-gold to-gold-soft" />
          <span className="font-display text-foreground">Lumen<span className="text-gradient-gold">&</span>Co</span>
          <span className="ml-3">© 2026 — Crafted with intent.</span>
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-gold transition">Privacy</a>
          <a href="#" className="hover:text-gold transition">Terms</a>
          <a href="#" className="hover:text-gold transition">Careers</a>
        </div>
      </div>
    </footer>
  );
}
