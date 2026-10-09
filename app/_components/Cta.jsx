import { FaWhatsapp } from 'react-icons/fa6'
import { GoArrowUpRight } from 'react-icons/go'
import Wrapper from './Wrapper'
import Link from 'next/link'

export default function Cta() {
  return (
    <section className="relative overflow-hidden bg-white">
      <div className="relative overflow-hidden border border-white/10 bg-(--secondary) px-6 py-12 text-center sm:px-12 sm:py-16">
        <div aria-hidden="true" className="absolute inset-0 " />
        <div aria-hidden="true" className="absolute -bottom-24 -left-16 h-48 w-48 rounded-full border border-(--gold)/15" />

        <div className="relative">
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.24em] text-(--gold)">
            Your next chapter starts here
          </p>
          <h2 className="text-3xl font-semibold tracking-tight text-white sm:text-5xl">
            Ready to take the next step?
          </h2>
          <p className="mt-3 font-serif text-2xl text-(--gold) sm:text-3xl">
            Let’s start with your financial goals.
          </p>
          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/75 sm:text-base">
            Whether you are starting your investment journey, reviewing your
            portfolio, or looking for better financial protection, let’s have
            a conversation.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-(--gold) text-white px-5 py-3 text-sm font-semibold shadow-lg  transition-all hover:-translate-y-0.5 hover:brightness-105"
            >
              Book a Consultation
              <GoArrowUpRight size={17} />
            </Link>
            <Link
              href="https://wa.me/919818592859"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/25 bg-white/10 px-5 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/15"
            >
              <FaWhatsapp size={18} />
              Talk to Us on WhatsApp
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
