import { useState } from 'react'
import PageLayout from '../components/layout/PageLayout'
import ArticleCard from '../components/content/ArticleCard'
import DesignCard from '../components/content/DesignCard'
import CTASection from '../components/home/CTASection'
import { articlesList, designGraficoList } from '../data/articlesContent'

const tabs = [
  { id: 'artigos', label: 'Artigos de Design' },
  { id: 'design', label: 'Design Gráfico' },
]

export default function ConteudoDesign() {
  const [activeTab, setActiveTab] = useState('artigos')

  return (
    <PageLayout>
      {/* Hero */}
      <section
        className="py-16 md:py-28 px-6"
        style={{ backgroundColor: '#1c1c1a' }}
        aria-label="Conteúdo e Design Gráfico"
      >
        <div className="mx-auto" style={{ maxWidth: 'var(--max-w-content)' }}>
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-rose-accent">
            Conteúdo & Design Gráfico
          </span>

          <h1 className="mt-6 font-heading font-medium leading-tight text-4xl md:text-5xl lg:text-[60px]">
            <span className="text-warm-alt">Design que se vê,</span>
            <br />
            <span className="text-rose-accent">conteúdo que compreende.</span>
          </h1>

          <p
            className="mt-6 font-body text-base md:text-lg leading-relaxed text-olive"
            style={{ maxWidth: '640px' }}
          >
            Antes de ser Designer de Produto, fui comunicadora. Aqui estão projetos que
            cruzam o design gráfico com a estratégia: — identidade visual e conteúdo
            em um só lugar.
          </p>
        </div>
      </section>

      {/* Tabs + Content */}
      <section className="py-12 px-6 bg-light" aria-label="Conteúdos">
        <div className="mx-auto" style={{ maxWidth: 'var(--max-w-content)' }}>
          {/* Tabs */}
          <div className="flex gap-6 border-b border-warm/30 mb-8" role="tablist">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                role="tab"
                aria-selected={activeTab === tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`pb-3 font-body text-sm transition-all border-b-2 -mb-px cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-rose-accent focus-visible:ring-offset-2 rounded-sm ${
                  activeTab === tab.id
                    ? 'text-rose-text border-rose-text font-medium'
                    : 'text-text-muted border-transparent hover:text-text-dark hover:border-rose-text'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab: Artigos de Design */}
          {activeTab === 'artigos' && (
            <div role="tabpanel">
              <p className="font-body text-base text-text-muted leading-relaxed mb-8" style={{ maxWidth: '672px' }}>
                Aqui compartilho alguns artigos do universo da criação de produtos digitais. Sem regras, apenas
                pensamentos e aprendizado compartilhado de quem vive diariamente a rotina de Product Designer.
              </p>

              <div className="flex flex-col gap-5" style={{ maxWidth: '816px' }}>
                {articlesList.map((article) => (
                  <ArticleCard key={article.id} article={article} />
                ))}
              </div>
            </div>
          )}

          {/* Tab: Design Gráfico */}
          {activeTab === 'design' && (
            <div role="tabpanel">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {designGraficoList.map((item) => (
                  <DesignCard key={item.id} item={item} />
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </PageLayout>
  )
}
