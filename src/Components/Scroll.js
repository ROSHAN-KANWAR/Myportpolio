import React, { Fragment,useState,useEffect } from 'react'
import {FaAngleDoubleUp} from "react-icons/fa";

function Scroll() {
    const [visible, setvisible] = useState(false);

    //scroll top
    
    const TopFunction =()=>{

        window.scrollTo({top:0 ,left:0 ,behavior:'smooth'})
    }
    //scroll hidden
     const ListentoTop =()=>{
        let heightTo = 250;
        const winScroll = document.body.scrollTo || document.documentElement.scrollTop;
        if (winScroll > heightTo) {
            setvisible(true);
        } else {
            setvisible(false) ;
        }
     };
     useEffect(()=>{
        window.addEventListener("scroll" ,ListentoTop);
     },[])
  return (
    <Fragment>
    {
        visible && (
            <div class="scroll-top" id="scroll-top">
            <span id="getbtn" class=" bg-danger text-white rounded rounded-2 px-3 py-2" onClick={TopFunction}><FaAngleDoubleUp /></span>
        </div>
        )
    }</Fragment>
  )
}

export default Scroll