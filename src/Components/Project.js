import React, { Fragment,useState } from 'react'
import TopHeading from './TopHeading';
import ProjectData from '../CardData/ProjectData';
import {FaAngleDoubleRight  } from "react-icons/fa";

function Project() {
  const [items ,setitems] = useState(ProjectData);
  const Datafill = (ele)=>{
  const upitems = ProjectData.filter((old)=>{
    return old.category === ele;
  });
setitems(upitems);
  
  }
  return (
    <Fragment>
    <div className="container about ">
    <div className="row text-center mt-4 text-dark">         
    <TopHeading heading="Project" desci= "This is the contact page send your thought in mails" />
    </div>
    <div className="row text-center d-flex justify-content-center mt-3">
        <div className="col-md-8 project">
            <nav className="nav nav-pills d-flex flex-sm-row justify-content-between">
                <li  className="flex-sm-fill text-sm-center active" onClick={()=>setitems(ProjectData)} >All</li>
                <li className="flex-sm-fill text-sm-center " onClick={() =>Datafill('web')}>Website</li>
                <li className="flex-sm-fill text-sm-center" onClick={() =>Datafill('design')}>Design</li>
              </nav>
        </div>
    </div>
    <div className="row mt-5" style={{ zIndex:-1 }}>

    {
      items.map((item ,index)=>{
          return (
            <>
          <div className="col-md-4" key={index} style={{ zIndex:-1 }}>
          <div className="card mb-3 p-2  shadow shadow-sm">
                <div className="card-body">
                <img src={item.pimage} className="card-img-top" alt={item.title} />
                <h5 className="card-title fw-bolder mt-2">{item.title}</h5>
                <p className="card-text">{item.descrip}</p>
                <span className=" text-primary fw-bold"><a href={item.urls}> View <FaAngleDoubleRight/></a></span>
              </div>
            </div>
      </div>
      </>
      )
      })
  }
 
     
      </div>
    </div>
    
    </Fragment>
  )
}

export default Project