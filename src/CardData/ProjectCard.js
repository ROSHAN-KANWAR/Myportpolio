import React, { Fragment,useState } from 'react';
import { FaAngleDoubleRight } from "react-icons/fa";
function ProjectCard(props) {
    const [Pdata, setfirst] = useState(props.fils)
  return (
    <Fragment>
    {
        Pdata.map((item ,index)=>{
            return (
              <div>
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
        </div>
        )
        })
    }
   
       
    </Fragment>
  )
}

export default ProjectCard