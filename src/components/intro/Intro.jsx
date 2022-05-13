import "./intro.scss";

import { init } from 'ityped';
import {useEffect, useRef} from "react"


export default function Intro() {
    const textRef = useRef();
    useEffect(()=>{
        init(textRef.current, { 
            showCursor: true,
            backDelay: 1500,
            backSpeed: 60, 
            strings: ['Software developer', 'Medical image specialist', 'Freelance',  'Physical trainer' ] })
    },[]);
    return (
        <div className="intro" id="intro">
            <div className="left">
                <div className="imgContainer">
                    <img src="assets/yo.jpeg" alt=""/>
                </div>
            </div>
        <div className="right">
            <div className="wrapper">
                <h2>Hi there, I'm</h2>
                <h1>Camilo Castrillón</h1>
                <h3>I'm just not Biomedical engineer and<br/> I'm just not...<span ref={textRef} >   </span></h3>
            </div>
            <a href="#portfolio">
                <img src="assets/down.png" alt=""/>
            </a>
            

        </div>
        </div>
    )
}
