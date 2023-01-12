import React,{Fragment} from 'react'

function AboutMe() {
  return (
    <Fragment>
    <p className="text-start" style={{fontSize:'16px',letterSpacing:'1px',lineHeight:'27px'}}>Hello and welcome my name is <b>Roshan Kanwar</b>, 
    I'm from Korba (C.G), and I graduated from Chhattisgarh Swami Vivekanand 
    Technical University Bhilai (C.G) with a degree 
    in <b>Computer Science</b> This experience has helped me grow as a person and improve my technical skills..</p>
     <div className="">
         <h5 className="fw-bold mb-3">Here are few Highlight :</h5>
         <ul style={{fontSize:'16px',letterSpacing:'1px',lineHeight:'27px'}}>
             <li>Full stack web development.</li>
             <li>Interactive front end as per the design.</li>
             <li>Mobile Responsive Websites.</li>
             <li>Familier tools VS-Code, Git.</li>
             <li>React and Django.</li>
             <li>Managing Database.</li>
         </ul>
     </div>
     <div className="mt-5 my-3">
          <a href="https://drive.google.com/file/d/1OIsO6VO_H-3PRdmpOeAKBJ7dpRk4fNu-/view?usp=drivesdk"  target="_blank" rel="noreferrer noopener" className="cards px-3 py-2 btn-outline-light text-white text-decoration-none bg-dark border border-light rounded-pill">Get Resume</a>
     </div>
    </Fragment>
  )
}

export default AboutMe