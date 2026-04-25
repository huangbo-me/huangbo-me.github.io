export default function Header({ t }) {
  return (
    <header className="py-20 sm:py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-apple-text">
          {t.name}
        </h1>
        <p className="mt-3 text-xl text-apple-secondary font-light">
          {t.title}
        </p>
        <div className="mt-2 text-sm text-apple-tertiary">
          {t.location}
        </div>
        <p className="mt-6 text-base text-apple-secondary leading-relaxed max-w-2xl">
          {t.summary}
        </p>
        <div className="mt-6 flex flex-wrap gap-x-5 gap-y-1 text-sm">
          <a
            href={`mailto:${t.email}`}
            className="text-apple-accent hover:underline decoration-apple-accent/30 underline-offset-2"
          >
            {t.email}
          </a>
          <a
            href="https://github.com/huangbo-me"
            target="_blank"
            rel="noreferrer"
            className="text-apple-accent hover:underline decoration-apple-accent/30 underline-offset-2"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  )
}
