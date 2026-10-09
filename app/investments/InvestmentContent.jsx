import {
  ArrowRight,
  BadgeCheck,
  Banknote,
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  LineChart,
  PiggyBank,
  Repeat2,
  ShieldCheck,
  Target,
  WalletCards,
} from "lucide-react";
import Wrapper from "../_components/Wrapper";
import Link from "next/link";

const mutualFundOptions = [
  "Equity Mutual Funds",
  "Hybrid Mutual Funds",
  "Debt Mutual Funds",
  "Goal-Based Strategies",
  "SIP Investments",
  "Lumpsum Investments",
];

const goals = [
  {
    title: "Child Education",
    description: "Build a dedicated investment strategy for your child’s future education needs.",
    icon: GraduationCap,
  },
  {
    title: "Retirement",
    description: "Create a long-term strategy aimed at building a retirement corpus and preparing for your post-retirement years.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Wealth Creation",
    description: "Build long-term wealth through disciplined investing and appropriate asset allocation.",
    icon: LineChart,
  },
  {
    title: "Other Financial Goals",
    description: "Plan for major future financial commitments and milestones.",
    icon: Target,
  },
];

const journey = [
  { label: "Goal", icon: Target },
  { label: "Time Horizon", icon: BookOpen },
  { label: "Risk Profile", icon: ShieldCheck },
  { label: "Asset Allocation", icon: LineChart },
  { label: "Investment", icon: WalletCards },
  { label: "Review", icon: BadgeCheck },
];

