import React, { Fragment} from 'react'
import SkillData from './SkillData';
function SkillCard() {
    
  return (
    <Fragment>
    <div className="row w-75 m-auto  px-2 m-auto d-flex justify-content-center">
                    {
                        SkillData.map((items ,index)=>{
                            return(
                                <Fragment>
                                <div className="col-sm-5 text-center" key ={index}>
                                <h4 className="mt-4">{items.lang}</h4>
                                <div className="progress">
                                    <div className={items.colr} role="progressbar" style={{width:items.percen}} aria-valuenow="100"
                                        aria-valuemin="0" aria-valuemax="100">{items.percen}</div>
                                </div>
                            </div>
                                </Fragment>
                            )
                        })
                    }       
                  
                           
                    
                        </div>
           
    </Fragment>
  )
}

export default SkillCard