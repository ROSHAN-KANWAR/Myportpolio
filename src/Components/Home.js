import React, { Fragment } from 'react';
import Roshan from '../Photo/roshan-kanwar.jpg';
import HomeText from './HomeText';
import {FaAngleDoubleDown  } from "react-icons/fa";
function Home() {
  return (
  <Fragment>
  <div className='container' id="home">
  <div className="row text-white  d-flex justify-content-center align-items-center" style={{ height:'80vh'}}>
            <HomeText />
          <div className="col-md-6 text-center d-md-block d-none">
            <img  src={Roshan} loading="lazy" alt="Roshan kanwar portpolio website" className="Imgani rounded-pill border border-4 border-light" style={{height:300, width:300}} />
          </div>
        </div>
        <div className="text-center anis">
    <span  className="text-center text-white mb-3" ><i className="" style={{fontSize:20}}><FaAngleDoubleDown /></i></span>
</div>
</div>
  </Fragment>
  )
}

export default Home