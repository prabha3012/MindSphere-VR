import { Button } from "@/components/ui/button";

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden scroll-mt-24">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-teal-400 opacity-30 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-gradient-to-tr from-teal-400 via-blue-500 to-fuchsia-500 opacity-30 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_60%)]" />
      </div>

      <div className="container relative flex min-h-[88vh] flex-col items-center justify-center py-28 text-center">
        <p className="mb-4 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-foreground/80">
          Immersive Mental Wellness Platform
        </p>
        <h1 className="max-w-4xl bg-gradient-to-r from-indigo-400 via-fuchsia-400 to-teal-300 bg-clip-text text-5xl font-extrabold leading-tight tracking-tight text-transparent md:text-6xl">
          MindSphere-VR
        </h1>
        <p className="mt-4 max-w-2xl text-balance text-base text-foreground/80 md:text-lg">
          A futuristic, trust-inspiring platform combining VR, AI, and real-time feedback to elevate mental wellness.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
          <Button asChild size="lg" className="rounded-full bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-teal-400 text-white shadow-xl transition-transform hover:scale-[1.02] hover:opacity-90">
            <a href="#contact">Get Started</a>
          </Button>
          <a href="#demo" className="text-sm font-semibold text-foreground/80 hover:text-foreground">
            Watch demo
          </a>
        </div>
      </div>
    </section>
  );
}
