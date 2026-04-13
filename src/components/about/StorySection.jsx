import StatCard from '../ui/StatCard'

export default function StorySection() {
  return (
    <section className="bg-off-white py-14 md:py-20 lg:py-24 px-6 overflow-hidden" aria-label="Minha história">
      <div
        className="mx-auto relative"
        style={{ maxWidth: 'var(--max-w-content)' }}
      >
        {/* Text column — ~58% width like Figma (665/1152) */}
        <div className="w-full lg:w-[58%] space-y-0">
          {/* Label */}
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-text-brown">
            Minha história
          </span>

          <div className="mt-8 space-y-6">
            <p className="font-body text-base leading-relaxed text-text-muted">
              Sou publicitária, mas o desenvolvimento de produtos sempre esteve no meu dia a dia.
              Em 2020, tornei oficial o que já era prática: migrei de carreira, me tornei Product
              Designer e nunca olhei para trás.
            </p>

            <p className="font-body text-base leading-relaxed text-text-muted">
              Sou mãe da Helena, autora do livro{' '}
              <em className="font-semibold not-italic text-text-dark">
                &ldquo;Profissão: Famoso — Como Gerenciar Imagens de Sucesso&rdquo;
              </em>{' '}
              (E-papers, 2014) e pós-graduada em Marketing de Serviços. Essa bagagem comunicacional
              moldou minha abordagem: penso em sistemas, falo a língua do negócio e projeto para
              pessoas reais.
            </p>

            <p className="font-body text-base leading-relaxed text-text-muted">
              Foco meus estudos e aplico IA em pesquisa, arquitetura da informação, UX Writing e
              acessibilidade, porque acredito que a melhor experiência é aquela que funciona para
              todos os níveis e perfis de usuários, sem exceção.
            </p>
          </div>

          {/* Stats */}
          <div className="mt-12 flex gap-4">
            <StatCard value="8+" label="anos em produto" />
            <StatCard value="15+" label="anos em comunicação" />
            <StatCard value="20+" label="projetos entregues" />
          </div>
        </div>

        {/* Illustration — positioned absolute, bottom-right, partially cropped like Figma */}
        <div
          className="hidden lg:block absolute bottom-0 right-0 img-shield pointer-events-none"
          style={{ width: '50%', transform: 'translateX(8%)' }}
          aria-hidden="true"
        >
          <img
            src="/illustration-story.svg"
            alt=""
            className="w-full h-auto block"
            draggable="false"
          />
        </div>
      </div>
    </section>
  )
}
