import Link from "next/link";
import { FaShield, FaWhatsapp } from "react-icons/fa6";
import { GoArrowUpRight } from "react-icons/go";

export const WA =
    "https://wa.me/919818592859";

export default function Hero() {
    return (
        <section id="home" className="relative overflow-hidden">
            <div
                aria-hidden="true"
                className="absolute -right-32 -top-24 h-96 w-96 rounded-full bg-(--secondary)/10"
            />
            <div
                aria-hidden="true"
                className="absolute -bottom-40 left-1/3 h-80 w-80 rounded-full bg-(--gold)/10"
            />

            <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 sm:px-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:py-20">
                <div>
                    <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-(--gold)/30 bg-white px-3 py-1.5 text-xs font-semibold tracking-widest text-(--gold) shadow-sm">
                        <span className="h-2 w-2 rounded-full bg-(--secondary)" />
                        INVEST N INSURE
                    </div>

                    <h1 className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-(--primary) sm:text-5xl lg:text-6xl">
                        Invest smart.
                        <br />
                        <span className="text-(--secondary)">Protect better.</span>
                        <br />
                        Build wealth.
                    </h1>

                    <p className="mt-6 max-w-xl text-lg font-medium leading-8 text-slate-700 sm:text-xl">
                        Personalised investment and insurance solutions for your
                        financial journey.
                    </p>
                    <p className="mt-4 max-w-xl text-sm leading-7 text-slate-600">
                        Your financial goals deserve more than a one-size-fits-all approach.<br />
                        Whether you are planning for wealth creation, retirement, your child’s education, family protection or financial security, we help you choose and structure suitable solutions for your journey.

                    </p>

                    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center gap-2 rounded-xl bg-(--primary) px-5 py-3 text-sm font-semibold text-white shadow-lg"
                        >
                            Book a Consultation
                            <GoArrowUpRight size={17} />
                        </Link>
                        <Link
                            href={WA}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 rounded-xl border border-(--secondary)/30 text-white px-5 py-3 text-sm font-semibold bg-(--secondary)"
                        >
                            <FaWhatsapp size={18} />
                            Talk to Us on WhatsApp
                        </Link>
                    </div>
                </div>

                <div className="relative mx-auto w-full max-w-lg lg:justify-self-end">

                    <div className="relative rounded-[1.75rem] bg-white pb-12 shadow-2xl">
                        <img
                            src="/advisor.jpg"
                            alt="Ritesh Sharma, mutual fund distributor and financial planner at Invest N Insure"
                            width="398"
                            height="357"
                            fetchPriority="high"
                            className="aspect-[1.12] w-full rounded-[1.75rem] object-cover object-top"
                        />
                        <div className="absolute bottom-0 left-1/2 w-[calc(100%-2rem)] -translate-x-1/2 translate-y-1/4 rounded-2xl border border-white/80 bg-(--primary) px-5 py-3 text-white shadow-xl sm:w-[calc(100%-3rem)] sm:px-6 sm:py-4">
                            <p className="font-serif text-xl font-semibold sm:text-2xl">
                                Ritesh Sharma
                            </p>
                            <p className="mt-0.5 text-xs font-medium text-(--gold) sm:text-sm">
                                Wealth Planner
                            </p>
                            <p className="mt-2 max-w-56 text-[10px] leading-4 text-white/90 sm:text-xs sm:leading-5">
                                Your trusted partner in building Wealth, Security
                                &amp; Peace of Mind.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
