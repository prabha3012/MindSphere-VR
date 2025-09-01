import { AspectRatio } from "@/components/ui/aspect-ratio";

export function Demo() {
  return (
    <section id="demo" className="relative py-20">
      <div className="container">
        <h2 className="text-center text-3xl md:text-4xl font-extrabold tracking-tight">Demo</h2>
        <div className="mx-auto mt-10 max-w-5xl">
          <AspectRatio ratio={16 / 9}>
            <div className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 bg-black/60 shadow-xl">
              <img
                src="/placeholder.svg"
                alt="Product screenshot placeholder"
                className="h-full w-full object-cover opacity-60"
              />
              <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
              <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/20 via-fuchsia-500/20 to-teal-400/20" />
            </div>
          </AspectRatio>
        </div>
      </div>
    </section>
  );
}
