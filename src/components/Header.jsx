export default function Header({ t }) {
  return (
    <header className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">{t.name}</h1>
        <p className="mt-2 text-xl text-gray-300">
          {t.title} @ {t.company}
        </p>
        <p className="mt-1 text-gray-400">{t.location}</p>
        <p className="mt-4 text-gray-300 max-w-2xl leading-relaxed">
          {t.summary}
        </p>
        <div className="mt-5 flex flex-wrap gap-4 text-sm">
          <a href={`mailto:${t.email}`} className="text-blue-400 hover:text-blue-300">
            {t.email}
          </a>
          <a
            href="https://github.com/huangbo-me"
            target="_blank"
            rel="noreferrer"
            className="text-blue-400 hover:text-blue-300"
          >
            github.com/huangbo-me
          </a>
        </div>
      </div>
    </header>
  )
}
