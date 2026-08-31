const strengths = [
  {
    number: "01",
    title: "Problem Solving",
    description:
      "I start by understanding the problem before deciding what technology or approach should be used.",
  },
  {
    number: "02",
    title: "Practical Development",
    description:
      "I focus on building solutions that are useful, maintainable and designed around real users.",
  },
  {
    number: "03",
    title: "Continuous Growth",
    description:
      "I continuously expand my technical skills by building real systems and learning from every project.",
  },
];

export default function About() {
  return (
    <section id="about" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Introduction */}
        <div className="grid gap-14 lg:grid-cols-[0.7fr_1.3fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffd400]">
              01 — About Me
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
              Turning ideas
              <br />
              into <span className="text-white/35">digital solutions.</span>
            </h2>
          </div>

          <div>
            <p className="text-xl leading-9 text-white/70 sm:text-2xl sm:leading-10">
              I&apos;m Teddy Otieno, an ICT developer passionate about using
              technology to solve practical problems and create useful digital
              experiences.
            </p>

            <p className="mt-7 max-w-3xl leading-8 text-white/45">
              My work focuses on web development, web applications and
              database-driven systems. I enjoy taking an idea from its early
              concept, understanding the requirements and turning it into a
              functional digital product.
            </p>

            <p className="mt-6 max-w-3xl leading-8 text-white/45">
              I&apos;m particularly interested in building systems that
              improve how people communicate, manage information and interact
              with organizations. My current work includes NOERMS, an
              election and referendum management system being developed as a
              practical real-world project.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center border-b border-[#ffd400]/50 pb-2 text-sm font-bold text-[#ffd400] transition-colors hover:border-[#ffd400] hover:text-[#ffe45c]"
            >
              Start a conversation
              <span className="ml-3">→</span>
            </a>
          </div>
        </div>

        {/* Strengths */}
        <div className="mt-20 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-3">
          {strengths.map((strength) => (
            <article
              key={strength.number}
              className="group bg-[#0b0d10] p-8 transition duration-300 hover:bg-white hover:text-black lg:p-10"
            >
              <div className="flex items-center justify-between">
                <span className="text-sm text-[#ffd400] group-hover:text-black/40">
                  {strength.number}
                </span>

                <span className="text-white/20 transition group-hover:translate-x-1 group-hover:text-black/40">
                  ↗
                </span>
              </div>

              <h3 className="mt-14 text-2xl font-bold">
                {strength.title}
              </h3>

              <p className="mt-5 leading-7 text-white/40 group-hover:text-black/55">
                {strength.description}
              </p>
            </article>
          ))}
        </div>

        {/* Developer statement */}
        <div className="mt-20 border-t border-white/10 pt-10">
          <div className="grid gap-8 md:grid-cols-[0.7fr_1.3fr]">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/25">
              My Approach
            </p>

            <blockquote className="text-2xl font-semibold leading-9 tracking-tight text-white/75 sm:text-3xl sm:leading-10">
              &quot;Good technology should not only work. It should make a
              real problem easier to solve.&quot;
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}