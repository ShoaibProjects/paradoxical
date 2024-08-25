import React from "react";
import Navbar from "./navbar";
import Ham from "./ham";

function Header(props) {
    return (
        <>
            <header className="bg-sky-950 py-2 px-5 flex justify-between md:justify-start items-center">
                <div className="font-bold flex gap-1 md:gap-2 text-gray-100 items-center me-20 md:text-lg">
                    <img src="/images/logo.png" className="h-6 md:h-8" alt="" />
                    Paradoxical
                </div>
                <Navbar></Navbar>
                <Ham></Ham>
            </header>
        </>
    );
}
export default Header;
