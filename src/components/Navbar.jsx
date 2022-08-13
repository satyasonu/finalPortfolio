import React from "react";
import Logo from "../assets/sslogo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import { Link } from 'react-scroll'

const Navbar = () => {
    const [nav, setNav]= useState(false);
  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 1,
      link: "about",
    },
    {
      id: 1,
      link: "portfolio",
    },
    {
      id: 1,
      link: "experience",
    },
    {
      id: 1,
      link: "contact",
    },
  ];
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <img src={Logo} alt="Logo" className="object-scale-down h-40 w-88" />
        {/* <h1 className='text-4xl font-bold font-signature'>Satya</h1> */}
      </div>
      <div>
        <ul className="hidden md:flex ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200"
            >
              <Link to={link} smooth duration={500}>{link}</Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Hamburger */}
      <div onClick={() => {setNav(!nav)}} className="cursor-pointer pr-4 text-gray-500 md:hidden">
        {nav ? <FaTimes size={30}/> : <FaBars size={30}/>}
      </div>

            {nav && (
                <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
                {links.map(({ id, link }) => (
                      <li
                        key={id}
                        className="px-4 cursor-pointer capitalize py-6 text-4xl"
                      >
                        {link}
                      </li>
                    ))}
                </ul>
            )}

      
      {/* Mobile menu */}
      <div className="hidden">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Skills</li>
          <li>Work</li>
          <li>Contact</li>
        </ul>
      </div>
      {/* Social Icons */}
      <div></div>
    </div>
  );
};

export default Navbar;
