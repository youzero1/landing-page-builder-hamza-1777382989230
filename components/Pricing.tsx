'use client';

const plans = [
  {
    name: 'Starter',
    price: '$0',
    period: '/month',
    description: 'Perfect for side projects and hobby developers.',
    features: [
      '3 projects',
      '1 GB bandwidth / month',
      'Community support',
      'Automatic HTTPS',
    ],
    cta: 'Get Started Free',
    highlighted: false,
    href: '#',
  },
  {
    name: 'Pro',
    price: '$29',
    period: '/month',
    description: 'For professional teams that need more power.',
    features: [
      'Unlimited projects',
      '100 GB bandwidth / month',
      'Priority support',
      'Advanced analytics',
      'Team collaboration',
      'Custom domains',
    ],
    cta: 'Start Free Trial',
    highlighted: true,
    href: '/checkout',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For organizations with advanced security and compliance needs.',
    features: [
      'Everything in Pro',
      'Unlimited bandwidth',
      'SSO / SAML',
      'SLA guarantee',
      'Dedicated support',
      'Custom contracts',
    ],
    cta: 'Contact Sales',
    highlighted: false,
    href: '#',
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-gray-50 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-indigo-600">Pricing</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Simple, transparent pricing
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Start free. Upgrade when you&apos;re ready. No surprise fees.
          </p>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                plan.highlighted
                  ? 'border-indigo-600 bg-white shadow-xl ring-1 ring-indigo-600'
                  : 'border-gray-200 bg-white shadow-sm'
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-4 py-1 text-xs font-semibold text-white">
                  Most Popular
                </span>
              )}
              <h3 className="text-lg font-semibold text-gray-900">{plan.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{plan.description}</p>
              <div className="mt-6">
                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                {plan.period && (
                  <span className="text-sm text-gray-500">{plan.period}</span>
                )}
              </div>
              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={plan.href}
                className={`mt-8 block rounded-lg px-4 py-3 text-center text-sm font-semibold transition ${
                  plan.highlighted
                    ? 'bg-indigo-600 text-white shadow-sm hover:bg-indigo-500'
                    : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
