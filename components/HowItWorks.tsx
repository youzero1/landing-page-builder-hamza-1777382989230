const steps = [
  {
    step: '01',
    title: 'Connect your repo',
    description: 'Link your GitHub, GitLab, or Bitbucket repository in one click. We auto-detect your framework.',
  },
  {
    step: '02',
    title: 'Configure & customize',
    description: 'Set environment variables, choose your region, and configure build settings — or just use our smart defaults.',
  },
  {
    step: '03',
    title: 'Deploy instantly',
    description: 'Every push triggers an automatic build and deploy. Your site is live on a global CDN in seconds.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">How It Works</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Up and running in 3 simple steps
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((item) => (
            <div key={item.step} className="relative rounded-2xl bg-white p-8 shadow-sm">
              <span className="mb-4 inline-block text-4xl font-extrabold text-indigo-100">
                {item.step}
              </span>
              <h3 className="mb-2 text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="text-sm leading-6 text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
