import React from 'react'
import './footer.css'
import { logo, footerImg } from '../../assets'
import { footerLinks, clients, socialMedia } from '../../constants/index'
import MarqueeAnimation from "../marqueeAnimation/MarqueeAnimation"

const Footer = () => {
  return (
    <section className="footer">

      <div className='footerBgContainer '>
        <img className='footerBg' src={footerImg} alt="backgroundImg" />
      </div>

      <div className='animation_strip' id='footerStrip'>
        <MarqueeAnimation />
      </div>

      <div className="footer_container">
        <div className="footerLogo">
          <img src={logo} alt="logo" />
          <h1 className='gameVortex'>Game Vortex</h1>
        </div>

        <p className='footer_para'>A well-designed gaming header often incorporates elements such as game characters, iconic symbols, vibrant colors, and dynamic visuals .</p>

        <div className='footerLinks'>
          {footerLinks.map((footer) => (
            <div className="footer_links" key={footer.title}>
              <h2 className='title'>{footer.title}</h2>
              <ul>
                {footer.links.map((link, index) => (
                  <li key={link.name}>
                    {link.name}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>

      <div className="clients">
        {clients.map((clients) => (
          <div className="clientNames" key={clients.id}>
            <img src={clients.logo}
              key={clients.id}
              alt={clients.id}
            />
          </div>
        ))}
      </div>

      <div className="socialMedia" >
        {socialMedia.map((socialMedia, index) => (
          <div className="socials" key={socialMedia.id}>
            <img src={socialMedia.icon}
              key={socialMedia.id}
              alt={socialMedia.id}
              onClick={() => window.open(socialMedia.link)}
            />

          </div>
        ))}
      </div>

      <div className="copyright">
        <p>&copy; Copyright 2024. All Rights Reserved by Game Vortex</p>
      </div>
    </section>
  )
}

export default Footer