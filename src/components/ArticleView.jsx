import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

export default function ArticleView({ content, onBack, title }) {
  return (
    <div className="max-w-3xl mx-auto px-6 py-10">
      <button
        onClick={onBack}
        className="mb-6 text-sm text-gray-500 hover:text-gray-800 transition-colors cursor-pointer"
      >
        ← {title}
      </button>
      <article className="prose prose-gray max-w-none
        prose-headings:font-semibold prose-headings:text-gray-900
        prose-h1:text-3xl prose-h1:mt-10 prose-h1:mb-4
        prose-h2:text-xl prose-h2:mt-10 prose-h2:mb-3 prose-h2:pb-2 prose-h2:border-b prose-h2:border-gray-200
        prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-2
        prose-p:text-gray-700 prose-p:leading-7 prose-p:my-3
        prose-li:text-gray-700
        prose-strong:text-gray-900
        prose-code:text-sm prose-code:bg-gray-100 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded
        prose-pre:bg-gray-900 prose-pre:text-gray-100 prose-pre:rounded-lg
        prose-blockquote:border-l-4 prose-blockquote:border-blue-400 prose-blockquote:pl-4 prose-blockquote:text-gray-600 prose-blockquote:italic
        prose-table:w-full prose-table:text-sm
        prose-th:bg-gray-50 prose-th:px-4 prose-th:py-2 prose-th:text-left
        prose-td:px-4 prose-td:py-2 prose-td:border-t prose-td:border-gray-100
        prose-hr:my-8
      ">
        <Markdown remarkPlugins={[remarkGfm]}>{content}</Markdown>
      </article>
    </div>
  )
}
