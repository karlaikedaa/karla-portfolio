import PageLayout from '../components/layout/PageLayout'
import UXProjectCard from '../components/ux/UXProjectCard'
import CTASection from '../components/home/CTASection'
import { projectsList } from '../data/projectsContent'

export default function UXDesign() {
  return (
    <PageLayout>
      {/* Hero */}
      <section
        className="py-16 md:py-28 px-6"
        style={{ backgroundColor: '#1c1c1a' }}
        aria-label="Cases de UX Design"
      >
        <div className="mx-auto" style={{ maxWidth: 'var(--max-w-content)' }}>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-rose-accent">
            Cases de UX
          </span>

          <h1 className="mt-6 font-heading font-medium leading-tight text-4xl md:text-5xl lg:text-[60px]">
            <span className="text-warm-alt">Projetos onde design</span>
            <br />
            <span className="text-rose-accent">transformou produto.</span>
          </h1>

          <p
            className="mt-6 font-body text-base md:text-lg leading-relaxed text-olive"
            style={{ maxWidth: '640px' }}
          >
            Pesquisa, estratégia, entendimento de negócio e obsessão pelo usuário. Conheça alguns dos projetos que fizeram parte da minha trajetória.
          </p>
        </div>
      </section>

      {/* Projects grid */}
      <section
        className="py-20 px-6 bg-off-white"
        aria-label="Lista de projetos"
      >
        <div className="mx-auto" style={{ maxWidth: 'var(--max-w-content)' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projectsList.map((project) => (
              <UXProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </PageLayout>
  )
}
