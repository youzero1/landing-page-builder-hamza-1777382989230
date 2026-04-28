export default function CTA() {
  return (
    <section className="bg-indigo-600 py-24">
      <div className="mx-auto max-w-4xl px-6 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to supercharge your workflow?
        </h2>
        <p className="mt-4 text-lg text-indigo-100">
          Join thousands of developers who ship faster with Velocity. Start your free trial today — no credit card required.
        </p>
        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="rounded-xl bg-white px-8 py-3.5 text-sm font-semibold text-indigo-600 shadow-sm transition hover:bg-indigo-50"
          >
            Start Free Trial
          </a>
          <a
            href="#"
            className="rounded-xl border border-indigo-400 px-8 py-3.5 text-sm font-semibold text-white transition hover:border-white hover:bg-indigo-500"
          >
            Schedule a Demo
          </a>
        </div>
      </div>
    </section>
  );
}
