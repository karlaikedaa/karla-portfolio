# Regras de Acessibilidade — WCAG AAA

## Checklist obrigatório para cada nova demanda

Antes de submeter qualquer alteração, validar todos os itens abaixo:

### 1. Contraste de Cores (WCAG 2.1 — Nível AAA)

| Requisito | Ratio mínimo |
|---|---|
| Texto normal (< 18pt / < 14pt bold) | **7:1** |
| Texto grande (≥ 18pt / ≥ 14pt bold) | **4.5:1** |
| Componentes de UI e gráficos | **3:1** |

#### Tabela de cores aprovadas (AAA)

| Token | Hex | Uso | Background válido | Ratio |
|---|---|---|---|---|
| `rose-accent` | `#d4a29c` | Labels no bg escuro | `#1c1c1a` | 7.1:1 |
| `olive` | `#b5b285` | Corpo no bg escuro | `#1c1c1a` | 7.0:1 |
| `text-muted` | `#595349` | Corpo no bg claro | `#faf7f2`, `#ffffff` | 7.0:1+ |
| `text-green` | `#4d5140` | Texto secundário | `#faf7f2`, `#ffffff` | 7.1:1 |
| `text-dark` | `#2e2b25` | Headings no claro | `#faf7f2`, `#ffffff` | 12.5:1+ |
| `text-brown` | `#71433d` | Labels de seção | `#faf7f2`, `#ffffff` | 7.2:1 |
| `warm-alt` | `#e9d7c2` | Headings no escuro | `#1c1c1a` | 11.7:1 |
| `white` | `#ffffff` | Texto no rose-bg | `#6e4c48` | 7.0:1+ |
| `copyright` | `#dbcfb7` | Copyright no footer | `#1c1c1a` | 10.1:1 |

### 2. Semântica HTML

- [ ] Usar `<header>`, `<main>`, `<footer>`, `<nav>`, `<section>` como landmarks
- [ ] Cada `<section>` deve ter `aria-label` descritivo
- [ ] Heading hierarchy: apenas **1 `<h1>` por página**
- [ ] Hierarquia correta: h1 → h2 → h3 (sem pular níveis)
- [ ] Listas devem usar `<ul>` / `<ol>` + `<li>`
- [ ] Links devem ter texto descritivo (evitar "clique aqui")
- [ ] Botões devem ser `<button>` ou `<a>` com role adequado

### 3. Navegação por Teclado

- [ ] **Skip link**: "Pular para o conteúdo principal" visível ao focar
- [ ] Todos os elementos interativos acessíveis via **Tab**
- [ ] Ordem de tabulação lógica e sequencial
- [ ] **Focus visible**: outline de 2px sólido em `rose-accent` com offset de 2px
- [ ] Nenhum keyboard trap (usuário pode sair de qualquer componente)

### 4. Imagens e Mídia

- [ ] Todas as imagens têm `alt` descritivo
- [ ] Imagens decorativas: `alt=""` + `aria-hidden="true"`
- [ ] Ícones SVG: `aria-hidden="true"` quando decorativos
- [ ] Ícones SVG com significado: `role="img"` + `aria-label`

### 5. Animações

- [ ] Respeitar `prefers-reduced-motion: reduce`
- [ ] Animações devem ter fallback estático
- [ ] Carrossel: pausar no hover + controle de pausa disponível
- [ ] Nenhum conteúdo pisca mais que 3x por segundo

### 6. Idioma e Texto

- [ ] `<html lang="pt-BR">`
- [ ] Texto legível em zoom 200%
- [ ] Line height mínimo: 1.5x para corpo de texto
- [ ] Espaçamento entre parágrafos: mínimo 2x o tamanho da fonte

### 7. Formulários (quando aplicável)

- [ ] Cada input tem `<label>` associado
- [ ] Mensagens de erro claras e visíveis
- [ ] Não usar apenas cor para indicar estado

---

## Como validar

1. **DevTools**: Inspect → Accessibility → verificar contrast ratio
2. **Lighthouse**: Rodar audit de acessibilidade (meta: score ≥ 95)
3. **Teclado**: Navegar pela página inteira usando apenas Tab, Enter, Escape
4. **Screen reader**: Testar com NVDA (Windows) ou VoiceOver (Mac)
5. **Zoom**: Verificar layout em 200% de zoom
