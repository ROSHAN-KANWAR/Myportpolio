import React, { Fragment } from 'react'

function Forms() {
  return (
    <Fragment>
    <form action="" method="get">
    <div className="mt-2">
        <label for="name" className=" form-label mb-2 text-white mt-3">Enter Your Name</label>
        <input type="text" name="name" id="name" placeholder="Enter Your Name..." className=" form-control" />
    </div>
    <div className="mt-2">
        <label for="email" className=" form-label mb-2 text-white mt-3">Enter Your Email</label>
        <input type="email" id="email" name="email" placeholder="Enter Your Name..." className=" form-control" />
    </div>
    <div className="mt-2">
        <label for="address" className=" form-label mb-2 text-white mt-3">Send Your Message</label>
       <textarea name="address" id="address" className=" form-control" ></textarea>
    </div>
    <div className="mt-4 text-center">
        <input type="submit" value="Send Message" className="text-white px-3 py-2 bg-success fw-bold rounded rounded-2" />
    </div>
  </form>
    </Fragment>
  )
}

export default Forms