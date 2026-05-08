import { motion } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import w1 from "@/assets/work-1.jpg";
import w2 from "@/assets/work-2.jpg";
import w3 from "@/assets/work-3.jpg";
import w4 from "@/assets/work-4.jpg";
import w5 from "@/assets/work-5.jpg";
import w6 from "@/assets/work-6.jpg";

const projects = [
  { img: w1, title: "Maison Noir", tag: "Editorial PR", reach: "84M reach", category: "PR" },
  { img: w2, title: "LAYON Launch", tag: "Product Activation", reach: "Sold out 9 min", category: "Events" },
  { img: w3, title: "Aria Beauty", tag: "Influencer Strategy", reach: "+612% engagement", category: "Influencer" },
  { img: w4, title: "Northwave Films", tag: "Brand Film", reach: "12M views", category: "Video" },
  { img: w5, title: "Atlas Capital", tag: "Press Coverage", reach: "47 placements", category: "PR" },
  { img: w6, title: "Pulse Analytics", tag: "Growth Campaign", reach: "+38% CTR", category: "Influencer" },
];

const filters = ["All", "PR", "Events", "Influencer", "Video"];

export function Work() {
  const [active, setActive] = useState("All");
  const visible = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="work" className="relative py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-14">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Featured campaigns</p>
            <h2 className="font-display text-4xl sm:text-6xl leading-[1.05] max-w-2xl">
              Cinematic work, <em className="italic text-gradient-gold font-normal">measurable</em> impact.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full px-5 py-2 text-sm transition border ${
                  active === f
                    ? "bg-gold text-primary-foreground border-gold glow-gold"
                    : "border-border text-muted-foreground hover:text-foreground hover:border-gold/50"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((p, i) => (
            <motion.a
              key={p.title}
              href="#"
              layout
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.1 }}
              className={`group relative overflow-hidden rounded-3xl glass ${
                i % 5 === 0 ? "md:col-span-2 md:row-span-1" : ""
              }`}
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-6 flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.25em] text-gold mb-2">{p.tag}</p>
                  <h3 className="font-display text-2xl">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.reach}</p>
                </div>
                <div className="size-11 rounded-full glass flex items-center justify-center group-hover:bg-gold group-hover:text-primary-foreground transition-all">
                  <ArrowUpRight size={18} />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
