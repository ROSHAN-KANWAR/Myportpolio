import React,{Fragment} from 'react'

function AboutMe() {
  return (
    <Fragment>
    <h3 className="fw-bold mb-3">Roshan Kanwar</h3>
    <p className="text-start">Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Nesciunt, quasi officia maiores perferendis, amet autem debitis ad nam explicabo similique iure nisi necessitatibus.
     Unde commodi temporibus repellendus in maiores aliquid.</p>
     <div className="">
         <h5 className="fw-bold mb-3">Here are few Highlight :</h5>
         <ul>
             <li>Full stack web development</li>
             <li>React ans Django</li>
             <li>Managing Database</li>
             <li>Interactive front end as per the design</li>
         </ul>
     </div>
     <div className="mt-5 my-3">
          <a href="http://localhost:3000/" className="px-3 py-2 btn-outline-light text-white text-decoration-none bg-dark border border-light rounded-pill">Get Resume</a>
     </div>
    </Fragment>
  )
}

export default AboutMe