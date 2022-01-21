import React from 'react'
import "./intro.scss"
import {init} from 'ityped'
import {useEffect,useRef} from "react"
function Intro() {

    const textRef = useRef();
    useEffect(() =>{
        init(textRef.current,{
            showCursor: true,
            backDelay:1500,
            backSpeed:60,
            strings: ["Web Doveloper","Programmer","Problem Solver"]
        });

    },[]);
    return (
        <div className="intro" id="intro">
            <div className="left">

                <div className="imgContainer">
                    <img src="assets/man.png" alt=""/>
                </div>

            </div>
            <div className="right">
                <div className="wrapper">
                    <h2>Hi There, I'm</h2>
                    <h1>Praveen Kumar</h1>
                    <h3>Freelance <span ref={textRef}></span></h3>
                    <button><a className="download" href="https://drive.google.com/file/d/1Qe5i0ZWr1rM4aS4vfdVFdZj3G_yaXk6T/view?usp=sharing">Download Resume</a></button>
                </div>
                
                <a className="arrow" href="#skills">
                    <img src="assets/down.png" alt=""/>
                </a> 
            </div>
        </div>
    )
}

export default Intro
