import React from 'react'
import './hero.css'

function Hero() {
  return (
    <section className='hero'>
      <div className='container'>
        <h1>A modern publishing platform</h1>
        <p>Grow your audience and build your online brand </p>
        <div className='hero-btns'>
          <a className='start' href='/'>Start for Free</a>
          <a className='learn' href='/'> Learn More</a>
        </div>
      </div>
    </section>
  )
}

export default Hero