import { Link } from 'react-router-dom'

export default function ArticleCard({ article }) {
  const linkTo = article.isProjectLink
    ? `/projeto/${article.id}`
    : `/artigo/${article.id}`

  return (
    <Link
      to={linkTo}
      className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-accent rounded-xl"
    >
      <article
        className="px-8 py-6 border border-warm/30 rounded-xl bg-off-white transition-all duration-300 hover:shadow-md hover:border-rose-accent/40 hover:-translate-y-0.5 cursor-pointer"
        aria-label={article.title}
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-rose-text">
          {article.tag}
        </span>

        <h3 className="mt-3 font-heading text-lg font-medium text-text-dark leading-snug group-hover:text-rose-bg transition-colors">
          {article.title}
        </h3>

        <p className="mt-3 font-body text-sm text-text-muted leading-relaxed line-clamp-3">
          {article.description}
        </p>

        <div className="mt-4 flex items-center justify-between">
          <span className="font-body text-xs text-text-muted">
            {article.date}
          </span>
          <span className="inline-flex items-center gap-1 font-body text-sm text-rose-text font-medium group-hover:gap-2 transition-all">
            Ler artigo
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </span>
        </div>
      </article>
    </Link>
  )
}
