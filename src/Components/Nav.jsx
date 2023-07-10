import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsGithub } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai"


const Nav = () => {

  const mobileMenu = () => { document.querySelector('#mobile-menu').classList.toggle('hidden') }
  const mobileMenuClose = () => { document.querySelector('#mobile-menu').classList.add('hidden') }

  return (
    <header className='flex justify-between dark bg-slate-800 bg-black items-center p-3 px-4 md:px-40'>
      
      <div className="logo text-2xl flex items-center">
        <Link to={"/"}>
          <BsGithub className="text-2xl md:text-3xl" />
        </Link>
        <h1 className="mx-3 text-sm md:text-2xl">
          <Link to={"/"}>Github Finder</Link>
        </h1>
      </div>

     
      <nav className="hidden md:flex md:items-center ">
        <ul className="flex text-sm md:text-xl">
          <li className="mx-3 border-b-2 border-white/[0] hover:border-white/[100] ">
            <NavLink to="/" className={( isActive) =>  isActive.isActive ? "text-orange-400" : ""}>
              Home
            </NavLink>
          </li>
          <li className="mx-3 border-b-2 border-white/[0] hover:border-white/[100] ">
            <NavLink to="/UserProfile" className={( isActive) =>  isActive.isActive ? "text-orange-400" : ""}>
              Profile
            </NavLink>
          </li>
          <li className="mx-3 border-b-2 border-white/[0] hover:border-white/[100] ">
            <NavLink to="/About" className={( isActive) =>  isActive.isActive ? "text-orange-400" : ""}>
              About
            </NavLink>
          </li>
        </ul>
       
      </nav>

    
      <div className="md:hidden flex mr-2">
        
        <button onClick={mobileMenu} className=" md:hidden">
          <AiOutlineMenu className="text-3xl" />
        </button>
      </div>

      {/* Mobile Menu */}
      <ul id="mobile-menu" className='hidden md:hidden absolute z-10 top-16 left-0 dark bg-slate-800 bg-black w-full flex flex-col items-center'>
        <li onClick={mobileMenuClose} className="p-3">
          <NavLink to="/" className={(active) => active.isActive ? "text-orange-400" : ""}>
            Home
          </NavLink>
        </li>
        <li onClick={mobileMenuClose} className="p-3">
          <NavLink to="/UserProfile" className={(active) => active.isActive ? "text-orange-400" : ""}>
            Profile
          </NavLink>
        </li>
        <li onClick={mobileMenuClose} className="p-3">
          <NavLink to="/about" className={(active) => active.isActive ? "text-orange-400" : ""}>
            About
          </NavLink>
        </li>
      </ul>
    </header>
  );
};

export default Nav;
