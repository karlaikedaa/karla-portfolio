export default function DesignCard({ item }) {
  return (
    <a
      href={item.externalUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-accent rounded-2xl"
    >
      <article
        className="bg-white rounded-2xl border border-warm/20 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
        aria-label={item.title}
      >
        {/* Image */}
        <div className="relative overflow-hidden bg-warm-alt/30" style={{ height: '200px' }}>
          <img
            src={item.coverImage}
            alt={item.title}
            draggable="false"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.parentElement.style.backgroundColor = '#e9d7c2'
            }}
          />
          {/* External link indicator on hover */}
          <div className="absolute inset-0 bg-dark/0 group-hover:bg-dark/20 transition-all duration-300 flex items-center justify-center">
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 rounded-full p-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#1c1c1a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-2">
          {/* Tags */}
          <div className="flex flex-wrap gap-2" role="list" aria-label="Categorias">
            {item.tags.map((tag) => (
              <span
                key={tag}
                role="listitem"
                className="inline-block px-2.5 py-1 font-mono text-[11px] text-text-brown bg-warm/30 rounded-full border border-warm/40"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Title */}
          <h3 className="font-heading text-lg font-medium text-text-dark leading-snug group-hover:text-rose-bg transition-colors">
            {item.title}
          </h3>

          {/* Description */}
          <p className="font-body text-sm text-text-muted leading-relaxed whitespace-pre-line">
            {item.description}
          </p>
        </div>
      </article>
    </a>
  )
}
