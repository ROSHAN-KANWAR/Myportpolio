import React, { Fragment } from 'react'
import SkillCard from '../CardData/SkillCard'
import TopHeading from './TopHeading'
function Skill() {
  return (
    <Fragment>
    <div  id="skill"></div>
    <div className="container-fluid mt-4 mb-4">
        <div className="row text-white">
        {/* top heading sections */}
            <TopHeading heading="Skill" desci= "This is the my technical skill in the following technologies" />
            </div>
          
            <div className="row px-2 m-auto text-white d-flex justify-content-center">
                      {/* Skill sections with percentage*/} 
                <SkillCard/>
                
              
            </div>
            </div>
            

       </Fragment>
  )
}
export default Skill