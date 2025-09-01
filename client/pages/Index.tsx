import { useEffect } from "react";
import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { Demo } from "@/components/sections/Demo";
import { Team } from "@/components/sections/Team";
import { Contact } from "@/components/sections/Contact";

export default function Index() {
  useEffect(() => {
    // Ensure hash navigation works with fixed header
    const hash = window.location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, []);

  return (
    <main className="min-h-screen bg-[linear-gradient(180deg,hsl(var(--background))_0%,hsl(var(--background))_40%,rgba(99,102,241,0.08)_100%)]">
      <Hero />
      <Features />
      <Demo />
      <Team />
      <Contact />
    </main>
  );
}
