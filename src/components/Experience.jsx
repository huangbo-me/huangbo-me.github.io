export default function Experience({ t }) {
  return (
    <section id="experience" className="px-10 py-12 border-b border-border">
      <h2 className="text-xs font-medium uppercase tracking-widest text-muted mb-10">
        {t.experienceTitle}
      </h2>
      <div className="space-y-12 max-w-2xl">
        {t.experience.map((exp, idx) => (
          <div key={idx}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
              <span className="text-sm font-semibold text-text">{exp.company}</span>
              <span className="text-xs text-muted">{exp.period}</span>
            </div>
            <div className="mt-0.5 text-xs text-accent">{exp.title}</div>
            {exp.desc && (
              <div className="mt-1 text-xs text-muted">{exp.desc}</div>
            )}

            <div className="mt-4 space-y-3">
              {exp.bullets.map((b, i) => (
                <div key={i}>
                  {/* Level 1: action title */}
                  <div className="text-xs font-medium text-text">{b.title}</div>
                  {/* Level 2: sub-items */}
                  <ul className="mt-1 space-y-0.5">
                    {b.items.map((item, j) => (
                      <li key={j} className="flex gap-2 text-xs text-secondary leading-relaxed">
                        <span className="text-muted shrink-0 mt-0.5">
                          {j === b.items.length - 1 ? '└─' : '├─'}
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
