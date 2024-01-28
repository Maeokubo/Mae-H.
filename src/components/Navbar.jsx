import { navLinks } from '../constants';
import React, { useState, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { BsFillCloudMoonFill } from 'react-icons/bs';

const Navbar = () => {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    document.body.classList.toggle('dark', darkMode);
  }, [darkMode]);

  return (
    <header className="fixed padding-x py-0 z-50 w-full bg-stone-900">
      <nav className="flex justify-between item-center max-container text-stone-400 p-8 h-24 px-10">
        <a href="/" className="font-montserrat leading-normal text-2xl uppercase font-semibold text-slate-gray">
          Maeday
        </a>
        <ul className="flex flex-1 justify-end items-center gap-12 font-montserrat max-lg:hidden">
          {navLinks.map((item, index) => (
            <li key={index}>
              <a href={item.href} className="hover:text-yellow p-4">
                {item.label}
              </a>
            </li>
          ))}
          <li className="hover:text-yellow p-4">
            <BsFillCloudMoonFill onClick={() => setDarkMode(!darkMode)} />
          </li>
        </ul>
        <div className="block md:hidden" onClick={handleNav}>
          {!nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
        </div>
        <div className={!nav ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-stone-900 ease-in-out duration-500" : "fixed left-[-100%]"} >
          <ul className="flex flex-col uppercase text-stone-50 p-4 pt-22">
            {navLinks.map((item, index) => (
              <li key={index}>
                <a href={item.href} className="hover:text-yellow border-b p-4 md:p-4">
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navbar

