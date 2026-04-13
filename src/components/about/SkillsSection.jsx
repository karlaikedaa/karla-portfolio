import { skillCategories } from '../../data/skills'
import SkillCard from './SkillCard'

export default function SkillsSection() {
  const topCards = skillCategories.filter(c => c.card !== false)
  const bottomCards = skillCategories.filter(c => c.card === false)

  return (
    <section className="bg-off-white py-14 md:py-20 lg:py-24 px-6" aria-label="Competências e habilidades">
      <div className="mx-auto space-y-12" style={{ maxWidth: 'var(--max-w-content)' }}>

        {/* Header */}
        <div className="space-y-3">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-brown">
            Habilidades
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[41.6px] font-medium leading-tight text-text-dark">
            Competências
          </h2>
        </div>

        {/* Top row — 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {topCards.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>

        {/* Separator */}
        <hr className="border-warm/30" aria-hidden="true" />

        {/* Bottom row — 2 flat groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {bottomCards.map((category) => (
            <SkillCard key={category.title} category={category} />
          ))}
        </div>

      </div>
    </section>
  )
}
