import { projects } from '../../data/projects'
import SectionLabel from '../ui/SectionLabel'
import ProjectCard from './ProjectCard'

export default function ProjectsSection() {
  const row1 = projects.filter((p) => p.row === 1)
  const row2 = projects.filter((p) => p.row === 2)
  const row3 = projects.filter((p) => p.row === 3)

  return (
    <section id="projetos" className="bg-white py-24 px-6" aria-label="Projetos">
      <div className="mx-auto space-y-12" style={{ maxWidth: 'var(--max-w-content)' }}>
        {/* Header */}
        <div className="space-y-4">
          <SectionLabel>— Projetos</SectionLabel>
          <h2 className="font-heading text-3xl lg:text-[44.8px] font-medium leading-tight text-text-dark">
            Problemas reais.{' '}
            <em className="text-rose-accent-original italic">Soluções estratégicas.</em>
          </h2>
        </div>

        {/* Bento Grid */}
        <div className="flex flex-col gap-6">
          {/* Row 1 — 2 cards: 60% / 40%, height 440px */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6" style={{ height: 'auto' }}>
            {row1[0] && (
              <ProjectCard
                project={row1[0]}
                className="md:col-span-7 h-[300px] md:h-[440px]"
              />
            )}
            {row1[1] && (
              <ProjectCard
                project={row1[1]}
                className="md:col-span-5 h-[300px] md:h-[440px]"
              />
            )}
          </div>

          {/* Row 2 — 3 cards: equal, height 440px */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {row2.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                className="h-[300px] md:h-[440px]"
              />
            ))}
          </div>

          {/* Row 3 — 2 cards: 40% / 60%, height 320px */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            {row3[0] && (
              <ProjectCard
                project={row3[0]}
                className="md:col-span-5 h-[300px] md:h-[320px]"
              />
            )}
            {row3[1] && (
              <ProjectCard
                project={row3[1]}
                className="md:col-span-7 h-[300px] md:h-[320px]"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
