import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

export default function CtaBanner({
  title = 'Ready to Turn Your Idea Into Reliable Software?',
  subtitle = 'Share your project goals with WebNexazz and get a clear technical roadmap, timeline estimate, and practical architecture recommendation.',
  primaryText = 'Get a Free Consultation',
  primaryTo = '/contact',
  secondaryText = 'Explore Our Services',
  secondaryTo = '/services',
}) {
  return (
    <section className="py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-cyan-500/25 bg-gradient-to-br from-slate-900 via-[#0b1936] to-slate-950 px-6 py-12 shadow-2xl sm:px-12 sm:py-16">
          <div
            className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-cyan-500/15 blur-3xl"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl"
            aria-hidden="true"
          />

          <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
                {title}
              </h2>
              <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
                {subtitle}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4 shrink-0">
              <Link
                to={primaryTo}
                className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
              >
                {primaryText}
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              {secondaryText && (
                <Link
                  to={secondaryTo}
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/70 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  {secondaryText}
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

