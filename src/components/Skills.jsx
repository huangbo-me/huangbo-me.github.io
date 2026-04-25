export default function Skills({ t }) {
  return (
    <section id="skills" className="py-10 px-6 border-t border-gray-200">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">{t.skillsTitle}</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody>
              {t.skills.map(({ category, items }) => (
                <tr key={category} className="border-t border-gray-100">
                  <td className="py-2.5 pr-6 font-medium text-gray-700 whitespace-nowrap w-36">
                    {category}
                  </td>
                  <td className="py-2.5 text-gray-600">{items}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
