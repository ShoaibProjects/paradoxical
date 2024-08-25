import React, { useContext } from 'react'
import MyContext from '../../MyContext';

function Menu() {
  const click = useContext(MyContext)
  return (
    <>

      <div className={`md:hidden h-screen w-screen bg-indigo-950 fixed 
        transition-transform transform duration-500 ease-in-out ${click.sharedState ? `translate-x-0` : `translate-x-full`}`}>
        menu
      </div>

    </>
  )
}

export default Menu;