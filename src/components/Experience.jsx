export default function Experience({ t }) {
  return (
    <section id="experience" className="py-10 px-6 border-t border-gray-200">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">{t.experienceTitle}</h2>
        <div className="space-y-10">
          {t.experience.map((exp, idx) => (
            <div key={idx}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                <span className="text-sm text-gray-500">{exp.period}</span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mt-0.5">
                <span className="text-gray-700 font-medium">{exp.company}</span>
                <span className="text-sm text-gray-500">{exp.location}</span>
              </div>
              {exp.desc && (
                <p className="mt-1 text-sm text-gray-500 italic">{exp.desc}</p>
              )}
              <ul className="mt-3 space-y-2">
                {exp.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm text-gray-700">
                    <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-gray-400 shrink-0" />
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
