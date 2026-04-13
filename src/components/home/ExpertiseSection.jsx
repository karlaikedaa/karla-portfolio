import { expertiseItems } from '../../data/expertise'
import SectionLabel from '../ui/SectionLabel'
import ExpertiseCard from './ExpertiseCard'

export default function ExpertiseSection() {
  return (
    <section id="expertise" className="bg-light py-24 px-6" aria-label="Expertise">
      <div className="mx-auto space-y-12" style={{ maxWidth: 'var(--max-w-content)' }}>
        <div className="space-y-4">
          <SectionLabel>— Expertise</SectionLabel>
          <h2 className="font-heading text-3xl lg:text-[44.8px] font-medium leading-tight text-text-dark">
            O que diferencia minha{' '}
            <em className="font-heading italic text-rose-accent-original">atuação</em>
            <span className="block">como designer sênior</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expertiseItems.map((item) => (
            <ExpertiseCard key={item.icon} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
