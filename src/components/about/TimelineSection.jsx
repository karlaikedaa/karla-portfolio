import { experience, education, tools } from '../../data/timeline'

export default function TimelineSection() {
  return (
    <section className="bg-white py-14 md:py-20 lg:py-24 px-6" aria-label="Trajetória profissional">
      <div className="mx-auto" style={{ maxWidth: 'var(--max-w-content)' }}>

        {/* Header */}
        <div className="space-y-3 mb-10 md:mb-16">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-rose-text">
            Trajetória
          </span>
          <h2 className="font-heading text-2xl md:text-3xl lg:text-[41.6px] font-medium leading-tight text-text-dark">
            Linha do tempo profissional
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">

          {/* Experience column */}
          <div className="w-full lg:w-7/12">
            <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-rose-text mb-8">
              Experiência Profissional
            </h3>
            <div className="space-y-10 border-l border-warm/40 pl-7 md:pl-8 ml-px">
              {experience.map((item) => (
                <TimelineItem key={item.company + item.period} item={item} type="experience" />
              ))}
            </div>
          </div>

          {/* Education + Tools column */}
          <div className="w-full lg:w-5/12 space-y-12">

            {/* Education */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-rose-text mb-8">
                Formação
              </h3>
              <div className="space-y-8 border-l border-warm/40 pl-7 md:pl-8 ml-px">
                {education.map((item) => (
                  <TimelineItem key={item.title + item.period} item={item} type="education" />
                ))}
              </div>
            </div>

            {/* Tools */}
            <div>
              <h3 className="font-mono text-xs uppercase tracking-[0.15em] text-rose-text mb-6">
                Ferramentas &amp; Métodos
              </h3>
              <div className="flex flex-wrap gap-2" role="list" aria-label="Ferramentas e métodos">
                {tools.map((tool) => (
                  <TimelineItem key={tool} item={tool} type="tool" />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

function TimelineItem({ item, type }) {
  if (type === 'education') {
    return (
      <div className="space-y-1 relative pl-0">
        <span className="font-mono text-xs text-olive-text">{item.period}</span>
        <h4 className="font-body text-[15px] font-medium text-text-dark">{item.title}</h4>
        <p className="font-body text-xs text-rose-text">{item.institution}</p>
      </div>
    )
  }

  if (type === 'tool') {
    return (
      <span
        role="listitem"
        className="inline-block px-3 py-1.5 font-mono text-xs text-text-dark bg-warm-alt/50 rounded-full border border-warm/30"
      >
        {item}
      </span>
    )
  }

  const hasDetails = item.highlights && item.highlights.length > 0

  return (
    <div className="relative">
      {/* Timeline dot */}
      <span
        className="absolute top-[6px] w-[10px] h-[10px] rounded-full bg-rose-accent border-2 border-off-white"
        style={{ left: 'calc(-1.75rem - 10px)' }}
        aria-hidden="true"
      />
      <div className="space-y-1.5">
        <span className="font-mono text-xs uppercase tracking-wide text-olive-text block">{item.period}</span>
        <h4 className={`font-heading font-medium text-text-dark ${hasDetails ? 'text-[18px]' : 'text-[15px]'}`}>
          {item.company}
        </h4>
        <p className="font-body text-sm italic text-text-muted">{item.role}</p>
        {item.clients && (
          <p className="font-mono text-xs text-rose-text/80">{item.clients}</p>
        )}
        {hasDetails && (
          <ul className="space-y-1 mt-2 list-none" role="list">
            {item.highlights.map((h, i) => (
              <li
                key={i}
                className="font-body text-sm text-text-muted pl-4 relative before:content-['*'] before:absolute before:left-0 before:text-rose-text/50"
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
