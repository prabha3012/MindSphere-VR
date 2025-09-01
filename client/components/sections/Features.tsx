import { Cpu, Sparkles, Brain, Activity, Heart, Trophy } from "lucide-react";

type Feature = { label: string; Icon: React.ComponentType<React.SVGProps<SVGSVGElement>> };

const FEATURES: Feature[] = [
  { label: "Immersive VR Therapy", Icon: Cpu },
  { label: "Guided Meditation in VR", Icon: Sparkles },
  { label: "AI-based Mental Health Monitoring", Icon: Brain },
  { label: "Real-time Emotional Feedback", Icon: Activity },
  { label: "Personalized Stress Relief Programs", Icon: Heart },
  { label: "Gamified Mental Wellness Challenges", Icon: Trophy },
];

export function Features() {
  return (
    <section id="features" className="relative py-20 scroll-mt-24">
      <div className="container">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight">Features</h2>
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {FEATURES.map(({ label, Icon }) => (
            <div
              key={label}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:bg-white/8"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-teal-400 text-white shadow-md ring-1 ring-white/20">
                <Icon className="h-6 w-6" aria-hidden />
              </div>
              <p className="mt-4 text-base font-semibold leading-snug">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
