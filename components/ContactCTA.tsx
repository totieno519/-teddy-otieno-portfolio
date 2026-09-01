import HireForm from "@/components/HireForm";
import { profile } from "@/data/portfolio";

export default function ContactCTA() {
  return (
    <section id="contact" className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-36">
        {/* Contact introduction */}
        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white p-8 text-black sm:p-12 lg:p-16">
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-black/10" />

          <div className="absolute -bottom-32 right-20 h-72 w-72 rounded-full border border-black/10" />

          <div className="relative max-w-4xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-black/40">
              05 — Let&apos;s Work Together
            </p>

            <h2 className="mt-6 text-4xl font-black tracking-[-0.04em] sm:text-6xl lg:text-7xl">
              Have a project?
              <span className="block text-[#d9b600]">
                Let&apos;s build it.
              </span>
            </h2>

            <p className="mt-7 max-w-2xl text-base leading-8 text-black/55 sm:text-lg">
              Have an idea, a business need or an existing website that needs
              improvement? Tell me what you want to achieve and I&apos;ll help
              you explore a practical digital solution.
            </p>

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <a
                href="#project-inquiry"
                className="inline-flex h-14 items-center justify-center rounded-full bg-[#ffd400] px-7 text-sm font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-[#ffe45c]"
              >
                Start a Project
                <span className="ml-3">↗</span>
              </a>

              <a
                href={`mailto:${profile.email}`}
                className="inline-flex h-14 items-center justify-center rounded-full border border-black/15 px-7 text-sm font-bold text-black transition duration-300 hover:-translate-y-1 hover:bg-black/5"
              >
                Email Me
                <span className="ml-3">✉</span>
              </a>
            </div>

            <p className="mt-6 text-sm text-black/40">
              {profile.email}
            </p>
          </div>
        </div>

        {/* Project inquiry */}
        <div id="project-inquiry" className="mt-10 scroll-mt-28">
          <HireForm />
        </div>
      </div>
    </section>
  );
}