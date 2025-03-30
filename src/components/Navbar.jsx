import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { navLinks } from "../constants";
import { menu, close } from "../assets";
import logo from "../assets/logo.png";

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
      className=" bg-primary border w-full flex items-center py-5 fixed top-0 z-20 "
      
    >
      <div className='w-full border bg-primary  flex justify-between items-center max-w-7xl mx-auto'>
        <Link
          to='/'
          className='flex items-center gap-2'
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt='logo' className='w-10 h-13 lg:h-13 md:h-20 object-contain ' />
          <p className='text-white text-[19px] lg:text-[19px] md:text-[24px] font-bold cursor-pointer flex '>
            Lavinea Souza &nbsp;
            <span className='sm:block hidden'> | Dominando JavaScript</span>
          </p>
        </Link>

        <ul className='list-none hidden lg:flex flex-row gap-10'>
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-white"
              } hover:text-[#3945ef] text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              {nav.href ? (
                <a href={nav.href} target="_blank" rel="noopener noreferrer">
                  {nav.title}
                </a>
              ) : (
                <a href={`#${nav.id}`}>{nav.title}</a>
              )}
            </li>
          ))}
        </ul>

        <div className='lg:hidden flex flex-1 justify-end items-center'>
          <img
            src={toggle ? close : menu}
            alt='menu'
            className='sm:w-[28px] sm:h-[28px] md:w-[40px] md:h-[40px]  object-contain'
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            }  navbar text-white absolute w-[100vw] z-[-10] h-[75vh]  md:h-[65vh]  flex items-end justify-end `}
          >
            <ul className='list-none flex justify-end items-center flex-1 flex-col gap-4'>
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[19px] md:text-[30px]   ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.title);
                  }}
                >
                  {nav.href ? (
                    <a href={nav.href} target="_blank" rel="noopener noreferrer">
                      {nav.title}
                    </a>
                  ) : (
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
