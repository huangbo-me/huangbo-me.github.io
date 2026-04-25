import { useEffect, useState } from 'react'
import { LangProvider, useLang } from './LangContext'
import { zh, en } from './i18n'
import Sidebar from './components/Header'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import './index.css'

function AppContent() {
  const { lang, toggleLang } = useLang()
  const t = lang === 'zh' ? zh : en
  const [theme, setTheme] = useState('light')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'light' || saved === 'dark') {
      setTheme(saved)
      return
    }
    const isDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    setTheme(isDark ? 'dark' : 'light')
  }, [])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))
  }

  return (
    <div className="min-h-screen bg-bg text-text">
      <Sidebar
        t={t}
        toggleLang={toggleLang}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main className="md:ml-[260px] pt-[57px] md:pt-0">
        {/* Summary */}
        <section className="px-10 py-12 border-b border-border">
          <div className="space-y-2 max-w-2xl">
            {t.summary.split('\n').map((line, i) => (
              <p key={i} className="text-xl text-secondary leading-relaxed">{line}</p>
            ))}
          </div>
        </section>

        <Skills t={t} />
        <Experience t={t} />
        <Projects t={t} />
        <Education t={t} />

        <footer className="px-10 py-8 border-t border-border text-xs text-muted">
          © {new Date().getFullYear()} {t.name} · {t.footer}
        </footer>
      </main>
    </div>
  )
}

function App() {
  return (
    <LangProvider>
      <AppContent />
    </LangProvider>
  )
}

export default App
