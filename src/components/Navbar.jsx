import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, ArrowRight } from 'lucide-react'
import Logo from './Logo'
import { NAV_LINKS } from '../data/siteData'

export default function Navbar() {
  const [openPath, setOpenPath] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  const mobileOpen = openPath === location.pathname

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-xl shadow-lg shadow-slate-950/50'
          : 'border-b border-transparent bg-slate-950/60 backdrop-blur-md'
      }`}
    >
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Logo />

        {/* Desktop Nav */}
        <nav aria-label="Primary Navigation" className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 ${
                  isActive
                    ? 'text-cyan-400 bg-cyan-500/10'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-cyan-500/20 transition-all duration-200 hover:from-cyan-400 hover:to-blue-500 hover:shadow-cyan-500/35 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
          >
            Get a Free Consultation
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          type="button"
          onClick={() =>
            setOpenPath((prev) => (prev === location.pathname ? null : location.pathname))
          }
          aria-expanded={mobileOpen}
          aria-controls="mobile-navigation"
          aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          className="inline-flex md:hidden items-center justify-center rounded-xl border border-slate-800 bg-slate-900/80 p-2.5 text-slate-200 hover:bg-slate-800 hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          {mobileOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div
          id="mobile-navigation"
          className="md:hidden border-t border-slate-800/80 bg-slate-950/95 backdrop-blur-xl px-4 pb-6 pt-3"
        >
          <nav aria-label="Mobile Navigation" className="flex flex-col gap-1.5">
            {NAV_LINKS.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/25'
                      : 'text-slate-300 hover:bg-slate-900 hover:text-white'
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <Link
              to="/contact"
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-3 text-base font-semibold text-white shadow-md shadow-cyan-500/20"
            >
              Get a Free Consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
