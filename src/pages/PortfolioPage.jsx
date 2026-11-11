import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Info, Layers } from 'lucide-react'
import Seo from '../components/Seo'
import ProjectMockup from '../components/ProjectMockup'
import CtaBanner from '../components/CtaBanner'
import { PORTFOLIO_PROJECTS } from '../data/siteData'

const CATEGORIES = ['All', 'Web Apps', 'SaaS & Cloud', 'AI & Automation', 'Mobile']

export default function PortfolioPage() {
  const [selectedCategory, setSelectedCategory] = useState('All')

  const filteredProjects =
    selectedCategory === 'All'
      ? PORTFOLIO_PROJECTS
      : PORTFOLIO_PROJECTS.filter((project) => project.category === selectedCategory)

  return (
    <>
      <Seo
        title="Portfolio"
        description="Explore WebNexazz sample concept projects across web applications, SaaS dashboards, mobile apps, and AI workflow automation."
      />

      {/* Header */}
      <section className="relative overflow-hidden border-b border-slate-800/70 pt-16 pb-16 sm:pt-20 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 gradient-glow" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Portfolio &amp; Concepts
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Solution Blueprints &amp; Sample Projects
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              Explore the types of web platforms, cloud dashboards, mobile apps, and AI tools WebNexazz architects and builds.
            </p>
          </div>

          {/* Transparent Sample Notice */}
          <div
            role="note"
            className="mt-8 flex items-start gap-3 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 p-4 text-sm text-cyan-100 max-w-3xl"
          >
            <Info className="h-5 w-5 shrink-0 text-cyan-400 mt-0.5" aria-hidden="true" />
            <p>
              <strong className="font-semibold text-white">Sample Showcase Notice:</strong>{' '}
              The projects below are clearly labelled <strong>Sample Concepts</strong> created to illustrate WebNexazz’s technical architecture and UI standards until live client case studies are published.
            </p>
          </div>
        </div>
      </section>

      {/* Filter & Grid */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Category Filter */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="flex flex-wrap items-center gap-2.5"
          >
            {CATEGORIES.map((category) => {
              const active = selectedCategory === category
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={active}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                    active
                      ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-md shadow-cyan-500/20'
                      : 'border border-slate-800 bg-slate-900/70 text-slate-300 hover:border-slate-700 hover:text-white'
                  }`}
                >
                  {category}
                </button>
              )
            })}
          </div>

          {/* Project Cards */}
          <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 transition-all duration-300 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-blue-950/50"
              >
                <ProjectMockup project={project} />

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <span
                        className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-semibold ${project.badgeColor}`}
                      >
                        <Layers className="h-3.5 w-3.5" aria-hidden="true" />
                        Sample Project
                      </span>
                      <span className="text-xs font-medium text-slate-400">
                        {project.subtitle}
                      </span>
                    </div>

                    <h2 className="mt-4 text-xl font-bold text-white">
                      {project.title}
                    </h2>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-400">
                      {project.description}
                    </p>

                    <ul className="mt-4 space-y-1.5 text-xs text-slate-300">
                      {project.highlights.map((highlight) => (
                        <li key={highlight} className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 shrink-0" />
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-5 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4">
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-md border border-slate-700/80 bg-slate-950 px-2.5 py-1 text-xs font-medium text-slate-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <Link
                      to={`/contact?service=${encodeURIComponent('Custom Software Development')}`}
                      className="inline-flex items-center gap-1 text-xs font-semibold text-cyan-400 hover:text-cyan-300"
                    >
                      Build something similar
                      <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner
        title="Have a Project Concept in Mind?"
        subtitle="Let’s discuss your requirements and plan a custom solution built specifically for your business."
      />
    </>
  )
}

