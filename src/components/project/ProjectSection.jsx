import ProjectCallout from './ProjectCallout'
import ProjectImage from './ProjectImage'
import PhoneMockup from './PhoneMockup'

/* ─── Full-width image block with dark label bar ─────────────────── */
function FullImageSection({ section }) {
  return (
    <section aria-label={section.label || 'Imagem do projeto'} className="w-full">
      <div className="px-6 md:px-12 py-8 bg-off-white">
        <div className="mx-auto" style={{ maxWidth: '1200px' }}>
          <img
            src={section.src}
            alt={section.label || ''}
            className="w-full h-auto block rounded-xl"
            draggable="false"
            style={{ boxShadow: '0 2px 16px rgba(28,28,26,0.10)' }}
            onError={(e) => { e.currentTarget.closest('section').style.display = 'none' }}
          />
        </div>
      </div>
    </section>
  )
}

/* ─── YouTube embed ──────────────────────────────────────────────── */
function YouTubeEmbed({ videoId }) {
  return (
    <div
      className="mt-8 rounded-2xl overflow-hidden w-full"
      style={{ aspectRatio: '16 / 9' }}
    >
      <iframe
        src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
        title="Vídeo do projeto"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="w-full h-full border-0"
        loading="lazy"
      />
    </div>
  )
}

