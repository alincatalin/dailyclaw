"use client";

import { useState } from "react";
import styles from "@/app/home.module.css";

export default function SubmitSystemForm() {
  const [form, setForm] = useState({
    nameHandle: "",
    whatYouBuild: "",
    systemDescription: "",
    stackUsed: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  function update(field: string) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/submit-system", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to submit.");
      }

      setStatus("success");
      setMessage("System submitted! We'll be in touch.");
      setForm({ nameHandle: "", whatYouBuild: "", systemDescription: "", stackUsed: "" });
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className={styles.submitSection} id="submit">
        <div className={styles.submitLeft}>
          <h2>SHARE YOUR <span>SYSTEM.</span></h2>
          <p>Built something with OpenClaw? We want to document your architecture &mdash; the tools, the patterns, and the results.</p>
          <p>No follower count required. Just a system worth sharing.</p>
        </div>
        <div className={styles.submitRight}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.95rem" }}>{message}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.submitSection} id="submit">
      <div className={styles.submitLeft}>
        <h2>SHARE YOUR <span>SYSTEM.</span></h2>
        <p>Built something with OpenClaw? We want to document your architecture &mdash; the tools, the patterns, and the results.</p>
        <p>No follower count required. Just a system worth sharing.</p>
      </div>
      <form className={styles.submitRight} onSubmit={handleSubmit}>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Your name / handle</label>
          <input
            className={styles.formInput}
            type="text"
            placeholder="e.g. sara_builds"
            value={form.nameHandle}
            onChange={update("nameHandle")}
            required
            disabled={status === "loading"}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>What do you build?</label>
          <input
            className={styles.formInput}
            type="text"
            placeholder="e.g. Indie SaaS founder, Berlin"
            value={form.whatYouBuild}
            onChange={update("whatYouBuild")}
            required
            disabled={status === "loading"}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Describe the system</label>
          <textarea
            className={styles.formInput}
            placeholder="What does it do, what tools does it use, what patterns does it follow..."
            value={form.systemDescription}
            onChange={update("systemDescription")}
            required
            disabled={status === "loading"}
          />
        </div>
        <div className={styles.formGroup}>
          <label className={styles.formLabel}>Stack used (MCP servers, APIs, scripts)</label>
          <input
            className={styles.formInput}
            type="text"
            placeholder="e.g. OpenClaw, Stripe MCP, GitHub MCP, cron"
            value={form.stackUsed}
            onChange={update("stackUsed")}
            required
            disabled={status === "loading"}
          />
        </div>
        <button className={styles.ctaBig} type="submit" disabled={status === "loading"}>
          {status === "loading" ? "SUBMITTING..." : "SUBMIT MY SYSTEM →"}
        </button>
        {status === "error" && (
          <p style={{ color: "#ff4444", fontFamily: "var(--font-mono)", fontSize: "0.85rem", marginTop: "0.5rem" }}>
            {message}
          </p>
        )}
      </form>
    </div>
  );
}
