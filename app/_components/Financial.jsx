import React from "react";
import {
    ChartNoAxesCombined,
    GraduationCap,
    Armchair,
    ShieldCheck,
    PieChart,
    ArrowRight,
    MessageCircle,
} from "lucide-react";
import Wrapper from "./Wrapper";

const planningOptions = [
    {
        title: "Wealth Creation",
        description: "Build wealth steadily and achieve your financial goals.",
        icon: ChartNoAxesCombined,
    },
    {
        title: "Child Education",
        description: "Plan early for your child's bright future.",
        icon: GraduationCap,
    },
    {
        title: "Retirement Planning",
        description: "Plan today for a comfortable retirement tomorrow.",
        icon: Armchair,
    },
    {
        title: "Capital Protection",
        description: "Protect your capital while aiming for steady growth.",
        icon: ShieldCheck,
    },
    {
        title: "Portfolio Review",
        description: "Review your portfolio and stay on track with your goals.",
        icon: PieChart,
    },
];



export default function FinancialSolutions() {
    return (
        <section id="financial-planning" className="w-full scroll-mt-24 bg-white py-8">
            <div className="">

                {/* ================= HERO ================= */}
                <div
                    className="relative overflow-hidden bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('/financial.webp')",
                    }}
                >
                    <Wrapper className="relative z-10 flex min-h-47.5 items-center px-6 pt-8 pb-8 sm:px-10">
                        <div className="flex items-center gap-4">

                            {/* Text */}
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                    Financial Planning

                                </h2>

                                <p className="mt-1 max-w-md text-xs leading-5 text-white/90 sm:text-sm">
                                    Goal-based planning for a secure
                                    <br className="hidden sm:block" />
                                    and stress-free future.
                                </p>
                            </div>

                        </div>
                    </Wrapper>
                </div>

                {/* ================= CARDS ================= */}
                <Wrapper className="grid grid-cols-2 gap-6 pt-6 pb-6 bg-white sm:grid-cols-3 lg:grid-cols-5">

                    {planningOptions.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="group border border-gray-200 p-2.5 md:p-8 rounded-2xl text-center transition-all duration-300"
                            >

                                {/* Icon */}
                                <div className="mx-auto flex h-10 w-10 items-center justify-center text-(--secondary)">
                                    <Icon
                                        size={28}
                                        strokeWidth={1.8}
                                    />
                                </div>

                                {/* Title */}
                                <h3 className="mt-1 font-bold">
                                    {item.title}
                                </h3>

                                {/* Description */}
                                <p className="mx-auto mt-1 max-w-37.5 text-xs leading-4 text-gray-500">
                                    {item.description}
                                </p>

                                {/* Learn More */}
                                <button
                                    type="button"
                                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-(--secondary) transition-all duration-200 group-hover:gap-2"
                                >
                                    Learn More
                                    <ArrowRight size={11} />
                                </button>

                            </div>
                        );
                    })}

                </Wrapper>

                {/* ================= BOTTOM CTA ================= */}
                <div className="flex flex-col gap-3 rounded-b-xl bg-(--secondary) px-5 py-3 text-white sm:flex-row sm:items-center sm:justify-between sm:px-7">

                    <p className="text-xs font-medium sm:text-sm">
                        Let&apos;s plan your financial future together.
                    </p>

                    <button
                        type="button"
                        className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/80 px-4 py-2 text-xs font-semibold transition"
                    >
                        <MessageCircle size={14} />
                        WhatsApp Us
                    </button>

                </div>

            </div>
        </section>
    );
}