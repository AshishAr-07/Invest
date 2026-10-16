import React from "react";
import { ArrowUpRight, CircleDollarSign, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gray-100 bg-white-900 text-black">
      <div className="mx-auto max-w-7xl px-6 py-14 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr] lg:gap-20">
          <div>
            <Link
              href="/"
              aria-label="Invest N Insure home"
            >
              <Image
                src="/logo.png"
                alt="Invest N Insure logo"
                width={150}
                height={80}
              />
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-6">
              Helping you invest smart, protect better, and build a more
              confident financial future.
            </p>
            <Link
              href="/contact"
              className="mt-6 inline-flex items-center gap-1.5 rounded-full bg-(--secondary) text-white px-5 py-3 text-sm font-semibold transition-colors"
            >
              Start a conversation
              <ArrowUpRight size={16} />
            </Link>
          </div>

          <div>
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] ">
              Explore
            </h2>
            <nav aria-label="Footer navigation" className="mt-5 flex flex-col gap-3">
              {[
                ["Home", "/"],
                ["Insurance", "/insurance-guide"],
                ["Investments", "/investments"],
                ["About Us", "/about-us"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="w-fit text-sm transition-colors"
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          <div id="contact">
            <h2 className="text-sm font-semibold uppercase tracking-[0.16em] ">
              Get in touch
            </h2>
            <div className="mt-5 flex flex-col gap-4 text-sm ">
              <Link
                href="mailto:info@investninsure.in"
                className="flex items-start gap-3 transition-colors"
              >
                <Mail size={18} className="mt-0.5 shrink-0 text-(--gold)" />
                info@investninsure.in
              </Link>
              <Link
                href="tel:+919818592859"
                className="flex items-start gap-3"
              >
                <Phone size={18} className="mt-0.5 shrink-0 text-(--gold)" />
                +91 9818592859
              </Link>
              <p className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-(--gold)" />
                <span>H-1/43A, Mahavir Enclave,
                  Palam, New Delhi - 110045</span>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-black/15 pt-7">
          <div className="rounded-xl border border-black/10 bg-black/5 p-4 text-xs leading-5">
            <span className="font-semibold ">Disclaimer: </span>
            Investment-related information provided on this website is for general informational purposes and should not be construed as investment advice or a guarantee of returns. Investments are subject to market risks and investors should consider their financial objectives, risk tolerance and investment horizon before investing.
          </div>
          <div className="mt-6 flex flex-col gap-3 text-xssm:flex-row sm:items-center sm:justify-between">
            <p>© {new Date().getFullYear()} Invest N Insure. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
