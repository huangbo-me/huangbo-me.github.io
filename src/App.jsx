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

  return (
    <div className="min-h-screen bg-bg text-text">
      <Sidebar t={t} toggleLang={toggleLang} />

      <main className="md:ml-[260px] pt-[57px] md:pt-0">
        {/* Summary */}
        <section className="px-10 py-12 border-b border-border">
          <div className="space-y-1 max-w-2xl">
            {t.summary.split('\n').map((line, i) => (
              <p key={i} className="text-sm text-secondary leading-relaxed">{line}</p>
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
