import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Wrapper from "./Wrapper";

const helpOptions = [
    {
        title: "Protect",
        description: "Comprehensive insurance solutions for you and your loved ones.",
        link: "Explore insurance",
        href: "/insurance-guide",
        image: "/h1.png",
        imageAlt: "Insurance protection",
        accent: "var(--secondary)",
    },
    {
        title: "Invest",
        description: "Smart investment options to grow your wealth consistently.",
        link: "Explore investments",
        href: "/investments",
        image: "/h2.png",
        imageAlt: "Investment growth",
        accent: "var(--primary)",
    },
    {
        title: "Plan",
        description: "Goal-based financial planning for a secure, stress-free future.",
        link: "Explore planning",
        href: "/contact",
        image: "/h3.png",
        imageAlt: "Financial planning",
        accent: "var(--gold)",
    },
];

export default function HelpSection() {
    return (
        <section
        >
            <Wrapper>
                <div className="text-center">
                    <h2
                        id="help-heading"
                        className="text-3xl font-semibold tracking-tight text-(--primary) sm:text-4xl"
                    >
                        What can we help you with?
                    </h2>
                    <p className="mt-3 text-base leading-relaxed text-slate-600">
                        Choose where you&apos;d like to start. We&apos;ll guide you from there.
                    </p>
                </div>

                <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
                    {helpOptions.map((option) => (
                        <Link
                            key={option.title}
                            href={option.href}
                            style={{ "--accent": option.accent }}
                            className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white p-6 transition-[transform,box-shadow,border-color] duration-300 ease-out hover:-translate-y-1 hover:border-transparent hover:shadow-[0_20px_40px_-20px_rgba(15,23,42,0.25)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--accent) motion-reduce:transition-none motion-reduce:hover:translate-y-0 sm:p-7"
                        >


                            <div className="flex items-start justify-between">
                                <div
                                    className="flex size-20 items-center justify-center rounded-2xl"
                                    style={{
                                        backgroundColor:
                                            "color-mix(in srgb, var(--accent) 10%, white)",
                                    }}
                                >
                                    <Image
                                        src={option.image}
                                        alt={option.imageAlt}
                                        width={80}
                                        height={80}
                                        className="size-full rounded-2xl object-cover"
                                    />
                                </div>

                                <span
                                    aria-hidden="true"
                                    className="flex size-10 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition-colors duration-300 group-hover:border-(--accent) group-hover:bg-(--accent) group-hover:text-white"
                                >
                                    <ArrowUpRight size={18} strokeWidth={2} />
                                </span>
                            </div>

                            <h3 className="mt-8 text-2xl font-semibold tracking-tight text-(--primary)">
                                {option.title}
                            </h3>
                            <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-slate-600">
                                {option.description}
                            </p>

                            <span className="mt-6 inline-flex w-fit items-center text-sm font-semibold text-(--accent)">
                                <span className="bg-linear-to-r from-current to-current bg-size-[0%_1.5px] bg-bottom-left bg-no-repeat pb-0.5 transition-[background-size] duration-300 group-hover:bg-size-[100%_1.5px] motion-reduce:transition-none">
                                    {option.link}
                                </span>
                            </span>
                        </Link>
                    ))}
                </div>
            </Wrapper>
        </section>
    );
}