function SectionHeading({ eyebrow, title, children, light = false }) {
  return (
    <div className="max-w-2xl">
      <p className={`text-xs font-bold uppercase tracking-[0.2em] ${light ? "text-(--gold)" : "text-(--secondary)"}`}>
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

export default function InvestmentContent() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#f7f8f6]">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-(--gold)/20" />
        <Wrapper className="relative grid gap-12 py-20 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:py-28">
          <SectionHeading eyebrow="Build wealth with purpose" title="Investing is more than chasing returns.">
            <p>
              A good investment strategy should consider your financial goals,
              investment horizon, risk profile, liquidity requirements and
              overall financial situation.
            </p>
            <p className="mt-4">
              At Invest N Insure, we help you understand different investment
              options and structure your investments around your goals.
            </p>
          </SectionHeading>

          <div className="relative overflow-hidden rounded-4xl bg-(--primary) p-8 text-white shadow-2xl shadow-(--primary)/15 sm:p-12">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full border border-white/10" />
            <div className="absolute -bottom-20 -left-8 h-48 w-48 rounded-full border border-(--gold)/20" />
            <PiggyBank className="relative text-(--gold)" size={42} strokeWidth={1.5} />
            <p className="relative mt-10 max-w-sm text-3xl font-semibold leading-tight">
              Make every investment decision with a clear purpose.
            </p>
            <p className="relative mt-4 text-sm leading-6 text-white/70">
              Clarity, discipline and consistency can help turn today’s
              decisions into tomorrow’s progress.
            </p>
          </div>
        </Wrapper>
      </section>

      <section id="mutual-funds" className="scroll-mt-24 bg-white">
        <Wrapper className="grid gap-14 py-20 lg:grid-cols-[0.8fr_1fr] lg:items-center lg:py-28">
          <div>

            <SectionHeading eyebrow="Mutual funds" title="Invest with a goal. Stay invested with a plan.">
              <p>
                Mutual Funds can be a useful investment vehicle for long-term
                wealth creation and goal-based investing.
              </p>
              <p className="mt-4">
                We help you understand different mutual fund categories and
                investment approaches based on your objectives and risk profile.
              </p>
            </SectionHeading>
          </div>

          <div className="rounded-4xl border border-slate-200 bg-[#f7f8f6] p-6 sm:p-9">
            <div className="flex items-center justify-between gap-4 border-b border-slate-200 pb-5">
              <h3 className="text-lg font-bold text-(--primary)">Mutual Fund Solutions</h3>
              <span className="text-xs font-semibold uppercase tracking-widest text-slate-400">01</span>
            </div>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {mutualFundOptions.map((option) => (
                <div key={option} className="group flex items-center gap-3 rounded-xl border border-transparent bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-(--gold)/40 hover:shadow-md">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-(--secondary)/10 text-(--secondary) transition group-hover:bg-(--secondary) group-hover:text-white">
                    <ArrowRight size={12} />
                  </span>
                  {option}
                </div>
              ))}
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="border-y border-slate-200 bg-[#f7f8f6]">
        <Wrapper className="grid gap-5 py-20 sm:grid-cols-2 lg:grid-cols-3 lg:py-28">
          <div className="sm:col-span-2 lg:col-span-1">
            <SectionHeading eyebrow="Investment approaches" title="Choose a strategy that fits your life.">
              <p>
                Whether you are investing regularly or have a surplus amount,
                the right approach starts with your objective and risk profile.
              </p>
            </SectionHeading>
          </div>
          <article className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5">
            <h3 className="mt-5 text-xl font-bold text-(--primary)">SIP</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              A Systematic Investment Plan allows you to invest a fixed amount at regular intervals.<br />
              SIP can help develop investment discipline and provide a systematic approach towards long-term financial goals.

            </p>
            <p className="mt-4 text-sm font-semibold text-(--secondary)">
              Start with a goal. Stay disciplined. Give your investments time.
            </p>
          </article>
          <article className="rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-slate-900/5">
            <h3 className="mt-5 text-xl font-bold text-(--primary)">Lumpsum investment</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600">
              If you have a surplus amount available for investment, a suitable lumpsum strategy can help you put your money to work according to your financial objectives and risk profile.
            </p>
          </article>
        </Wrapper>
      </section>

      <section id="goals" className="scroll-mt-24 bg-white">
        <Wrapper className="py-20 lg:py-28">
          <SectionHeading eyebrow="Goal-based investing" title="Don’t just ask “Where should I invest?”">
            <p className="text-xl font-semibold text-(--primary)">Ask: “What am I investing for?”</p>
            <p className="mt-3">We can help you plan for the goals that matter most.</p>
          </SectionHeading>
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {goals.map(({ title, description, icon: Icon }) => (
              <article key={title} className="group rounded-3xl border border-slate-200 p-6 transition hover:-translate-y-1 hover:border-(--gold)/50 hover:shadow-xl hover:shadow-slate-900/5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-(--primary)/5 transition group-hover:bg-(--primary) group-hover:text-white">
                  <Icon className="text-(--primary) group-hover:text-white" size={22} strokeWidth={1.8} />
                </div>
                <h3 className="mt-5 font-bold text-(--primary)">{title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </Wrapper>
      </section>

      <section className="relative overflow-hidden bg-(--primary) text-white">
        <div className="pointer-events-none absolute -bottom-32 -left-20 h-80 w-80 rounded-full border border-white/10" />
        <Wrapper className="relative grid gap-12 py-20 lg:grid-cols-[0.7fr_1fr] lg:items-center lg:py-28">
          <SectionHeading eyebrow="Fixed-income options" title="Stability can have a place in your financial plan." light>
            <p>
              For investors who prefer predictable or relatively stable
              income-oriented options, fixed-income products can play an
              important role in an overall financial strategy.
            </p>
            <p className="mt-4">
              We help you explore suitable Fixed Deposits and other fixed-income
              opportunities, considering tenure, returns, liquidity and
              applicable risks.
            </p>
          </SectionHeading>
          <div className="grid gap-4 sm:grid-cols-3">
            {["Tenure", "Returns", "Liquidity"].map((item) => (
              <div key={item} className="rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm">
                <ShieldCheck className="text-(--gold)" size={25} />
                <p className="mt-4 font-semibold">{item}</p>
                <p className="mt-1 text-xs leading-5 text-white/60">Considered as part of a suitable strategy.</p>
              </div>
            ))}
          </div>
        </Wrapper>
      </section>

      <section className="border-b border-slate-200 bg-[#f7f8f6]">
        <Wrapper className="py-20 lg:py-28">
          <SectionHeading eyebrow="Your investment journey" title="A thoughtful process for every financial decision.">
            <p>
              The right investment strategy is not necessarily the one offering
              the highest potential return. It is the one that is appropriate
              for your objective and financial situation.
            </p>
          </SectionHeading>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-6">
            {journey.map(({ label, icon: Icon }, index) => (
              <div key={label} className="relative flex items-center gap-3 rounded-[1.25rem] border border-slate-200 bg-white p-4 shadow-sm lg:block lg:text-center">
                <div className="mx-0 flex h-11 w-11 items-center justify-center rounded-full bg-(--primary) text-white lg:mx-auto">
                  <Icon size={20} />
                </div>
                <p className="mt-0 text-sm font-bold text-(--primary) lg:mt-3">{label}</p>
                {index < journey.length - 1 && <ArrowRight className="ml-auto hidden text-(--gold) lg:absolute lg:-right-4 lg:top-8 lg:block" size={18} />}
              </div>
            ))}
          </div>
        </Wrapper>
      </section>

      <section id="contact" className="scroll-mt-24 bg-white">
        <Wrapper className="grid gap-12 py-20 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:py-28">
          <div>
            <SectionHeading eyebrow="Professional credential" title="Your mutual fund investments with a registered distributor.">
              <p>
                For mutual fund-related guidance and distribution, connect with
                us to discuss your financial goals and investment requirements.
              </p>
            </SectionHeading>
            <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-(--primary) px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-(--primary)/15 transition hover:-translate-y-0.5 hover:bg-(--secondary)">
              Discuss Your Investment Goals
              <ArrowRight size={16} />
            </Link>
          </div>
          <div className="relative overflow-hidden rounded-4xl bg-[#f7f8f6] p-8 ring-1 ring-inset ring-slate-200 sm:p-10">
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full border border-(--gold)/25" />
            <BadgeCheck className="text-(--gold)" size={34} />
            <p className="mt-6 text-2xl font-bold text-(--primary)">Ritesh Sharma</p>
            <p className="mt-2 text-xs font-bold tracking-[0.15em] text-(--secondary)">AMFI REGISTERED MUTUAL FUND DISTRIBUTOR</p>
            <div className="mt-6 border-t border-slate-200 pt-5">
              <p className="text-sm text-slate-500">ARN</p>
              <p className="mt-1 text-xl font-bold text-slate-800">184984</p>
            </div>
          </div>
        </Wrapper>
      </section>

      <footer className="border-t border-slate-200 bg-[#f7f8f6] px-6 py-8 text-center text-xs leading-5 text-slate-500">
        Mutual Fund investments are subject to market risks, read all scheme related documents carefully.
      </footer>
    </>
  );
}

function RepeatIcon() {
  return (
    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--secondary)/10 text-(--secondary)">
      <Repeat2 size={25} />
    </div>
  );
}
