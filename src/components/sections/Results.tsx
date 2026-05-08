import { motion } from "framer-motion";

const bars = [
  { label: "Brand A — luxury skincare", value: 92, metric: "+820% engagement" },
  { label: "Brand B — fintech app", value: 78, metric: "$14M earned media" },
  { label: "Brand C — fashion drop", value: 96, metric: "Sold out in 9 min" },
  { label: "Brand D — wellness startup", value: 64, metric: "62 press placements" },
];

export function Results() {
  return (
    <section id="results" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Results & analytics</p>
          <h2 className="font-display text-4xl sm:text-6xl leading-[1.05] mb-6">
            Numbers that look good in a <em className="italic text-gradient-gold font-normal">boardroom</em>.
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-md">
            Every campaign is measured against revenue, reach and reputation —
            not vanity metrics. Here's what our last twelve months delivered.
          </p>
        </div>

        <div className="glass rounded-3xl p-8 space-y-8">
          {bars.map((b, i) => (
            <div key={b.label}>
              <div className="flex justify-between items-baseline mb-2">
                <span className="text-sm text-muted-foreground">{b.label}</span>
                <span className="font-display text-gold">{b.metric}</span>
              </div>
              <div className="h-2 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${b.value}%` }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 1.4, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
                  className="h-full bg-gradient-to-r from-gold-soft via-gold to-gold-soft glow-gold"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
