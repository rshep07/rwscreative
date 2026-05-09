"use client";
import { useState } from "react";
import { ArrowUpRight, CheckCircle } from "lucide-react";

type Status = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({ name:"", email:"", company:"", budget:"", message:"" });
  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement|HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      await new Promise(r => setTimeout(r, 1000));
      setStatus("success");
    } catch { setStatus("error"); }
  };

  if (status === "success") return (
    <div className="flex flex-col items-start gap-4 py-12">
      <CheckCircle size={32} style={{ color: "var(--blue)" }} />
      <h3 className="font-archivo text-2xl uppercase tracking-tight text-[var(--white)]">Thank you.</h3>
      <p className="t-body text-[var(--gray)] max-w-sm">Your message has been received. We'll be in touch within 48 hours.</p>
      <button onClick={()=>setStatus("idle")} className="t-label text-[var(--gray)] hover:text-[var(--blue)] transition-colors mt-2">
        Send another message
      </button>
    </div>
  );

  return (
    <form onSubmit={submit} className="space-y-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className="t-label text-[var(--gray)] block mb-2">Name *</label>
          <input type="text" required value={form.name} onChange={set("name")} placeholder="Your name" className="field" />
        </div>
        <div>
          <label className="t-label text-[var(--gray)] block mb-2">Email *</label>
          <input type="email" required value={form.email} onChange={set("email")} placeholder="your@email.com" className="field" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div>
          <label className="t-label text-[var(--gray)] block mb-2">Company</label>
          <input type="text" value={form.company} onChange={set("company")} placeholder="Optional" className="field" />
        </div>
        <div>
          <label className="t-label text-[var(--gray)] block mb-2">Budget Range</label>
          <select value={form.budget} onChange={set("budget")} className="field" style={{ color: form.budget ? "var(--white)" : "var(--gray)" }}>
            <option value="">Select a range</option>
            <option value="5k-10k">$5,000 – $10,000</option>
            <option value="10k-25k">$10,000 – $25,000</option>
            <option value="25k-50k">$25,000 – $50,000</option>
            <option value="50k+">$50,000+</option>
          </select>
        </div>
      </div>
      <div>
        <label className="t-label text-[var(--gray)] block mb-2">Project Brief *</label>
        <textarea required value={form.message} onChange={set("message")}
          placeholder="Tell us about your project, goals, and timeline…" rows={6} className="field" />
      </div>
      <button type="submit" disabled={status==="sending"} className="btn-blue disabled:opacity-50">
        {status==="sending" ? "Sending…" : <><span>Send Message</span><ArrowUpRight size={13} /></>}
      </button>
      {status==="error" && (
        <p className="text-sm" style={{ color: "var(--blue)" }}>
          Something went wrong — email us at{" "}
          <a href="mailto:hello@rwscreative.ca" className="underline">hello@rwscreative.ca</a>
        </p>
      )}
    </form>
  );
}
