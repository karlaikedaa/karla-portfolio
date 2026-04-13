import Footer from '../layout/Footer'

export default function CTASection() {
  return (
    <div className="bg-dark relative overflow-hidden">
      {/* Background watermark K — exact Figma proportions: x=-163 in 1562px section, 650×549 natural size */}
      <svg
        viewBox="-163 0 650 549"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="absolute pointer-events-none select-none"
        style={{
          /* Left aligns the SVG so x=0 is at section left edge, clipping the -163 part */
          left: 0,
          top: 0,
          bottom: 0,
          width: '41.62%',   /* 650/1562 = 41.62% of Figma section width */
          height: '100%',
        }}
        preserveAspectRatio="xMinYMid meet"
      >
        <path d="M98.5627 0H-161.415H-163V1.62908H-161.415C-89.1284 12.0552 -53.0908 98.2878 -44.1079 140.101C-37.767 181.805 5.03421 219.383 25.6422 232.958C52.274 251.204 80.0684 254.68 90.6366 254.137H154.046C204.773 252.833 250.216 219.926 266.597 203.635C321.023 141.73 431.144 16.2908 436.216 9.77448C441.289 3.25816 436.216 0.543027 433.046 0H303.057C267.548 0 236.478 22.8071 225.381 34.2107L70.0286 210.151C58.6149 221.881 44.1365 217.211 38.324 213.41C26.9104 206.893 32.5115 194.404 36.7388 188.973L111.245 99.3739V11.4036L98.5627 0Z" fill="#A4A174" fillOpacity="0.05"/>
        <path d="M-55.2041 368.172V187.344C-47.278 215.039 -1.30634 244.362 17.7164 259.024C40.673 276.717 76.8983 285.089 93.8074 285.089H179.41C237.746 286.392 337.933 401.84 380.734 459.401C430.193 521.957 472.148 539.769 486.944 540.855V547.371L307.813 544.113C255.818 542.81 161.444 419.76 120.756 358.398C104.27 324.513 67.3869 313.869 51.0062 312.783H31.9835C-11.1348 312.783 -44.1075 349.709 -55.2041 368.172Z" fill="#A4A174" fillOpacity="0.05"/>
        <path d="M90.6701 549H-27.6292C-35.0787 549 -42.1659 545.786 -47.0739 540.182C-51.2866 535.372 -53.5668 529.171 -53.4739 522.777L-52.1523 431.778C-52.073 426.32 -51.389 420.847 -49.7807 415.631C-31.7494 357.151 5.46085 343.216 22.4728 343.736H49.7418C55.8416 343.736 62.006 344.363 67.6099 346.772C104.791 362.756 114.416 408.015 114.416 430.077C113.888 457.229 113.148 514.789 114.416 527.822C114.923 533.034 113.926 537.204 112.276 540.436C108.475 547.883 99.0313 549 90.6701 549Z" fill="#A4A174" fillOpacity="0.05"/>
      </svg>

      <section className="relative py-24 px-6" aria-label="Contato">
        <div
          className="mx-auto text-center space-y-8"
          style={{ maxWidth: 'var(--max-w-content)' }}
        >
          <h2 className="font-heading text-4xl lg:text-[48px] font-medium text-warm-alt">
            Vamos conversar?
          </h2>

          <p className="font-body text-lg text-olive mx-auto max-w-2xl">
            Estou aberta a projetos como freelancer e oportunidades em produto.
          </p>

          <nav
            className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 lg:gap-10 pt-4"
            aria-label="Informações de contato"
          >
            {/* Email */}
            <a
              href="mailto:karlaikeda@gmail.com"
              className="flex items-center gap-3 no-underline group"
              aria-label="Enviar email para karlaikeda@gmail.com"
            >
              <div className="w-11 h-11 rounded-full bg-warm-alt/15 flex items-center justify-center group-hover:bg-warm-alt/25 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e9d7c2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <span className="font-body text-sm text-warm-alt group-hover:text-rose-accent transition-colors">
                karlaikeda@gmail.com
              </span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://linkedin.com/in/karlaikeda"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 no-underline group"
              aria-label="Perfil no LinkedIn de Karla Ikeda (abre em nova aba)"
            >
              <div className="w-11 h-11 rounded-full bg-warm-alt/15 flex items-center justify-center group-hover:bg-warm-alt/25 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e9d7c2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </div>
              <span className="font-body text-sm text-warm-alt group-hover:text-rose-accent transition-colors">
                linkedin.com/in/karlaikeda
              </span>
            </a>

            {/* Phone */}
            <a
              href="https://wa.me/5511995370667"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 no-underline group"
              aria-label="Conversar no WhatsApp (11) 99537-0667"
            >
              <div className="w-11 h-11 rounded-full bg-warm-alt/15 flex items-center justify-center group-hover:bg-warm-alt/25 transition-colors">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#e9d7c2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
              </div>
              <span className="font-body text-sm text-warm-alt group-hover:text-rose-accent transition-colors">
                (11) 99537-0667
              </span>
            </a>
          </nav>
        </div>
      </section>

      <Footer />
    </div>
  )
}
