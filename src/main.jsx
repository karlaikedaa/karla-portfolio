import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.jsx'

// === Image protection layer ===

// Block right-click globally (prevents "Save image as")
document.addEventListener('contextmenu', (e) => {
  const el = e.target
  if (
    el.tagName === 'IMG' ||
    el.tagName === 'VIDEO' ||
    el.tagName === 'CANVAS' ||
    el.closest('figure') ||
    el.closest('.protected-img') ||
    el.closest('[class*="aspect-"]')
  ) {
    e.preventDefault()
  }
})

// Block drag on all images and set draggable=false globally
document.addEventListener('dragstart', (e) => {
  if (e.target.tagName === 'IMG' || e.target.tagName === 'VIDEO') {
    e.preventDefault()
  }
})

// Ensure all images have draggable=false
new MutationObserver(() => {
  document.querySelectorAll('img:not([draggable="false"])').forEach((img) => {
    img.draggable = false
  })
}).observe(document.body, { childList: true, subtree: true })

// Block Ctrl+S (save page) and Ctrl+U (view source) and Ctrl+Shift+I (DevTools)
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && (e.key === 's' || e.key === 'S' || e.key === 'u' || e.key === 'U')) {
    e.preventDefault()
  }
})

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
