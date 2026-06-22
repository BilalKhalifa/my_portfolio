import { useEffect } from 'react'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Scroller from './components/Scroller'
import Lenis from 'lenis'
import CursorGlow from './components/ui/CursorGlow'
import Experience from './components/experience/Experience'
import Work from './components/work/Work'
import Skills from './components/skills/Skills'
import Resume from './components/resume/Resume'
import Contact from './components/contact/Contact'

const App = () => {

  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.04,
      smoothWheel: true
    })
  }, [])

  return (
    <div>
      <Navbar />
      <Scroller />
      <CursorGlow />
      <section id="hero">
        <Hero />
      </section>
      <section id="experience">
        <Experience />
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