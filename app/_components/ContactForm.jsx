"use client";

import { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const interests = [
  "Mutual Funds / SIP",
  "Wealth Creation",
  "Retirement Planning",
  "Child Education Planning",
  "Health Insurance",
  "Life / Term Insurance",
  "Motor Insurance",
  "Personal Accident Insurance",
  "Fixed Deposits / Fixed Income",
  "Investment / Insurance Review",
  "Other",
];

export default function ContactForm() {
  const form = useRef(null);
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState("");

  useEffect(() => {
    if (!status) return undefined;
    const timer = setTimeout(() => setStatus(""), 5000);
    return () => clearTimeout(timer);
  }, [status]);

  const sendEmail = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    setStatus("");

    try {
      await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY,
      );
      setStatus("Message sent successfully!");
      form.current.reset();
    } catch (error) {
      console.error("EmailJS Error Details:", error);
      setStatus(error.text ? `Failed to send: ${error.text}` : "Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium text-slate-700">
          Name
          <input
            type="text"
            name="user_name"
            placeholder="Enter Your Name"
            required
            className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-normal outline-none transition focus:border-(--gold) focus:ring-2 focus:ring-(--gold)/20"
          />
        </label>
        <label className="text-sm font-medium text-slate-700">
          Mobile Number
          <input
            type="tel"
            name="user_phone"
            placeholder="Enter Mobile Number"
            required
            className="mt-2 w-full rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-normal outline-none transition focus:border-(--gold) focus:ring-2 focus:ring-(--gold)/20"
          />
        </label>
      </div>

      <fieldset>
        <legend className="text-sm font-medium text-slate-700">I am interested in:</legend>
        <div className="mt-3 grid gap-3 sm:grid-cols-2">
          {interests.map((interest) => (
            <label key={interest} className="flex items-start gap-2 text-sm text-slate-600">
              <input type="checkbox" name="interests" value={interest} className="mt-1 accent-(--gold)" />
              {interest}
            </label>
          ))}
        </div>
      </fieldset>

      <label className="block text-sm font-medium text-slate-700">
        Message
        <textarea
          name="message"
          placeholder="Tell us briefly about your requirement"
          required
          rows="4"
          className="mt-2 w-full resize-y rounded-lg border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-normal outline-none transition focus:border-(--gold) focus:ring-2 focus:ring-(--gold)/20"
        />
      </label>

      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex w-full items-center justify-center rounded-full bg-(--primary) px-6 py-3.5 text-sm font-semibold uppercase tracking-wide text-white transition hover:bg-(--secondary) disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isLoading ? "Sending..." : "Request a consultation"}
      </button>

      {status && (
        <p className={`rounded-lg border p-3 text-sm ${status.includes("successfully") ? "border-green-200 bg-green-50 text-green-700" : "border-red-200 bg-red-50 text-red-700"}`}>
          {status}
        </p>
      )}
    </form>
  );
}
