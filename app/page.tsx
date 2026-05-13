"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold">AI Docs</h1>
      <p className="mt-4 text-xl text-zinc-600">
        Write in your voice. Powered by AI.
      </p>

      <div className="mt-8 flex gap-2">
        <input
          type="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="px-4 py-2 border border-zinc-300 rounded-md"
        />
        <button
          onClick={() => alert("Submitted: " + email)}
          className="px-4 py-2 bg-black text-white rounded-md font-medium"
        >
          Join waitlist
        </button>
      </div>

      <p className="mt-4 text-sm text-zinc-500">
        You typed: {email}
      </p>
    </main>
  );
}