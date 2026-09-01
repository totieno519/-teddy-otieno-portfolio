import { projects } from "@/data/portfolio";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-t border-white/10 bg-white/[0.02]"
    >
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Section heading */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffd400]">
              04 — Selected Work
            </p>

            <h2 className="mt-5 max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Projects that
              <br />
              <span className="text-white/35">tell the story.</span>
            </h2>
          </div>

          <p className="max-w-md text-sm leading-7 text-white/45">
            A growing collection of digital products, systems and websites
            built to solve practical problems and create meaningful digital
            experiences.
          </p>
        </div>

        {/* Projects */}
        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {projects.map((project, index) => {
            const isFeatured = index === 0;

            return (
              <article
                key={project.title}
                className={`group relative overflow-hidden rounded-[2rem] border border-white/10 bg-[#0b0d10] transition duration-500 hover:-translate-y-1 hover:border-[#ffd400]/30 ${
                  isFeatured ? "lg:col-span-2" : ""
                }`}
              >
                {/* Project visual */}
                <div
                  className={`relative overflow-hidden bg-[#101216] ${
                    isFeatured ? "aspect-[2.2/1]" : "aspect-[16/10]"
                  }`}
                >
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(255,212,0,0.08),transparent_35%)]" />

                  <div className="absolute inset-0 bg-[linear-gradient(135deg,transparent_35%,rgba(255,255,255,0.045))]" />

                  <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-white/5" />

                  <div className="absolute -bottom-32 left-1/3 h-72 w-72 rounded-full border border-white/5" />

                  {/* Status */}
                  <div className="absolute left-7 top-7 z-10 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.2em] text-white/50 backdrop-blur">
                    <span className="mr-2 inline-block h-1.5 w-1.5 rounded-full bg-[#ffd400]" />
                    {project.status}
                  </div>

                  {/* Project number */}
                  <div className="absolute right-7 top-7 z-10 text-xs font-bold tracking-[0.2em] text-white/20">
                    {String(index + 1).padStart(2, "0")}
                  </div>

                  {/* Project title */}
                  <div className="absolute inset-0 flex items-center justify-center px-6">
                    <div className="text-center">
                      <p
                        className={`font-black tracking-[-0.06em] text-white transition duration-500 group-hover:scale-105 ${
                          isFeatured
                            ? "text-6xl sm:text-8xl lg:text-9xl"
                            : "text-5xl sm:text-6xl"
                        }`}
                      >
                        {project.title}
                      </p>

                      <p className="mt-4 text-xs uppercase tracking-[0.3em] text-[#ffd400]/60">
                        {project.category}
                      </p>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="absolute bottom-7 right-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#ffd400] text-lg font-bold text-black transition duration-500 group-hover:scale-110 group-hover:rotate-[-8deg]">
                    ↗
                  </div>
                </div>

                {/* Project information */}
                <div className="p-7 sm:p-9">
                  <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-start">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#ffd400]/70">
                        {project.category}
                      </p>

                      <h3 className="mt-3 text-2xl font-bold tracking-tight text-white sm:text-3xl">
                        {project.title}
                      </h3>
                    </div>

                    {project.featured && (
                      <span className="w-fit rounded-full border border-[#ffd400]/20 bg-[#ffd400]/5 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#ffd400]">
                        Featured Project
                      </span>
                    )}
                  </div>

                  {/* Description */}
                  <p className="mt-5 max-w-3xl leading-7 text-white/45">
                    {project.description}
                  </p>

                  {/* NOERMS CTA */}
                  {project.title === "NOERMS" && (
                    <div className="mt-7">
                      <a
                        href="#contact"
                        className="inline-flex items-center text-sm font-bold text-[#ffd400] transition-colors hover:text-[#ffe45c]"
                      >
                        Discuss a Similar Solution
                        <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </a>
                    </div>
                  )}

                  {/* Savanna Grill project links */}
                  {project.title === "Savanna Grill & Restaurant" &&
                    project.liveUrl &&
                    project.sourceUrl && (
                      <div className="mt-7 flex flex-wrap gap-3">
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-full bg-[#ffd400] px-5 py-2.5 text-sm font-bold text-black transition duration-300 hover:scale-[1.03] hover:bg-[#ffe45c]"
                        >
                          View Live Website
                          <span className="ml-2">↗</span>
                        </a>

                        <a
                          href={project.sourceUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center rounded-full border border-white/15 px-5 py-2.5 text-sm font-bold text-white transition duration-300 hover:border-[#ffd400]/50 hover:text-[#ffd400]"
                        >
                          View Source Code
                          <span className="ml-2">↗</span>
                        </a>
                      </div>
                    )}
                </div>
              </article>
            );
          })}
        </div>

        {/* Client conversion CTA */}
        <div className="mt-16 flex flex-col justify-between gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <div>
            <p className="text-sm font-semibold text-white">
              Have an idea that needs to become a digital solution?
            </p>

            <p className="mt-2 text-sm leading-6 text-white/35">
              Let&apos;s discuss your goals, requirements and the right way to
              bring your project to life.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit shrink-0 items-center rounded-full bg-[#ffd400] px-6 py-3 text-sm font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-[#ffe45c]"
          >
            Start a Project
            <span className="ml-2">↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}