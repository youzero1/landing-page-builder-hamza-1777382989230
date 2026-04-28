const testimonials = [
  {
    quote: 'Velocity cut our deployment time from 20 minutes to 20 seconds. Our engineering team can finally focus on building instead of wrangling infrastructure.',
    name: 'Sarah Chen',
    role: 'CTO at Acme Labs',
    initials: 'SC',
  },
  {
    quote: "We migrated 14 microservices to Velocity in a weekend. The DX is incredible — it's like the platform reads your mind.",
    name: 'Marcus Johnson',
    role: 'Lead Engineer at Beacon',
    initials: 'MJ',
  },
  {
    quote: 'The built-in analytics alone replaced two SaaS tools we were paying for. Velocity is insanely good value for growing teams.',
    name: 'Priya Patel',
    role: 'VP Engineering at NovaCorp',
    initials: 'PP',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Testimonials</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Loved by engineering teams
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-gray-50 p-8"
            >
              <p className="text-sm leading-7 text-gray-700">&ldquo;{t.quote}&rdquo;</p>
              <div className="mt-6 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-600 text-sm font-bold text-white">
                  {t.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
