import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";

export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    if (light) root.classList.add("light");
    else root.classList.remove("light");
  }, [light]);

  return (
    <button
      onClick={() => setLight((v) => !v)}
      aria-label="Toggle theme"
      className="glass rounded-full p-2.5 hover:scale-110 transition-transform duration-300"
    >
      {light ? <Moon size={16} className="text-foreground" /> : <Sun size={16} className="text-gold" />}
    </button>
  );
}
