import Button from '../ui/Button'
import OrbitalAnimation from './OrbitalAnimation'

export default function HeroSection() {
  return (
    <section
      className="relative bg-dark overflow-hidden"
      aria-label="Introdução"
    >
      {/* Ambient glow top-right */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 384,
          height: 384,
          top: 100,
          right: -50,
          background: 'rgba(190,138,132,0.1)',
          filter: 'blur(128px)',
        }}
        aria-hidden="true"
      />
      {/* Ambient glow bottom-left */}
      <div
        className="absolute rounded-full pointer-events-none"
        style={{
          width: 249,
          height: 288,
          bottom: 0,
          left: 0,
          background: 'rgba(164,161,116,0.1)',
          filter: 'blur(128px)',
        }}
        aria-hidden="true"
      />

      <div
        className="relative mx-auto flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12 px-6 lg:px-0 py-20 lg:py-28"
        style={{ maxWidth: 'var(--max-w-content)' }}
      >
        {/* Text content */}
        <div className="max-w-[520px] space-y-8">
          <span className="block font-mono text-xs uppercase tracking-[0.2em] text-rose-accent">
            Product & Service Designer
          </span>

          <h1 className="font-heading text-5xl lg:text-[67px] font-medium leading-[1.1] text-warm-alt">
            A melhor forma de prever o futuro é{' '}
            <em className="font-heading italic text-rose-accent">criá-lo</em>
          </h1>

          <p className="font-body text-lg leading-relaxed text-olive max-w-md">
            Oi, eu sou Karla, uma designer que pensa no usuário
            e fala a língua do negócio.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              variant="whatsapp"
              href="#"
              icon={
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
              }
            >
              Conversar no WhatsApp
            </Button>
            <Button
              variant="primary"
              to="/#projetos"
              icon={
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12" />
                  <polyline points="12 5 19 12 12 19" />
                </svg>
              }
            >
              Ver meus projetos
            </Button>
          </div>
        </div>

        {/* Orbital animation */}
        <div className="w-80 h-80 lg:w-[420px] lg:h-[420px] flex items-center justify-center">
          <OrbitalAnimation />
        </div>
      </div>
    </section>
  )
}
