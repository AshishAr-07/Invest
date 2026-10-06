import React from "react";
import {
    Users,
    Repeat2,
    HandCoins,
    Landmark,
    FileText,
    ArrowRight,
    Phone,
} from "lucide-react";
import Wrapper from "./Wrapper";

const investmentOptions = [
    {
        title: "Mutual Funds",
        description: "Diversified portfolio managed by experts.",
        icon: Users,
    },
    {
        title: "SIP",
        description: "Invest small amounts regularly & build wealth.",
        icon: Repeat2,
    },
    {
        title: "Lump Sum",
        description: "Invest once, earn long term.",
        icon: HandCoins,
    },
    {
        title: "Fixed Deposits",
        description: "Secure returns with FDs from top banks.",
        icon: Landmark,
    },
    {
        title: "Bonds & NCDs",
        description: "Explore fixed income opportunities.",
        icon: FileText,
    },
];

export default function InvestmentSolutions() {
    return (
        <section className="w-full bg-white">
            <div className="">

                {/* ================= HERO ================= */}
                <div
                    className="relative overflow-hidden bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('/investment.webp')",
                    }}
                >
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-(--primary)/20" />

                    <Wrapper className="relative z-10 flex min-h-47.5 items-center px-6 pt-6 pb-6 sm:px-10">
                        <div className="flex items-center gap-4">

                            {/* Text */}
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
                                    Investment Solutions
                                </h2>

                                <p className="mt-1 max-w-md text-xs leading-5 text-white/90 sm:text-sm">
                                    Smart investment options to help you
                                    <br className="hidden sm:block" />
                                    grow your wealth and achieve your goals.
                                </p>
                            </div>

                        </div>
                    </Wrapper>
                </div>

                {/* ================= CARDS ================= */}
                <Wrapper className="grid grid-cols-2 gap-6 pt-6 pb-6 bg-white sm:grid-cols-3 lg:grid-cols-5">

                    {investmentOptions.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="group border border-gray-200 p-2.5 md:p-8 rounded-2xl text-center transition-all duration-300"
                            >

                                {/* Icon */}
                                <div className="mx-auto flex h-10 w-10 items-center justify-center text-(--primary)">
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
                                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-(--primary) transition-all duration-200 group-hover:gap-2"
                                >
                                    Learn More
                                    <ArrowRight size={11} />
                                </button>

                            </div>
                        );
                    })}

                </Wrapper>

                {/* ================= BOTTOM CTA ================= */}
                <div className="flex flex-col gap-3 rounded-b-xl bg-(--primary) px-5 py-3 text-white sm:flex-row sm:items-center sm:justify-between sm:px-7">

                    <p className="text-xs font-medium sm:text-sm">
                        Not sure where to invest? Get expert guidance.
                    </p>

                    <button
                        type="button"
                        className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/80 px-4 py-2 text-xs font-semibold transition"
                    >
                        <Phone size={14} />
                        Get in Touch
                    </button>

                </div>

            </div>
        </section>
    );
}