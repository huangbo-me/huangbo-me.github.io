export default function Projects({ t }) {
  return (
    <section className="py-16 px-6 bg-apple-bg-alt">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold tracking-tight text-apple-text mb-10">
          {t.projectsTitle}
        </h2>
        {t.projects.length === 0 ? (
          <p className="text-sm text-apple-tertiary">{t.projectsEmpty}</p>
        ) : (
          <div className="space-y-8">
            {t.projects.map((p) => (
              <div key={p.name}>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noreferrer"
                  className="text-base font-medium text-apple-accent hover:underline decoration-apple-accent/30 underline-offset-2"
                >
                  {p.name}
                  <span className="ml-1 text-apple-tertiary text-xs">↗</span>
                </a>
                <p className="mt-1.5 text-sm text-apple-secondary leading-relaxed">{p.desc}</p>
                <p className="mt-1.5 text-xs text-apple-tertiary font-mono">{p.stack}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
