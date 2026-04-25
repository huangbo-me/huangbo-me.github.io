export default function Education({ t }) {
  return (
    <section className="py-16 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold tracking-tight text-apple-text mb-8">
          {t.educationTitle}
        </h2>
        <div className="rounded-xl border border-apple-border bg-white p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-base font-medium text-apple-text">{t.degree}</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-apple-accent/5 text-apple-accent border border-apple-accent/15">
                  {t.ministryTag}
                </span>
              </div>
              <p className="mt-2 text-sm text-apple-secondary leading-relaxed">{t.school}</p>
            </div>
            <span className="text-sm text-apple-tertiary shrink-0">{t.gradYear}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
