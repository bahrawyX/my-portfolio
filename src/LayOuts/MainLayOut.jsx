import React, { createContext, useState } from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import StickyCursor from '../Components/Cool/StickyCursor'
import Footer from '../Components/Footer/Footer'    

const LayoutContext = createContext();



function MainLayOut() {
    const [scale,setScale] = useState(1);
    
 const size = (ifHovered=false)=>{
  
    if(ifHovered){
        setScale(3)
  
    }else{
        setScale(1)
    }
  
  }


return (
<LayoutContext.Provider value={size}>

<Navbar />
<StickyCursor scale={scale} />
<Outlet />
{/* <Footer /> */}
{/* <ParticleBackGround /> */}

</LayoutContext.Provider>

)
}
export {LayoutContext}
export default MainLayOut