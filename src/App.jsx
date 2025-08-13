import Wrapper from './components/Wrapper'
import './index.css'
import About from './pages/About'
import Contact from './pages/Contact'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Testimonials from './pages/Testimonials'

function App() {

  return (
    <div className='bg-[#060010] h-fit'>
      
        <Home />
      <Wrapper>
        <About />
        <Projects />
      </Wrapper>
        <Skills />
        <Testimonials />
        <Contact />
    </div>
  )
}

export default App
