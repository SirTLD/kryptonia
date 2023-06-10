import React, { useEffect, useState } from 'react'

import Aos from 'aos'
import 'aos/dist/aos.css'

import NavMobile from './components/NavMobile'
import Header from './components/Header'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Why from './components/Why'
import Calculate from './components/Calculate'

const App = () => {
  // mobile nav

  const [navMobile, setNavMobile] = useState(false)

  useEffect(() => {
    Aos.init({
      duration: 2500,
      delay: 400
    })
  })

  return (
    <div className='overflow-hidden'>
      <Header setNavMobile={setNavMobile} />
      <Hero />
      {/* Nav Menu */}
      <div
        className={`${
          navMobile ? 'right-0' : '-right-full'
        }fixed z-10 top-0 h-full transition-all duration-200`}
      >
        <NavMobile setNavMobile={setNavMobile} />
      </div>
      <Stats />
      <Why />
      <Calculate />
      <div className='h-[2000px]'></div>
    </div>
  )
}

export default App
