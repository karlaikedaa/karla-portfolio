export default function Footer() {
  return (
    <footer role="contentinfo" className="px-6">
      <div
        className="mx-auto py-10 flex flex-col md:flex-row items-center justify-between gap-4"
        style={{
          maxWidth: 'var(--max-w-content)',
          borderTop: '1px solid rgba(233, 215, 194, 0.85)',
        }}
      >
        <div className="text-center md:text-left">
          <p className="font-heading text-xl text-warm-alt">Karla Ikeda</p>
          <p className="font-body text-sm" style={{ color: '#7A7468' }}>
            Product & Service Designer
          </p>
        </div>
        <p className="font-body text-xs" style={{ color: '#7A7468' }}>
          &copy; 2026 Karla Ikeda. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
