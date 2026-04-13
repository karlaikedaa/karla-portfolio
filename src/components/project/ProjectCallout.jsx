export default function ProjectCallout({ children }) {
  const paragraphs = typeof children === 'string'
    ? children.split('\n\n').filter(Boolean)
    : [children]

  return (
    <blockquote
      className="my-6 pl-5 py-4 font-body text-base text-text-muted italic leading-relaxed"
      style={{
        borderLeft: '4px solid',
        borderColor: 'var(--color-rose-accent, #d4a29c)',
        backgroundColor: 'rgba(231,214,192,0.15)',
        borderRadius: '0 8px 8px 0',
      }}
    >
      {paragraphs.map((p, i) => (
        <p key={i} className={i > 0 ? 'mt-3' : ''} style={{ whiteSpace: 'pre-line' }}>{p}</p>
      ))}
    </blockquote>
  )
}
