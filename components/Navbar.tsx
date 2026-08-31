"use client";

import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

const navItems = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#08090b]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        {/* Brand */}
        <a
          href="#home"
          onClick={closeMenu}
          className="flex items-center gap-3"
          aria-label={`${profile.name} home`}
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#ffd400] text-sm font-black text-black">
            TO
          </span>

          <span className="hidden sm:block">
            <span className="block text-sm font-bold text-white">
              {profile.name}
            </span>

            <span className="block text-xs text-white/40">
              {profile.title}
            </span>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav
          className="hidden items-center gap-7 md:flex"
          aria-label="Main navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-white/55 transition-colors hover:text-[#ffd400]"
            >
              {item.label}
            </a>
          ))}

          {/* Download CV */}
          <a
            href="/Teddy_Otieno_CV.pdf"
            download
            className="text-sm font-semibold text-[#ffd400] transition-colors hover:text-[#ffe45c]"
          >
            CV ↓
          </a>
        </nav>

        {/* Desktop Hire Me */}
        <a
          href="#contact"
          className="hidden h-11 items-center justify-center rounded-full bg-[#ffd400] px-6 text-sm font-bold text-black transition duration-300 hover:-translate-y-0.5 hover:bg-[#ffe45c] md:inline-flex"
        >
          Hire Me
          <span className="ml-2">↗</span>
        </a>

        {/* Mobile menu button */}
        <button
          type="button"
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-[#ffd400]/50 hover:text-[#ffd400] md:hidden"
          aria-label={
            menuOpen ? "Close navigation menu" : "Open navigation menu"
          }
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute left-0 top-0 block h-px w-5 bg-current transition duration-300 ${
                menuOpen ? "translate-y-2 rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-2 block h-px w-5 bg-current transition duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-4 block h-px w-5 bg-current transition duration-300 ${
                menuOpen ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile navigation */}
      <div
        id="mobile-navigation"
        className={`overflow-hidden border-t border-white/10 transition-all duration-300 md:hidden ${
          menuOpen
            ? "max-h-[32rem] opacity-100"
            : "max-h-0 border-t-transparent opacity-0"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col px-6 py-4"
          aria-label="Mobile navigation"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="border-b border-white/5 py-4 text-base text-white/65 transition-colors hover:text-[#ffd400]"
            >
              {item.label}
            </a>
          ))}

          {/* Mobile CV */}
          <a
            href="/Teddy_Otieno_CV.pdf"
            download
            onClick={closeMenu}
            className="mt-4 flex h-12 items-center justify-center rounded-full border border-[#ffd400]/60 text-sm font-bold text-[#ffd400] transition hover:bg-[#ffd400]/10"
          >
            Download CV
            <span className="ml-2">↓</span>
          </a>

          {/* Mobile Hire Me */}
          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-3 flex h-12 items-center justify-center rounded-full bg-[#ffd400] text-sm font-bold text-black transition hover:bg-[#ffe45c]"
          >
            Hire Me
            <span className="ml-2">↗</span>
          </a>
        </nav>
      </div>
    </header>
  );
}