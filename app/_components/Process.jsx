import {
    BarChart3,
    CheckCircle2,
    ClipboardCheck,
    Search,
    ShieldCheck,
} from "lucide-react";
import Wrapper from "./Wrapper";

const steps = [
    {
        num: "01",
        icon: Search,
        title: "UNDERSTAND",
        tagline: "Know Your Financial Journey",
        description:
            "We understand your goals, financial priorities and existing investments and insurance.",

    },
    {
        num: "02",
        icon: ClipboardCheck,
        title: "ANALYSE",
        tagline: "Identify Gaps & Opportunities",
        description:
            "We identify potential gaps, opportunities and areas that may require attention.",
    },
    {
        num: "03",
        icon: BarChart3,
        title: "PLAN",
        tagline: "Build Your Strategy",
        description:
            "We help structure an investment and protection strategy aligned with your objectives.",
    },
    {
        num: "04",
        icon: CheckCircle2,
        title: "IMPLEMENT",
        tagline: "Put Your Plan Into Action",
        description:
            "We assist you in implementing the selected solutions.",
    },
    {
        num: "05",
        icon: ShieldCheck,
        title: "REVIEW",
        tagline: "Stay Aligned Over Time",
        description:
            "Your financial plan should evolve as your life changes. Periodic reviews help keep your strategy aligned with your goals.",
    },
];

export default function Process() {
    return (
        <section className="">
            <Wrapper>
                <div className="mx-auto mb-12 text-center">
                    <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-(--gold)">
                        Our Approach
                    </p>
                    <h2 className="mb-4 text-3xl font-semibold leading-tight text-(--primary) md:text-4xl">
                        A Clear Path To Financial Confidence
                    </h2>
                </div>

                <div className="relative">
                    <div className="absolute left-[10%] right-[10%] top-14 hidden h-0.5 bg-(--gold)/40 xl:block" />

                    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
                        {steps.map((step) => {
                            const Icon = step.icon;

                            return (
                                <article
                                    key={step.num}
                                    className="group relative flex h-full flex-col rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-(--gold)/50 hover:shadow-lg"
                                >
                                    <div className="mb-5 flex flex-col items-center text-center">
                                        <div className="relative mb-3">
                                            <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-(--primary) text-white shadow-md transition-colors group-hover:bg-(--secondary)">
                                                <Icon size={25} strokeWidth={1.8} />
                                            </div>
                                            <span className="absolute -right-2 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-(--gold) text-[10px] font-bold text-white">
                                                {step.num}
                                            </span>
                                        </div>
                                        <h3 className="text-base font-bold tracking-wide text-(--primary)">
                                            {step.title}
                                        </h3>
                                        <p className="mt-1 text-xs font-medium text-(--secondary)">
                                            {step.tagline}
                                        </p>
                                    </div>

                                    <p className="text-center text-sm leading-6 text-slate-600">
                                        {step.description}
                                    </p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}
