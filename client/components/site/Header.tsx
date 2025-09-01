import { useState } from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Demo", href: "#demo" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-background/60 backdrop-blur-xl supports-[backdrop-filter]:bg-background/40">
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="group inline-flex items-center gap-2">
          <span className="relative inline-grid h-8 w-8 place-items-center">
            <span className="absolute inset-0 rounded-full bg-gradient-to-tr from-teal-400 via-indigo-500 to-fuchsia-500 blur-sm opacity-80 group-hover:opacity-100 transition-opacity" />
            <span className="relative h-5 w-5 rounded-full bg-background" />
          </span>
          <span className="text-lg font-extrabold tracking-tight">MindSphere-VR</span>
        </a>

        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
          <Button asChild className="rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-teal-400 text-white shadow-lg hover:opacity-90">
            <a href="#contact">Get Started</a>
          </Button>
        </nav>

        <button
          aria-label="Toggle menu"
          className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-background/50"
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            {open ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M3 12h18M3 6h18M3 18h18" />
            )}
          </svg>
        </button>
      </div>

      <div className={cn("md:hidden border-t border-white/10 bg-background/80 backdrop-blur-xl", open ? "block" : "hidden")}> 
        <div className="container py-4 grid gap-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 text-base font-medium text-foreground/90"
            >
              {item.label}
            </a>
          ))}
          <Button asChild className="rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-teal-400 text-white shadow-lg">
            <a href="#contact" onClick={() => setOpen(false)}>Get Started</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
