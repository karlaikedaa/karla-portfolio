# Regras de Componentes e Cores — Consistência de Design

## Princípio fundamental

> Nunca usar valores hex diretamente nos componentes. Sempre usar os tokens definidos no `src/index.css` via classes Tailwind.

---

## 1. Mapa de Tokens: Qual cor usar em cada background

### Sobre background escuro (`bg-dark` / `#1c1c1a`)
| Elemento | Token | Classe Tailwind |
|---|---|---|
| Label de seção | `rose-accent` | `text-rose-accent` |
| Heading principal | `warm-alt` | `text-warm-alt` |
| Corpo de texto | `olive` | `text-olive` |
| Links / CTA outline | `olive` | `text-olive border-olive` |
| Botão CTA preenchido | `warm` | `bg-warm text-text-button` |
| Ícones | `warm-alt` | `text-warm-alt` |
| Copyright | `copyright` | `text-copyright` |

### Sobre background claro (`bg-light` / `#faf7f2` e `bg-white`)
| Elemento | Token | Classe Tailwind |
|---|---|---|
| Label de seção | `text-brown` | `text-text-brown` |
| Heading | `text-dark` | `text-text-dark` |
| Corpo de texto | `text-muted` | `text-text-muted` |
| Texto secundário | `text-green` | `text-text-green` |
| Links | `text-brown` | `text-text-brown` |
| Tags / pills | `warm-alt` bg | `bg-warm-alt text-text-dark` |

### Sobre background rose (`bg-rose-bg` / `#6e4c48`)
| Elemento | Token | Classe Tailwind |
|---|---|---|
| Texto | `white` | `text-white` |
| Logos | filtro branco | `brightness-0 invert` |

---

## 2. Componentes Compartilhados

### Quando reutilizar (obrigatório)

| Componente | Quando usar |
|---|---|
| `Header` | Em todas as páginas (via `PageLayout`) |
| `Footer` | Via `CTASection` em todas as páginas |
| `SectionLabel` | Antes de todo heading de seção (label mono uppercase) |
| `Button` | Todo botão/CTA do site |
| `Tag` | Skill tags, category pills |
| `StatCard` | Métricas numéricas (ex: "8+ anos") |
| `CTASection` | Seção "Vamos conversar?" + Footer em toda página |

### Quando criar novo componente

- Quando a UI se repete 3+ vezes com a mesma estrutura
- Quando precisa de variantes (ex: `Button` com `variant`)
- Quando a lógica é isolável (ex: `LogoCarousel` com sua animação)

### Quando NÃO criar novo componente

- Para uso único sem variantes
- Para wrappers triviais que só adicionam uma classe
- Quando um `className` direto resolve

---

## 3. Convenções de Nomenclatura

### Arquivos e pastas
- Componentes: `PascalCase.jsx` (ex: `HeroSection.jsx`)
- Data files: `camelCase.js` (ex: `companies.js`)
- Hooks: `camelCase.js` com prefixo `use` (ex: `useReducedMotion.js`)
- Pasta por domínio: `home/`, `about/`, `layout/`, `ui/`

### CSS / Tailwind
- Usar classes utilitárias do Tailwind
- Inline styles apenas para valores dinâmicos ou medidas específicas do Figma
- Custom properties via `@theme` no `index.css`

---

## 4. Tipografia

| Contexto | Font | Classe |
|---|---|---|
| Headings (h1, h2, h3) | Playfair Display | `font-heading` |
| Corpo de texto | DM Sans | `font-body` |
| Labels de seção | JetBrains Mono | `font-mono` |

### Tamanhos do Figma
| Uso | Size | Aplicação |
|---|---|---|
| Hero heading | 67px | `text-[67px]` |
| Section heading | 48px | `text-5xl` |
| Subsection heading | 44.8px | `text-[44.8px]` |
| Card heading | 22px | `text-[22px]` |
| Body large | 18px | `text-lg` |
| Body | 16px | `text-base` |
| Body small | 14px | `text-sm` |
| Caption / Label | 12px | `text-xs` |

---

## 5. Regras para Escalar o Projeto

1. **Toda nova página** deve usar `PageLayout` (garante Header + SkipLink + main)
2. **Toda nova seção** deve começar com `SectionLabel` + heading `h2`
3. **Novas cores** devem ser adicionadas ao `@theme` no `index.css` — nunca inline
4. **Novos dados** vão em `src/data/` como módulos JS exportados
5. **Assets estáticos** (logos, imagens) vão em `public/` para fácil adição
6. **Componentes de página** vão em `src/components/{pagina}/`
7. **Componentes reutilizáveis** vão em `src/components/ui/`
