import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import {
  AlertCircle,
  Check,
  Clock,
  Copy,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  Send,
} from 'lucide-react'
import Seo from '../components/Seo'
import { COMPANY_INFO, SERVICES } from '../data/siteData'

const SERVICE_OPTIONS = [...SERVICES.map((s) => s.title), 'General Inquiry']

const INITIAL_FORM = {
  name: '',
  email: '',
  service: '',
  message: '',
}

export default function ContactPage() {
  const [searchParams] = useSearchParams()
  const preselectedService = searchParams.get('service') || ''

  const [formData, setFormData] = useState({
    ...INITIAL_FORM,
    service: SERVICE_OPTIONS.includes(preselectedService) ? preselectedService : '',
  })
  const [errors, setErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [validatedPayload, setValidatedPayload] = useState(null)
  const [copied, setCopied] = useState(false)

  const validate = (values) => {
    const nextErrors = {}
    if (!values.name.trim() || values.name.trim().length < 2) {
      nextErrors.name = 'Please enter your name (at least 2 characters).'
    }
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!values.email.trim() || !emailPattern.test(values.email.trim())) {
      nextErrors.email = 'Please enter a valid email address.'
    }
    if (!values.service) {
      nextErrors.service = 'Please select the service you are interested in.'
    }
    if (!values.message.trim() || values.message.trim().length < 15) {
      nextErrors.message = 'Please share a brief project description (at least 15 characters).'
    }
    return nextErrors
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const validationErrors = validate(formData)
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setValidatedPayload(null)
      return
    }

    setIsSubmitting(true)
    // Static hosting mode: no backend endpoint is configured yet.
    // To wire a free form backend later (e.g., Formspree, Web3Forms, or a Cloudflare Worker),
    // replace this timeout with an async fetch() POST request.
    setTimeout(() => {
      setIsSubmitting(false)
      setValidatedPayload({
        name: formData.name.trim(),
        email: formData.email.trim(),
        service: formData.service,
        message: formData.message.trim(),
      })
    }, 250)
  }

  const buildMailtoHref = () => {
    if (!validatedPayload) return '#'
    const subject = encodeURIComponent(`[WebNexazz Inquiry] ${validatedPayload.service} - ${validatedPayload.name}`)
    const body = encodeURIComponent(
      `Name: ${validatedPayload.name}\nEmail: ${validatedPayload.email}\nService: ${validatedPayload.service}\n\nMessage:\n${validatedPayload.message}`
    )
    return `mailto:${COMPANY_INFO.email}?subject=${subject}&body=${body}`
  }

  const handleCopyInquiry = async () => {
    if (!validatedPayload) return
    const text = `Name: ${validatedPayload.name}\nEmail: ${validatedPayload.email}\nService: ${validatedPayload.service}\nMessage:\n${validatedPayload.message}`
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      setTimeout(() => setCopied(false), 2500)
    } catch {
      setCopied(false)
    }
  }

  return (
    <>
      <Seo
        title="Contact Us"
        description="Contact WebNexazz for a free software development consultation. Discuss web applications, custom software, APIs, mobile apps, cloud, or AI integration."
      />

      {/* Header */}
      <section className="relative overflow-hidden border-b border-slate-800/70 pt-16 pb-16 sm:pt-20 sm:pb-20">
        <div className="pointer-events-none absolute inset-0 gradient-glow" aria-hidden="true" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
              Contact Us
            </p>
            <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-white sm:text-5xl">
              Let’s Discuss Your Project
            </h1>
            <p className="mt-5 text-base leading-relaxed text-slate-300 sm:text-lg">
              Have an idea, product roadmap, or technical challenge? Reach out to WebNexazz to schedule a free initial consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Form & Contact Info */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
            {/* Contact Form */}
            <div className="lg:col-span-7">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8 lg:p-10">
                <h2 className="text-2xl font-bold text-white">Send an Inquiry</h2>
                <p className="mt-2 text-sm text-slate-400">
                  Fill out the form below to prepare your project inquiry. All fields are validated before submission.
                </p>

                <form onSubmit={handleSubmit} noValidate className="mt-8 space-y-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-slate-200">
                      Full Name <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      autoComplete="name"
                      value={formData.name}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.name)}
                      aria-describedby={errors.name ? 'contact-name-error' : undefined}
                      placeholder="Alex Morgan"
                      className={`mt-2 w-full rounded-xl border bg-slate-950/90 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                        errors.name ? 'border-rose-500/80' : 'border-slate-700/80 hover:border-slate-600'
                      }`}
                    />
                    {errors.name && (
                      <p id="contact-name-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-slate-200">
                      Email Address <span className="text-cyan-400">*</span>
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      value={formData.email}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.email)}
                      aria-describedby={errors.email ? 'contact-email-error' : undefined}
                      placeholder="you@company.com"
                      className={`mt-2 w-full rounded-xl border bg-slate-950/90 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                        errors.email ? 'border-rose-500/80' : 'border-slate-700/80 hover:border-slate-600'
                      }`}
                    />
                    {errors.email && (
                      <p id="contact-email-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        {errors.email}
                      </p>
                    )}
                  </div>

                  {/* Service */}
                  <div>
                    <label htmlFor="contact-service" className="block text-sm font-medium text-slate-200">
                      Service Needed <span className="text-cyan-400">*</span>
                    </label>
                    <select
                      id="contact-service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.service)}
                      aria-describedby={errors.service ? 'contact-service-error' : undefined}
                      className={`mt-2 w-full rounded-xl border bg-slate-950/90 px-4 py-3 text-sm text-white transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                        errors.service ? 'border-rose-500/80' : 'border-slate-700/80 hover:border-slate-600'
                      }`}
                    >
                      <option value="">Select a service...</option>
                      {SERVICE_OPTIONS.map((serviceTitle) => (
                        <option key={serviceTitle} value={serviceTitle}>
                          {serviceTitle}
                        </option>
                      ))}
                    </select>
                    {errors.service && (
                      <p id="contact-service-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        {errors.service}
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-slate-200">
                      Project Details <span className="text-cyan-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      aria-invalid={Boolean(errors.message)}
                      aria-describedby={errors.message ? 'contact-message-error' : undefined}
                      placeholder="Tell us about your goals, timeline, and key features you need..."
                      className={`mt-2 w-full rounded-xl border bg-slate-950/90 px-4 py-3 text-sm text-white placeholder-slate-500 transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-400 ${
                        errors.message ? 'border-rose-500/80' : 'border-slate-700/80 hover:border-slate-600'
                      }`}
                    />
                    {errors.message && (
                      <p id="contact-message-error" className="mt-1.5 flex items-center gap-1.5 text-xs text-rose-400">
                        <AlertCircle className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition-all hover:from-cyan-400 hover:to-blue-500 disabled:opacity-60 disabled:cursor-not-allowed focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
                  >
                    <Send className="h-4 w-4" aria-hidden="true" />
                    {isSubmitting ? 'Validating Inquiry...' : 'Prepare Inquiry'}
                  </button>
                </form>

                {/* Honest Static Hosting Notice After Validation */}
                {validatedPayload && (
                  <div
                    role="status"
                    className="mt-6 rounded-2xl border border-amber-500/35 bg-amber-500/10 p-5 text-sm text-slate-200"
                  >
                    <p className="font-semibold text-amber-300">
                      Inquiry validated — static site notice
                    </p>
                    <p className="mt-1.5 leading-relaxed text-slate-300">
                      Your form details passed validation, but this static website does not yet have an automated email backend connected, so no message was sent automatically. Use one of the options below to send your inquiry directly:
                    </p>
                    <div className="mt-4 flex flex-wrap gap-3">
                      <a
                        href={buildMailtoHref()}
                        className="inline-flex items-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-xs font-semibold text-slate-950 hover:bg-cyan-400 transition-colors"
                      >
                        <Mail className="h-4 w-4" aria-hidden="true" />
                        Open in Email App
                      </a>
                      <button
                        type="button"
                        onClick={handleCopyInquiry}
                        className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900 px-4 py-2.5 text-xs font-semibold text-slate-200 hover:border-cyan-400/50 hover:text-white transition-colors"
                      >
                        {copied ? (
                          <>
                            <Check className="h-4 w-4 text-emerald-400" aria-hidden="true" />
                            Copied!
                          </>
                        ) : (
                          <>
                            <Copy className="h-4 w-4" aria-hidden="true" />
                            Copy Inquiry Text
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Contact Info & Placeholders */}
            <aside className="lg:col-span-5 space-y-6">
              <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-white">Contact Information</h2>
                <p className="mt-2 text-xs text-slate-400">
                  Update these editable placeholders in <code className="text-cyan-300">src/data/siteData.js</code> with your official business contact details.
                </p>

                <ul className="mt-6 space-y-5 text-sm">
                  <li className="flex items-start gap-3.5">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Mail className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Email
                      </p>
                      <a
                        href={`mailto:${COMPANY_INFO.email}`}
                        className="mt-0.5 block font-medium text-white hover:text-cyan-400 transition-colors break-all"
                      >
                        {COMPANY_INFO.email}
                      </a>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                      <Phone className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Phone
                      </p>
                      <p className="mt-0.5 font-medium text-white">{COMPANY_INFO.phone}</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                      <MapPin className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Location
                      </p>
                      <p className="mt-0.5 font-medium text-white">{COMPANY_INFO.location}</p>
                    </div>
                  </li>

                  <li className="flex items-start gap-3.5">
                    <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                      <Clock className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                        Business Hours
                      </p>
                      <p className="mt-0.5 font-medium text-white">{COMPANY_INFO.hours}</p>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8">
                <h2 className="text-xl font-bold text-white">Social Channels</h2>
                <p className="mt-2 text-xs text-slate-400">
                  Placeholder links ready to point to your official WebNexazz profiles.
                </p>

                <div className="mt-5 space-y-3">
                  {COMPANY_INFO.socials.map((social) => (
                    <a
                      key={social.name}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-between rounded-xl border border-slate-800 bg-slate-950/70 px-4 py-3 text-sm transition-colors hover:border-cyan-500/40 hover:text-cyan-400"
                    >
                      <div>
                        <span className="font-semibold text-white">{social.name}</span>
                        <span className="ml-2 text-xs text-slate-400">{social.handle}</span>
                      </div>
                      <ExternalLink className="h-4 w-4 text-slate-400" aria-hidden="true" />
                    </a>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  )
}

