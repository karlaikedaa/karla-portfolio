import { useReducedMotion } from '../../hooks/useReducedMotion'

/**
 * Carrossel infinito de logos.
 *
 * PARA ALTERAR A VELOCIDADE:
 * - Passe a prop `speed` em segundos (ex: speed={20} para 20s).
 * - Valor padrão: 30 segundos para uma volta completa.
 *
 * PARA ADICIONAR NOVOS LOGOS:
 * - Adicione o arquivo (PNG ou SVG) em public/logos/
 * - Adicione a entrada em src/data/companies.js
 * - O carrossel se ajusta automaticamente
 */
export default function LogoCarousel({ logos, speed = 20 }) {
  const reducedMotion = useReducedMotion()

  if (reducedMotion) {
    return (
      <div className="flex flex-wrap justify-center gap-16 py-8">
        {logos.map((company) => (
          <div key={company.name} className="flex items-center justify-center h-16">
            <img
              src={company.logo}
              alt={company.name}
              className="h-14 w-auto object-contain brightness-0 invert opacity-90"
              loading="lazy"
              draggable="false"
            />
          </div>
        ))}
      </div>
    )
  }

  // Renderizar o set de logos — reutilizado 3x para preencher sem lacunas
  const renderLogoSet = (prefix, ariaHidden = true) =>
    logos.map((company, i) => (
      <div
        key={`${prefix}-${i}`}
        className="flex-shrink-0 flex items-center justify-center px-4"
        aria-hidden={ariaHidden}
      >
        <img
          src={company.logo}
          alt=""
          className="h-24 w-auto max-w-[240px] object-contain brightness-0 invert opacity-90"
          draggable="false"
        />
      </div>
    ))

  return (
    <div className="relative overflow-hidden" role="marquee" aria-label="Logos de empresas parceiras">
      {/* Lista acessível para screen readers */}
      <ul className="sr-only">
        {logos.map((company) => (
          <li key={company.name}>{company.name}</li>
        ))}
      </ul>

      {/* Container de scroll infinito */}
      <div
        className="flex items-center hover:[animation-play-state:paused]"
        style={{
          animation: `carousel-scroll ${speed}s linear infinite`,
          width: 'max-content',
          gap: '2.5rem',
        }}
      >
        {renderLogoSet('a', false)}
        {renderLogoSet('b')}
        {renderLogoSet('c')}
      </div>
    </div>
  )
}
