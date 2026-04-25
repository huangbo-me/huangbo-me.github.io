import './index.css'
import Header from './components/Header'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Education from './components/Education'

function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-800">
      <Header />
      <main>
        <Skills />
        <Experience />
        <Projects />
        <Education />
      </main>
      <footer className="py-6 px-6 border-t border-gray-200 text-center text-sm text-gray-400">
        © {new Date().getFullYear()} Your Name
      </footer>
    </div>
  )
}

export default App
