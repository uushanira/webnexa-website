import { Link } from 'react-router-dom'

export default function Logo({ className = '' }) {
  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2.5 group focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400 rounded-lg ${className}`}
      aria-label="WebNexazz Home"
    >
      <span className="relative flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-indigo-600 p-[1px] shadow-lg shadow-cyan-500/20 transition-transform duration-200 group-hover:scale-105">
        <span className="flex h-full w-full items-center justify-center rounded-[11px] bg-slate-950">
          <svg
            viewBox="0 0 36 36"
            className="h-5 w-5"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
          >
            <defs>
              <linearGradient id="wnx-logo-grad" x1="4" y1="8" x2="32" y2="28" gradientUnits="userSpaceOnUse">
                <stop offset="0%" stopColor="#22d3ee" />
                <stop offset="55%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#818cf8" />
              </linearGradient>
            </defs>
            <path
              d="M6 10L12.5 26L18 15L23.5 26L30 10"
              stroke="url(#wnx-logo-grad)"
              strokeWidth="3.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <circle cx="18" cy="8.5" r="2.2" fill="#22d3ee" />
          </svg>
        </span>
      </span>
      <span className="text-xl font-bold tracking-tight text-white">
        Web<span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Nexazz</span>
      </span>
    </Link>
  )
}

