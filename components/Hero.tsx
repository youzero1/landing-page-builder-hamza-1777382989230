export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="mx-auto max-w-7xl px-6 pb-24 pt-20 text-center sm:pt-32 lg:pt-40">
        {/* Badge */}
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-xs font-semibold text-indigo-700">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
          </span>
          Now in Public Beta
        </div>

        <h1 className="mx-auto max-w-4xl text-4xl font-extrabold tracking-tight text-gray-900 sm:text-6xl lg:text-7xl">
          Ship faster.{' '}
          <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Scale smarter.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-600">
          Velocity gives your team superpowers. Build, deploy, and iterate on production-ready applications — all from one unified platform.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="rounded-xl bg-indigo-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-500 hover:shadow-indigo-300"
          >
            Start Free Trial
          </a>
          <a
            href="#how-it-works"
            className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-8 py-3.5 text-sm font-semibold text-gray-700 shadow-sm transition hover:border-gray-300 hover:bg-gray-50"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-500" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.5-5.207L13.293 10 8.5 7.207v5.586z" clipRule="evenodd" />
            </svg>
            Watch Demo
          </a>
        </div>

        {/* Hero visual */}
        <div className="relative mx-auto mt-16 max-w-5xl">
          <div className="overflow-hidden rounded-2xl border border-gray-200 bg-gray-900 shadow-2xl">
            <div className="flex items-center gap-2 border-b border-gray-700 px-4 py-3">
              <span className="h-3 w-3 rounded-full bg-red-500" />
              <span className="h-3 w-3 rounded-full bg-yellow-500" />
              <span className="h-3 w-3 rounded-full bg-green-500" />
              <span className="ml-4 text-xs text-gray-400">velocity — dashboard</span>
            </div>
            <div className="grid grid-cols-12 gap-4 p-6">
              {/* Sidebar placeholder */}
              <div className="col-span-3 space-y-3">
                <div className="h-8 w-full rounded-lg bg-gray-800" />
                <div className="h-6 w-3/4 rounded-lg bg-gray-800" />
                <div className="h-6 w-full rounded-lg bg-indigo-600/40" />
                <div className="h-6 w-5/6 rounded-lg bg-gray-800" />
                <div className="h-6 w-2/3 rounded-lg bg-gray-800" />
              </div>
              {/* Main content placeholder */}
              <div className="col-span-9 space-y-4">
                <div className="grid grid-cols-3 gap-4">
                  <div className="rounded-xl bg-gray-800 p-4">
                    <div className="mb-2 h-3 w-1/2 rounded bg-gray-700" />
                    <div className="h-8 w-3/4 rounded bg-indigo-500/50" />
                  </div>
                  <div className="rounded-xl bg-gray-800 p-4">
                    <div className="mb-2 h-3 w-1/2 rounded bg-gray-700" />
                    <div className="h-8 w-2/3 rounded bg-green-500/50" />
                  </div>
                  <div className="rounded-xl bg-gray-800 p-4">
                    <div className="mb-2 h-3 w-1/2 rounded bg-gray-700" />
                    <div className="h-8 w-4/5 rounded bg-purple-500/50" />
                  </div>
                </div>
                <div className="h-48 rounded-xl bg-gray-800" />
              </div>
            </div>
          </div>
          {/* Glow effect */}
          <div className="absolute -inset-4 -z-10 rounded-3xl bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 opacity-30 blur-3xl" />
        </div>
      </div>
    </section>
  );
}
