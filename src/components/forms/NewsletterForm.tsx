"use client";

import { useState } from "react";
import styles from "@/app/home.module.css";

export default function NewsletterForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "Failed to subscribe.");
      }

      setStatus("success");
      setMessage("You're in! Welcome aboard.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div className={styles.newsletter}>
      <div className={styles.newsletterLeft}>
        <h2>STAY IN <em>the loop</em></h2>
        <p>Systems, patterns, and stack updates. No spam.</p>
      </div>
      <div>
        <form className={styles.newsletterForm} onSubmit={handleSubmit}>
          <input
            className={styles.newsletterInput}
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            disabled={status === "loading"}
          />
          <button className={styles.newsletterBtn} type="submit" disabled={status === "loading"}>
            {status === "loading" ? "..." : "SUBSCRIBE"}
          </button>
        </form>
        <div className={styles.newsletterNote}>
          {status === "success" ? message : status === "error" ? message : "Free. Unsubscribe anytime."}
        </div>
      </div>
    </div>
  );
}
