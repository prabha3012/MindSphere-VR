const TEAM = [
  "Sanjana Sree",
  "Prabha",
  "Sanjitha",
];

export function Team() {
  return (
    <section id="team" className="relative py-20 scroll-mt-24">
      <div className="container">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight">Team</h2>
        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
          {TEAM.map((name) => (
            <div
              key={name}
              className="rounded-2xl border border-white/10 bg-white/5 p-6 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            >
              <p className="text-base font-semibold leading-snug">{name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
