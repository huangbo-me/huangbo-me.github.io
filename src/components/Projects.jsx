export default function Projects({ t }) {
  return (
    <section id="projects" className="px-10 py-12 border-b border-border">
      <h2 className="text-xs font-medium uppercase tracking-widest text-muted mb-8">
        {t.projectsTitle}
      </h2>
      {t.projects.length === 0 ? (
        <p className="text-xs text-muted">{t.projectsEmpty}</p>
      ) : (
        <div className="space-y-6 max-w-2xl">
          {t.projects.map((p) => (
            <div key={p.name} className="border border-border bg-surface rounded p-5 hover:border-muted transition-colors">
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-accent hover:text-text transition-colors"
              >
                {p.name}
                <span className="ml-1 text-muted text-xs">↗</span>
              </a>
              <p className="mt-2 text-xs text-secondary leading-relaxed">{p.desc}</p>
              <p className="mt-1.5 text-xs text-muted">{p.stack}</p>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
