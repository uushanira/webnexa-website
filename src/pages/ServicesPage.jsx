import { Link } from 'react-router-dom'
import { ArrowRight, Check } from 'lucide-react'
import Seo from '../components/Seo'
import ServiceIcon from '../components/ServiceIcon'
import CtaBanner from '../components/CtaBanner'
import { SERVICES } from '../data/siteData'

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        description="Explore WebNexazz software development and IT services: website design, custom software, backend APIs, mobile apps, cloud solutions, AI integration, and IT consulting."
      />

      {/* Header */}
      <section className="relative overflow-hidden border-b border-slate-800/70 pt-16 pb-16 sm:pt-20 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 gradient-glow" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Our Services
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Comprehensive Software &amp; IT Capabilities
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              Whether you are launching a new digital product, modernizing internal tools, or integrating AI automation, WebNexazz provides focused engineering across the full stack.
            </p>
          </div>
        </div>
      </section>

      {/* All 7 Services */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {SERVICES.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-24 rounded-3xl border border-slate-800/90 bg-slate-900/50 p-6 transition-colors hover:border-cyan-500/35 sm:p-8 lg:p-10"
              >
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:items-center">
                  <div className="lg:col-span-7">
                    <div className="flex items-center gap-4">
                      <div className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-500/15 to-blue-600/20 text-cyan-400 border border-cyan-500/25">
                        <ServiceIcon name={service.icon} className="h-7 w-7" />
                      </div>
                      <div>
                        <span className="font-mono text-xs font-semibold text-cyan-400">
                          0{index + 1} / SERVICE
                        </span>
                        <h2 className="text-2xl font-bold text-white sm:text-3xl">
                          {service.title}
                        </h2>
                      </div>
                    </div>

                    <p className="mt-5 text-base leading-relaxed text-slate-300">
                      {service.description}
                    </p>

                    <div className="mt-6">
                      <Link
                        to={`/contact?service=${encodeURIComponent(service.title)}`}
                        className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-5 py-3 text-sm font-semibold text-white shadow-md shadow-cyan-500/20 transition-all hover:from-cyan-400 hover:to-blue-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                      >
                        Request {service.title.split('&')[0].trim()} Consultation
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    </div>
                  </div>

                  <div className="lg:col-span-5">
                    <div className="rounded-2xl border border-slate-800 bg-slate-950/80 p-6">
                      <h3 className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Key Capabilities
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {service.deliverables.map((item) => (
                          <li key={item} className="flex items-start gap-3 text-sm text-slate-200">
                            <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-cyan-500/15 text-cyan-400">
                              <Check className="h-3.5 w-3.5" aria-hidden="true" />
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Not Sure Which Service Fits Best?"
        subtitle="Book a free initial consultation and we will help you scope the right architecture and delivery plan."
        secondaryText={null}
      />
    </>
  )
}

