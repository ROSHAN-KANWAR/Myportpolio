import React, { Fragment ,useState } from 'react'
import { FaAlignRight,FaTimes } from "react-icons/fa";
import Mainlogo from './Mainlogo';


function Header() {
  // Menu bar close and
    const [Menuicons, setMenuicon] = useState(false)
 //When scroll -y navbar fixed on the top of header
    const [fix ,setfix] = useState(false)
  const Setfixed=()=>{
    if(window.scrollY>=130){
      setfix(true)
    }
    else{
      setfix(false)
    }
  }
  window.addEventListener('scroll' ,Setfixed)
  return (
    <Fragment>
    <div id="header" className={fix ? 'fixed md:px-12 sm:px-24 px-2' :''}>
  <header  className={fix ?' col-md-10 mx-auto py-2   d-md-flex justify-content-between align-items-center  shadow-lg border-light align-items-center' :'col-md-12 py-2   d-md-flex justify-content-between align-items-center  shadow-lg px-2 border-light align-items-center'}>
           <div className="logo text-white">
           {/* main logo */}
            <Mainlogo/>
               <div className="close">
                  <span  id="menu"><i onClick={()=>setMenuicon(!Menuicons)} style={{fontSize:25}}>{Menuicons ?<FaTimes/> :<FaAlignRight/>}</i></span>
                  </div>
           </div> 
           <nav className={Menuicons ?  "homenav" : "homes"} id="homenavs">
               <ul className="d-md-flex  text-capitalize m-auto fw-bolder list-unstyled">
               <a onClick={()=>setMenuicon(!Menuicons)} className=" text-decoration-none text-white"  href="#home"  rel="noreferrer noopener"> <li className="mt-md-0 mt-5 active ">Home</li> </a>
                   <a  onClick={()=>setMenuicon(!Menuicons)} className=" text-decoration-none text-white"  href="#about"   rel="noreferrer noopener"><li className="mt-md-0 mt-5"> About</li> </a>
                   <a onClick={()=>setMenuicon(!Menuicons)}  className=" text-decoration-none text-white" href="#skill"  rel="noreferrer noopener"><li className="mt-md-0 mt-5"> Skill</li></a>
                   <a onClick={()=>setMenuicon(!Menuicons)} className=" text-decoration-none text-white"  href="#project"  rel="noreferrer noopener">   <li className="mt-md-0 mt-5">Project</li></a>
                   <a onClick={()=>setMenuicon(!Menuicons)} className=" text-decoration-none text-white"  href="#contact"  rel="noreferrer noopener">  <li className="mt-md-0 mt-5">Contact</li></a>
               </ul>
           </nav>
          
       </header>
 </div>
    </Fragment>
  )
}

export default Header