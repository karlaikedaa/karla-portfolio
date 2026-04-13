import { Link } from 'react-router-dom'

export default function UXProjectCard({ project }) {
  const isComingSoon = project.comingSoon

  const cardContent = (
    <article
      className={`bg-white rounded-2xl border border-warm/20 overflow-hidden transition-all duration-300 ${
        isComingSoon
          ? 'opacity-70'
          : 'hover:shadow-lg hover:-translate-y-1 cursor-pointer'
      }`}
      aria-label={project.title}
    >
      {/* Image */}
      <div className="relative overflow-hidden bg-warm-alt/30 img-shield" style={{ height: '223px' }}>
        <img
          src={project.coverImage}
          alt={project.title}
          draggable="false"
          className={`w-full h-full object-cover transition-transform duration-300 ${
            !isComingSoon ? 'group-hover:scale-105' : ''
          }`}
          loading="lazy"
          onError={(e) => {
            e.currentTarget.parentElement.style.backgroundColor = '#e9d7c2'
          }}
        />
        {isComingSoon && (
          <div className="absolute inset-0 flex items-center justify-center bg-dark/40">
            <span className="font-mono text-xs text-warm-alt px-3 py-1.5 bg-dark/60 rounded-full border border-warm-alt/30">
              Em breve
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6 space-y-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-2" role="list" aria-label="Categorias">
          {project.tags.map((tag) => (
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
        <h2 className="font-heading text-[20px] font-medium text-text-dark leading-snug">
          {project.title}
        </h2>

        {/* Description */}
        <p className="font-body text-sm text-text-muted leading-relaxed">
          {project.description}
        </p>

        {/* Link */}
        {!isComingSoon && (
          <span className="inline-flex items-center gap-1 font-mono text-xs text-text-brown hover:text-text-dark transition-colors">
            Ver projeto →
          </span>
        )}
      </div>
    </article>
  )

  if (isComingSoon) {
    return <div className="group">{cardContent}</div>
  }

  return (
    <Link
      to={`/projeto/${project.id}`}
      className="group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-accent rounded-2xl block"
    >
      {cardContent}
    </Link>
  )
}
