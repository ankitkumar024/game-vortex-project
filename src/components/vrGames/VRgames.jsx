import React from 'react'
import './vrGames.css'
import { vrImg } from '../../assets/index'
import MarqueeAnimation from '../marqueeAnimation/MarqueeAnimation'

const VRgames = () => {
  return (
    <>
      <section className="vrGames">
        <div className="vrGames-content">
          <img src={vrImg} alt="VR" />

          <div className="vrGames-content_text">
            <h1>Discovery <span className='text-gradient'>virtual</span> reality gaming</h1>
            <p>A well-designed gaming header often incorporates elemants such as game chracters, iconic symbols, vibrant colors, and dynamic visuals to convey excitement, adventure, and the immmersive nature of gaming.</p>

            <button className="playNow btn-border">Play now</button>
          </div>
        </div>
      </section>

      <div className='animation_strip' id='vrStrip'>
        <MarqueeAnimation />
      </div>
    </>
  )
}

export default VRgames