import { useEffect } from 'react'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Scroller from './components/Scroller'
import Lenis from 'lenis'
import CursorGlow from './components/ui/CursorGlow'
import Work from './components/work/Work'
import Skills from './components/skills/Skills'
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'
import Education from './components/experience/Education'
import About from './components/about/About'

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
      <Scroller />
      <CursorGlow />
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