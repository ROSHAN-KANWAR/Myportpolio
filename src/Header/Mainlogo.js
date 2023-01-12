import React, { Fragment } from 'react'
import Logo from '../Photo/logo.png'
function Mainlogo() {
  return (
   <Fragment>
   <a href='#home'   rel="noreferrer noopener" className="text-decoration-none text-white">
   <img src={Logo}  className=" img-fluid" style={{width:'70px' ,height:'70px'}}  alt="main roshan logo" />
</a>
   </Fragment>
  )
}

export default Mainlogo