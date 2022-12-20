import React, { Fragment } from 'react'
import Forms from './Forms'
import TopHeading from './TopHeading'

function Contact() {
  return (
    <Fragment>
    <div className="container-fluid mt-5 d-flex justify-content-center">
    <div className="row mt-5 ab">
    <div className='col-md-12 text-white'>
   <TopHeading heading="Contact Us" desci= "This is the contact page send your thought in mails" />
   </div>
   <div className="row project m-auto shadow-lg px-2 py-4 d-flex justify-content-between align-items-center m-0 mt-4" >
                <div className="col-md-6 m-auto px-3 text-white"  >
                <div className="">
                    <span><b>Location</b> <p>Korba , Chattisgarh India</p></span>
                </div>
            
                <div className="">
                    <span><b>Email</b>
                        <p>cpkroshan1705@gmail.com</p>
                    </span>
                </div>
                </div>
                <div className="col-md-6">
                 <Forms />
            </div>
        </div>
    </div> 
    </div>
    </Fragment>
  )
}

export default Contact