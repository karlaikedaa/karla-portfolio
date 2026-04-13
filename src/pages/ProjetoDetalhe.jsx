import { useParams, Navigate } from 'react-router-dom'
import { projectsContent } from '../data/projectsContent'
import PageLayout from '../components/layout/PageLayout'
import ProjectHero from '../components/project/ProjectHero'
import ProjectSection from '../components/project/ProjectSection'
import RelatedProjects from '../components/project/RelatedProjects'
import CTASection from '../components/home/CTASection'

export default function ProjetoDetalhe() {
  const { id } = useParams()
  const project = projectsContent[id]

  if (!project) {
    return <Navigate to="/ux-design" replace />
  }

  const contentSections = project.sections.filter((s) => !s.learnings)
  const learningsSection = project.sections.find((s) => s.learnings)

  return (
    <PageLayout>
      {/* Dark hero */}
      <ProjectHero project={project} />

      {/* Content sections — full-image breaks out of padding/max-width */}
      <div className="bg-off-white">
        {contentSections.map((section, i) => {
          if (section.type === 'full-image') {
            return (
              <div key={i} className="border-b border-warm/10">
                <ProjectSection section={section} />
              </div>
            )
          }
          return (
            <div key={i} className="px-6 border-b border-warm/20">
              <div className="mx-auto" style={{ maxWidth: 'var(--max-w-content)' }}>
                <ProjectSection section={section} />
              </div>
            </div>
          )
        })}
      </div>

      {/* Learnings section */}
      {learningsSection && (
        <section className="bg-white py-20 px-6" aria-label="Resultados e aprendizados">
          <div className="mx-auto" style={{ maxWidth: 'var(--max-w-content)' }}>
            {learningsSection.label && (
              <span className="font-mono text-xs text-rose-text uppercase tracking-wider">
                {learningsSection.label}
              </span>
            )}
            <h2 className="mt-3 font-heading text-[32px] font-medium leading-tight text-text-dark">
              {learningsSection.title}
            </h2>

            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6">
              {learningsSection.learnings.map((learning, i) => (
                <div
                  key={i}
                  className="p-6 bg-off-white rounded-2xl border border-warm/20 space-y-4"
                >
                  {/* Decorative dot */}
                  <div
                    className="flex items-center justify-center rounded-full"
                    style={{ width: '24px', height: '24px', backgroundColor: 'rgba(190,138,132,0.2)' }}
                    aria-hidden="true"
                  >
                    <div className="rounded-full" style={{ width: '8px', height: '8px', backgroundColor: '#be8a84' }} />
                  </div>
                  <p className="font-body text-sm text-text-muted leading-relaxed">
                    {learning.body}
                  </p>
                </div>
              ))}
            </div>

            {learningsSection.reflection && (
              <blockquote
                className="mt-10 pl-6 py-5 font-body text-base text-text-muted italic leading-relaxed"
                style={{
                  borderLeft: '4px solid',
                  borderColor: 'var(--color-rose-accent, #d4a29c)',
                  backgroundColor: 'rgba(231,214,192,0.2)',
                  borderRadius: '0 12px 12px 0',
                }}
              >
                <span className="block font-mono text-xs text-rose-text mb-2 not-italic">
                  Reflexão
                </span>
                {learningsSection.reflection}
              </blockquote>
            )}
          </div>
        </section>
      )}

      {project.related && <RelatedProjects relatedIds={project.related} />}
      <CTASection />
    </PageLayout>
  )
}
