import { Link } from 'react-router-dom'
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react'
import Logo from './Logo'
import { COMPANY_INFO, NAV_LINKS, SERVICES } from '../data/siteData'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-slate-800/80 bg-[#040916] text-slate-300">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-12">
          {/* Brand Column */}
          <div className="lg:col-span-4 space-y-4">
            <Logo />
            <p className="text-sm leading-relaxed text-slate-400 max-w-sm">
              WebNexazz is a modern software development and IT services company building fast, secure, and scalable digital solutions for growing businesses worldwide.
            </p>
            <div className="flex flex-wrap gap-2.5 pt-2">
              {COMPANY_INFO.socials.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-slate-800 bg-slate-900/70 px-3 py-1.5 text-xs font-medium text-slate-300 transition-colors hover:border-cyan-500/40 hover:text-cyan-400"
                >
                  {social.name}
                  <ExternalLink className="h-3 w-3 opacity-70" aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h2>
            <ul className="mt-4 space-y-2.5">
              {NAV_LINKS.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5">
              {SERVICES.map((service) => (
                <li key={service.id}>
                  <Link
                    to={`/services#${service.id}`}
                    className="text-sm text-slate-400 transition-colors hover:text-cyan-400"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h2 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h2>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li className="flex items-start gap-2.5">
                <Mail className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-cyan-400 transition-colors break-all"
                >
                  {COMPANY_INFO.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{COMPANY_INFO.phone}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin className="h-4 w-4 text-cyan-400 shrink-0 mt-0.5" aria-hidden="true" />
                <span>{COMPANY_INFO.location}</span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-slate-500">
              * Placeholder contact details can be updated in <code className="text-slate-400">src/data/siteData.js</code>.
            </p>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-slate-800/80 pt-8 text-xs text-slate-500 sm:flex-row">
          <p>&copy; {currentYear} {COMPANY_INFO.name}. All rights reserved.</p>
          <p>Engineered with React, Vite &amp; Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}

