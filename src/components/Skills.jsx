export default function Skills({ t }) {
  return (
    <section id="skills" className="px-10 py-12 border-b border-border">
      <h2 className="text-xs font-medium uppercase tracking-widest text-muted mb-8">
        {t.skillsTitle}
      </h2>
      <div className="space-y-3 max-w-2xl">
        {t.skills.map(({ category, items }, idx) => (
          <div key={category} className="flex flex-col sm:flex-row gap-1 sm:gap-6 text-sm">
            <span className="text-xs text-muted w-28 shrink-0 pt-0.5">{category}</span>
            <span className="text-secondary leading-relaxed">{items}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
