import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { value: 480, suffix: "+", label: "Campaigns delivered" },
  { value: 2.4, suffix: "B", label: "Combined media reach" },
  { value: 120, suffix: "+", label: "Brands scaled" },
  { value: 38, suffix: "", label: "Countries reached" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let raf = 0;
    const start = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - start) / 1600, 1);
      setN(Math.round(to * (1 - Math.pow(1 - p, 3)) * 10) / 10);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {Number.isInteger(to) ? Math.round(n) : n.toFixed(1)}
      {suffix}
    </span>
  );
}

export function About() {
  return (
    <section id="about" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
        <div className="lg:col-span-5">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">About the studio</p>
          <h2 className="font-display text-4xl sm:text-6xl leading-[1.05]">
            Stories that <em className="italic text-gradient-gold font-normal">earn</em> the front page.
          </h2>
        </div>
        <div className="lg:col-span-7 space-y-6 text-muted-foreground text-lg leading-relaxed">
          <p>
            For over a decade, Lumen&Co has partnered with category-defining founders
            and global brands to engineer media moments that translate into market share.
          </p>
          <p>
            From silent product drops to sold-out global activations, every campaign
            is architected around one belief: <span className="text-foreground">attention is the new currency.</span>
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: i * 0.1 }}
            className="glass rounded-2xl p-8"
          >
            <div className="font-display text-5xl sm:text-6xl text-gradient-gold">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <p className="mt-3 text-sm uppercase tracking-wider text-muted-foreground">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
