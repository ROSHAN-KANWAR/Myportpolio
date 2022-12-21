import React, { Fragment } from 'react'
import SkillCard from '../CardData/SkillCard'
import TopHeading from './TopHeading'
function Skill() {
  return (
    <Fragment>
    <div className="container-fluid mt-2">
        <div className="row">
            <div className="col-md-12 text-white">
            <TopHeading heading="Skill" desci= "This is the contact page send your thought in mails" />
      
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