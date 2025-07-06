import React from 'react'
import gsap from 'gsap'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import Cocktails from './components/Cocktails'
import About from './components/About'


 gsap.registerPlugin(ScrollTrigger,SplitText);

const App = () => {
  return (
    <main>
      <Navbar/>
      <Hero/>
      <Cocktails/>
      <About/>
      {/* <div className='h-dvh bg-cyan-900'/> */}
    </main>
  )
}

export default App
