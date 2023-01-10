import React, { Fragment } from 'react'
import SkillCard from '../CardData/SkillCard'
import TopHeading from './TopHeading'
function Skill() {
  return (
    <Fragment>
    <div className="container-fluid mt-4 mb-4" id="skill">
        <div className="row">
            <div className="col-md-12 text-white">
            <TopHeading heading="Skill" desci= "This is the my technical skill in the following technologies" />
      
            </div>
          
            <div className="row px-2 m-auto text-white d-flex justify-content-center">
               
                <SkillCard/>
                
              
            </div>
            </div>
            </div>

       </Fragment>
  )
}
export default Skill