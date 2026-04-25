export default function NavBar({ currentView, onNavigate, t }) {
  const tabs = [
    { key: 'resume', label: t.navResume },
    { key: 'blog', label: t.navBlog },
  ]

  return (
    <nav className="bg-gray-900 border-b border-gray-700">
      <div className="max-w-3xl mx-auto flex items-center justify-between px-6 h-14">
        <div className="flex gap-6">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => onNavigate(tab.key)}
              className={`text-sm font-medium transition-colors cursor-pointer ${
                currentView === tab.key
                  ? 'text-white border-b-2 border-blue-400 pb-0.5'
                  : 'text-gray-400 hover:text-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  )
}
