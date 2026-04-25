export default function Experience({ t }) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold tracking-tight text-apple-text mb-10">
          {t.experienceTitle}
        </h2>
        <div className="space-y-14">
          {t.experience.map((exp, idx) => (
            <div key={idx}>
              <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1">
                <h3 className="text-lg font-medium text-apple-text">{exp.company}</h3>
                <span className="text-sm text-apple-tertiary shrink-0">{exp.period}</span>
              </div>
              <p className="mt-0.5 text-sm text-apple-secondary">{exp.title}</p>
              {exp.desc && (
                <p className="mt-2 text-sm text-apple-tertiary italic">{exp.desc}</p>
              )}
              <ul className="mt-4 space-y-3">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="text-sm text-apple-secondary leading-relaxed pl-4 relative">
                    <span className="absolute left-0 top-[0.625em] w-1.5 h-px bg-apple-tertiary/50" />
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
