import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Eye,
  HandHeart,
  LineChart,
  ShieldCheck,
  Target,
} from "lucide-react";
import Wrapper from "../_components/Wrapper";

const philosophy = [
  {
    title: "Educate",
    description: "Understand before you invest or buy insurance.",
    icon: BookOpen,
  },
  {
    title: "Plan",
    description: "Connect your financial decisions with your goals.",
    icon: Target,
  },
  {
    title: "Invest",
    description: "Choose suitable investment solutions based on your requirements and risk profile.",
    icon: LineChart,
  },
  {
    title: "Protect",
    description: "Protect your family, income, health and assets against unforeseen risks.",
    icon: ShieldCheck,
  },
  {
    title: "Review",
    description: "Review your financial strategy periodically as your circumstances evolve.",
    icon: Eye,
  },
];

const strengths = [
  {
    title: "Personal attention",
    description: "We focus on understanding your individual financial requirements.",
  },
  {
    title: "Simplified communication",
    description: "Financial concepts can be complicated. We aim to explain them in simple, practical language.",
  },
  {
    title: "Goal-based thinking",
    description: "We encourage investors to connect their investments with specific financial objectives.",
  },
  {
    title: "Holistic perspective",
    description: "We look at both sides of financial planning—wealth creation and financial protection.",
  },
  {
    title: "Long-term approach",
    description: "Our focus is on building long-term financial relationships rather than making one-time transactions.",
  },
];

function SectionHeading({ eyebrow, title, children, light = false }) {
  return (
    <div className="max-w-2xl">
      <p className={`text-xs font-bold uppercase tracking-[0.24em] ${light ? "text-(--gold)" : "text-(--secondary)"}`}>
        {eyebrow}
      </p>
      <h2 className={`mt-3 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.7rem] ${light ? "text-white" : "text-(--primary)"}`}>
        {title}
      </h2>
      {children && (
        <div className={`mt-5 text-sm leading-7 sm:text-base ${light ? "text-white/75" : "text-slate-600"}`}>
          {children}
        </div>
      )}
    </div>
  );
}

