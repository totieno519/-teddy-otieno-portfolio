import { profile } from "@/data/portfolio";

const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/totieno519",
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-7xl px-6 py-10 lg:px-8">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          {/* Identity */}
          <div>
            <p className="font-semibold tracking-tight text-white/80">
              {profile.name}
            </p>

            <p className="mt-1 text-xs text-white/35">{profile.title}</p>
          </div>

          {/* Navigation / Contact */}
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/35">
            <a
              href="#about"
              className="transition hover:text-[#ffd400]"
            >
              About
            </a>

            <a
              href="#services"
              className="transition hover:text-[#ffd400]"
            >
              Services
            </a>

            <a
              href="#projects"
              className="transition hover:text-[#ffd400]"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="transition hover:text-[#ffd400]"
            >
              Contact
            </a>

            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="transition hover:text-[#ffd400]"
              >
                {social.label}
              </a>
            ))}

            <a
              href={`mailto:${profile.email}`}
              className="transition hover:text-[#ffd400]"
            >
              Email
            </a>
          </div>
        </div>

        {/* Bottom line */}
        <div className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-white/25 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>

          <p>Web Developer &amp; Digital Solutions Builder</p>
        </div>
      </div>
    </footer>
  );
}