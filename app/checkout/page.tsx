import CheckoutForm from '@/components/CheckoutForm';

export const metadata = {
  title: 'Checkout — Velocity Pro',
  description: 'Complete your purchase of the Velocity Pro plan for $29/month.',
};

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="mx-auto max-w-7xl px-6 py-16">
        {/* Back link */}
        <a
          href="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-600 transition hover:text-gray-900"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          Back to home
        </a>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Order Summary */}
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Complete your purchase
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              You&apos;re upgrading to the Velocity Pro plan.
            </p>

            <div className="mt-8 rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">Velocity Pro</h3>
                  <p className="mt-1 text-sm text-gray-500">Monthly subscription</p>
                </div>
                <span className="text-2xl font-bold text-gray-900">$29</span>
              </div>

              <div className="mt-6 border-t border-gray-100 pt-4">
                <ul className="space-y-3">
                  {[
                    'Unlimited projects',
                    '100 GB bandwidth / month',
                    'Priority support',
                    'Advanced analytics',
                    'Team collaboration',
                    'Custom domains',
                  ].map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-gray-600">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 shrink-0 text-indigo-500"
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
              </div>

              <div className="mt-6 flex items-center justify-between border-t border-gray-100 pt-4">
                <span className="text-sm font-medium text-gray-900">Total due today</span>
                <span className="text-xl font-bold text-gray-900">$29.00</span>
              </div>
            </div>
          </div>

          {/* Payment Form */}
          <div>
            <CheckoutForm />
          </div>
        </div>
      </div>
    </main>
  );
}
