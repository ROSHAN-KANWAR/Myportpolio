import React, {Fragment} from 'react'

function TopHeading({heading ,desci}) {
  return (
    <Fragment>
        <div className="row text-center mt-5">         
        <h2 className="fw-bold ">{heading}</h2>
        <p className=" ">{desci}</p>
    </div>
    </Fragment>
  )
}

export default TopHeading