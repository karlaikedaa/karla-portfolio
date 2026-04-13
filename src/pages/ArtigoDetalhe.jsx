import { useParams, Navigate, Link } from 'react-router-dom'
import { articlesContent } from '../data/articlesContent'
import PageLayout from '../components/layout/PageLayout'
import CTASection from '../components/home/CTASection'

export default function ArtigoDetalhe() {
  const { id } = useParams()
  const article = articlesContent[id]

  if (!article) {
    return <Navigate to="/conteudo-design" replace />
  }

  return (
    <PageLayout>
      {/* Hero */}
      <section
        className="pt-20 md:pt-28 pb-10 md:pb-12 px-6"
        style={{ backgroundColor: '#1c1c1a' }}
        aria-label={article.title}
      >
        <div className="mx-auto" style={{ maxWidth: 'var(--max-w-content)' }}>
          <Link
            to="/conteudo-design"
            className="inline-flex items-center gap-2 font-body text-sm text-rose-accent hover:text-warm transition-colors no-underline mb-6"
          >
            ← Voltar para Artigos
          </Link>

          <span className="block font-mono text-xs uppercase tracking-[0.2em] text-rose-accent mt-4">
            {article.tag}
          </span>

          <h1
            className="mt-4 font-heading font-medium leading-tight text-warm-alt text-3xl md:text-4xl lg:text-[44px]"
            style={{ maxWidth: '672px' }}
          >
            {article.title}
          </h1>

          <p className="mt-3 font-body text-sm text-olive">
            {article.date}
          </p>
        </div>
      </section>

      {/* Cover image */}
      {article.coverImage && (
        <div className="bg-light">
          <div className="mx-auto" style={{ maxWidth: '672px' }}>
            <img
              src={article.coverImage}
              alt=""
              className="w-full object-cover"
              draggable="false"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>
      )}

      {/* Article content */}
      <article className="py-16 px-6 bg-light">
        <div className="mx-auto" style={{ maxWidth: '672px' }}>
          {/* Lead */}
          <blockquote
            className="pl-6 py-4 font-body text-base text-text-dark leading-relaxed mb-10"
            style={{
              borderLeft: '4px solid var(--color-rose-accent, #d4a29c)',
            }}
          >
            {article.lead}
          </blockquote>

          {/* Content blocks */}
          <div className="space-y-6">
            {article.content.map((block, i) => {
              switch (block.type) {
                case 'paragraph':
                  return (
                    <p key={i} className="font-body text-base text-text-muted leading-relaxed">
                      {block.text}
                    </p>
                  )
                case 'heading':
                  return (
                    <h2
                      key={i}
                      className="font-heading text-2xl font-medium text-text-dark leading-snug mt-10 mb-4 whitespace-pre-line"
                    >
                      {block.text}
                    </h2>
                  )
                case 'subheading':
                  return (
                    <h3
                      key={i}
                      className="font-heading text-xl font-medium text-text-dark leading-snug mt-8 mb-3"
                    >
                      {block.text}
                    </h3>
                  )
                case 'highlight':
                  return (
                    <blockquote
                      key={i}
                      className="px-6 py-5 font-body text-base italic leading-relaxed rounded-r-xl"
                      style={{
                        borderLeft: '4px solid var(--color-rose-accent, #d4a29c)',
                        backgroundColor: 'rgba(232,176,140,0.12)',
                        color: 'var(--color-text-dark)',
                      }}
                    >
                      {block.text}
                    </blockquote>
                  )
                case 'list':
                  return (
                    <ul key={i} className="space-y-3 pl-1">
                      {block.items.map((item, j) => (
                        <li key={j} className="flex gap-3 font-body text-base text-text-muted leading-relaxed">
                          <span className="text-rose-text mt-1 shrink-0">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  )
                default:
                  return null
              }
            })}
          </div>

          {/* Source */}
          {article.source && (
            <div className="mt-14 pt-6 border-t border-warm/30">
              <p className="font-body text-xs text-text-muted italic mb-4">
                Postagem original publicada em {article.source.note === 'publicação original' ? article.date.toLowerCase() : article.date.toLowerCase()} no {article.source.label.split('—')[0].trim()}.
              </p>
              <div className="flex items-center gap-2 text-rose-text">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                <span className="font-body text-sm">
                  {article.source.label} — {article.source.note}
                </span>
              </div>
            </div>
          )}

          {/* Back to articles */}
          <div className="mt-10">
            <Link
              to="/conteudo-design"
              className="inline-flex items-center gap-2 font-body text-sm text-text-muted hover:text-text-dark transition-colors no-underline"
            >
              ← Ver todos os artigos
            </Link>
          </div>
        </div>
      </article>

      {/* CTA */}
      <CTASection />
    </PageLayout>
  )
}
