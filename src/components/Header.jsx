export default function Header() {
  return (
    <header className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold tracking-tight">Your Name</h1>
        <p className="mt-2 text-xl text-gray-300">Senior Frontend Engineer</p>
        <p className="mt-1 text-gray-400">Shanghai · Open to Remote</p>
        <p className="mt-4 text-gray-300 max-w-2xl leading-relaxed">
          8 years building large-scale web products. Deep in React, TypeScript, and frontend
          performance. Shipped to tens of millions of users; care about architecture teams can maintain.
        </p>
        <div className="mt-5 flex flex-wrap gap-4 text-sm">
          <a href="mailto:your@email.com" className="text-blue-400 hover:text-blue-300">
            your@email.com
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
