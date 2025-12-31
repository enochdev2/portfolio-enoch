import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import {
  logo,
  menu,
  close,
  linkedin,
  facebook,
  twitter,
  github,
} from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 overflow-x-hidden ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
            Enoch &nbsp;
            <span className="sm:block hidden"> | Full-Stack developer</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
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
            } p-6 black-gradient absolute top-20 right-10 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
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
            </ul>
          </div>
        </div>
      </div>
      <div className="bg-transparent ml-1 md:ml-10 overflow-x-hidden flex space-x-1 md:space-x-4  text-end">
        <a
          href="https://www.linkedin.com/in/enoch-akhabue-01b991269/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
        >
          <img
            src={linkedin}
            alt=""
            className="w-9 h-9 object-contain rounded-full"
          />
        </a>
        <a
          href="https://facebook.com/prince.ikponmwosa.7?mibextid=ZbWKwL"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block"
        >
          <img
            src={facebook}
            alt=""
            className="w-9 h-9 object-contain  rounded-full"
          />
        </a>
        <a
          href="https://x.com/Multi_Chain_Dev"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block "
        >
          <img
            src={twitter}
            alt=""
            className="w-9 h-9 object-contain rounded-full"
          />
        </a>
        <a
          href="https://github.com/enochdev2?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github} alt="" className="w-9 h-9 object-contain" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
