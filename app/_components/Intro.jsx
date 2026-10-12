"use client";

import React from 'react'
import { motion } from 'framer-motion';
import { Flag, Shield, Target, TrendingUp, User } from 'lucide-react'
import Link from 'next/link';

export default function Intro() {
  const qs = ['What are you investing for?', 'How much do you need?', 'How much risk are you comfortable taking?', 'How should your money be allocated?', 'Is your family adequately protected?'];
  const ic = [Target, Flag, Shield, TrendingUp, User];
  return (
    <section id="about" className="py-16 sm:py-24">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold leading-tight text-(--primary) sm:text-5xl">YOUR GOALS.<br />YOUR MONEY.<br />YOUR FUTURE.</h2>
          <p className="mt-6 text-lg text-slate-600">Financial planning is not simply about finding a product.</p>
          <p className="mt-3 text-slate-600">It is about answering the right questions. We help bring these elements together into a more structured financial approach.</p>
          <Link href="/contact" className="mt-8 inline-flex items-center rounded-xl bg-(--primary) px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-(--secondary)">Book a Consultation</Link>
        </motion.div>
        <ul className="space-y-3">
          {qs.map((q, i) => {
            const I = ic[i]; return (
              <motion.li
                key={q}
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
                className="group flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-(--gold)/50 hover:shadow-md"
              >
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-(--primary)/8 text-(--primary) ring-1 ring-(--primary)/10 transition-colors group-hover:bg-(--secondary) group-hover:text-white"><I size={18} /></span>
                <span className="text-lg text-(--primary)">{q}</span>
              </motion.li>);
          })}
        </ul>
      </div>
    </section>
  );
}