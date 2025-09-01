type Member = { name: string; role: string; image: string };

const TEAM: Member[] = [
  {
    name: "Ava Thompson",
    role: "Founder & CEO",
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=640&auto=format&fit=crop",
  },
  {
    name: "Liam Patel",
    role: "Head of AI",
    image:
      "https://images.unsplash.com/photo-1502767089025-6572583495b0?q=80&w=640&auto=format&fit=crop",
  },
  {
    name: "Maya Chen",
    role: "Lead VR Engineer",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=640&auto=format&fit=crop",
  },
  {
    name: "Noah Garcia",
    role: "Clinical Advisor",
    image:
      "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=640&auto=format&fit=crop",
  },
];

export function Team() {
  return (
    <section id="team" className="relative py-20">
      <div className="container">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight">Our Team</h2>
        <div className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4">
          {TEAM.map((m) => (
            <div
              key={m.name}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 text-center shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
            >
              <div className="mx-auto h-28 w-28 overflow-hidden rounded-full ring-1 ring-white/10">
                <img src={m.image} alt={m.name} className="h-full w-full object-cover" />
              </div>
              <h3 className="mt-4 text-lg font-semibold">{m.name}</h3>
              <p className="text-sm text-foreground/70">{m.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
