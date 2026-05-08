import { motion } from "framer-motion";
import t1 from "@/assets/team-1.jpg";
import t2 from "@/assets/team-2.jpg";
import t3 from "@/assets/team-3.jpg";

const team = [
  { img: t1, name: "Daniel Reeve", role: "Founder & Creative Director" },
  { img: t2, name: "Elena Voss", role: "Head of Strategy" },
  { img: t3, name: "Jonas Albrecht", role: "Director of PR" },
];

export function Team() {
  return (
    <section id="team" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Leadership</p>
            <h2 className="font-display text-4xl sm:text-6xl leading-[1.05]">
              The <em className="italic text-gradient-gold font-normal">minds</em> behind the moments.
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {team.map((m, i) => (
            <motion.div
              key={m.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl glass"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={m.img}
                  alt={m.name}
                  loading="lazy"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-background to-transparent">
                <h3 className="font-display text-2xl">{m.name}</h3>
                <p className="text-sm text-gold">{m.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
