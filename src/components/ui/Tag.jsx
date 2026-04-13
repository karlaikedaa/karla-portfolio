export default function Tag({ children, className = '' }) {
  return (
    <span
      className={`inline-block px-3 py-1 font-body text-xs text-text-dark bg-warm-alt rounded-full ${className}`}
    >
      {children}
    </span>
  )
}
