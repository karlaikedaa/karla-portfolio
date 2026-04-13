import { Link } from 'react-router-dom'

/* ─── Inline SVG icons matching Figma vectors ──────────────────────── */
function BuildingIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="2" y="2" width="10" height="12" rx="1"/>
      <line x1="5.5" y1="5" x2="5.5" y2="5.1"/>
      <line x1="8.5" y1="5" x2="8.5" y2="5.1"/>
      <line x1="5.5" y1="8" x2="5.5" y2="8.1"/>
      <line x1="8.5" y1="8" x2="8.5" y2="8.1"/>
      <line x1="5.5" y1="11" x2="8.5" y2="11"/>
    </svg>
  )
}

function CalendarIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="1.5" y="3" width="12" height="10.5" rx="1"/>
      <line x1="1.5" y1="6.5" x2="13.5" y2="6.5"/>
      <line x1="5" y1="1.5" x2="5" y2="4.5"/>
      <line x1="10" y1="1.5" x2="10" y2="4.5"/>
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <circle cx="7.5" cy="5" r="2.5"/>
      <path d="M2 13c0-3.5 2.5-5.5 5.5-5.5s5.5 2 5.5 5.5"/>
    </svg>
  )
}

function WrenchIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M13.5 2a3.5 3.5 0 0 0-5 3.2L2 11.5l1.5 1.5 6.5-6.5A3.5 3.5 0 0 0 13.5 2z"/>
    </svg>
  )
}

/* ─── Meta item: icon + label + value ──────────────────────────────── */
function MetaItem({ icon, label, value }) {
  return (
    <div className="flex items-start gap-3">
      <span
        className="flex-shrink-0 mt-0.5"
        style={{ color: 'rgba(233,215,194,0.5)' }}
        aria-hidden="true"
      >
        {icon}
      </span>
      <div>
        <dt
          className="font-mono text-xs uppercase tracking-wider"
          style={{ color: 'rgba(233,215,194,0.5)' }}
        >
          {label}
        </dt>
        <dd
          className="mt-1 font-body text-sm"
          style={{ color: 'rgba(233,215,194,1)' }}
        >
          {value}
        </dd>
      </div>
    </div>
  )
}

/* ─── Main export ───────────────────────────────────────────────────── */
export default function ProjectHero({ project }) {
  const isArticle = project.isArticle

  return (
    <>
      {/* ── Dark hero section ───────────────────────────────────────── */}
      <section
        style={{ position: 'relative', backgroundColor: '#2c2c2a', overflow: 'hidden' }}
        aria-label={`Hero do projeto ${project.title}`}
      >
        {/* Background image — 20% opacity layer (Figma: div opacity 0.2) */}
        {project.heroImage && (
          <div
            aria-hidden="true"
            style={{
              position: 'absolute', inset: 0,
              backgroundImage: `url(${project.heroImage.replace(/ /g, '%20')})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center top',
              opacity: 0.2,
            }}
          />
        )}

        {/* Dark overlay — rgba(44,44,42,0.75) */}
        <div
          aria-hidden="true"
          style={{
            position: 'absolute', inset: 0,
            backgroundColor: 'rgba(44,44,42,0.75)',
          }}
        />

        {/* Content — z-index above overlays */}
        <div
          className="relative px-6"
          style={{ zIndex: 1, paddingTop: '80px', paddingBottom: '64px' }}
        >
          <div className="mx-auto" style={{ maxWidth: 'var(--max-w-content)' }}>

            {/* Breadcrumb */}
            <Link
              to="/ux-design"
              className="inline-flex items-center gap-2 font-mono text-xs transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-accent rounded"
              style={{ color: 'rgba(164,161,116,1)' }}
              aria-label={isArticle ? 'Voltar para artigos' : 'Voltar para lista de projetos'}
            >
              <svg width="15" height="15" viewBox="0 0 15 15" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M9 3L4 7.5 9 12"/>
                <line x1="4" y1="7.5" x2="13" y2="7.5"/>
              </svg>
              {isArticle ? 'Voltar para Artigos' : 'Voltar para Projetos'}
            </Link>

            {/* Tags — warm fill, dark text uppercase (Figma: rgba(232,176,140,0.85)) */}
            <div className="flex flex-wrap gap-2 mt-10" role="list" aria-label="Categorias">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  role="listitem"
                  className="font-mono text-xs rounded-full"
                  style={{
                    padding: '4px 12px',
                    backgroundColor: 'rgba(232,176,140,0.85)',
                    color: 'rgba(44,44,42,1)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.06em',
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Title — SemiBold 600, rgba(247,243,238) */}
            <h1
              className="mt-6 font-heading leading-tight text-3xl md:text-4xl lg:text-5xl"
              style={{
                fontWeight: 600,
                color: 'rgba(247,243,238,1)',
                maxWidth: isArticle ? '800px' : 'none',
              }}
            >
              {project.title}
            </h1>

            {/* Subtítulo — linha 1: Playfair itálico | linha 2: DM Sans regular */}
            {project.subtitle && (() => {
              const [line1, line2] = project.subtitle.split('\n')
              return (
                <div className="mt-6" style={{ maxWidth: '672px' }}>
                  {line1 && (
                    <p
                      className="font-heading leading-relaxed"
                      style={{
                        fontSize: isArticle ? '20px' : '22px',
                        color: 'rgba(233,215,194,1)',
                        fontStyle: 'italic',
                        fontWeight: 400,
                      }}
                    >
                      {line1}
                    </p>
                  )}
                  {line2 && (
                    <p
                      className="font-body leading-relaxed"
                      style={{
                        fontSize: isArticle ? '20px' : '22px',
                        color: 'rgba(233,215,194,1)',
                        fontStyle: 'normal',
                        fontWeight: 400,
                        marginTop: '4px',
                      }}
                    >
                      {line2}
                    </p>
                  )}
                </div>
              )
            })()}

            {/* Article date */}
            {isArticle && project.date && (
              <p
                className="mt-4 font-mono text-xs"
                style={{ color: 'rgba(164,161,116,0.7)' }}
              >
                {project.date}
              </p>
            )}

            {/* Project meta grid — case studies only */}
            {!isArticle && (
              <div
                className="mt-10 pt-8"
                style={{ borderTop: '1px solid rgba(233,215,194,0.15)' }}
              >
                {/* Row 1: Empresa | Período | Meu Papel */}
                <dl className="flex flex-wrap gap-x-12 gap-y-6">
                  <MetaItem icon={<BuildingIcon />} label="Empresa" value={project.company} />
                  <MetaItem icon={<CalendarIcon />} label="Período" value={project.period} />
                  <MetaItem icon={<UserIcon />} label="Meu Papel" value={project.role} />
                </dl>
                {/* Row 2: Ferramentas — full width */}
                <dl className="mt-6">
                  <MetaItem icon={<WrenchIcon />} label="Ferramentas" value={project.tools} />
                </dl>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* ── Imagem hero — seção separada com fundo escuro (igual ao Figma: 1:1249) ── */}
      {project.heroImage && (
        <section
          className="px-6 pb-12"
          style={{ backgroundColor: '#2c2c2a' }}
          aria-hidden="true"
        >
          <div className="mx-auto img-shield" style={{ maxWidth: 'var(--max-w-content)' }}>
            <img
              src={project.heroImage}
              alt=""
              className="w-full h-auto block rounded-2xl"
              draggable="false"
              style={{
                maxHeight: '520px',
                objectFit: 'cover',
                objectPosition: 'center',
              }}
              onError={(e) => { e.currentTarget.closest('section').style.display = 'none' }}
            />
          </div>
        </section>
      )}
    </>
  )
}
