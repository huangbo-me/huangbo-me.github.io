export default function BlogList({ articles, onOpenArticle }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-12">
      <h2 className="text-2xl font-semibold text-gray-900 mb-2">{articles.title}</h2>
      <p className="text-sm text-gray-500 mb-8">{articles.subtitle}</p>
      <div className="space-y-6">
        {articles.list.map((article) => (
          <article key={article.slug} className="border border-gray-200 rounded-lg p-6 hover:border-blue-300 transition-colors">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <button
                  onClick={() => onOpenArticle(article.slug)}
                  className="text-left cursor-pointer"
                >
                  <h3 className="text-lg font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                    {article.title}
                  </h3>
                </button>
                <p className="mt-1.5 text-sm text-gray-600 leading-relaxed">
                  {article.description}
                </p>
                <div className="mt-3 flex items-center gap-3 text-xs text-gray-400">
                  <span>{article.date}</span>
                  <span>·</span>
                  <span>{article.readTime}</span>
                  <span>·</span>
                  <span>{article.tags.join(' / ')}</span>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
