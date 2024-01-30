import React from 'react'
import './marqueeAnimation.css'
import { gameCategories } from '../../constants/index'
import Marquee from "react-fast-marquee";

const MarqueeAnimation = () => {
  return (
    <Marquee>
      <div className='animation-strip'>
        <div className="categories">
          {gameCategories.map((gameCategories) => (
            <div className='categories_content' key={gameCategories.id}>
              <img src={gameCategories.icon} alt={gameCategories.id} />
              <h1>{gameCategories.title}</h1>
            </div>
          ))}
          {gameCategories.map((gameCategories) => (
            <div className='categories_content' key={gameCategories.id}>
              <img src={gameCategories.icon} alt={gameCategories.id} />
              <h1>{gameCategories.title}</h1>
            </div>
          ))}
        </div>
      </div>
    </Marquee>
  )
}

export default MarqueeAnimation