import React, { Fragment } from 'react'
import Chandersh from '../Photo/chandersh.jpg'
import AboutMe from './AboutMe'
function About() {
  return (
    <Fragment>
    <div className="container mt-5 ">
        <div className="row d-flex justify-content-center">
            <div className="col-md-12">
                <div className="row text-center">         
                <h2 className="fw-bold">About Me</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit Dolorem, dignissimos.</p>
            </div>
             </div>
             </div>
                <div className="about m-auto row shadow-lg p-2 d-flex justify-content-between  align-items-center m-0 mt-4" >
                    <div className="col-md-6 col-12 px-2  mb-3 d-flex "  style={{height:'50vh', padding: 0}}>
                        <img src={Chandersh} alt="mera hai" />
                    </div>
                    <div className="col-md-6">
                <AboutMe />
            </div>
          </div>
          </div>
    </Fragment>
  )
}

export default About