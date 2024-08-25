import React, {useContext} from 'react'
import MyContext from '../../MyContext'
import { ReactComponent as CrossIcon } from '../../icons/cross.svg';
import { ReactComponent as BarsIcon } from '../../icons/bars.svg';

function Ham(props) {
  const click = useContext(MyContext);
  return (
    <button className='md:hidden' onClick={()=>(click.setSharedState(!click.sharedState))}>
            {
              click.sharedState?(
                <CrossIcon></CrossIcon>
              ):(
                <BarsIcon></BarsIcon>
              )
            }
    </button>
  )
}

export default Ham;