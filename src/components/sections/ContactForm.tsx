"use client";

import { useState } from "react";
import { ArrowUpRight, CheckCircle } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "", email: "", company: "", budget: "", message: "",
  });

  const set = (k: keyof typeof form) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // ── Replace with your preferred form handler ──────────────
    // Options:
    //   - Resend API route at /api/contact
    //   - Formspree: action="https://formspree.io/f/YOUR_ID"
    //   - Netlify Forms: add data-netlify="true"
    //   - Supabase: insert into a `contacts` table
    // ─────────────────────────────────────────────────────────
    try {
      await new Promise((r) => setTimeout(r, 1200)); // Demo delay
      setStatus("success");
    } catch {
      setStatus("error");
    }
  };

  if (status === "success") {
    return (
      <div className="flex flex-col items-start gap-4 py-12">
        <CheckCircle size={36} className="c-accent" />
        <h3 className="font-display text-2xl font-light c-ink">Thank you.</h3>
        <p className="c-muted text-[0.9375rem] leading-relaxed max-w-sm">
          Your message has been received. We'll be in touch within 48 hours.
        </p>
        <button
          onClick={() => { setStatus("idle"); setForm({ name: "", email: "", company: "", budget: "", message: "" }); }}
          className="eyebrow c-muted hover:c-ink link-line transition-colors duration-300 mt-2 text-[0.65rem]"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Name + Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className="eyebrow c-faint text-[0.58rem] block mb-2">Name *</label>
          <input
            type="text"
            required
            value={form.name}
            onChange={set("name")}
            placeholder="Your name"
            className="field"
          />
        </div>
        <div>
          <label className="eyebrow c-faint text-[0.58rem] block mb-2">Email *</label>
          <input
            type="email"
            required
            value={form.email}
            onChange={set("email")}
            placeholder="your@email.com"
            className="field"
          />
        </div>
      </div>

      {/* Company + Budget */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className="eyebrow c-faint text-[0.58rem] block mb-2">Company / Brand</label>
          <input
            type="text"
            value={form.company}
            onChange={set("company")}
            placeholder="Optional"
            className="field"
          />
        </div>
        <div>
          <label className="eyebrow c-faint text-[0.58rem] block mb-2">Budget Range</label>
          <select value={form.budget} onChange={set("budget")} className="field">
            <option value="">Select a range</option>
            <option value="5k-10k">$5,000 – $10,000</option>
            <option value="10k-25k">$10,000 – $25,000</option>
            <option value="25k-50k">$25,000 – $50,000</option>
            <option value="50k+">$50,000+</option>
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="eyebrow c-faint text-[0.58rem] block mb-2">Project Brief *</label>
        <textarea
          required
          value={form.message}
          onChange={set("message")}
          placeholder="Tell us about your project, goals, and timeline…"
          rows={6}
          className="field"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending…" : "Send Message"}
        {status !== "sending" && <ArrowUpRight size={13} />}
      </button>

      {status === "error" && (
        <p className="text-sm text-red-500">
          Something went wrong — please email us directly at{" "}
          <a href="mailto:hello@rwscreative.ca" className="underline">
            hello@rwscreative.ca
          </a>
        </p>
      )}
    </form>
  );
}
