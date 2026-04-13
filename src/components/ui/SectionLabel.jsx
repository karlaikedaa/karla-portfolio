export default function SectionLabel({ children, variant = 'light' }) {
  const colorClass = variant === 'dark' ? 'text-rose-accent' : 'text-text-brown'

  return (
    <span
      className={`font-mono text-xs uppercase tracking-[0.2em] ${colorClass}`}
    >
      {children}
    </span>
  )
}
