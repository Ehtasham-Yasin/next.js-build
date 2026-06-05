export default function ContactPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="text-4xl font-bold">Contact</h1>
      <form className="mt-8 grid gap-4">
        <input className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3" placeholder="Your name" />
        <input className="rounded-lg border border-slate-700 bg-slate-900 px-4 py-3" placeholder="Email address" type="email" />
        <textarea className="min-h-32 rounded-lg border border-slate-700 bg-slate-900 px-4 py-3" placeholder="Message" />
        <button className="rounded-lg bg-cyan-400 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-300" type="button">
          Send message
        </button>
      </form>
    </section>
  );
}
