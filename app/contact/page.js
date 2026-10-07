import ContactForm from "@/app/_components/ContactForm";
import Wrapper from "@/app/_components/Wrapper";
import { ArrowUpRight, CheckCircle2, MessageCircle, Phone } from "lucide-react";

const goals = [
  "Starting your first SIP",
  "Planning for retirement",
  "Building wealth for the long term",
  "Planning your child’s education",
  "Reviewing your existing investments",
  "Looking for health insurance",
  "Planning your family’s financial protection",
  "Renewing your motor insurance",
  "Exploring fixed-income options",
];

const disclaimers = [
  "Mutual Fund investments are subject to market risks, read all scheme related documents carefully.",
  "Investment-related information provided on this website is for general informational purposes and should not be construed as investment advice or a guarantee of returns. Investments are subject to market risks and investors should consider their financial objectives, risk tolerance and investment horizon before investing.",
  "Insurance products are subject to the terms, conditions, exclusions and underwriting guidelines of the respective insurance company. Coverage and benefits may vary by product and insurer.",
  "The information on this website is for educational and informational purposes and does not constitute a guarantee of returns or future performance.",
];

export default function ContactPage() {
  return (
    <main className="bg-slate-50">
      <Wrapper className="py-16 sm:py-24">
        <section className="grid gap-12 lg:grid-cols-[1fr_0.9fr] lg:items-start lg:gap-20">
          <div className="order-2 pt-2 lg:order-1">
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-(--gold)">
              Contact us
            </p>
            <h1 className="mt-5 max-w-xl text-5xl font-semibold leading-tight tracking-tight text-(--primary)">
              Let’s Talk About
              <span className="block text-(--gold)">Your Financial Goals</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
              You don’t need to have all the answers before you contact us.
              Whether you are:
            </p>

            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {goals.map((goal) => (
                <li
                  key={goal}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                >
                  <CheckCircle2
                    className="mt-0.5 shrink-0 text-(--gold)"
                    size={18}
                  />
                  <span>{goal}</span>
                </li>
              ))}
            </ul>
            <p className="mt-8 max-w-lg text-base font-medium leading-7 text-(--primary)">
              — we would be happy to understand your requirements.
            </p>
          </div>

          <section
            id="consultation"
            className="order-1 rounded-2xl bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-9 lg:order-2"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--gold)">
              Book a consultation
            </p>
            <h2 className="mt-3 text-3xl font-semibold leading-tight text-(--primary)">
              Tell Us What You Need Help With
            </h2>
            <div className="mt-7">
              <ContactForm />
            </div>
          </section>
        </section>

        <section className="mt-20 grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl bg-(--primary) p-8 text-white sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--gold)">
              Prefer to talk?
            </p>
            <h2 className="mt-3 text-3xl font-semibold">Call Us</h2>
            <div className="mt-7 flex flex-col gap-3 text-xl font-medium">
              <a
                className="flex items-center gap-3 hover:text-(--gold)"
                href="tel:9818592859"
              >
                <Phone size={20} /> 9818592859
              </a>
              <a
                className="flex items-center gap-3 hover:text-(--gold)"
                href="tel:8700255154"
              >
                <Phone size={20} /> 8700255154
              </a>
            </div>
            <div className="mt-9 border-t border-white/20 pt-7">
              <h3 className="text-2xl font-semibold">WhatsApp Us</h3>
              <a
                href="https://wa.me/919818592859"
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center gap-2 rounded-full bg-(--gold) px-5 py-3 text-sm font-semibold text-white transition"
              >
                <MessageCircle size={18} />
                Start a WhatsApp conversation
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-8 sm:p-10">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-(--gold)">
              Invest N Insure
            </p>
            <h2 className="mt-4 text-3xl font-semibold text-(--primary)">
              Ritesh Sharma
            </h2>
            <p className="mt-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
              AMFI Registered Mutual Fund Distributor
            </p>
            <p className="mt-2 text-sm text-slate-500">ARN: 184984</p>
            <a
              className="mt-6 inline-block text-sm font-medium text-(--primary) underline-offset-4 hover:underline"
              href="mailto:info@investninsure.in"
            >
              info@investninsure.in
            </a>
            <p className="mt-10 text-2xl font-semibold italic text-(--gold)">
              Invest. Protect. Thrive.
            </p>
          </div>
        </section>

        <section className="mt-20 border-t border-slate-200 pt-10">
          <h2 className="text-xl font-semibold text-(--primary)">
            Important Information
          </h2>
          <div className="mt-5 grid gap-4 text-xs leading-6 text-slate-500">
            {disclaimers.map((disclaimer) => (
              <p key={disclaimer}>{disclaimer}</p>
            ))}
          </div>
        </section>
      </Wrapper>
    </main>
  );
}
