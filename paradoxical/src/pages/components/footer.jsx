import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as FbIcon } from '../../icons/facebook.svg';
import { ReactComponent as GhIcon } from '../../icons/github.svg';
import { ReactComponent as LnIcon } from '../../icons/linkedin.svg';
import { ReactComponent as XIcon } from '../../icons/twitterx.svg';

function Footer() {
  return (
    <div className='w-full h-24 md:h-16 bg-slate-700 flex md:justify-between items-center flex-wrap justify-around py-1 md:py-0 gap-1.5 md:gap-0 pt-3 md:pt-0'>
        <div className='md:ms-4 text-slate-300 hover:text-slate-100 focus:text-slate-100 font-semibold'>&copy; 2024 Shoaib</div>
        <Link to="/" className="font-bold flex gap-1 md:gap-2 text-gray-100 brightness-75 hover:brightness-100 focus:brightness-100 items-center md:text-lg">
                    <img src={`${process.env.PUBLIC_URL}/images/logo.png`} className="h-6 md:h-8" alt="" />
                    Paradoxical
        </Link>
        <div className='h-3/5 flex justify-end gap-2 text-slate-400 mx-auto md:mx-0'>
            <a href='https://www.facebook.com/profile.php?id=100086582017751' className='h-3/5 w-fit my-auto me-4'><FbIcon className="h-full w-fit hover:text-white focus:text-white"></FbIcon></a>
            <a href='https://github.com/ShoaibProjects' className="h-3/6 w-fit my-auto me-4"><GhIcon className="h-full w-fit hover:text-white focus:text-white"></GhIcon></a>
            <a href='https://www.linkedin.com/in/shoaib-akhtar-117329252/' className="h-3/6 w-fit my-auto me-4"><LnIcon className="h-full w-fit hover:text-white focus:text-white"></LnIcon></a>
            <a href='https://x.com/ShoaibSDE' className="custom-height w-fit my-auto me-4"><XIcon className="h-full w-fit hover:text-white focus:text-white"></XIcon></a>
        </div>
    </div>
  )
}

export default Footer