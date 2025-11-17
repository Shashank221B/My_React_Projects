import React from 'react'
import Hero from '../sections/Hero'
import About from '../sections/About'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'

const Home = () => {
  return (
    <div>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
    </div>
  )
}

export default Home