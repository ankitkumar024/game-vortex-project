import { useState } from 'react'
import { logo, bag, menu, close } from "../../assets/index"
import { navLinks } from "../../constants/index"
import './navbar.css'

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className='nav'>
        <div className='nav_logo'>
          <img src={logo} alt="gameVortex" />
          <h1>Game Vortex</h1>
        </div>

        <ul className='nav_dekstop_links'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={active === nav.title ? "active" : ""}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
          <li className='li_bag'><a href="#"><img className='bag_img' src={bag} alt="" /></a></li>
        </ul>

        <div className='mobile_menu'>
          <img className='mobile_menu_toggle'
            src={toggle ? close : menu}
            alt="menu"
            onClick={() => setToggle(!toggle)}
          />

          <div className={toggle ? "flex" : "hidden"}>
            <ul>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={active === nav.title ? "active" : ""}
                  onClick={() => setActive(nav.title)}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              <li className='li_bag'><a href="#"><img className='bag_img' src={bag} alt="" /></a></li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;