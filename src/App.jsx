import Hero from './components/hero/Hero'
import Navbar from './components/navbar/Navbar'
import Scroller from './components/Scroller'

const App = () => {
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