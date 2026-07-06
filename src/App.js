import './App.css'
import Header from './components/Header/Header'
import About from './components/About/About'
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
        <Certificates />
        <Contact />
      </main>
      <footer className="footer">
        Designed &amp; built by{' '}
        <a href={about.social.github} target="_blank" rel="noopener noreferrer">
          Ajaiah Darlington
        </a>
      </footer>
    </div>
  )
}

export default App
