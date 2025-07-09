import './App.css'
import Header from './components/Header/Header'
import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Projects from './components/Projects/Projects'

function App() {
  return (
    <div className="app">
      <Header />
      <Navbar />
      <About />
      <Projects />
    </div>
  )
}

export default App
