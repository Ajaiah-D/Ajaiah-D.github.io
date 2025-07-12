import './App.css'
import Header from './components/Header/Header'
// import Navbar from './components/Navbar/Navbar'
import About from './components/About/About'
import Projects from './components/Projects/Projects'
import Certificates from './components/Certificates/Certificates'
import Contact from './components/Contact/Contact'

function App() {
  return (
    <div className="app">
      <Header />
      {/* <Navbar /> */}
      <About />
      <Projects />
      <Certificates />
      <Contact />
    </div>
  )
}

export default App
