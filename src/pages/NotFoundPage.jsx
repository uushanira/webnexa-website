import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'
import Seo from '../components/Seo'

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page Not Found"
        description="The page you requested could not be found on WebNexazz."
      />
      <section className="flex min-h-[65vh] items-center justify-center px-4 py-20 text-center">
        <div className="max-w-md">
          <p className="font-mono text-sm font-semibold text-cyan-400">404 ERROR</p>
          <h1 className="mt-2 text-4xl font-extrabold text-white sm:text-5xl">
            Page Not Found
          </h1>
          <p className="mt-4 text-base text-slate-400">
            The page you are looking for might have been moved or does not exist.
          </p>
          <Link
            to="/"
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 hover:from-cyan-400 hover:to-blue-500"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            Back to Home
          </Link>
        </div>
      </section>
    </>
  )
}

