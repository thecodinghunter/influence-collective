import { motion } from "framer-motion";
import { Calendar, Instagram, Linkedin, Twitter, ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 overflow-hidden">
      <div className="absolute inset-0 aurora animate-aurora opacity-60 pointer-events-none" />
      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Let's build something legendary</p>
          <h2 className="font-display text-4xl sm:text-6xl leading-[1.05] mb-8">
            Ready for your <em className="italic text-gradient-gold font-normal">moment</em>?
          </h2>
          <p className="text-muted-foreground text-lg mb-10 max-w-md">
            Tell us about your brand. We respond to every inquiry within 24 hours
            and onboard a maximum of three new clients per quarter.
          </p>
          <div className="space-y-3 mb-10">
            <a href="#" className="glass rounded-2xl p-5 flex items-center gap-4 hover:border-gold/60 transition group">
              <Calendar className="text-gold" size={20} />
              <div className="flex-1">
                <p className="font-medium">Book a 30-min strategy call</p>
                <p className="text-sm text-muted-foreground">Direct calendar — choose your slot</p>
              </div>
              <ArrowRight className="text-muted-foreground group-hover:text-gold group-hover:translate-x-1 transition-all" size={18} />
            </a>
          </div>
          <div className="flex gap-3">
            {[Instagram, Linkedin, Twitter].map((Icon, i) => (
              <a key={i} href="#" className="glass size-11 rounded-full flex items-center justify-center hover:text-gold hover:border-gold/60 transition">
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          onSubmit={(e) => e.preventDefault()}
          className="glass rounded-3xl p-8 space-y-5"
        >
          {[
            { label: "Your name", type: "text", placeholder: "Jane Doe" },
            { label: "Email", type: "email", placeholder: "you@brand.com" },
            { label: "Brand / company", type: "text", placeholder: "Brand name" },
          ].map((f) => (
            <div key={f.label}>
              <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">{f.label}</label>
              <input
                type={f.type}
                placeholder={f.placeholder}
                className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground placeholder:text-muted-foreground/50 transition"
              />
            </div>
          ))}
          <div>
            <label className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Project</label>
            <textarea
              rows={4}
              placeholder="Tell us about your goals..."
              className="mt-2 w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground placeholder:text-muted-foreground/50 transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="w-full mt-4 inline-flex items-center justify-center gap-3 rounded-full bg-gold text-primary-foreground px-7 py-4 font-medium glow-gold hover:translate-y-[-2px] transition-transform"
          >
            Send inquiry <ArrowRight size={18} />
          </button>
        </motion.form>
      </div>
    </section>
  );
}
