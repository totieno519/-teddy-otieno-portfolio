import { services } from "@/data/portfolio";

const serviceDetails = [
  [
    "Business websites",
    "Personal portfolios",
    "Organization websites",
    "Responsive mobile layouts",
  ],
  [
    "Interactive web applications",
    "User authentication",
    "Custom dashboards",
    "Database integration",
  ],
  [
    "Information management",
    "Administrative systems",
    "Database-driven platforms",
    "Custom organizational workflows",
  ],
  [
    "Modern visual design",
    "Mobile responsiveness",
    "Performance improvements",
    "User experience improvements",
  ],
];

export default function Services() {
  return (
    <section id="services" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
        {/* Section heading */}
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#ffd400]">
            03 — Services
          </p>

          <h2 className="mt-5 text-4xl font-black tracking-[-0.04em] sm:text-5xl lg:text-6xl">
            Digital solutions
            <br />
            <span className="text-white/35">built around your needs.</span>
          </h2>

          <p className="mt-7 max-w-2xl leading-8 text-white/45">
            I help individuals, businesses and organizations turn their ideas
            into professional digital products that are practical, responsive
            and built around their users.
          </p>
        </div>

        {/* Services */}
        <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 md:grid-cols-2">
          {services.map((service, index) => (
            <article
              key={service.number}
              className="group relative bg-[#0b0d10] p-8 transition duration-500 hover:bg-white hover:text-black lg:p-10"
            >
              {/* Number */}
              <div className="flex items-center justify-between">
                <span className="text-sm font-bold text-[#ffd400] group-hover:text-black/40">
                  {service.number}
                </span>

                <span className="text-xl text-white/20 transition duration-300 group-hover:translate-x-1 group-hover:text-black/40">
                  ↗
                </span>
              </div>

              {/* Title */}
              <h3 className="mt-14 text-2xl font-bold tracking-tight lg:text-3xl">
                {service.title}
              </h3>

              {/* Description */}
              <p className="mt-5 leading-7 text-white/40 group-hover:text-black/55">
                {service.description}
              </p>

              {/* Deliverables */}
              <div className="mt-8 border-t border-white/10 pt-6 group-hover:border-black/10">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/25 group-hover:text-black/40">
                  What I can deliver
                </p>

                <ul className="mt-4 space-y-3">
                  {serviceDetails[index].map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 text-sm text-white/45 group-hover:text-black/60"
                    >
                      <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#ffd400] group-hover:bg-black/40" />

                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA */}
              <a
                href="#contact"
                className="mt-8 inline-flex items-center text-sm font-bold text-[#ffd400] transition-colors group-hover:text-black"
              >
                Discuss your project
                <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                  →
                </span>
              </a>
            </article>
          ))}
        </div>

        {/* Bottom statement */}
        <div className="mt-16 grid gap-8 border-t border-white/10 pt-8 md:grid-cols-[0.7fr_1.3fr]">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/25">
            Need something different?
          </p>

          <div>
            <p className="max-w-2xl text-lg leading-8 text-white/55">
              If your project doesn&apos;t fit neatly into one of these
              categories, that&apos;s completely fine. Tell me what you want
              to accomplish and we can work out the right digital solution.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center text-sm font-bold text-[#ffd400] transition-colors hover:text-[#ffe45c]"
            >
              Tell me about your idea
              <span className="ml-2">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}