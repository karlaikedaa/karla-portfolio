import { Link } from 'react-router-dom'

export default function ProjectCard({ project, className = '' }) {
  return (
    <Link
      to={`/projeto/${project.id}`}
      className={`group relative block rounded-2xl overflow-hidden bg-dark ${className}`}
      aria-label={`Ver projeto: ${project.title}`}
    >
      {/* Project image */}
      <img
        src={project.image}
        alt={`Projeto ${project.title}`}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
        loading="lazy"
        draggable="false"
        onError={(e) => {
          e.target.style.display = 'none'
        }}
      />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-dark/40" />

      {/* Shadow gradient bottom for extra text contrast */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(28,28,26,0.9) 0%, rgba(28,28,26,0.6) 35%, rgba(28,28,26,0.15) 60%, transparent 100%)',
        }}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-rose-bg/0 group-hover:bg-rose-bg/15 transition-colors duration-500" />

      {/* Content overlay — pinned to bottom */}
      <div className="absolute inset-x-0 bottom-0 p-6 flex flex-col gap-2">
        <span
          className="inline-block self-start text-[12px] uppercase leading-4 text-dark rounded-sm"
          style={{ backgroundColor: 'rgba(232, 176, 140, 0.9)', letterSpacing: '1.2px', padding: '4px 10px' }}
        >
          {project.tag}
        </span>
        <h3 className="font-heading text-xl lg:text-[22px] font-medium text-light leading-tight">
          {project.title}
        </h3>
        <p className="font-body text-xs text-warm/90 leading-relaxed">
          {project.description}
        </p>
      </div>

      {/* Hover arrow indicator */}
      <div className="absolute top-5 right-5 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <line x1="7" y1="17" x2="17" y2="7" />
          <polyline points="7 7 17 7 17 17" />
        </svg>
      </div>
    </Link>
  )
}
