import React from "react";
import { NavLink } from "react-router-dom";

function Navigation(){
    return(
        <nav className="hidden md:block font-semibold">
            <NavLink className="mx-5" to="/" end style={({isActive})=>({color:isActive?'rgb(255 255 255)':'rgb(140 150 160)'})}>
                Home
            </NavLink>
            <NavLink className="mx-5" to="/paradoxes" style={({isActive})=>({color:isActive?'rgb(255 255 255)':'rgb(140 150 160)'})}>
                Paradoxes
            </NavLink>
            <NavLink className="mx-5" to="/about" style={({isActive})=>({color:isActive?'rgb(255 255 255)':'rgb(140 150 160)'})}>
                About
            </NavLink>
            <NavLink className="mx-5" to="/faq" style={({isActive})=>({color:isActive?'rgb(255 255 255)':'rgb(140 150 160)'})}>
                FAQ
            </NavLink>
        </nav>
    );
}
export default Navigation;