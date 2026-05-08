import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const items = [
  {
    quote: "Lumen&Co didn't just run our launch — they made it culture. We trended in three countries before lunch.",
    name: "Olivia Hart",
    role: "Founder, Maison Noir",
  },
  {
    quote: "The ROI was immediate. 47 tier-1 placements and a Series B closed within the same quarter.",
    name: "Marcus Lin",
    role: "CEO, Atlas Capital",
  },
  {
    quote: "They operate like a creative agency, think like a hedge fund, and execute like a war room.",
    name: "Priya Shah",
    role: "CMO, Aria Beauty",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-32 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6 text-center">Client stories</p>
        <h2 className="font-display text-4xl sm:text-6xl leading-[1.05] text-center mb-16">
          Trusted by <em className="italic text-gradient-gold font-normal">visionaries</em>.
        </h2>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="glass rounded-3xl p-8 flex flex-col gap-6 hover:border-gold/60 transition"
            >
              <Quote size={28} className="text-gold" />
              <p className="text-lg leading-relaxed">"{t.quote}"</p>
              <div className="mt-auto pt-4 border-t border-border">
                <p className="font-display text-lg">{t.name}</p>
                <p className="text-sm text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
