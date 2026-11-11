import { Component } from 'react'

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError() {
    return { hasError: true }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-slate-950 px-4 text-center text-slate-100">
          <h1 className="text-2xl font-bold text-white">Something went wrong</h1>
          <p className="mt-2 max-w-md text-sm text-slate-400">
            An unexpected error occurred while rendering this page. Please refresh to try again.
          </p>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-6 rounded-xl bg-cyan-500 px-5 py-2.5 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
          >
            Reload Page
          </button>
        </div>
      )
    }

    return this.props.children
  }
}

