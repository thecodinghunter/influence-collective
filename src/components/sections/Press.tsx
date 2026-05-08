import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const articles = [
  { source: "Forbes", date: "Mar 2026", title: "How Lumen&Co quietly became the agency behind every viral launch." },
  { source: "Vogue Business", date: "Feb 2026", title: "Inside the studio rewriting luxury PR for the TikTok era." },
  { source: "TechCrunch", date: "Jan 2026", title: "The PR partner Series-B founders are quietly fighting over." },
  { source: "Bloomberg", date: "Dec 2025", title: "From obscurity to the front page in 90 days — the new playbook." },
];

export function Press() {
  return (
    <section id="press" className="relative py-32 px-6 bg-card/30">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">News & coverage</p>
          <h2 className="font-display text-4xl sm:text-6xl leading-[1.05] max-w-3xl">
            On the <em className="italic text-gradient-gold font-normal">cover</em>, in the conversation.
          </h2>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {articles.map((a, i) => (
            <motion.a
              key={a.title}
              href="#"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group grid grid-cols-12 items-center gap-6 py-8 hover:bg-card/50 transition-colors px-2"
            >
              <span className="col-span-3 md:col-span-2 font-display text-xl text-gold">{a.source}</span>
              <span className="hidden md:inline col-span-2 text-sm text-muted-foreground">{a.date}</span>
              <h3 className="col-span-7 md:col-span-7 font-display text-xl md:text-2xl group-hover:text-gradient-gold transition">
                {a.title}
              </h3>
              <ArrowUpRight className="col-span-2 md:col-span-1 justify-self-end text-muted-foreground group-hover:text-gold group-hover:rotate-45 transition-all" />
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
