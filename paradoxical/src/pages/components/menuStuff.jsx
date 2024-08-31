import React from 'react'
import { NavLink } from 'react-router-dom'
import { FaHome } from "react-icons/fa";
import { TbPuzzle2 } from "react-icons/tb";
import { FcAbout } from "react-icons/fc";
import { FcFaq } from "react-icons/fc";

function MEnuStuff() {
  return (
    <div>
       <nav className="flex flex-col font-semibold gap-y-4 h-min bg-indigo-950 p-12 rounded-lg border border-white focus:border-sky-500 hover:border-sky-500 w-fit mx-auto"  tabindex="0">
            <NavLink className="flex items-center gap-2 text-white" to="/" end style={({isActive})=>({filter:isActive?'brightness(1.1)':'brightness(0.65)',transform: isActive ? 'scale(1.1)' : 'scale(1)',transformOrigin: 'left',transition: 'transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), filter 0.3s ease'})}>
                <FaHome className='inline text-xl'></FaHome> Home
            </NavLink>
            <NavLink className="flex items-center gap-2 text-white" to="/paradoxes" style={({isActive})=>({filter:isActive?'brightness(1.1)':'brightness(0.65)',transform: isActive ? 'scale(1.1)' : 'scale(1)',transformOrigin: 'left',transition: 'transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), filter 0.3s ease'})}>
                <TbPuzzle2 className='inline text-xl'></TbPuzzle2> Paradoxes
            </NavLink>
            <NavLink className="flex items-center gap-2 text-white" to="/about" style={({isActive})=>({filter:isActive?'brightness(1.1)':'brightness(0.65)',transform: isActive ? 'scale(1.1)' : 'scale(1)',transformOrigin: 'left',transition: 'transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), filter 0.3s ease'})}>
                <FcAbout className='inline text-xl'></FcAbout> About
            </NavLink>
            <NavLink className="flex items-center gap-2 text-white" to="/faq" style={({isActive})=>({filter:isActive?'brightness(1.1)':'brightness(0.65)',transform: isActive ? 'scale(1.1)' : 'scale(1)',transformOrigin: 'left',transition: 'transform 0.5s cubic-bezier(0.68, -0.55, 0.27, 1.55), filter 0.3s ease'})}>
                <FcFaq className='inline text-xl'></FcFaq> FAQ
            </NavLink>
        </nav>
        <img src={`${process.env.PUBLIC_URL}/images/logo2.png`} alt="" className='h-1/3 w-1/3 mx-auto mt-20 opacity-50 animate-spin-slow ease-linear' style={{ transformOrigin: '50.1% 61.5%' }}/>
    </div>
  )
}

export default MEnuStuff