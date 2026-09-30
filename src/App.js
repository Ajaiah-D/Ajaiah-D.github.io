import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'
import Certificates from './components/Certificates/Certificates'
import Contact from './components/Contact/Contact'
import { about } from './portfolio'

function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <About />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()}{' '}
        <a href={about.social.github} target="_blank" rel="noopener noreferrer">
          Ajaiah Darlington
        </a>
      </footer>
    </div>
  )
}

export default App
