import React, { Fragment ,useState } from 'react'
import Home from '../Components/Home';
import { FaAlignRight,FaTimes } from "react-icons/fa";
import Scroll from '../Components/Scroll';

function Header() {
    const [Menuicons, setMenuicon] = useState(false)

  return (
    <Fragment>
   <div className="container-fluids" >
   <div className="container">  
   <div className="row text-white d-flex justify-content-center ">
       <header  className=" col-md-12 d-md-flex justify-content-between align-items-center p-2 mt-4  shadow-lg px-2 border-light align-items-center">
           <div className="logo">
               <span className="fw-bold" style={{fontSize: 40}}>ROSHAN</span>
               <div className="close">
                  <span  id="menu"><i onClick={()=>setMenuicon(!Menuicons)} style={{fontSize:25}}>{Menuicons ?<FaTimes/> :<FaAlignRight/>}</i></span>
               </div>
           </div> 
           <nav className={Menuicons ?  "homenav" : "homes"} id="homenavs">
               <ul className="d-md-flex  text-capitalize m-auto fw-bolder list-unstyled">
                   <li className="mt-md-0 mt-5 active "> <a  className=" text-decoration-none text-white"  href="#home"> Home</a></li> 
                   <li className="mt-md-0 mt-5"><a className=" text-decoration-none text-white"  href="#about"> About</a></li>
                   <li className="mt-md-0 mt-5"><a  className=" text-decoration-none text-white" href="#skill"> Skill</a></li>
                   <li className="mt-md-0 mt-5"><a className=" text-decoration-none text-white"  href="#project"> Project</a></li>
                   <li className="mt-md-0 mt-5"><a className=" text-decoration-none text-white"  href="#contact"> Contact</a></li>
               </ul>
           </nav>
          
       </header>
   </div>
 <Scroll/>
   </div>
<Home />
   </div>
    </Fragment>
  )
}

export default Header