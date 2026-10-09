import {
  ArrowRight,
  BadgeCheck,
  CarFront,
  Check,
  HeartPulse,
  Plane,
  ShieldAlert,
  ShieldCheck,
  Stethoscope,
  Umbrella,
  UserRound,
} from "lucide-react";
import Wrapper from "../_components/Wrapper";
import Link from "next/link";

const healthFactors = [
  "Family size",
  "Age",
  "Existing health conditions",
  "Coverage requirement",
  "Budget",
  "Existing insurance",
];

const protectionFactors = [
  "Income",
  "Liabilities",
  "Family needs",
  "Future goals",
  "Existing coverage",
];

const motorOptions = [
  "Private Car Insurance",
  "Two-Wheeler Insurance",
  "Third-Party Motor Insurance",
  "Comprehensive Motor Insurance",
  "Policy Renewal",
  "Insurance Review",
];

const insuranceCheckup = [
  "Health Insurance",
  "Life Insurance",
  "Personal Accident",
  "Motor Insurance",
  "Critical Illness Protection",
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

function FactorList({ items, dark = false }) {
  return (
    <div className="mt-6 grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <div key={item} className={`flex items-center gap-3 rounded-xl border px-4 py-3 text-sm font-medium ${dark ? "border-white/10 bg-white/10 text-white/85" : "border-slate-200 bg-white text-slate-700"}`}>
          <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full ${dark ? "bg-(--gold)/20 text-(--gold)" : "bg-(--secondary)/10 text-(--secondary)"}`}>
            <Check size={13} strokeWidth={3} />
          </span>
          {item}
        </div>
      ))}
    </div>
  );
}

function InsuranceCard({ icon: Icon, eyebrow, title, children, className = "" }) {
  return (
    <article className={`group relative overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-(--gold)/50 hover:shadow-xl hover:shadow-slate-900/5 sm:p-8 ${className}`}>
      <div className="pointer-events-none absolute -right-10 -top-10 h-28 w-28 rounded-full bg-(--primary)/5 transition-transform duration-300 group-hover:scale-150" />
      <div className="relative flex h-12 w-12 items-center justify-center rounded-2xl bg-(--primary) text-(--gold) shadow-lg shadow-(--primary)/15">
        <Icon size={25} strokeWidth={1.8} />
      </div>
      <p className="relative mt-7 text-xs font-bold uppercase tracking-[0.18em] text-(--secondary)">{eyebrow}</p>
      <h3 className="relative mt-3 text-2xl font-semibold leading-tight text-(--primary)">{title}</h3>
      <div className="relative mt-4 text-sm leading-7 text-slate-600">{children}</div>
    </article>
  );
}

export default function InsuranceContent() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-slate-200 bg-[#f7f8f6]">
        <div className="pointer-events-none absolute -right-32 -top-32 h-80 w-80 rounded-full border border-(--gold)/20" />
        <Wrapper className="relative grid gap-12 py-20 lg:grid-cols-[1fr_0.85fr] lg:items-center lg:py-28">
          <SectionHeading eyebrow="Protect what you have built" title="Protection is part of every strong financial plan.">
            <p>
              You work hard to build your income, savings, assets and lifestyle.
              But one unexpected event can create a significant financial burden.Insurance is designed to help protect you and your family against such unforeseen financial risks.
            </p>
            <p className="mt-4">
              At Invest N Insure, we help you assess your protection needs and
              explore suitable insurance solutions.
            </p>
          </SectionHeading>
          <div className="relative overflow-hidden rounded-4xl bg-(--secondary) p-8 text-white shadow-2xl shadow-(--secondary)/15 sm:p-12">
            <div className="absolute -bottom-20 -right-10 h-48 w-48 rounded-full border border-white/10" />
            <Umbrella className="relative text-(--gold)" size={43} strokeWidth={1.5} />
            <p className="relative mt-10 max-w-sm text-3xl font-semibold leading-tight">
              Protect today, so your plans can continue tomorrow.
            </p>
            <p className="relative mt-4 text-sm leading-6 text-white/70">
              Thoughtful coverage can help keep an unexpected event from
              becoming a long-term financial setback.
            </p>
          </div>
        </Wrapper>
      </section>

      <section id="health-insurance" className="scroll-mt-24 bg-white">
        <Wrapper className="grid gap-14 py-20 lg:grid-cols-[0.85fr_1fr] lg:items-center lg:py-28">
          <div>
            <SectionHeading eyebrow="Health insurance" title="Your health. Your savings. Your financial security.">
              <p>
                Medical expenses can impact even a well-planned financial
                portfolio. A suitable health insurance policy can provide
                financial support against covered hospitalisation and medical
                expenses, subject to policy terms and conditions.
              </p>
            </SectionHeading>
          </div>
          <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-[#f7f8f6] p-6 sm:p-9">
            <div className="pointer-events-none absolute -bottom-16 -right-10 h-36 w-36 rounded-full border border-(--gold)/20" />
            <div className="flex items-center justify-between border-b border-slate-200 pb-5">
              <h3 className="text-lg font-bold text-(--primary)">We consider your needs</h3>
              <Stethoscope className="text-(--gold)" size={24} />
            </div>
            <FactorList items={healthFactors} />
          </div>
        </Wrapper>
      </section>

      <section className="border-y border-slate-200 bg-[#f7f8f6]">
        <Wrapper className="grid gap-8 py-20 lg:grid-cols-[1fr_0.8fr] lg:items-center lg:py-28">
          <SectionHeading eyebrow="Health insurance review" title="When was your policy last reviewed?">
            <p>
              Your income, family, health needs and medical costs can change
              over time. A policy that was adequate several years ago may need
              to be reviewed today.
            </p>
            <Link href="/contact" className="mt-7 inline-flex items-center gap-2 rounded-full bg-(--primary) px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-(--primary)/15 transition hover:-translate-y-0.5 hover:bg-(--secondary)">
              Get Your Health Insurance Reviewed
              <ArrowRight size={16} />
            </Link>
          </SectionHeading>
          <div className="relative overflow-hidden rounded-4xl bg-white p-8 shadow-sm ring-1 ring-inset ring-slate-200 sm:p-10">
            <div className="pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full border border-(--gold)/25" />
            <BadgeCheck className="text-(--gold)" size={35} />
            <p className="mt-6 text-2xl font-semibold text-(--primary)">Your coverage should grow with your life.</p>
            <p className="mt-3 text-sm leading-6 text-slate-600">A periodic review can help identify changes in family needs, benefits and protection gaps.</p>
          </div>
        </Wrapper>
      </section>

      <section id="life-insurance" className="scroll-mt-24 bg-(--primary) text-white">
        <Wrapper className="grid gap-12 py-20 lg:grid-cols-[0.9fr_1fr] lg:items-center lg:py-28">
          <SectionHeading eyebrow="Term & life insurance" title="Protect your family’s financial future." light>
            <p>
              Your income supports your family’s lifestyle, goals and future
              plans. Term insurance can provide financial protection to your
              family in the event of the insured person’s death, subject to the
              policy terms.
            </p>
          </SectionHeading>
          <div className="relative">

            <p className=" text-sm font-semibold uppercase tracking-[0.18em] text-white">We help you assess your protection requirement based on factors such as:</p>
            <FactorList items={protectionFactors} dark />
          </div>
        </Wrapper>
      </section>

      <section className="bg-white">
        <Wrapper className="py-20 lg:py-28">
          <SectionHeading eyebrow="Everyday protection" title="Cover the moments that keep life moving.">
            <p>Explore suitable solutions for the risks that affect your mobility, work and travel.</p>
          </SectionHeading>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            <InsuranceCard icon={CarFront} eyebrow="Motor insurance" title="Protect your car & two-wheeler">
              <p>We provide assistance with private car, two-wheeler, third-party and comprehensive motor insurancen policy renewal and insurance review.</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {motorOptions.slice(4).map((item) => <span key={item} className="rounded-full bg-slate-100 px-3 py-1.5 text-xs font-semibold text-(--primary)">{item}</span>)}
              </div>
            </InsuranceCard>
            <InsuranceCard icon={UserRound} eyebrow="Personal accident insurance" title="Because accidents can affect more than your health">
              <p>An accident can impact your ability to work and earn. Personal Accident Insurance can provide specified benefits for covered accidental events, subject to policy terms and conditions.</p>
            </InsuranceCard>
            <InsuranceCard icon={Plane} eyebrow="Travel insurance" title="Travel with greater confidence">
              <p>Travel insurance can help protect against certain unexpected events during your journey, depending on the policy coverage. Explore suitable options before your next trip.</p>
            </InsuranceCard>
          </div>
        </Wrapper>
      </section>

      <section className="border-y border-slate-200 bg-[#f7f8f6]">
        <Wrapper className="grid gap-12 py-20 lg:grid-cols-[0.8fr_1fr] lg:items-center lg:py-28">
          <SectionHeading eyebrow="Critical illness & cancer protection" title="Serious illness can create a financial challenge too.">
            <p>
              Medical treatment is only one part of the problem. Loss of
              income, lifestyle changes and additional expenses can also put
              pressure on family finances.
            </p>
            <p className="mt-4">
              Depending on your needs, specialised critical illness or cancer protection products may provide additional financial support, subject to policy terms and conditions.
            </p>
          </SectionHeading>
          <div className="relative flex items-start gap-5 overflow-hidden rounded-4xl bg-(--secondary) p-8 text-white shadow-xl shadow-(--secondary)/10 sm:p-10">
            <div className="pointer-events-none absolute -bottom-16 -right-10 h-40 w-40 rounded-full border border-white/10" />
            <ShieldAlert className="mt-1 shrink-0 text-(--gold)" size={34} />
            <div className="relative">
              <p className="text-2xl font-semibold">Build an additional layer of resilience.</p>
              <p className="mt-3 text-sm leading-6 text-white/70">Review your protection needs before a serious event makes the decision urgent.</p>
            </div>
          </div>
        </Wrapper>
      </section>

      <section id="insurance-checkup" className="scroll-mt-24 bg-white">
        <Wrapper className="py-20 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-center">
            <SectionHeading eyebrow="Insurance check-up" title="Do you know if your current insurance is enough?">
              <p>Let’s review your existing protection and identify areas that may need attention.</p>
              <Link href="/contact" className="mt-8 inline-flex items-center gap-2 rounded-full bg-(--primary) px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-(--primary)/15 transition hover:-translate-y-0.5 hover:bg-(--secondary)">
                Request an Insurance Review
                <ArrowRight size={16} />
              </Link>
            </SectionHeading>
            <div className="relative overflow-hidden rounded-4xl border border-slate-200 bg-[#f7f8f6] p-6 sm:p-9">
              <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full border border-(--gold)/20" />
              <div className="grid gap-3 sm:grid-cols-2">
                {insuranceCheckup.map((item) => (
                  <div key={item} className="flex items-center gap-3 rounded-xl bg-white px-4 py-4 text-sm font-semibold text-(--primary) shadow-sm">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-(--secondary) text-white"><Check size={14} strokeWidth={3} /></span>
                    {item}
                  </div>
                ))}
              </div>
              <p className="mt-8 border-t border-slate-200 pt-6 text-2xl font-semibold text-(--primary)">Don’t wait for an emergency to discover a gap.</p>
            </div>
          </div>
        </Wrapper>
      </section>

      <footer className="border-t border-slate-200 bg-[#f7f8f6] px-6 py-8 text-center text-xs leading-5 text-slate-500">
        Insurance products are subject to the terms, conditions, exclusions and underwriting guidelines of the respective insurance company. Coverage, benefits and eligibility may vary by product and insurer.
      </footer>
    </>
  );
}
