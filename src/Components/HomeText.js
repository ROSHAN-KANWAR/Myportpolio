import React, { Fragment } from 'react';

import { FaGithub,FaLinkedin} from "react-icons/fa";

function HomeText() {
  return (
    <Fragment>
    <div className="col-md-6  home text-md-start text-center">
                <div >
                    <span><i  className="ms-3" style={{fontSize:30}}><a  href="https://github.com/ROSHAN-KANWAR" target="_blank" className="text-white"> <FaGithub /></a></i></span>
                    <span><i className="ms-3" style={{fontSize:30}}><a href="https://in.linkedin.com/in/roshan-kanwar-b80150170" target="_blank" className="text-white"> <FaLinkedin/> </a></i></span>
                </div>
                <h1>Hello, I'm Roshan</h1>
                <h3 className="m-2">Web Developer</h3>
                <p style={{fontSize:20 ,fontWeight:600}}>Better People, Better Websites<br/>
                HTML || CSS || JAVASCRIPT || REACTJS </p>
           <div className="mt-5 ">
            <a href="#project" className=" cards px-4 me-3 fw-bolder py-2 btn-outline-ligh text-dark text-decoration-none border border-dark bg-light rounded-pill">Project</a>
            <a href="#contact" className="px-4 cards py-2 fw-bold btn-outline-light text-white text-decoration-none bg-dark border border-light rounded-pill">Contact Me</a>
           </div>
            </div>
    </Fragment>
  )
}

export default HomeText