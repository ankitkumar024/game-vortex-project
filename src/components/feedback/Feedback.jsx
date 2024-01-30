import React from 'react';
import Slider from 'react-slick';
import { feedback } from '../../constants/index';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './feedback.css';

const Feedback = () => {
  const settings = {
    dots: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 5000, // Increased autoplay speed for better user experience
    responsive: [
      {
        breakpoint: 768, // Adjust settings for tablets
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="feedbacks">
      <div className="feedbacks_container">
        <Slider className='slider' {...settings}>
          {feedback.map((item) => (
            <div className="feedback_cards" key={item.id}>

              <img className="raiting" src={item.starsImg} alt="rating" />
              <p className='cards_para'>{item.comment}</p>
              <hr />
              <div className="feedback_user">
                <img className="userImg" src={item.userImg} alt="user" />
                <div className='user_name'>
                  <h2>{item.name}</h2>
                  <p>{item.work}</p>
                </div>

                <img className="verified" src={item.verifiedImg} alt="verified" />

              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;
