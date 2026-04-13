export default function TimelineItem({ item, type = 'experience' }) {
  if (type === 'education') {
    return (
      <div className="space-y-1">
        <span className="font-mono text-xs text-olive-text">{item.period}</span>
        <h4 className="font-body text-[15px] font-medium text-text-dark">
          {item.title}
        </h4>
        <p className="font-body text-xs text-rose-text">{item.institution}</p>
      </div>
    )
  }

  if (type === 'tool') {
    return (
      <span className="inline-block px-3 py-1.5 font-mono text-xs text-text-dark bg-warm-alt/60 rounded-full border border-warm/40">
        {item}
      </span>
    )
  }

  const hasDetails = item.highlights && item.highlights.length > 0

  return (
    <div className="relative pl-6">
      {/* Dot */}
      <span
        className="absolute left-0 top-[5px] w-2 h-2 rounded-full bg-rose-accent -translate-x-[calc(50%+1px)]"
        aria-hidden="true"
      />
      <div className="space-y-2">
        <span className="font-mono text-xs uppercase tracking-wide text-olive-text">{item.period}</span>
        <h4 className={`font-body font-semibold text-text-dark ${hasDetails ? 'text-lg' : 'text-[15px]'}`}>
          {item.company}
        </h4>
        <p className="font-body text-sm italic text-text-muted">{item.role}</p>
        {item.clients && (
          <p className="font-body text-xs text-rose-text">{item.clients}</p>
        )}
        {hasDetails && (
          <ul className="space-y-1 mt-2" role="list">
            {item.highlights.map((h, i) => (
              <li
                key={i}
                className="font-body text-sm text-text-muted pl-4 relative before:content-['*'] before:absolute before:left-0 before:text-rose-text/60"
              >
                {h}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  )
}