/* ─── Text content block (shared between layouts) ───────────────── */
function TextContent({ section }) {
  return (
    <div className="space-y-5">
      {section.label && (
        <span className="font-mono text-xs text-rose-text uppercase tracking-wider">
          {section.label}
        </span>
      )}

      {section.quote && (
        <p className="font-heading text-2xl text-text-dark italic leading-relaxed">
          {section.quote}
        </p>
      )}

      {section.title && (
        <h2 className="font-heading text-[32px] font-medium leading-tight text-text-dark" style={{ whiteSpace: 'pre-line' }}>
          {section.title}
        </h2>
      )}

      {section.body && section.body.map((para, i) => (
        <p key={i} className="font-body text-base leading-relaxed text-text-muted" style={{ whiteSpace: 'pre-line' }}>
          {para}
        </p>
      ))}

      {/* Imagem inline entre body e callout (bodyImage) */}
      {section.bodyImage && (
        <div className="my-2">
          <ProjectImage src={section.bodyImage} alt="" />
        </div>
      )}

      {section.callout && (
        <ProjectCallout>{section.callout}</ProjectCallout>
      )}

      {section.listIntro && (
        <p className="font-body text-base leading-relaxed text-text-muted" style={{ whiteSpace: 'pre-line' }}>
          {section.listIntro}
        </p>
      )}

      {section.bullets && (
        <ul className="space-y-4" role="list">
          {section.bullets.map((bullet, i) => (
            <li key={i} className="font-body text-base text-text-muted flex gap-[18px] items-start">
              <span
                className="flex-shrink-0 rounded-full"
                style={{ width: '6px', height: '6px', backgroundColor: '#d4a29c', marginTop: '9px' }}
                aria-hidden="true"
              />
              <span>{bullet}</span>
            </li>
          ))}
        </ul>
      )}

      {section.listIntro2 && (
        <p className="font-body text-base leading-relaxed text-text-muted" style={{ whiteSpace: 'pre-line' }}>
          {section.listIntro2}
        </p>
      )}

      {section.numberedList && (
        <ol className="space-y-4 list-none" role="list">
          {section.numberedList.map((item, i) => (
            <li key={i} className="font-body text-base text-text-muted flex gap-4 items-start">
              <span
                className="flex-shrink-0 flex items-center justify-center rounded-full"
                style={{ width: '28px', height: '28px', backgroundColor: 'rgba(190,138,132,0.15)', marginTop: '1px' }}
                aria-hidden="true"
              >
                <span style={{ color: '#be8a84', fontSize: '12px', lineHeight: 1 }}>
                  {i + 1}
                </span>
              </span>
              <span>
                {typeof item === 'string' ? item : (
                  <>
                    <strong className="font-medium text-text-dark block">{item.title}</strong>
                    {item.body}
                  </>
                )}
              </span>
            </li>
          ))}
        </ol>
      )}

      {section.body2 && section.body2.map((para, i) => (
        <p key={i} className="font-body text-base leading-relaxed text-text-muted" style={{ whiteSpace: 'pre-line' }}>
          {para}
        </p>
      ))}

      {section.pillars && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
          {section.pillars.map((pillar, i) => (
            <div key={i} className="bg-off-white rounded-2xl p-6 border border-warm/20 space-y-4">
              {/* Decorative dot — outer ring + inner filled circle */}
              <div
                className="flex items-center justify-center rounded-full flex-shrink-0"
                style={{ width: '24px', height: '24px', backgroundColor: 'rgba(190,138,132,0.2)' }}
                aria-hidden="true"
              >
                <div className="rounded-full" style={{ width: '8px', height: '8px', backgroundColor: '#be8a84' }} />
              </div>
              <h3 className="font-body text-sm font-bold text-text-dark" style={{ whiteSpace: 'pre-line' }}>{pillar.title}</h3>
              {pillar.body && (
                <p className="font-body text-sm text-text-muted leading-relaxed">{pillar.body}</p>
              )}
              {pillar.bullets && (
                <ul className="space-y-3">
                  {pillar.bullets.map((bullet, j) => (
                    <li key={j} className="font-body text-sm text-text-muted flex gap-3 items-start">
                      <span
                        className="flex-shrink-0 rounded-full"
                        style={{ width: '6px', height: '6px', backgroundColor: '#d4a29c', marginTop: '7px' }}
                        aria-hidden="true"
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      )}

      {section.subtitles && (
        <div className="space-y-8 mt-4">
          {section.subtitles.map((sub, i) => (
            <div key={i} className="space-y-2">
              <h3 className="font-heading text-xl font-medium text-text-dark">{sub.title}</h3>
              <p className="font-body text-base text-text-muted leading-relaxed" style={{ whiteSpace: 'pre-line' }}>{sub.body}</p>
            </div>
          ))}
        </div>
      )}

      {section.body3 && section.body3.map((para, i) => (
        <p key={i} className="font-body text-base leading-relaxed text-text-muted" style={{ whiteSpace: 'pre-line' }}>
          {para}
        </p>
      ))}
    </div>
  )
}

/* ─── Main export ────────────────────────────────────────────────── */
export default function ProjectSection({ section }) {
  /* Special type: full-width image with label bar */
  if (section.type === 'full-image') {
    return <FullImageSection section={section} />
  }

  /* Layout: text on left, phone mockup on right */
  if (section.phoneVideo) {
    return (
      <section className="py-12" aria-label={section.title || undefined}>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 items-start">
          {/* Text side */}
          <div className="flex-1 min-w-0">
            <TextContent section={section} />
          </div>

          {/* Phone mockup side */}
          <div className="lg:sticky lg:top-24 flex-shrink-0">
            <PhoneMockup src={section.phoneVideo} />
          </div>
        </div>

        {/* YouTube embed below */}
        {section.youtubeEmbed && (
          <YouTubeEmbed videoId={section.youtubeEmbed} />
        )}
      </section>
    )
  }

  /* Default layout */
  return (
    <section className="py-12" aria-label={section.title || undefined}>
      <div className="space-y-6">
        <TextContent section={section} />

        {/* Single image */}
        {section.image && <ProjectImage src={section.image} alt="" />}

        {/* Multiple images */}
        {section.images && (
          <div className={`grid gap-4 mt-4 ${section.images.length >= 3 ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2'}`}>
            {section.images.map((src, i) => (
              <ProjectImage key={i} src={src} alt="" />
            ))}
          </div>
        )}

        {/* Inline video (non-phone) */}
        {section.video && (
          <div className="my-6 rounded-2xl overflow-hidden bg-dark/5">
            <video
              src={section.video}
              controls
              playsInline
              className="w-full h-auto rounded-2xl"
              aria-label="Vídeo do projeto"
              style={{ maxHeight: '540px' }}
            />
          </div>
        )}

        {/* Multiple videos */}
        {section.videos && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-6">
            {section.videos.map((src, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-dark/5">
                <video
                  src={src}
                  controls
                  playsInline
                  className="w-full h-auto"
                  aria-label={`Vídeo do projeto ${i + 1}`}
                />
              </div>
            ))}
          </div>
        )}

        {/* YouTube embed no layout padrão */}
        {section.youtubeEmbed && !section.phoneVideo && (
          <YouTubeEmbed videoId={section.youtubeEmbed} />
        )}
      </div>
    </section>
  )
}
