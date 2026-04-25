import { LangProvider, useLang } from './LangContext'
import { zh, en } from './i18n'
import Header from './components/Header'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import './index.css'

function AppContent() {
  const { lang, toggleLang } = useLang()
  const t = lang === 'zh' ? zh : en

  return (
    <div className="min-h-screen bg-white">
      {/* Language toggle */}
      <div className="lang-toggle fixed top-5 right-5 z-50">
        <button
          onClick={toggleLang}
          className="px-3 py-1.5 text-xs font-medium rounded-full border border-apple-border bg-white/80 text-apple-tertiary hover:text-apple-text hover:border-apple-text/20 transition-all cursor-pointer backdrop-blur-sm"
        >
          {t.switchLang}
        </button>
      </div>

      <Header t={t} />
      <Skills t={t} />
      <Experience t={t} />
      <Projects t={t} />
      <Education t={t} />
      <footer className="py-10 px-6 text-center text-xs text-apple-tertiary">
        © {new Date().getFullYear()} {t.name} · {t.footer}
      </footer>
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
