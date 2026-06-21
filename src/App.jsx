import { useEffect } from 'react'
import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Scroller from './components/Scroller'
import Lenis from 'lenis'

const App = () => {

  useEffect(()=>{
    const lenis = new Lenis({
      autoRaf: true,
      lerp: 0.04,
      smoothWheel: true
    });
  },[])

  return (
    <div>
      <Navbar />
      <Scroller />
      <Hero />
      <div className='h-screen w-full bg-gray-400'></div>
      <div className='h-screen w-full bg-gray-500'></div>
    </div>
  )
}

export default App