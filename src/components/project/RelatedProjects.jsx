import { Link } from 'react-router-dom'
import { projectsContent } from '../../data/projectsContent'

export default function RelatedProjects({ relatedIds }) {
  const related = relatedIds
    .map((id) => projectsContent[id])
    .filter(Boolean)
    .slice(0, 2)

  if (related.length === 0) return null

  return (
    <section
      className="py-20 px-6"
      style={{ backgroundColor: '#ede8df' }}
      aria-label="Mais projetos"
    >
      <div className="mx-auto" style={{ maxWidth: 'var(--max-w-content)' }}>
        {/* Header */}
        <div className="flex items-center justify-between mb-12">
          <div className="space-y-1">
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-brown">
              Mais projetos
            </span>
          </div>
          <Link
            to="/ux-design"
            className="font-mono text-xs text-text-brown hover:text-text-dark transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-accent rounded"
          >
            Ver todos os projetos →
          </Link>
        </div>

        {/* Related cards */}
        <nav aria-label="Projetos relacionados">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {related.map((project) => (
              <Link
                key={project.id}
                to={`/projeto/${project.id}`}
                className="group bg-white rounded-2xl overflow-hidden border border-warm/20 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-accent"
                aria-label={`Ver projeto ${project.title}`}
              >
                {/* Image */}
                <div className="h-48 overflow-hidden bg-warm-alt/30">
                  <img
                    src={project.coverImage}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    draggable="false"
                    onError={(e) => { e.currentTarget.parentElement.style.backgroundColor = '#e9d7c2' }}
                  />
                </div>

                {/* Content */}
                <div className="p-6 space-y-2">
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-2.5 py-1 font-mono text-[11px] text-text-brown bg-warm/30 rounded-full border border-warm/40"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-heading text-lg font-medium text-text-dark">
                    {project.title}
                  </h3>
                  <p className="font-mono text-xs text-text-muted">
                    {project.company} · {project.period}
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </section>
  )
}
