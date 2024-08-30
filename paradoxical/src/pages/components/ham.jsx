import React, {useState,useContext, useEffect} from 'react'
import MyContext from '../../MyContext'
import { ReactComponent as CrossIcon } from '../../icons/cross.svg';
import { ReactComponent as BarsIcon } from '../../icons/bars.svg';

function Ham() {
  const click = useContext(MyContext);
  const [BarIconStyle, setBarIconStyle] = useState({transform: "scale(1)"});
  const [CrossIconStyle, setCrossIconStyle] = useState({ transform: "scale(0)" });

  useEffect(() => {
    if (click.sharedState) {
      // When toggling to Icon2, fade out Icon1 and fade in Icon2
      setBarIconStyle({ transform: "scale(1)", transition: "transform 0.5s ease-in-out" });
      setCrossIconStyle({ transform: "scale(0)", transition: "transform 0.5s ease-in-out" });
    } else {
      // When toggling back to Icon1, fade out Icon2 and fade in Icon1
      setBarIconStyle({ transform: "scale(0)", transition: "transform 0.5s ease-in-out" });
      setCrossIconStyle({ transform: "scale(1)", transition: "transform 0.5s ease-in-out" });
    }
  }, [click]);

  return (
    <button className='md:hidden' onClick={()=>(click.setSharedState(!click.sharedState))}>
            {
              click.sharedState?(
                <CrossIcon style={BarIconStyle}></CrossIcon>
              ):(
                <BarsIcon style={CrossIconStyle}></BarsIcon>
              )
            }
    </button>
  )
}

export default Ham;