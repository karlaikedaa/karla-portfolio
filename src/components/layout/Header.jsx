import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Sobre mim', path: '/sobre-mim' },
  { label: 'UX Design', path: '/ux-design' },
  { label: 'Conteúdo & Design', path: '/conteudo-design' },
]

export default function Header() {
  const location = useLocation()
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [mobileOpen])

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-light/95 backdrop-blur-sm border-b border-light">
        <nav
          aria-label="Navegação principal"
          className="mx-auto flex items-center justify-between h-full px-6"
          style={{ maxWidth: 'var(--max-w-content)' }}
        >
          <Link
            to="/"
            className="font-heading text-lg text-text-dark no-underline hover:opacity-80 transition-opacity"
          >
            Karla Ikeda
          </Link>

          {/* Desktop nav */}
          <ul className="hidden lg:flex items-center gap-8 list-none">
            {navLinks.map(({ label, path }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`relative font-body text-sm no-underline transition-colors after:absolute after:bottom-[-2px] after:left-0 after:h-[2px] after:bg-rose-accent after:transition-all after:duration-300 ${
                    location.pathname === path
                      ? 'text-text-dark font-medium after:w-full'
                      : 'text-text-muted hover:text-text-dark after:w-0 hover:after:w-full'
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://docs.google.com/document/d/11Mti9GG8ctCRyEE-1H9V13oBIva1yYrI/edit?usp=sharing&ouid=106812508871585110962&rtpof=true&sd=true"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 font-body text-sm text-text-button no-underline rounded-full border border-warm/50 hover:border-rose-accent hover:bg-warm/20 transition-all duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Baixe meu CV
            </a>
            <a
              href="https://wa.me/5511995370667"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2.5 font-body text-sm text-text-button bg-warm no-underline rounded-full border border-warm hover:bg-peach hover:border-peach hover:text-dark transition-all duration-300"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
              </svg>
              Fale comigo
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center items-center w-11 h-11 gap-1.5 cursor-pointer"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Fechar menu' : 'Abrir menu'}
          >
            <span className={`block w-6 h-0.5 bg-text-dark transition-all duration-300 ${mobileOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-text-dark transition-all duration-300 ${mobileOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-text-dark transition-all duration-300 ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </nav>
      </header>

      {/* Mobile menu — outside header to avoid backdrop-filter containing block */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed left-0 right-0 bottom-0 z-40 overflow-y-auto"
          style={{ backgroundColor: '#faf7f2', top: '64px' }}
          role="dialog"
          aria-label="Menu de navegação"
        >
          <div className="flex flex-col px-6 pt-8 gap-2">
            {navLinks.map(({ label, path }) => (
              <Link
                key={path}
                to={path}
                className={`font-body text-lg py-3 no-underline border-b border-warm/20 transition-colors ${
                  location.pathname === path
                    ? 'text-text-dark font-medium'
                    : 'text-text-muted hover:text-text-dark'
                }`}
              >
                {label}
              </Link>
            ))}

            <div className="flex flex-col gap-3 mt-6">
              <a
                href="https://docs.google.com/document/d/11Mti9GG8ctCRyEE-1H9V13oBIva1yYrI/edit?usp=sharing&ouid=106812508871585110962&rtpof=true&sd=true"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 font-body text-sm text-text-button no-underline rounded-full border border-warm/50 hover:border-rose-accent transition-all"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                  <polyline points="7 10 12 15 17 10" />
                  <line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Baixe meu CV
              </a>
              <a
                href="https://wa.me/5511995370667"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-6 py-3 font-body text-sm text-text-button bg-warm no-underline rounded-full hover:bg-peach transition-all"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
                </svg>
                Fale comigo
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
