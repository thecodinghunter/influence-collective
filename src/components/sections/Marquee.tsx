const brands = [
  "VOGUE", "FORBES", "TECHCRUNCH", "BLOOMBERG", "GQ", "WIRED",
  "ESQUIRE", "VANITY FAIR", "HARPER'S", "ROLLING STONE", "BAZAAR", "TIME",
];

export function Marquee() {
  return (
    <section className="py-16 border-y border-border bg-card/30 overflow-hidden">
      <p className="text-center text-xs uppercase tracking-[0.4em] text-muted-foreground mb-10">
        As featured in
      </p>
      <div className="flex animate-marquee whitespace-nowrap">
        {[...brands, ...brands].map((b, i) => (
          <span
            key={i}
            className="mx-12 font-display text-3xl sm:text-4xl text-muted-foreground/50 hover:text-gold transition-colors duration-300"
          >
            {b}
          </span>
        ))}
      </div>
    </section>
  );
}
