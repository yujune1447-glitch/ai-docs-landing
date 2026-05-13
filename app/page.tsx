export default function Home() {
  return(
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-5xl font-bold">AI Docs</h1>
<p className="mt-4 text-xl text-zinc-600">
Write in your voice. Powered by AI.
</p>

<div className="mt-8 flex gap-2">
  <input
  type="email"
  placeholder="you@example.com"
  className="px-4 py-2 border border-zinc-300 rounded-md"
    />
   <button className="px-4 py-2 bg-black text-white rounded-md font-medium">
    Join waitlist
    </button>
    </div>
    </main>
  );
}