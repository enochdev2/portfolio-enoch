import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import images from '../../constants/images';
import './Navbar.css';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = React.useState(false);
  return ( 
    <nav className="app__navbar bg-app__nav">
      <div className=" flex ml-4 md:ml-14 items-center h-14 w-25 "> 
        <img src="/archaic.svg" alt="app__logo" className='w-full h-full' />
        <h2 className='text-4xl font-bold bg-gradient-to-r from-sky-400 to-sky-800 via-sky-600 text-transparent  bg-clip-text'>
          <a href="/">
          TechArvel
          </a>
          </h2>
      </div>
      <ul className="app__navbar-links md:space-x-3 lg:space-x-5">
        <Link to={"/"} className="p__opensans font-bold">Home</Link>
        <Link to="/about" className="p__opensans font-bold">About</Link>
        <Link to="/service" className="p__opensans font-bold">Services</Link>
        <Link to="/blog" className="p__opensans font-bold">Blog</Link>
      </ul>
      <div className="app__navbar-login">
      <Link to="/contact" className="p__opensans px-5 py-3 font-bold border rounded-2xl  bg-gradient-to-r to-[--color-golden]/50 from-[--color-gray] ">Contact Us</Link>
      </div>
      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
            <ul className="app__navbar-smallscreen_links">
              <Link to="/" className='' onClick={() => setToggleMenu(false)}>
              Home
              </Link>
              <Link to="/about" className='' onClick={() => setToggleMenu(false)}>
              About
              </Link>
              <Link to="/service" className='' onClick={() => setToggleMenu(false)}>
              Services
              </Link>
              <Link to="/blog" className='' onClick={() => setToggleMenu(false)}>
              Blog
              </Link>
              <Link to="/contact" className='' onClick={() => setToggleMenu(false)}>
              Contact US
              </Link>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
