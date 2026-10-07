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
        <section id="investments" className="w-full scroll-mt-24 bg-white">
            <div className="">

                {/* ================= HERO ================= */}
                <div
                    className="relative overflow-hidden bg-cover bg-no-repeat bg-bottom-right sm:bg-center"
                    style={{
                        backgroundImage:
                            "url('/investment.webp')",
                    }}
                >
                    <div className="sm:hidden absolute inset-0 bg-black/30" />
                    <Wrapper className="relative z-10 flex items-center pt-32 pb-32 sm:px-10">
                        <div className="flex items-center justify-center gap-4">

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

              
                {/* <Wrapper className="grid grid-cols- gap-3 bg-white px-4 pt-8 pb-8 sm:grid-cols-3 sm:gap-5 sm:px-6 lg:grid-cols-5 lg:gap-6">

                    {investmentOptions.map((item) => {
                        const Icon = item.icon;

                        return (
                            <article
                                key={item.title}
                                className="group relative flex min-h-55 flex-col overflow-hidden rounded-2xl border border-slate-200 bg-linear-to-b from-white to-slate-50/80 p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-(--primary)/30 hover:shadow-lg hover:shadow-(--primary)/10 focus-within:-translate-y-1 focus-within:border-(--primary)/30 focus-within:shadow-lg focus-within:shadow-(--primary)/10 sm:min-h-60 sm:p-5 lg:p-6"
                            >

                                <div className="pointer-events-none absolute -right-8 -top-8 h-20 w-20 rounded-full bg-(--primary)/5 transition-transform duration-300 group-hover:scale-150" />

                                <div className="relative mx-auto flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-(--primary)/10 text-(--primary) ring-1 ring-inset ring-(--primary)/10 transition-colors duration-300 group-hover:bg-(--primary) group-hover:text-white">
                                    <Icon
                                        size={24}
                                        strokeWidth={2}
                                    />
                                </div>

                           
                                <h3 className="mt-4 text-sm font-bold leading-5 text-slate-900 sm:text-base">
                                    {item.title}
                                </h3>

                             
                                <p className="mx-auto mt-2 max-w-37.5 flex-1 text-xs leading-5 text-slate-500">
                                    {item.description}
                                </p>

                           
                                <button
                                    type="button"
                                    className="mx-auto mt-4 inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-semibold text-(--primary) transition-all duration-200 hover:bg-(--primary)/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-(--primary) group-hover:gap-3"
                                >
                                    Learn More
                                    <ArrowRight size={13} />
                                </button>

                            </article>
                        );
                    })}

                </Wrapper>

            
                <div id="contact" className="scroll-mt-24 flex flex-col gap-3 rounded-b-xl bg-(--primary) px-5 py-3 text-white sm:flex-row sm:items-center sm:justify-between sm:px-7">

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

                </div> */}

            </div>
        </section>
    );
}