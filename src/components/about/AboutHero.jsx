import Button from '../ui/Button'

export default function AboutHero() {
  return (
    <section className="bg-dark py-14 md:py-20 lg:py-28 px-6" aria-label="Sobre Karla Ikeda">
      <div
        className="mx-auto space-y-6"
        style={{ maxWidth: 'var(--max-w-content)' }}
      >
        {/* Label */}
        <div className="flex items-center gap-3" aria-hidden="true">
          <span className="block w-8 h-px bg-rose-accent" />
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-rose-accent">
            Sobre mim
          </span>
        </div>

        {/* Name */}
        <h1 className="font-heading text-4xl md:text-5xl lg:text-[64px] font-medium leading-[1.05] text-warm-alt">
          Karla Ikeda
        </h1>

        {/* Subtitle lines */}
        <div className="space-y-0">
          <p className="font-heading text-xl md:text-2xl lg:text-[36px] leading-tight text-warm-alt/50 italic">
            Product &amp; Service Designer
          </p>
          <p className="font-heading text-xl md:text-2xl lg:text-[36px] leading-tight text-rose-accent italic">
            orientada a estratégia, pesquisa e resultado.
          </p>
        </div>

        {/* Tags */}
        <p className="font-body text-base text-warm-alt/60 leading-relaxed">
          IA Aplicada · Discovery · Research · Arquitetura de Informação · Strategy · Acessibilidade · UX Writing
        </p>

        {/* Since */}
        <p className="font-body text-sm text-rose-accent">
          Desde de 2019 criando produtos digitais
        </p>

        {/* Buttons */}
        <div className="flex flex-wrap gap-4 pt-2">
          <Button
            variant="outline"
            href="https://docs.google.com/document/d/11Mti9GG8ctCRyEE-1H9V13oBIva1yYrI/edit?usp=sharing&ouid=106812508871585110962&rtpof=true&sd=true"
            target="_blank"
            rel="noopener noreferrer"
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            }
          >
            Baixar meu CV
          </Button>
          <Button
            variant="primary"
            to="/#projetos"
            icon={
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            }
          >
            Ver meus projetos
          </Button>
        </div>
      </div>
    </section>
  )
}
