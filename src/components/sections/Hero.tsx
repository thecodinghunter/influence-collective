import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  return (
    <section id="top" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/40 to-background" />
        <div className="absolute inset-0 aurora animate-aurora" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="size-2 rounded-full bg-gold animate-pulse" />
          <span className="text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Global Media · PR · Brand
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="font-display text-5xl sm:text-7xl lg:text-[8rem] leading-[0.95] tracking-tight max-w-5xl"
        >
          We build <em className="italic text-gradient-gold font-normal">influence</em> that moves the world.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-8 max-w-xl text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          A boutique media & PR studio crafting cinematic campaigns, cultural moments
          and category-defining brands for the world's most ambitious founders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <a
            href="#work"
            className="group inline-flex items-center gap-3 rounded-full bg-gold text-primary-foreground px-7 py-4 font-medium glow-gold hover:translate-y-[-2px] transition-transform"
          >
            View our work
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 rounded-full glass px-7 py-4 font-medium hover:border-gold/60 transition"
          >
            <span className="size-8 rounded-full bg-gold/20 flex items-center justify-center">
              <Play size={12} className="text-gold fill-gold ml-0.5" />
            </span>
            Book a strategy call
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="absolute bottom-8 right-6 hidden lg:flex flex-col items-end gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground"
        >
          <span>Scroll</span>
          <div className="w-px h-16 bg-gradient-to-b from-gold to-transparent" />
        </motion.div>
      </div>
    </section>
  );
}
