const skills = [
  { category: 'Languages', items: 'TypeScript, JavaScript (ES2022+), HTML5, CSS3' },
  { category: 'Frameworks', items: 'React 18, Next.js, Vue 3' },
  { category: 'State & Data', items: 'Zustand, React Query, Redux Toolkit, GraphQL' },
  { category: 'Tooling', items: 'Vite, Webpack 5, Turborepo, esbuild' },
  { category: 'Testing', items: 'Jest, React Testing Library, Playwright, Cypress' },
  { category: 'Performance', items: 'Web Vitals, Lighthouse, Chrome DevTools, Sentry' },
  { category: 'Infrastructure', items: 'Docker, GitHub Actions, Vercel, AWS (S3, CloudFront)' },
]

export default function Skills() {
  return (
    <section id="skills" className="py-10 px-6 border-t border-gray-200">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Skills</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <tbody>
              {skills.map(({ category, items }) => (
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
