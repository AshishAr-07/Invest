"use client";

import {
    FaAward,
    FaBookOpen,
    FaBullseye,
    FaCircleCheck,
    FaHandshake,
    FaShieldHalved,
    FaUserTie,
    FaUsers,
} from 'react-icons/fa6';
import { motion } from 'framer-motion';
import Wrapper from './Wrapper';

const WHY = [
    [FaUserTie, 'Personalised Approach', 'Your financial situation is unique. Our recommendations are based on your individual goals, requirements and risk profile..'],
    [FaBookOpen, 'Education First', 'We believe an informed investor is a better investor. We explain financial concepts and products in simple language so you can make informed decisions.'],
    [FaBullseye, 'Goal-Oriented Planning', 'Instead of investing randomly, we encourage you to connect your investments with specific financial goals.'],
    [FaShieldHalved, 'Investment + Protection', 'Building wealth is important. Protecting your wealth and family is equally important.'],
    [FaHandshake, 'Long-Term Relationship', 'Financial planning is a journey. We aim to provide ongoing guidance and periodic reviews as your goals and circumstances evolve.'],
];

const STATS = [
    [FaUsers, '500+', 'Happy Families'],
    [FaAward, '10+', 'Years of Experience'],
    [FaHandshake, '25+', 'Top Partners'],
    [FaCircleCheck, '100%', 'Commitment'],
];

export function Why() {
    return (
        <section id="why" className="relative z-10 my-8 overflow-x-clip bg-(--secondary) text-white">
            <Wrapper className="relative">
                <div className="pointer-events-none absolute -right-16 top-10 h-40 w-40 rounded-full border border-(--gold)/15 sm:-right-8" />

                <motion.div
                    className="relative text-center"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                >
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em]">
                        WHY CHOOSE US ?
                    </p>
                    <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
                        Your Goals. Our Guidance.
                    </h2>
                </motion.div>

                <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-14 lg:grid-cols-5">
                    {WHY.map(([I, t, d], i) => (
                        <motion.div
                            key={t}
                            initial={{ opacity: 0, y: 32 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                            className={`group relative min-w-0 overflow-hidden rounded-2xl border border-slate-200/80 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] ring-1 ring-transparent transition-all duration-500 ease-out hover:-translate-y-1.5 hover:border-(--gold)/50 hover:shadow-[0_18px_40px_-16px_rgba(15,23,42,0.18)] hover:ring-(--gold)/10 ${i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''
                                }`}
                        >
                            {/* Gold accent line that grows on hover */}
                            <span className="absolute inset-x-0 top-0 h-0.5 origin-left scale-x-0 bg-(--gold) transition-transform duration-500 ease-out group-hover:scale-x-100" />


                            {/* Index number */}
                            <span className="absolute right-5 top-5 text-sm font-semibold text-slate-300 transition-colors duration-300 group-hover:text-(--gold)">
                                {String(i + 1).padStart(2, '0')}
                            </span>

                            {/* Icon */}
                            <div className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-(--primary)/8 text-(--primary) ring-1 ring-(--primary)/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-(--secondary) group-hover:text-white group-hover:ring-transparent">
                                <I className="h-5 w-5" strokeWidth={1.6} />
                            </div>

                            <h3 className=" font-semibold leading-snug tracking-tight text-(--primary)">
                                {t}
                            </h3>
                            <p className="mt-2.5 text-xs text-slate-600">{d}</p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="absolute inset-x-2 bottom-0 translate-y-[65%] rounded-2xl bg-(--primary) px-3 py-6 text-white sm:inset-x-8 sm:translate-y-1/2 sm:px-8 sm:py-7 lg:inset-x-12"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                >
                    <div className="grid grid-cols-2 gap-y-6 md:grid-cols-4 md:gap-y-0">
                        {STATS.map(([I, n, l], i) => (
                            <motion.div
                                key={l}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.4, delay: i * 0.1, ease: 'easeOut' }}
                                className={`flex min-w-0 items-center justify-center gap-2 px-1 sm:gap-3 sm:px-3 ${i > 0 ? 'md:border-l md:border-white/20' : ''
                                    }`}
                            >
                                <I className="h-7 w-7 shrink-0 text-(--gold) sm:h-9 sm:w-9" strokeWidth={1.6} />
                                <div className="min-w-0">
                                    <div className="text-xl font-semibold leading-none sm:text-2xl">{n}</div>
                                    <div className="mt-1.5 break-words text-[9px] font-medium uppercase leading-tight tracking-[0.1em] text-white/70 sm:text-[10px] sm:tracking-[0.14em]">{l}</div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </Wrapper>
        </section>
    );
}