const FEATURES = [
  "Immersive VR Therapy",
  "Guided Meditation in VR",
  "AI-based Mental Health Monitoring",
  "Real-time Emotional Feedback",
  "Personalized Stress Relief Programs",
  "Gamified Mental Wellness Challenges",
];

export function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="container">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight">Features</h2>
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[inset_0_1px_0_rgba(255,255,255,0.05)] transition hover:bg-white/8"
            >
              <div className="h-10 w-10 rounded-xl bg-gradient-to-tr from-indigo-500 via-fuchsia-500 to-teal-400 opacity-80" />
              <p className="mt-4 text-base font-semibold leading-snug">{f}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
