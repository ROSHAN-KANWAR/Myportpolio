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
    <div id="project"></div>
    <div className="container about mt-4 mb-4" >
    <div className="row text-center mt-4 text-dark">  
            {/* top heading sections */}      
    <TopHeading heading="Project" desci= "Check out my some project in the following" />
    </div>
    <div className="row text-center d-flex justify-content-center mt-3">
        <div className="col-md-8 project">
            <nav className="nav nav-pills d-flex flex-sm-row justify-content-between">
                <li  className="flex-sm-fill text-sm-center" activeClassName="active" onClick={()=>setitems(ProjectData)} >All</li>
                <li className="flex-sm-fill text-sm-center " onClick={() =>Datafill('react')}>React</li>
                <li className="flex-sm-fill text-sm-center" onClick={() =>Datafill('Django')}>Django</li>
              </nav>
        </div>
    </div>
            {/* for loop for project detail  */}
    <div className="row mt-5 px-4" style={{ zIndex:-1 }}>

    {
      items.map((item ,index)=>{
          return (
            <>
          <div className="col-md-4 mb-3 " key={index} style={{ zIndex:1 }}>
          <div className="card cards mb-3 shadow-lg">
  <img src={item.pimage} className="card-img-top mx-auto d-block w-100 img-fluid shadow-md" alt={item.title} loading="lazy" />
  <div className="card-body">
    <h5 className="card-title" style={{fontWeight:"bold"}}>{item.title}</h5>
    <p className="card-text">{item.descrip}</p>
    <a href={item.urls} target="_blank" rel="noreferrer noopener" className="card-link">View <FaAngleDoubleRight/></a>
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