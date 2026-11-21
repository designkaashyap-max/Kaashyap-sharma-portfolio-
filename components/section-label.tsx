export function SectionLabel({ index, children }: { index: string; children: React.ReactNode }) {
  return (
    <p className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted">
      <span className="text-accent">{index}</span>
      <span className="h-px w-8 bg-line" aria-hidden="true" />
      {children}
    </p>
  )
}
