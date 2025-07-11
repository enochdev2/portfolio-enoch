import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

import { FaLinkedin, FaFacebook, FaXTwitter, FaGithub } from "react-icons/fa6";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Enoch&nbsp;
            <span className="sm:block hidden">| Full-Stack Developer</span>
          </p>
        </Link>

        {/* Desktop Nav Links + Icons */}
        <div className="hidden sm:flex flex-row gap-6 items-center">
          <ul className="list-none flex flex-row gap-6">
            {navLinks.map((nav) => (
              <li
                key={nav.id}
                className={`${
                  active === nav.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          {/* Social Icons */}
          <div className="flex flex-row items-center gap-3">
            <a
              href="https://www.linkedin.com/in/enoch-akhabue-01b991269/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="w-5 h-5 text-white hover:text-blue-500" />
            </a>
            <a
              href="https://facebook.com/prince.ikponmwosa.7?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook className="w-5 h-5 text-white hover:text-blue-600" />
            </a>
            <a
              href="https://x.com/Tech_Noch"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter className="w-5 h-5 text-white hover:text-gray-400" />
            </a>
            <a
              href="https://github.com/enochdev2?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="w-5 h-5 text-white hover:text-gray-400" />
            </a>
          </div>
        </div>

        {/* Mobile Hamburger Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-4 mx-4 my-2 min-w-[200px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-start items-start flex-col gap-4 w-full">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
              {/* Mobile View Icons */}
              <div className="flex flex-row items-center gap-4 mt-4">
                <a
                  href="https://www.linkedin.com/in/enoch-akhabue-01b991269/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="w-5 h-5 text-white hover:text-blue-500" />
                </a>
                <a
                  href="https://facebook.com/prince.ikponmwosa.7?mibextid=ZbWKwL"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook className="w-5 h-5 text-white hover:text-blue-600" />
                </a>
                <a
                  href="https://x.com/Tech_Noch"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaXTwitter className="w-5 h-5 text-white hover:text-gray-400" />
                </a>
                <a
                  href="https://github.com/enochdev2?tab=repositories"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="w-5 h-5 text-white hover:text-gray-400" />
                </a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
