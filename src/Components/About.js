import React, { Fragment } from 'react'
import Roshan from '../Photo/roshan-kanwar.jpg';
import AboutMe from './AboutMe'
import TopHeading from './TopHeading'
function About() {
  return (
    <Fragment>
    <div id="about" ></div>
    <div className="container mt-5 mb-5" >
        <div className="row d-flex justify-content-center">
        {/* top headinf sections */}
               <TopHeading heading="About Me" desci= ""/> 
             </div>
                <div className="about m-auto row shadow-lg p-2 d-flex justify-content-between  align-items-center m-0 mt-4" >
                    <div className="col-md-6 col-12 px-2  mb-3 d-flex "  style={{height:'50vh', padding: 0}}>
                        <img src={Roshan} alt="roshan kanwar about " loading="lazy" />
                    </div>
                    <div className="col-md-6">
                            {/* About sections descriptios */}
                <AboutMe />
            </div>
          </div>
          </div>
    </Fragment>
  )
}

export default About