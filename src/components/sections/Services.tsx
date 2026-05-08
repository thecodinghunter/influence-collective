import { motion } from "framer-motion";
import { Megaphone, Users, Sparkles, Share2, Film, Shield, Calendar } from "lucide-react";

const services = [
  { icon: Megaphone, title: "PR Management", desc: "Earned media, press strategy, crisis comms." },
  { icon: Users, title: "Influencer Marketing", desc: "Talent matchmaking from micro to A-list." },
  { icon: Sparkles, title: "Digital Branding", desc: "Identity systems built for the algorithm era." },
  { icon: Share2, title: "Social Campaigns", desc: "Always-on content engines that compound." },
  { icon: Film, title: "Video Production", desc: "Cinematic films, ads and brand documentaries." },
  { icon: Shield, title: "Reputation Management", desc: "SERP control, sentiment & narrative defense." },
  { icon: Calendar, title: "Event Promotions", desc: "Launches, activations and red-carpet moments." },
];

export function Services() {
  return (
    <section id="services" className="relative py-32 px-6 bg-card/30">
      <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" />
      <div className="relative max-w-7xl mx-auto">
        <div className="max-w-2xl mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">What we do</p>
          <h2 className="font-display text-4xl sm:text-6xl leading-[1.05]">
            A full-stack <em className="italic text-gradient-gold font-normal">media engine</em>.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="bg-background p-8 lg:p-10 group hover:bg-card transition-colors duration-500 cursor-pointer"
            >
              <div className="size-12 rounded-xl bg-gold/10 border border-gold/30 flex items-center justify-center mb-6 group-hover:bg-gold group-hover:text-primary-foreground transition">
                <s.icon size={20} className="text-gold group-hover:text-primary-foreground" />
              </div>
              <h3 className="font-display text-2xl mb-3">{s.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              <div className="mt-6 h-px w-10 bg-gold group-hover:w-full transition-all duration-500" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
