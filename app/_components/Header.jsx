 "use client";

import React, { useState } from "react";
import { ArrowUpRight, CircleDollarSign, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { label: "Home", href: "/" },
    { label: "Insurance Guide", href: "/insurance-guide" },
    { label: "Investments", href: "/investments" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 shadow-sm backdrop-blur">
      <div className="mx-auto flex min-h-18 max-w-7xl items-center justify-between gap-6 px-6 py-3 lg:px-8">
        <a
          href="#home"
          className="flex shrink-0 items-center gap-2 text-(--primary)"
          aria-label="Invest N Insure home"
        >
          <CircleDollarSign size={32} strokeWidth={1.8} />
          <span className="text-lg font-bold tracking-tight">
            Invest <span className="text-(--gold)">N</span> Insure
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative group whitespace-nowrap text-sm font-medium transition hover:text-(--primary)"
            >
              {item.label}
              <span className={`absolute -bottom-1 left-0 w-0 h-px bg-(--primary) transition-all duration-300 group-hover:w-full`}></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="#contact"
            className="hidden shrink-0 items-center gap-1.5 rounded-full bg-(--primary) px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-(--secondary) sm:inline-flex"
          >
            Get Started
            <ArrowUpRight size={16} />
          </Link>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-(--primary) transition-colors hover:bg-slate-100 lg:hidden"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setIsMenuOpen((open) => !open)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <nav
          id="mobile-navigation"
          aria-label="Mobile navigation"
          className="border-t border-slate-200 bg-white px-6 py-4 lg:hidden"
        >
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-medium text-slate-600 transition-colors hover:bg-slate-50 hover:text-(--primary)"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-full bg-(--primary) px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-(--secondary)"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
              <ArrowUpRight size={16} />
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
