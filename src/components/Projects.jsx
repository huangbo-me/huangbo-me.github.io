export default function Projects({ t }) {
  return (
    <section id="projects" className="py-10 px-6 border-t border-gray-200">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t.projectsTitle}</h2>
        {t.projects.length === 0 ? (
          <p className="text-sm text-gray-500">{t.projectsEmpty}</p>
        ) : (
          <div className="space-y-6">
            {t.projects.map((p) => (
              <div key={p.name}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-medium"
                >
                  {p.name}
                </a>
                <p className="mt-1 text-sm text-gray-700">{p.desc}</p>
                <p className="mt-1 text-xs text-gray-500">{p.stack}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
