import React from 'react';
import './favGames.css';
import { favGamesIcon, favGamesCircle, favGame1, favGame2, favGame3, favGamesTextBg } from '../../assets/index';
import Carousel from '../carousel/Carousel';

const FavGames = () => {
  const carouselImages = [favGame1, favGame2, favGame3];

  return (
    <section className="fav_games" id='products'>
      <div className='blur-bg' id='favGames-blur'></div>

      <div className="fav_games-content">
        <h1>Choose your <span className='text-gradient'>favorite</span>  games</h1>
        <p>Offer sneak peeks and previews of the upcoming games, including trailers, screenshots, and information about release.</p>
      </div>


      <div className="fav_games-carousel">
        <div className="carousel_icon">
          <img className='favCircle' src={favGamesCircle} alt="" />
          <img className='favIcon' src={favGamesIcon} alt="" />
        </div>

        <div className="carousel_img">
          <div className="img-container">
            <Carousel images={carouselImages} />
          </div>
        </div>

        <div className="carousel_text-bg">
          <img className='text-bg' src={favGamesTextBg} />
          <h1>Sneak peaks</h1>
        </div>
      </div>

      <div className='fav_games-btns'>
        <button className='viewAll btn-border' id='active'>View all</button>
        <button className='playNow btn-border'>Play now</button>
      </div>
    </section>
  );
}

export default FavGames;
