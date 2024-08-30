import React, { useContext } from 'react'
import MyContext from '../../MyContext';
import MEnuStuff from './menuStuff';

function Menu() {
  const click = useContext(MyContext)
  return (
    <>

      <div className={`md:hidden h-screen w-screen flex items-start pt-20 justify-center bg-indigo-950 fixed z-30 
        transition-transform transform duration-500 ease-in-out ${click.sharedState ? `translate-x-0` : `translate-x-full`}`}>
        <MEnuStuff></MEnuStuff>
      </div>

    </>
  )
}

export default Menu;