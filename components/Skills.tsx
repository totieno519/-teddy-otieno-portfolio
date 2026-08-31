import { skills } from "@/data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="border-t border-white/10 bg-white/[0.02]">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/35">
              02 — Skills
            </p>

            <h2 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
              Tools I build with.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/40">
            A growing technology toolkit focused on modern web development,
            application development and data-driven systems.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3 lg:grid-cols-4">
          {skills.map((skill) => (
            <div
              key={skill}
              className="group bg-[#0b0d10] p-6 transition duration-300 hover:bg-white hover:text-black"
            >
              <div className="mb-8 flex justify-between">
                <span className="text-xs text-white/25 group-hover:text-black/30">
                  TECH
                </span>

                <span className="text-white/20 transition group-hover:translate-x-1 group-hover:text-black/50">
                  ↗
                </span>
              </div>

              <p className="font-semibold">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}