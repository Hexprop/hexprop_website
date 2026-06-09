"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setStatus(res.ok ? "success" : "error");
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Name"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="px-4 py-3 rounded-lg border border-neutral-200 text-sm outline-none focus:border-neutral-400 transition-colors"
        />
        <input
          type="email"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="px-4 py-3 rounded-lg border border-neutral-200 text-sm outline-none focus:border-neutral-400 transition-colors"
        />
      </div>
      <textarea
        rows={4}
        placeholder="How can we help?"
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        required
        className="px-4 py-3 rounded-lg border border-neutral-200 text-sm outline-none focus:border-neutral-400 transition-colors resize-none"
      />
      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={status === "loading"}
          className="self-start px-6 py-3 rounded-full text-white text-sm font-medium transition-opacity hover:opacity-90 disabled:opacity-50"
          style={{ backgroundColor: "var(--navy)" }}
        >
          {status === "loading" ? "Sending…" : "Send message"}
        </button>
        {status === "success" && (
          <p className="text-sm text-green-600">Message sent — we'll be in touch shortly.</p>
        )}
        {status === "error" && (
          <p className="text-sm text-red-500">Something went wrong. Please try again.</p>
        )}
      </div>
    </form>
  );
}
