import { Compass, Eye, Target } from 'lucide-react'
import Seo from '../components/Seo'
import ServiceIcon from '../components/ServiceIcon'
import CtaBanner from '../components/CtaBanner'
import { DEVELOPMENT_APPROACH, WHY_CHOOSE_ITEMS } from '../data/siteData'

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Us"
        description="Learn about WebNexazz, our mission, vision, software development methodology, and why businesses partner with us for web, mobile, cloud, and AI solutions."
      />

      {/* Page Header */}
      <section className="relative overflow-hidden border-b border-slate-800/70 pt-16 pb-16 sm:pt-20 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 gradient-glow" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              About WebNexazz
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Engineering Digital Products That Move Businesses Forward
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              WebNexazz is a modern software development and IT services company founded with a clear purpose: helping startups, small businesses, and growing organizations turn ideas into reliable, scalable digital products without unnecessary complexity.
            </p>
          </div>
        </div>
      </section>

      {/* Company Intro + Mission & Vision */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/15 text-cyan-400 border border-cyan-500/20">
                <Compass className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-xl font-bold text-white">Who We Are</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                We combine practical full-stack engineering, modern interface design, and cloud-native thinking. Instead of over-engineering or locking clients into bloated tools, we build clean software focused on real business outcomes.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-400 border border-blue-500/20">
                <Target className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-xl font-bold text-white">Our Mission</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                To empower businesses worldwide with high-performing websites, custom software, APIs, and intelligent automation—delivered with honest communication, clean code, and sustainable costs.
              </p>
            </div>

            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-7">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400 border border-indigo-500/20">
                <Eye className="h-5 w-5" aria-hidden="true" />
              </div>
              <h2 className="mt-5 text-xl font-bold text-white">Our Vision</h2>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                To become a trusted long-term technology partner for ambitious teams—known for software craftsmanship, architectural clarity, and dependable execution across every stage of growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="border-t border-slate-800/70 bg-[#050b1a] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              How We Work
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Our Approach to Software Development
            </h2>
            <p className="mt-3 text-base text-slate-400">
              Every project follows a structured, transparent process designed to reduce risk and ship measurable value early.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {DEVELOPMENT_APPROACH.map((phase) => (
              <div
                key={phase.step}
                className="relative rounded-2xl border border-slate-800 bg-slate-900/60 p-6"
              >
                <span className="inline-block rounded-lg bg-cyan-500/10 px-3 py-1 font-mono text-xs font-bold text-cyan-400 border border-cyan-500/20">
                  STEP {phase.step}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-white">{phase.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {phase.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Businesses Choose WebNexazz */}
      <section className="border-t border-slate-800/70 py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Partner With Us
            </p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Why Businesses Choose WebNexazz
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {WHY_CHOOSE_ITEMS.map((item) => (
              <div
                key={item.title}
                className="flex items-start gap-4 rounded-2xl border border-slate-800 bg-slate-900/40 p-6"
              >
                <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-500/15 text-cyan-400 border border-blue-500/20">
                  <ServiceIcon name={item.icon} className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-white">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Let’s Build Something Impactful Together"
        subtitle="Tell us about the challenge you are solving and we will help map out the right technical path."
        secondaryText="View Sample Portfolio"
        secondaryTo="/portfolio"
      />
    </>
  )
}

