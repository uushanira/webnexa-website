import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Layers, Terminal, Zap } from 'lucide-react'
import Seo from '../components/Seo'
import ServiceIcon from '../components/ServiceIcon'
import CtaBanner from '../components/CtaBanner'
import { SERVICES, TECH_STACK, WHY_CHOOSE_ITEMS } from '../data/siteData'

export default function HomePage() {
  return (
    <>
      <Seo
        title="Transforming Ideas Into Powerful Digital Solutions"
        description="WebNexazz is a modern software development and IT services company building custom web applications, mobile apps, cloud integrations, and AI automation."
      />

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 pb-20 sm:pt-24 sm:pb-28">
        {/* Background radial glow + grid */}
        <div
          className="pointer-events-none absolute inset-0 gradient-glow"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(to right, #38bdf8 1px, transparent 1px), linear-gradient(to bottom, #38bdf8 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12">
            {/* Hero Copy */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3.5 py-1.5 text-xs font-medium text-cyan-300">
                <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
                Software Development &amp; IT Services
              </div>

              <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl lg:leading-[1.08]">
                Transforming Ideas Into{' '}
                <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Powerful Digital Solutions
                </span>
              </h1>

              <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
                WebNexazz partners with startups and growing businesses to architect, build, and scale custom web applications, APIs, mobile products, cloud infrastructure, and practical AI automation.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all duration-200 hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-500/40 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  Get a Free Consultation
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 py-3.5 text-sm font-semibold text-slate-200 transition-colors hover:border-cyan-400/50 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                >
                  Explore Our Services
                </Link>
              </div>

              <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-slate-400">
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                  Clean, Maintainable Code
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                  Modern Cloud &amp; Edge Ready
                </span>
                <span className="inline-flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-cyan-400" aria-hidden="true" />
                  Dedicated Engineering Support
                </span>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="lg:col-span-5">
              <div className="relative rounded-2xl border border-slate-800/90 bg-slate-900/75 p-5 shadow-2xl shadow-blue-950/60 backdrop-blur-xl">
                <div
                  className="pointer-events-none absolute -inset-0.5 -z-10 rounded-2xl bg-gradient-to-r from-cyan-500/20 via-blue-500/20 to-indigo-500/20 blur-xl"
                  aria-hidden="true"
                />

                {/* Window Header */}
                <div className="flex items-center justify-between border-b border-slate-800 pb-3.5">
                  <div className="flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <span className="inline-flex items-center gap-1.5 rounded-md bg-slate-950 px-2.5 py-1 text-xs font-mono text-cyan-300">
                    <Terminal className="h-3.5 w-3.5" aria-hidden="true" />
                    webnexazz.architecture
                  </span>
                </div>

                {/* Code/Architecture Preview */}
                <div className="mt-4 space-y-3 font-mono text-xs sm:text-sm">
                  <div className="rounded-xl border border-slate-800 bg-slate-950/90 p-4 text-slate-300">
                    <p className="text-slate-500">// Full-Stack Delivery Blueprint</p>
                    <p className="mt-1.5">
                      <span className="text-cyan-400">const</span>{' '}
                      <span className="text-blue-300">solution</span> ={' '}
                      <span className="text-indigo-300">buildPlatform</span>({'{'}
                    </p>
                    <p className="pl-4">
                      frontend: <span className="text-emerald-300">&apos;React + Tailwind&apos;</span>,
                    </p>
                    <p className="pl-4">
                      backend: <span className="text-emerald-300">&apos;Scalable APIs&apos;</span>,
                    </p>
                    <p className="pl-4">
                      cloud: <span className="text-emerald-300">&apos;Edge &amp; CI/CD&apos;</span>,
                    </p>
                    <p className="pl-4">
                      automation: <span className="text-emerald-300">&apos;AI Workflows&apos;</span>,
                    </p>
                    <p>{'}'})</p>
                  </div>

                  {/* Capability Pills */}
                  <div className="grid grid-cols-2 gap-3 font-sans">
                    <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3.5">
                      <div className="flex items-center gap-2 text-cyan-400">
                        <Zap className="h-4 w-4" aria-hidden="true" />
                        <span className="text-xs font-semibold uppercase tracking-wide">Performance</span>
                      </div>
                      <p className="mt-1.5 text-xs text-slate-400">
                        Optimized bundles, fast APIs &amp; responsive UI across devices.
                      </p>
                    </div>
                    <div className="rounded-xl border border-slate-800 bg-slate-950/80 p-3.5">
                      <div className="flex items-center gap-2 text-blue-400">
                        <Layers className="h-4 w-4" aria-hidden="true" />
                        <span className="text-xs font-semibold uppercase tracking-wide">Scalability</span>
                      </div>
                      <p className="mt-1.5 text-xs text-slate-400">
                        Modular codebases built to evolve cleanly with your business.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="border-t border-slate-800/70 bg-[#050b1a] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
                What We Build
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
                End-to-End Software &amp; IT Services
              </h2>
              <p className="mt-3 text-base text-slate-400">
                From sleek web applications to custom backend APIs, cloud integrations, and AI automation, we deliver practical technology tailored to your goals.
              </p>
            </div>
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-400 transition-colors hover:text-cyan-300"
            >
              View all 7 services
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 6).map((service) => (
              <div
                key={service.id}
                className="group card-glass card-glass-hover flex flex-col justify-between rounded-2xl p-6 transition-all duration-300"
              >
                <div>
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500/15 to-blue-600/20 text-cyan-400 border border-cyan-500/20 group-hover:scale-105 transition-transform">
                    <ServiceIcon name={service.icon} className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                    {service.shortDesc}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800/80">
                  <Link
                    to={`/services#${service.id}`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-cyan-400 hover:text-cyan-300"
                  >
                    Learn more
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* 7th Service Highlight Strip */}
          <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:flex sm:items-center sm:justify-between gap-6">
            <div className="flex items-start gap-4">
              <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 border border-blue-500/20">
                <ServiceIcon name={SERVICES[6].icon} className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">{SERVICES[6].title}</h3>
                <p className="mt-1 text-sm text-slate-400">{SERVICES[6].shortDesc}</p>
              </div>
            </div>
            <Link
              to={`/services#${SERVICES[6].id}`}
              className="mt-4 sm:mt-0 inline-flex shrink-0 items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-950 px-4 py-2.5 text-sm font-medium text-cyan-400 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
            >
              Explore Consulting
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose WebNexazz */}
      <section className="border-t border-slate-800/70 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Why WebNexazz
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built on Engineering Discipline &amp; Clarity
            </h2>
            <p className="mt-3 text-base text-slate-400">
              As a focused software studio, we prioritize direct technical ownership, dependable delivery, and solutions that actually solve business problems.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {WHY_CHOOSE_ITEMS.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-6 transition-colors hover:border-blue-500/40"
              >
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/10 text-cyan-400 border border-blue-500/20">
                  <ServiceIcon name={item.icon} className="h-5 w-5" />
                </div>
                <h3 className="mt-4 text-base font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Work With */}
      <section className="border-t border-slate-800/70 bg-[#050b1a] py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Technology Stack
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Technologies We Work With
            </h2>
            <p className="mt-3 text-base text-slate-400">
              We select proven, modern tools matched to your product requirements—balancing developer velocity, reliability, and low operational overhead.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {TECH_STACK.map((group) => (
              <div
                key={group.category}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6"
              >
                <h3 className="text-sm font-semibold uppercase tracking-wider text-cyan-400">
                  {group.category}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-700/80 bg-slate-950/90 px-3 py-1.5 text-xs font-medium text-slate-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <CtaBanner />
    </>
  )
}

