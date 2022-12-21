import React, { Fragment } from 'react';

import { FaGithub,FaLinkedin} from "react-icons/fa";

function HomeText() {
  return (
    <Fragment>
    <div className="col-md-6  home text-md-start text-center">
                <div >
                    <span><i  className="ms-3" style={{fontSize:30}}><FaGithub /></i></span>
                    <span><i className="ms-3" style={{fontSize:30}}><FaLinkedin/></i></span>
                </div>
                <h1>Hello, I'm Roshan</h1>
                <h5 className="ms-3">web developer</h5>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. S amet consectetur adipisicing elit. Sit, nam.</p>
           <div className="mt-5 ">
            <a href="#project" className="px-4 me-3 fw-bolder py-2 btn-outline-ligh text-dark text-decoration-none border border-dark bg-light rounded-pill">Project</a>
            <a href="#contact" className="px-4 py-2 fw-bold btn-outline-light text-white text-decoration-none bg-dark border border-light rounded-pill">Contact Me</a>
           </div>
            </div>
    </Fragment>
  )
}

export default HomeText