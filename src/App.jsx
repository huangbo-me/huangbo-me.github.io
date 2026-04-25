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
    <div className="min-h-screen bg-white font-sans text-gray-800">
      {/* Language toggle */}
      <div className="lang-toggle fixed top-4 right-4 z-50">
        <button
          onClick={toggleLang}
          className="px-3 py-1.5 text-sm rounded-lg border border-gray-300 bg-white text-gray-700 hover:bg-gray-100 transition-colors shadow-sm cursor-pointer"
        >
          {t.switchLang}
        </button>
      </div>

      <Header t={t} />
      <main>
        <Skills t={t} />
        <Experience t={t} />
        <Projects t={t} />
        <Education t={t} />
      </main>
      <footer className="py-6 px-6 border-t border-gray-200 text-center text-sm text-gray-400">
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
