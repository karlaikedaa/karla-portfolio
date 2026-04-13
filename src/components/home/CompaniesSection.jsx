import { companies } from '../../data/companies'
import LogoCarousel from './LogoCarousel'

export default function CompaniesSection() {
  return (
    <section className="bg-rose-bg py-16 lg:py-20 px-6" aria-label="Empresas parceiras">
      <div className="mx-auto" style={{ maxWidth: 'var(--max-w-content)' }}>
        <p className="font-body text-base lg:text-[22px] text-white uppercase tracking-[0.15em] text-center mb-12">
          Empresas que confiaram na minha expertise
        </p>
      </div>

      {/*
        Carrossel de logos — velocidade controlada pela prop speed (segundos).
        Para alterar: mude o valor abaixo. Ex: speed={20} = mais rápido.
      */}
      <LogoCarousel logos={companies} speed={30} />
    </section>
  )
}
