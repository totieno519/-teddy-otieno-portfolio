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
      <div className="mx-auto flex max-w-7xl flex-col gap-6 px-6 py-8 text-sm text-white/35 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        {/* Identity */}
        <div>
          <p className="font-semibold text-white/70">{profile.name}</p>

          <p className="mt-1 text-xs">{profile.title}</p>
        </div>

        {/* Social links */}
        <div className="flex items-center gap-5">
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

        {/* Copyright */}
        <p className="text-xs">
          © {new Date().getFullYear()} {profile.name}
        </p>
      </div>
    </footer>
  );
}