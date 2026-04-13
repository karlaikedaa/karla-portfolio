import React from 'react'
import { Routes, Route } from 'react-router-dom'
import PageLayout from './components/layout/PageLayout'
import ScrollToTop from './components/layout/ScrollToTop'
import ScrollTopButton from './components/ui/ScrollTopButton'
import Home from './pages/Home'
import SobreMim from './pages/SobreMim'
import UXDesign from './pages/UXDesign'
import ProjetoDetalhe from './pages/ProjetoDetalhe'
import ConteudoDesign from './pages/ConteudoDesign'
import ArtigoDetalhe from './pages/ArtigoDetalhe'

function App() {
  return (
    <React.Fragment>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <PageLayout>
              <Home />
            </PageLayout>
          }
        />
        <Route
          path="/sobre-mim"
          element={
            <PageLayout>
              <SobreMim />
            </PageLayout>
          }
        />
        <Route path="/ux-design" element={<UXDesign />} />
        <Route path="/projeto/:id" element={<ProjetoDetalhe />} />
        <Route path="/conteudo-design" element={<ConteudoDesign />} />
        <Route path="/artigo/:id" element={<ArtigoDetalhe />} />
      </Routes>
      <ScrollTopButton />
    </React.Fragment>
  )
}

export default App
