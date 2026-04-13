import { Link } from 'react-router-dom'
import SectionLabel from '../ui/SectionLabel'

export default function AboutSection() {
  return (
    <section className="bg-light py-24 px-6" aria-label="Quem sou">
      <div
        className="mx-auto flex flex-col lg:flex-row items-center gap-16"
        style={{ maxWidth: 'var(--max-w-content)' }}
      >
        {/* Photo */}
        <div className="w-full lg:w-1/2 max-w-md">
          <div
            className="aspect-[4/5] rounded-2xl overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #e9d7c2 0%, #d4a29c 50%, #b5b285 100%)' }}
          >
            <img
              src="/images/Karla-home.png"
              alt="Karla Ikeda, Product & Service Designer"
              className="w-full h-full object-cover rounded-2xl"
              draggable="false"
              onError={(e) => {
                e.target.parentElement.innerHTML = '<div class="w-full h-full flex items-center justify-center"><span class="font-heading text-6xl text-white/40">K</span></div>'
              }}
            />
          </div>
        </div>

        {/* Text */}
        <div className="w-full lg:w-1/2 space-y-6">
          <SectionLabel>Quem sou</SectionLabel>

          <h2 className="font-heading text-3xl lg:text-[44.8px] font-medium leading-tight text-text-dark">
            Mais de 15 anos combinando comunicação, estratégia e design de produto
          </h2>

          <p className="font-body text-base leading-relaxed text-text-muted">
            Em 2020 transitei da publicidade e do marketing para o design de produto ao perceber o que para os outros já era evidente: na verdade eu já atuava como UX Designer mapeando jornadas, entendendo usuários, conectando negócios e experiências.
          </p>

          <p className="font-body text-base leading-relaxed text-text-muted">
            Hoje, além do de design estratégico, atuo com discovery, pesquisa exploratória, entrevistas com o usuário e arquitetura da informação. Tudo isso sem nunca esquecer das melhores práticas em acessibilidade, UX Writing e muita IA aplicada.
          </p>

          <Link
            to="/sobre-mim"
            className="inline-flex items-center gap-2 font-body text-base text-text-brown no-underline hover:text-rose-bg hover:gap-3 transition-all duration-300"
          >
            Minha trajetória completa
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  )
}
