const experiences = [
  {
    company: 'Company Name',
    companyDesc: 'B2B SaaS serving 10k+ enterprise customers across APAC.',
    title: 'Senior Frontend Engineer',
    period: 'Jan 2022 – Present',
    location: 'Shanghai',
    bullets: [
      'Architected a component library used by 6 product teams, reducing cross-team UI inconsistency and cutting new-feature delivery time by 30%.',
      'Led migration from Create React App to Vite, reducing dev cold-start from 45s to 4s and CI build time by 40%.',
      'Owned frontend performance for the core dashboard: improved LCP from 4.2s to 1.1s via code-splitting, lazy loading, and CDN strategy; Lighthouse score from 52 to 91.',
      'Designed data-fetching layer with React Query and server-side caching, eliminating 80% of redundant API calls.',
      'Mentored 3 mid-level engineers through weekly design reviews; introduced ADR practice adopted team-wide.',
    ],
  },
  {
    company: 'Previous Company',
    companyDesc: 'Consumer product with 50M+ monthly active users.',
    title: 'Frontend Engineer',
    period: 'Mar 2019 – Dec 2021',
    location: 'Shanghai',
    bullets: [
      'Built real-time collaboration feature (WebSocket + CRDT) enabling concurrent editing for 100k+ daily active users.',
      'Migrated legacy jQuery codebase to React + TypeScript over 6 months with zero downtime; test coverage from 12% to 74%.',
      'Designed an A/B testing SDK across 4 product surfaces, enabling 20+ concurrent experiments with <1ms overhead.',
      'Reduced JavaScript bundle size by 42% via tree-shaking audit and dynamic import strategy, improving TTI by 1.8s on mid-range devices.',
    ],
  },
  {
    company: 'Earlier Company',
    companyDesc: null,
    title: 'Frontend Engineer',
    period: 'Jun 2016 – Feb 2019',
    location: 'Beijing',
    bullets: [
      'Delivered core product features serving millions of users; built UI components still in production today.',
      'Key technologies: React, Redux, Sass, Webpack.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-10 px-6 border-t border-gray-200">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-8">Experience</h2>
        <div className="space-y-10">
          {experiences.map((exp) => (
            <div key={exp.company}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="text-lg font-semibold text-gray-900">{exp.title}</h3>
                <span className="text-sm text-gray-500">{exp.period}</span>
              </div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 mt-0.5">
                <span className="text-gray-700 font-medium">{exp.company}</span>
                <span className="text-sm text-gray-500">{exp.location}</span>
              </div>
              {exp.companyDesc && (
                <p className="mt-1 text-sm text-gray-500 italic">{exp.companyDesc}</p>
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
