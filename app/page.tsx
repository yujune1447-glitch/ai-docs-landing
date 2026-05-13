"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");

  return (
    <main>
      <section className="min-h-screen flex flex-col items-center justify-center p-8">
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
      </section>

      <section className="py-24 px-8 max-w-5xl mx-auto">
  <h2 className="text-3xl font-bold text-center">Why AI Docs</h2>

  <div className="mt-12 flex gap-6">
    <div className="flex-1 p-6 border border-zinc-200 rounded-lg">
      <div className="text-4xl">🎯</div>
      <h3 className="mt-4 text-xl font-semibold">Trained on your voice</h3>
      <p className="mt-2 text-zinc-600">
        AI Docs learns your writing style from samples you provide.
      </p>
    </div>

    <div className="flex-1 p-6 border border-zinc-200 rounded-lg">
      <div className="text-4xl">✍️</div>
      <h3 className="mt-4 text-xl font-semibold">Rewrite in a click</h3>
      <p className="mt-2 text-zinc-600">
        Highlight any sentence and ask AI to rewrite, paraphrase, or extend it.
      </p>
    </div>

    <div className="flex-1 p-6 border border-zinc-200 rounded-lg">
      <div className="text-4xl">🎭</div>
      <h3 className="mt-4 text-xl font-semibold">Multiple voices</h3>
      <p className="mt-2 text-zinc-600">
        Save profiles for academic, casual, professional. Mix and match.
      </p>
    </div>
  </div>
</section>
<section className="py-24 px-8 bg-zinc-50">
  <div className="max-w-2xl mx-auto text-center">
    <h2 className="text-3xl font-bold">Get early access</h2>
    <p className="mt-4 text-zinc-600">
      Join the waitlist. We'll let you know when AI Docs is ready.
    </p>

    <div className="mt-8 flex gap-2 justify-center">
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
  </div>
</section>

    </main>
  );
}