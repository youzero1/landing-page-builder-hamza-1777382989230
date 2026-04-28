const logos = [
  'Vercel',
  'Stripe',
  'Linear',
  'Notion',
  'Slack',
  'Figma',
];

export default function LogoCloud() {
  return (
    <section className="border-b border-gray-100 bg-white py-12">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-8 text-center text-sm font-medium uppercase tracking-wider text-gray-400">
          Trusted by teams at
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {logos.map((name) => (
            <span
              key={name}
              className="text-xl font-bold text-gray-300 transition hover:text-gray-400"
            >
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
