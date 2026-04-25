export default function Skills({ t }) {
  return (
    <section className="py-16 px-6 bg-apple-bg-alt">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold tracking-tight text-apple-text mb-10">
          {t.skillsTitle}
        </h2>
        <div className="space-y-5">
          {t.skills.map(({ category, items }) => (
            <div key={category} className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-4">
              <span className="text-xs font-medium uppercase tracking-widest text-apple-tertiary w-24 shrink-0">
                {category}
              </span>
              <span className="text-sm text-apple-secondary leading-relaxed">
                {items}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
