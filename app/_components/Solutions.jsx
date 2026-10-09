import React from 'react'
import { Landmark, Shield, Target, TrendingUp } from 'lucide-react'
import Wrapper from './Wrapper';
import Link from 'next/link';

const SOLUTIONS = [
  { t: 'INVEST', I: TrendingUp, tags: ['Mutual Funds', 'Wealth Creation', 'SIP', 'Lumpsum Investments', , 'Goal-Based Investing'], d: 'Build a disciplined investment strategy around your financial goals and time horizon.', c: 'Explore Investments →' },
  { t: 'PROTECT', I: Shield, tags: ['Health Insurance', 'Term Insurance', 'Life Insurance', 'Motor Insurance', 'Personal Accident', 'Travel Insurance'], d: 'Protect your family, income, savings and assets against unexpected financial risks.', c: 'Explore Insurance →' },
  { t: 'PLAN', I: Target, tags: ['Retirement Planning', 'Child Education Planning', 'Financial Goal Planning', 'Portfolio Review'], d: 'Turn your future goals into a practical financial roadmap.', c: 'Explore Planning →' },
  { t: 'PRESERVE', I: Landmark, tags: ['Fixed Deposits & Fixed-Income Options'], d: 'Explore suitable fixed-income opportunities as part of a diversified financial strategy.', c: 'Explore Options →' },
];

export default function Solutions() {
  return (
    <section id="solutions">
      <Wrapper>
        <h2 className="text-3xl text-center font-semibold tracking-tight text-(--primary) sm:text-4xl">OUR KEY SOLUTIONS</h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {SOLUTIONS.map(({ t, I, tags, d, c }) => (
            <article key={t} className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-transform duration-200 hover:-translate-y-1">
              <span className="grid h-14 w-14 place-items-center rounded-xl bg-(--primary) text-(--gold)"><I width={30} height={30} /></span>
              <h3 className="mt-5 text-xl font-extrabold text-(--primary)">{t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{d}</p>
              <ul className="mt-4 flex flex-1 flex-wrap content-start gap-1.5">
                {tags.map((x) => (
                  <li
                    key={x}
                    className="whitespace-nowrap rounded-full border border-(--secondary)/20 bg-slate-50 px-2 py-1 text-xs font-medium leading-5 text-(--primary)"
                  >
                    {x}
                  </li>
                ))}
              </ul>
              {/* <Link href="" className="mt-5 inline-flex items-center font-semibold text-(--secondary) hover:text-(--primary)">{c}</Link> */}
            </article>
          ))}
        </div>
      </Wrapper>
    </section>
  )
}