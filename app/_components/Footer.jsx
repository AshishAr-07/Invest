import React from "react";
import { ArrowUpRight, CircleDollarSign, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto bg-(--primary) text-white">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] lg:gap-20">
          <div>
            <a
              href="#home"
              className="inline-flex items-center gap-2 text-white"
              aria-label="Invest N Insure home"
            >
              <CircleDollarSign size={32} strokeWidth={1.8} />
              <span className="text-lg font-bold tracking-tight">
                Invest <span className="text-(--gold)">N</span> Insure
              </span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-6 text-slate-300">
              Helping you invest smart, protect better, and build a more
              confident financial future.
            </p>
            <Link
              href="#contact"
              className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-(--gold) px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-amber-600"
            >
              Start a conversation
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
              Explore
            </h2>
            <nav aria-label="Footer navigation" className="mt-5 flex flex-col gap-3">
              {[
                ["Home", "#home"],
                ["Insurance", "#insurance"],
                ["Investments", "#investments"],
                ["Financial Planning", "#financial-planning"],
                ["Contact", "#contact"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="w-fit text-sm text-slate-200 transition-colors hover:text-white"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div id="contact">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] text-slate-300">
              Get in touch
            </h2>
            <div className="mt-5 flex flex-col gap-4 text-sm text-slate-200">
              <a
                href="mailto:hello@investninsure.com"
                className="flex items-start gap-3 transition-colors hover:text-white"
              >
                <Mail size={18} className="mt-0.5 shrink-0 text-(--gold)" />
                hello@investninsure.com
              </a>
              <a
                href="tel:+910000000000"
                className="flex items-start gap-3 transition-colors hover:text-white"
              >
                <Phone size={18} className="mt-0.5 shrink-0 text-(--gold)" />
                +91 00000 00000
              </a>
              <p className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-(--gold)" />
                <span>India</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/15 pt-7">
          <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs leading-5 text-slate-300">
            <span className="font-semibold text-white">Disclaimer: </span>
            Investment-related information provided on this website is for general informational purposes and should not be construed as investment advice or a guarantee of returns. Investments are subject to market risks and investors should consider their financial objectives, risk tolerance and investment horizon before investing.
          </div>
          <div className="mt-6 flex flex-col gap-3 text-xs text-slate-400 sm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Invest N Insure. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
