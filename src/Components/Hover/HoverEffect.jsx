import React, { useContext } from 'react'
import { LayoutContext } from '../../LayOuts/MainLayOut'
function HoverEffect(props) {
    const sizehoverHandler = useContext(LayoutContext)
return (
    <div>
        <div className='HoverEffect' onMouseEnter={()=>{sizehoverHandler(true)}} onMouseLeave={()=>{sizehoverHandler(false)}} >
            {props.children}
        </div>
        
    </div>
)
}

export default HoverEffect