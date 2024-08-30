import React from "react";
import Navbar from "./navbar";
import Ham from "./ham";
import { Link } from "react-router-dom";

function Header() {
    return (
        <>
            <header className="fixed w-full bg-opacity-30 backdrop-blur-md bg-slate-700 shadow-md py-3 px-5 flex justify-between md:justify-start items-center z-50">
                <Link to="/">
                <div className="font-bold flex gap-1 md:gap-2 text-gray-100 items-center me-20 md:text-lg">
                    <img src={`${process.env.PUBLIC_URL}/images/logo.png`} className="h-6 md:h-8" alt="" />
                    Paradoxical
                </div></Link>
                <Navbar></Navbar>
                <Ham></Ham>
            </header>
        </>
    );
}
export default Header;
