export default function Education({ t }) {
  return (
    <section id="education" className="py-12 px-6 border-t border-gray-100">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-xl font-bold text-gray-900 mb-6 tracking-tight">{t.educationTitle}</h2>
        <div className="bg-gradient-to-r from-gray-50 to-white rounded-xl border border-gray-200 p-6">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
            <div className="flex-1">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="text-base font-semibold text-gray-900">{t.degree}</span>
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-200">
                  {t.ministryTag}
                </span>
              </div>
              <p className="mt-2 text-sm text-gray-600 leading-relaxed">{t.school}</p>
            </div>
            <span className="text-sm text-gray-400 font-medium shrink-0">{t.gradYear}</span>
          </div>
        </div>
      </div>
    </section>
  )
}
