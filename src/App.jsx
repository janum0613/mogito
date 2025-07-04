import React from 'react'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

// gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <div className='h-dvh bg-cyan-900'/>
    </main>
  )
}

export default App
