import { useEffect } from 'react'
import Hero from './features/hero/Hero'
import Navbar from './components/layout/navbar/Navbar'
import Scroller from './components/layout/Scroller'
import Lenis from 'lenis'
import CursorGlow from './components/layout/CursorGlow'
import About from './features/about/About'
import Education from './features/experience/Education'
import Skills from './features/skills/Skills'
import Resume from './features/resume/Resume'
import Contact from './features/contact/Contact'
import Work from './features/work/Work'


const App = () => {

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.1,
      smoothWheel: true
    })

    return () => {
      lenis.destroy()
    }
  }, [])


  return (
  <div>
    <Navbar />
    <CursorGlow />
    <Scroller />
    
    <section id="hero">
      <Hero />
    </section>

    <section id="about">
      <About />
    </section>

    <section id="education">
      <Education />
    </section>

    <section id="work">
      <Work />
    </section>

    <section id="skills">
      <Skills />
    </section>

    <section id="resume">
      <Resume />
    </section>

    <section id="contact">
      <Contact />
    </section>
  </div>
)
}

export default App