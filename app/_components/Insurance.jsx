import React from "react";
import {
    HeartPulse,
    ShieldCheck,
    CarFront,
    UserRound,
    Plane,
    ArrowRight,
    MessageCircle,
} from "lucide-react";
import Wrapper from "./Wrapper";

const insuranceOptions = [
    {
        title: "Health Insurance",
        description: "Comprehensive health coverage for you and your family.",
        icon: HeartPulse,
    },
    {
        title: "Term Life Insurance",
        description: "Secure your family's future with affordable life protection.",
        icon: ShieldCheck,
    },
    {
        title: "Motor Insurance",
        description: "Car & Bike insurance with best coverage and claim support.",
        icon: CarFront,
    },
    {
        title: "Personal Accident",
        description: "Financial protection against accidental injuries.",
        icon: UserRound,
    },
    {
        title: "Travel Insurance",
        description: "Travel worry-free with worldwide coverage and assistance.",
        icon: Plane,
    },
];



export default function InsuranceSolutions() {
    return (
        <section id="insurance" className="w-full scroll-mt-24 bg-white">
            <div className="">

                {/* ================= HERO ================= */}
                <div
                    className="relative overflow-hidden bg-cover bg-no-repeat bg-bottom-right sm:bg-center"
                    style={{
                        backgroundImage:
                            "url('/insurance.webp')",
                    }}
                >
                    <div className="sm:hidden absolute inset-0 bg-black/30" />

                    <Wrapper className="relative z-10 flex items-center pt-32 pb-32 sm:px-10">
                        <div className="flex items-center gap-4">

                            {/* Text */}
                            <div>
                                <h2 className="text-2xl font-bold tracking-tight text-white sm:text-4xl">
                                    Insurance Solutions
                                </h2>

                                <p className="mt-1 max-w-md text-xs leading-5 text-white/90 sm:text-sm">
                                    Protect what matters most with the right
                                    <br className="hidden sm:block" />
                                    insurance coverage.
                                </p>
                            </div>

                        </div>
                    </Wrapper>
                </div>


                {/* <Wrapper className="grid grid-cols-2 gap-6 pt-6 pb-6 bg-white sm:grid-cols-3 lg:grid-cols-5">

                    {insuranceOptions.map((item) => {
                        const Icon = item.icon;

                        return (
                            <div
                                key={item.title}
                                className="group border border-gray-200 p-2.5 md:p-8 rounded-2xl text-center transition-all duration-300"
                            >

                            
                                <div className="mx-auto flex h-10 w-10 items-center justify-center text-(--secondary)">
                                    <Icon
                                        size={28}
                                        strokeWidth={1.8}
                                    />
                                </div>

                           
                                <h3 className="mt-1 font-bold">
                                    {item.title}
                                </h3>

                    <p className="mx-auto mt-1 max-w-37.5 text-xs leading-4 text-gray-500">
                                    {item.description}
                                </p>

                             
                                <button
                                    type="button"
                                    className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-(--secondary) transition-all duration-200 group-hover:gap-2"
                                >
                                    Get Quote
                                    <ArrowRight size={11} />
                                </button>

                            </div>
                        );
                    })}

                </Wrapper>

      
                <div className="flex flex-col gap-3 rounded-b-xl bg-(--secondary) px-5 py-3 text-white sm:flex-row sm:items-center sm:justify-between sm:px-7">

                    <p className="text-xs font-medium sm:text-sm">
                        Need help choosing the right plan? &nbsp;
                        Talk to us today!
                    </p>

                    <button
                        type="button"
                        className="inline-flex w-fit items-center gap-2 rounded-xl border border-white/80 px-4 py-2 text-xs font-semibold transition"
                    >
                        <MessageCircle size={14} />
                        WhatsApp Us
                    </button>

                </div> */}

            </div>
        </section>
    );
}