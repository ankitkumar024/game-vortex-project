import React from 'react'
import { heroImg } from '../../assets/index'
import './hero.css'

const Hero = () => {
  return (
    <section className="hero">
      <div className='hero_img'>
        <img src={heroImg} alt="" />
      </div>

      <div className='hero_content'>
        <h1 className="hero_content-header">
          Let your mind <span className='text-gradient'>explore</span>  new world
        </h1>
        <p className="hero_content-para">
          Playing electronic games, wether through consoles, computers, mobile phones, or another medium altogether. Gaming is a nuanced term that suggests regular gameplay, possible as a hobby.
        </p>
      </div>

      <div className="hero_btns">
        <button className='buyNow btn-border active' id='active'>BUY NOW</button>
        <button className='playNow btn-border'>PLAY NOW</button>
      </div>

      <div className="hero_nums">
        <div className="hero_nums-unique">
          <h1>300+</h1>
          <p>Unique Style</p>
        </div>

        <div className="hero_nums-project">
          <h1 className='text-gradient'>200+</h1>
          <p>Project Finished</p>
        </div>

        <div className="hero_nums-customer">
          <h1>500+</h1>
          <p>Happy Customer</p>
        </div>
      </div>


    </section>
  )
}

export default Hero