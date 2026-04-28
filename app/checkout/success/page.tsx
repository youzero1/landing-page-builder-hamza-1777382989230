export const metadata = {
  title: 'Payment Successful — Velocity',
  description: 'Your payment was successful. Welcome to Velocity Pro!',
};

export default function SuccessPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-indigo-50 via-white to-purple-50 px-6">
      <div className="max-w-md text-center">
        <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-green-600" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Payment successful!</h1>
        <p className="mt-4 text-lg text-gray-600">
          Welcome to Velocity Pro. You now have access to unlimited projects, advanced analytics, and priority support.
        </p>
        <a
          href="/"
          className="mt-8 inline-block rounded-xl bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-500"
        >
          Go to Dashboard
        </a>
      </div>
    </main>
  );
}
