const projects = [
  {
    name: 'project-name',
    url: 'https://github.com/huangbo-me/project-name',
    description:
      'A tool that does X for Y users. Built with TypeScript + React. 1.2k GitHub stars.',
    stack: 'TypeScript, React, Node.js',
  },
  {
    name: 'another-project',
    url: 'https://github.com/huangbo-me/another-project',
    description:
      'Description of what it does and who uses it. Notable metric or recognition.',
    stack: 'Vue 3, Vite, Tailwind CSS',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-10 px-6 border-t border-gray-200">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Projects</h2>
        <div className="space-y-6">
          {projects.map((p) => (
            <div key={p.name}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 hover:text-blue-800 font-medium"
              >
                {p.name}
              </a>
              <p className="mt-1 text-sm text-gray-700">{p.description}</p>
              <p className="mt-1 text-xs text-gray-500">{p.stack}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
