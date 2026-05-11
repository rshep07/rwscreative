"use client";
import { useState } from "react";
import { ArrowRight } from "lucide-react";

export function ContactForm() {
  const [form, setForm]   = useState({ name:"", email:"", company:"", budget:"", message:"" });
  const [sent, setSent]   = useState(false);
  const [busy, setBusy]   = useState(false);
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault(); setBusy(true);
    await new Promise(r => setTimeout(r, 900));
    setSent(true); setBusy(false);
  };

  if (sent) return (
    <div className="py-10">
      <p className="font-display text-xl uppercase tracking-tight text-[var(--canvas)] mb-3">Received.</p>
      <p className="text-[var(--mid)] text-sm">We'll be in touch within 48 hours.</p>
    </div>
  );

  return (
    <form onSubmit={submit} className="space-y-7">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <div>
          <label className="f-mono text-[var(--mid)] block mb-2">Name *</label>
          <input type="text" required value={form.name} onChange={set("name")} placeholder="Your name" className="field" />
        </div>
        <div>
          <label className="f-mono text-[var(--mid)] block mb-2">Email *</label>
          <input type="email" required value={form.email} onChange={set("email")} placeholder="your@email.com" className="field" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-7">
        <div>
          <label className="f-mono text-[var(--mid)] block mb-2">Company</label>
          <input type="text" value={form.company} onChange={set("company")} placeholder="Optional" className="field" />
        </div>
        <div>
          <label className="f-mono text-[var(--mid)] block mb-2">Budget</label>
          <select value={form.budget} onChange={set("budget")} className="field" style={{ color: form.budget ? "var(--canvas)" : "var(--mid)" }}>
            <option value="">Select range</option>
            <option value="5-10k">$5,000 – $10,000</option>
            <option value="10-25k">$10,000 – $25,000</option>
            <option value="25-50k">$25,000 – $50,000</option>
            <option value="50k+">$50,000+</option>
          </select>
        </div>
      </div>
      <div>
        <label className="f-mono text-[var(--mid)] block mb-2">Project Brief *</label>
        <textarea required value={form.message} onChange={set("message")}
          placeholder="Tell us about your project, goals, and timeline." rows={5} className="field" />
      </div>
      <button type="submit" disabled={busy} className="btn-primary disabled:opacity-50">
        {busy ? "Sending…" : <><span>Send Message</span><ArrowRight size={12} /></>}
      </button>
    </form>
  );
}
