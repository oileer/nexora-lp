"use client";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const links = [
  { label: "O Aplicativo", href: "#aplicativo" },
  { label: "Segmentos", href: "#segmentos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Cases", href: "#cases" },
  { label: "Contato", href: "#contato" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 80);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 z-50 flex justify-center px-4 transition-[top] duration-300 ${
        scrolled ? "top-2" : "top-4"
      }`}
    >
      <nav
        className={`flex w-full max-w-5xl items-center justify-between rounded-full border border-ink-border bg-ink-800/80 backdrop-blur-md transition-all duration-300 ${
          scrolled ? "px-4 py-1.5 shadow-glow-sm sm:px-5" : "px-4 py-2.5 sm:px-6"
        }`}
      >
        <Logo />

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="rounded-full px-3 py-1.5 text-sm text-slate-300 transition hover:bg-white/5 hover:text-white"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contato"
          className="flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm text-slate-300 transition hover:text-white"
        >
          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4M10 17l5-5-5-5M15 12H3" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          Login
        </a>
      </nav>
    </header>
  );
}