export default function AboutContent() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#f7f8f6]">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-(--gold)/20" />
        <Wrapper className="relative grid gap-12 py-24 lg:grid-cols-[1fr_0.82fr] lg:items-center lg:py-32">
          <SectionHeading eyebrow="About Invest N Insure" title="Helping you make better financial decisions.">
            <p>
              Financial products have become increasingly complex. There are
              multiple investment options, insurance plans and financial
              products available today.
            </p>
            <p className="mt-4">
              The challenge is not simply finding a product—it is understanding
              <strong className="font-semibold text-(--primary)"> what is appropriate for your individual needs.</strong>
            </p>
            <p className="mt-4">
              At Invest N Insure, our objective is to make this process simpler
              and more structured.
            </p>
          </SectionHeading>

          <div className="relative overflow-hidden rounded-4xl bg-(--primary) p-8 text-white shadow-2xl shadow-(--primary)/15 sm:p-11">
            <div className="relative mb-8 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.18em] text-white/60">
              <span className="h-px w-8 bg-(--gold)" />
              A clearer way forward
            </div>
            <div className="absolute -bottom-16 -right-10 h-48 w-48 rounded-full border border-white/10" />
            <HandHeart className="relative text-(--gold)" size={42} strokeWidth={1.5} />
            <p className="relative mt-9 max-w-sm text-3xl font-semibold leading-tight">
              Your goals should guide the conversation.
            </p>
            <p className="relative mt-4 text-sm leading-6 text-white/70">
              Better financial decisions begin with clarity, context and a
              strategy built around your life.
            </p>
          </div>
        </Wrapper>
      </section>

      <section className="bg-white">
        <Wrapper className="grid gap-14 py-20 lg:grid-cols-[0.7fr_1fr] lg:items-center lg:py-28">
          <div className="relative mx-auto w-full max-w-sm">
            <div className="absolute -bottom-5 -left-5 h-full w-full rounded-4xl border border-(--gold)/35" />
            <div className="relative overflow-hidden rounded-4xl bg-slate-100 shadow-xl shadow-slate-900/10">
              <img
                src="/advisor.jpg"
                alt="Ritesh Sharma, AMFI Registered Mutual Fund Distributor"
                className="aspect-4/5 w-full object-cover object-top"
              />
            </div>
          </div>

          <div className="lg:pl-4">
            <SectionHeading eyebrow="Meet your advisor" title="A thoughtful approach to every financial decision.">
              <p>
                We believe financial planning should begin with
                <strong className="font-semibold text-(--primary)"> your goals</strong>,
                not with a product.
              </p>
              <p className="mt-4">
                Our approach focuses on understanding your requirements,
                explaining available options in simple language and helping you
                make informed financial decisions.
              </p>
            </SectionHeading>
            <div className="mt-8 rounded-2xl border border-slate-200 bg-[#f7f8f6] p-5">
              <div className="flex items-start gap-4">
                <BadgeCheck className="mt-1 shrink-0 text-(--gold)" size={25} />
                <div>
                  <p className="text-2xl font-bold text-(--primary)">Ritesh Sharma</p>
                  <p className="mt-2 text-xs font-bold uppercase tracking-[0.15em] text-(--secondary)">
                    AMFI Registered Mutual Fund Distributor
                  </p>
                  <p className="mt-2 text-sm font-semibold text-slate-500">ARN: 184984</p>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="border-y border-slate-200 bg-[#f7f8f6]">
        <Wrapper className="py-20 lg:py-28">
          <SectionHeading eyebrow="Our philosophy" title="Educate. Plan. Invest. Protect. Review.">
            <p>A simple, structured approach to making financial choices with greater confidence.</p>
          </SectionHeading>
          <div className="relative mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
            <div className="pointer-events-none absolute left-[10%] right-[10%] top-11 hidden h-px bg-(--gold)/30 lg:block" />
            {philosophy.map(({ title, description, icon: Icon }, index) => (
              <article key={title} className="group relative z-10 rounded-3xl border border-slate-200 bg-white p-6 transition hover:-translate-y-1 hover:border-(--gold)/50 hover:shadow-xl hover:shadow-slate-900/5">
                <span className="text-xs font-bold tracking-widest text-slate-300">0{index + 1}</span>
                <div className="mt-6 flex h-11 w-11 items-center justify-center rounded-full bg-(--primary)/5 text-(--primary) transition group-hover:bg-(--primary) group-hover:text-white">
                  <Icon size={21} strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 text-xl font-semibold capitalize text-(--primary)">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </Wrapper>
      </section>

      <section className="bg-white">
        <Wrapper className="py-20 lg:py-28">
          <SectionHeading eyebrow="Why invest with us?" title="Advice that keeps the bigger picture in view.">
            <p>Our work is grounded in understanding, consistency and a long-term relationship.</p>
          </SectionHeading>
          <div className="mt-12 grid gap-x-10 gap-y-0 md:grid-cols-2">
            {strengths.map(({ title, description }, index) => (
              <div key={title} className="group flex gap-5 border-b border-slate-200 py-7 first:pt-0 md:even:pl-8 md:odd:pr-8">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-(--secondary) text-xs font-bold text-white transition group-hover:bg-(--gold)">
                  {index + 1}
                </span>
                <div>
                  <h3 className="font-bold capitalize text-(--primary)">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>

      <section id="contact" className="scroll-mt-24 bg-(--secondary) text-white">
        <Wrapper className="relative overflow-hidden text-center">
          <div className="pointer-events-none absolute -right-24 -top-28 h-72 w-72 rounded-full border border-white/10" />
          <div className="pointer-events-none absolute -bottom-40 -left-20 h-80 w-80 rounded-full border border-(--gold)/20" />
          <div className="relative mx-auto max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.24em] text-(--gold)">Our commitment</p>
            <h2 className="mt-3 text-4xl font-semibold leading-tight sm:text-5xl">
              Your financial goals deserve a thoughtful strategy.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
              We aim to help you become more aware of your financial choices so
              that you can make decisions with greater clarity and confidence.
            </p>
            <a href="mailto:hello@investninsure.com" className="mt-6 inline-flex items-center gap-2 rounded-full bg-(--gold) px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-black/15 transition hover:-translate-y-0.5 hover:brightness-105">
              Start a conversation
              <ArrowRight size={16} />
            </a>
            <div className="mx-auto mt-8 border-t border-white/15 pt-7">
              <p className="text-lg font-bold">Invest N Insure</p>
              <p className="mt-2 text-sm italic text-(--gold)">Invest. Protect. Thrive.</p>
            </div>
          </div>
        </Wrapper>
      </section>

    </>
  );
}
