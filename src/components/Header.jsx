import { useState, useEffect } from 'react'

const NAV_ITEMS = [
  { id: 'skills',     key: 'skillsTitle' },
  { id: 'experience', key: 'experienceTitle' },
  { id: 'projects',   key: 'projectsTitle' },
  { id: 'education',  key: 'educationTitle' },
]

export default function Sidebar({ t, toggleLang, theme, toggleTheme }) {
  const [active, setActive] = useState('skills')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const sections = NAV_ITEMS.map(({ id }) => document.getElementById(id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length > 0) setActive(visible[0].target.id)
      },
      { rootMargin: '0px 0px -60% 0px', threshold: 0 }
    )
    sections.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  const SidebarContent = () => (
    <>
      {/* Identity */}
      <div className="pb-6 border-b border-border">
        <div className="text-xl font-bold text-text tracking-tight">
          {t.name}
        </div>
        <div className="mt-2 text-sm text-secondary leading-relaxed">{t.title}</div>
        <div className="mt-1 text-sm text-muted">{t.location}</div>
      </div>

      {/* Nav */}
      <nav className="mt-6 flex-1">
        <div className="text-[11px] uppercase tracking-wider text-muted mb-2">Sections</div>
        <ul className="space-y-1">
          {NAV_ITEMS.map(({ id, key }, idx) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setMobileOpen(false)}
                className={`flex items-center gap-3 px-2.5 py-2 text-sm rounded border transition-colors ${
                  active === id
                    ? 'text-text border-accent/40 bg-accent/5'
                    : 'text-muted border-transparent hover:text-secondary hover:border-border'
                }`}
              >
                <span className="text-xs text-muted shrink-0">{String(idx + 1).padStart(2, '0')}</span>
                <span className={`w-1.5 h-1.5 rounded-full shrink-0 transition-colors ${
                  active === id ? 'bg-accent' : 'bg-border'
                }`} />
                {t[key]}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      {/* Contact & lang */}
      <div className="space-y-3 pt-5 border-t border-border">
        <div className="space-y-2">
          <a
            href={`mailto:${t.email}`}
            className="block text-xs text-accent hover:text-text transition-colors truncate"
          >
            {t.email}
          </a>
          <a
            href="https://github.com/huangbo-me"
            target="_blank"
            rel="noreferrer"
            className="block text-xs text-muted hover:text-secondary transition-colors"
          >
            github.com/huangbo-me ↗
          </a>
        </div>
        <div className="flex gap-2">
          <button
            onClick={toggleLang}
            className="text-xs text-muted hover:text-secondary border border-border rounded px-2.5 py-1 transition-colors cursor-pointer"
          >
            {t.switchLang}
          </button>
          <button
            onClick={toggleTheme}
            className="text-xs text-muted hover:text-secondary border border-border rounded px-2.5 py-1 transition-colors cursor-pointer"
            title="切换主题"
          >
            {theme === 'dark' ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex fixed left-0 top-0 h-full w-[260px] bg-sidebar border-r border-border flex-col p-8 z-40 overflow-y-auto">
        <SidebarContent />
      </aside>

      {/* Mobile top bar */}
      <div className="md:hidden fixed top-0 left-0 right-0 z-40 bg-sidebar border-b border-border px-5 py-4 flex items-center justify-between">
        <span className="text-sm font-semibold text-text">{t.name}</span>
        <div className="flex items-center gap-2">
          <button
            onClick={toggleTheme}
            className="text-xs text-muted border border-border rounded px-2.5 py-1 cursor-pointer"
          >
            {theme === 'dark' ? '浅色' : '深色'}
          </button>
          <button
            onClick={toggleLang}
            className="text-xs text-muted border border-border rounded px-2.5 py-1 cursor-pointer"
          >
            {t.switchLang}
          </button>
          <button
            onClick={() => setMobileOpen((v) => !v)}
            className="text-secondary hover:text-text p-1"
            aria-label="menu"
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              {mobileOpen ? (
                <path d="M2 2L14 14M14 2L2 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              ) : (
                <>
                  <line x1="2" y1="4" x2="14" y2="4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="2" y1="8" x2="14" y2="8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="2" y1="12" x2="14" y2="12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 z-30 bg-bg/80 backdrop-blur-sm"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile drawer */}
      <aside
        className={`md:hidden fixed top-[57px] left-0 bottom-0 w-64 bg-sidebar border-r border-border flex flex-col p-8 z-40 overflow-y-auto transition-transform ${
          mobileOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <SidebarContent />
      </aside>
    </>
  )
}
