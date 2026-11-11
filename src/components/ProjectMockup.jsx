export default function ProjectMockup({ project }) {
  return (
    <div
      className={`relative h-48 w-full overflow-hidden rounded-t-2xl border-b border-slate-800/80 bg-gradient-to-br ${project.accent} p-5`}
    >
      {/* Subtle tech grid */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            'radial-gradient(circle at 1px 1px, rgba(148, 163, 184, 0.4) 1px, transparent 0)',
          backgroundSize: '20px 20px',
        }}
        aria-hidden="true"
      />

      {/* Simulated application window */}
      <div className="relative h-full w-full rounded-xl border border-white/10 bg-slate-950/90 p-3.5 shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-800 pb-2">
          <div className="flex items-center gap-1.5">
            <span className="h-2 w-2 rounded-full bg-rose-400/70" />
            <span className="h-2 w-2 rounded-full bg-amber-400/70" />
            <span className="h-2 w-2 rounded-full bg-emerald-400/70" />
          </div>
          <span className="rounded bg-slate-900 px-2 py-0.5 text-[10px] font-mono text-slate-400">
            {project.category}
          </span>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2.5">
          <div className="col-span-2 space-y-2">
            <div className="h-2.5 w-3/4 rounded bg-gradient-to-r from-cyan-400/60 to-blue-500/60" />
            <div className="h-2 w-full rounded bg-slate-800" />
            <div className="h-2 w-5/6 rounded bg-slate-800" />
            <div className="mt-3 grid grid-cols-2 gap-2">
              <div className="h-10 rounded-lg border border-slate-800 bg-slate-900/80 p-2">
                <div className="h-1.5 w-8 rounded bg-cyan-400/50" />
                <div className="mt-2 h-2 w-12 rounded bg-slate-700" />
              </div>
              <div className="h-10 rounded-lg border border-slate-800 bg-slate-900/80 p-2">
                <div className="h-1.5 w-8 rounded bg-blue-400/50" />
                <div className="mt-2 h-2 w-10 rounded bg-slate-700" />
              </div>
            </div>
          </div>
          <div className="col-span-1 flex flex-col justify-between rounded-lg border border-slate-800 bg-slate-900/70 p-2">
            <div className="h-2 w-full rounded bg-slate-800" />
            <div className="flex items-end gap-1 h-14 pt-2">
              <div className="w-1/4 h-5 rounded-t bg-blue-500/40" />
              <div className="w-1/4 h-9 rounded-t bg-cyan-400/50" />
              <div className="w-1/4 h-7 rounded-t bg-blue-500/60" />
              <div className="w-1/4 h-12 rounded-t bg-cyan-400/80" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

