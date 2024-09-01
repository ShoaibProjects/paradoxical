import React from 'react'

function Card2(props) {
  return (
    <div className='md:flex md:px-48 mt-10 mb-10 md:mb-24'>
        <img className='rounded-lg w-4/5 md:w-2/5 mx-auto md:mx-0 mb-2 md:mb-0' src={props.src} alt="" />
        <div className='md:w-3/5 flex flex-col items-center justify-center md:px-12'>
            <h1 className='text-slate-200 text-3xl md:text-5xl mb-1 md:mb-2 font-semibold md:me-auto'>{props.heading}</h1>
            <h2 className="text-gray-500 text-xl md:text-3xl mb-2 md:mb-5 md:me-auto flex gap-4">{props.subheading}<span className='my-auto'>{props.hicon}</span></h2>
            <p className="font-light text-gray-300 text-lg px-4 md:px-0">{props.para}</p>
        </div>
    </div>
  )
}

export default Card2