export default function Education({ t }) {
  return (
    <section id="education" className="px-10 py-12">
      <h2 className="text-2xl font-bold text-text mb-8">
        {t.educationTitle}
      </h2>
      <div className="max-w-2xl border border-border bg-surface rounded p-5">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
          <div className="flex-1">
            <div className="flex items-center gap-3 flex-wrap">
              <span className="text-base font-medium text-text">{t.degree}</span>
              <span className="text-xs text-accent border border-accent/20 rounded px-2 py-0.5">
                {t.ministryTag}
              </span>
            </div>
            <p className="mt-1.5 text-sm text-secondary leading-relaxed">{t.school}</p>
          </div>
          <span className="text-sm text-muted shrink-0">{t.gradYear}</span>
        </div>
      </div>
    </section>
  )
}
