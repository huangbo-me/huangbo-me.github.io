import { useState } from 'react'
import { LangProvider, useLang } from './LangContext'
import { zh, en } from './i18n'
import NavBar from './components/NavBar'
import Header from './components/Header'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'
import BlogList from './components/BlogList'
import ArticleView from './components/ArticleView'
import articleContent from '../blog/stability-governance.md?raw'
import './index.css'

function AppContent() {
  const { lang, toggleLang } = useLang()
  const t = lang === 'zh' ? zh : en
  const [view, setView] = useState('resume')
  const [currentArticle, setCurrentArticle] = useState(null)

  const handleNavigate = (target) => {
    setView(target)
    setCurrentArticle(null)
    window.scrollTo(0, 0)
  }

  const handleOpenArticle = (slug) => {
    if (slug === 'stability-governance') {
      setCurrentArticle('stability-governance')
    }
    window.scrollTo(0, 0)
  }

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

      <NavBar currentView={view} onNavigate={handleNavigate} t={t} />

      {view === 'resume' && (
        <>
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
        </>
      )}

      {view === 'blog' && !currentArticle && (
        <BlogList articles={t.blog} onOpenArticle={handleOpenArticle} />
      )}

      {view === 'blog' && currentArticle === 'stability-governance' && (
        <ArticleView
          content={articleContent}
          onBack={() => handleNavigate('blog')}
          title={t.blogBack}
        />
      )}
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
