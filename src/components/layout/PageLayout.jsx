import SkipLink from './SkipLink'
import Header from './Header'

export default function PageLayout({ children }) {
  return (
    <>
      <SkipLink />
      <Header />
      <main id="main-content" className="pt-16">
        {children}
      </main>
    </>
  )
}
