import { profile } from "@/data/portfolio";

const highlights = [
  "Responsive Design",
  "Web Applications",
  "Database Systems",
  "Modern Web Technologies",
];

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden">
      <div className="pointer-events-none absolute right-[-10%] top-[-10%] h-[600px] w-[600px] rounded-full bg-[#ffd400]/[0.035] blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="grid items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <div className="mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-xs text-white/60">
              <span className="h-2 w-2 rounded-full bg-emerald-400" />
              Available for selected projects
            </div>

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#ffd400]">
              {profile.title}
            </p>

            <h1 className="mt-7 max-w-4xl text-6xl font-black leading-[0.9] tracking-[-0.055em] sm:text-7xl lg:text-[6.5rem]">
              Building
              <br />
              digital
              <br />
              <span className="text-white/35">solutions that</span>
              <br />
              matter<span className="text-[#ffd400]">.</span>
            </h1>

            <p className="mt-9 max-w-2xl text-base leading-8 text-white/55 sm:text-lg">
              {profile.shortDescription}
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href="#projects"
                className="inline-flex h-14 items-center justify-center rounded-full bg-[#ffd400] px-7 text-sm font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-[#ffe45c]"
              >
                View My Work
                <span className="ml-3">↗</span>
              </a>

              <a
                href="#contact"
                className="inline-flex h-14 items-center justify-center rounded-full border border-[#ffd400]/70 px-7 text-sm font-bold text-[#ffd400] transition duration-300 hover:-translate-y-1 hover:bg-[#ffd400]/10"
              >
                Let&apos;s Work Together
              </a>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[520px]">
            <div className="relative aspect-square overflow-hidden rounded-[2rem] border border-white/10 bg-[#0d0f12] p-6">
              <div className="absolute inset-8 rounded-[1.5rem] border border-white/10" />

              <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

              <div className="absolute left-1/2 top-1/2 h-40 w-40 -translate-x-1/2 -translate-y-1/2 rounded-full border border-white/10" />

              <div className="relative z-10 flex items-center justify-between text-[10px] uppercase tracking-[0.25em] text-[#ffd400]">
                <span>TEDDY / 01</span>
                <span>DIGITAL</span>
              </div>

              <div className="absolute inset-0 flex items-center justify-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#ffd400] text-2xl font-black text-black shadow-2xl shadow-[#ffd400]/10">
                  TO
                </div>
              </div>

              <div className="absolute bottom-8 left-8 right-8">
                <p className="text-2xl font-bold tracking-tight">
                  Ideas.
                  <br />
                  <span className="text-white/35">Code.</span>
                  <br />
                  <span className="text-white/35">Impact.</span>
                </p>

                <div className="mt-5 h-px w-full bg-white/10" />

                <div className="mt-4 flex items-center justify-between text-xs text-[#ffd400]">
                  <span>ICT / WEB</span>
                  <span>2026</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 border-t border-white/10 pt-7">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((highlight) => (
              <div
                key={highlight}
                className="text-xs text-white/40 transition hover:text-[#ffd400]"
              >
                {highlight}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}