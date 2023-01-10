import React, { Fragment ,useState } from 'react'
import { FaAlignRight,FaTimes } from "react-icons/fa";


function Header() {
    const [Menuicons, setMenuicon] = useState(false)
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
    <div id="header" className={fix ? 'fixed px-12' :''}>
  <header  className='col-md-12 py-2 d-md-flex justify-content-between align-items-center p-2 shadow-lg px-2 border-light align-items-center'>
           <div className="logo text-white">
           <a href='#home'  rel="noreferrer noopener" className="text-decoration-none text-white">
               <span className="fw-bold" style={{fontSize: 40}}>ROSHAN</span>
            </a>
               <div className="close">
                  <span  id="menu"><i onClick={()=>setMenuicon(!Menuicons)} style={{fontSize:25}}>{Menuicons ?<FaTimes/> :<FaAlignRight/>}</i></span>
                  </div>
           </div> 
           <nav className={Menuicons ?  "homenav" : "homes"} id="homenavs">
               <ul className="d-md-flex  text-capitalize m-auto fw-bolder list-unstyled">
                   <li className="mt-md-0 mt-5 active "> <a  className=" text-decoration-none text-white"  href="#home"  rel="noreferrer noopener"> Home</a></li> 
                   <li className="mt-md-0 mt-5"><a className=" text-decoration-none text-white"  href="#about"   rel="noreferrer noopener"> About</a></li>
                   <li className="mt-md-0 mt-5"><a  className=" text-decoration-none text-white" href="#skill"  rel="noreferrer noopener"> Skill</a></li>
                   <li className="mt-md-0 mt-5"><a className=" text-decoration-none text-white"  href="#project"  rel="noreferrer noopener"> Project</a></li>
                   <li className="mt-md-0 mt-5"><a className=" text-decoration-none text-white"  href="#contact"  rel="noreferrer noopener"> Contact</a></li>
               </ul>
           </nav>
          
       </header>
 </div>
    </Fragment>
  )
}

export default Header