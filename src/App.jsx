import { lazy, Suspense, useEffect } from 'react'
import Hero from './components/features/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Scroller from './components/Scroller'
import Lenis from 'lenis'
import CursorGlow from './components/CursorGlow'


const About = lazy(()=> import('./components/features/about/About'))
const Education = lazy(()=> import('./components/features/experience/Education'))
const Work = lazy(()=> import('./components/features/work/Work'))
const Skills = lazy(()=> import('./components/features/skills/Skills'))
const Resume = lazy(()=> import('./components/features/resume/Resume'))
const Contact = lazy(()=> import('./components/features/contact/Contact'))

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
      <section id="hero">
        <Hero />
      </section>
      <Suspense fallback = {<div className='h-screen flex items-center justify-center bg-primary text-white/50'> Loading...</div>}>
        <Scroller />
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
      </Suspense>
    </div>
  )
}

export default App