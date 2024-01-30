import React from 'react'
import './topGames.css'
import { topGames } from '../../constants/index'

const TopGames = () => {
  return (
    <section className="topGames" id='apps&games'>
      <div className="blur-bg" id='topGames-blur'></div>
      <h1 className="topGames_header">
        Welcome to the top
      </h1>

      <div className="topGames_btns">
        <button className='newGames btn-border' id='active'>Newest Games</button>
        <button className='latestGames btn-border'>Latest Games</button>
        <button className='fightGames btn-border'>Fight Games</button>
        <button className='sportsGames btn-border'>Sport Games</button>
      </div>

      <div className="blur-bg" id='topGames-blur1'></div>


      <div className='topGames_cards'>
        {topGames.map((games) => (
          <div className='card' key={games.id}>
            <img className='game_img' src={games.img} alt="" />
            <h3>{games.title}</h3>
            <div className='creator'>
              <img src={games.logo} alt="" />
              <h5>{games.name}</h5>
            </div>
            <button className='liveDemo btn-border' id='active'>Live demo</button>
          </div>
        ))}
      </div>

      <div className="blur-bg" id='topGames-blur2'></div>


    </section>
  )
}

export default TopGames