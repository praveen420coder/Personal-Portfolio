import React from 'react';
import "./skills.css"


function Skills() {

    return(
        <div class="about" id="skills">
        <h2 class="heading">Languages And Framework I Know</h2>
        
        <div class="skill-container">
            
        <div class="skill-card card1" >
            <p class="skill">HTML</p>
        </div>
        <div class="skill-card card2" >
            <p class="skill">CSS</p>
        </div>
        <div class="skill-card card3">
            <p class="skill">SCSS</p>
        </div>
        <div class="skill-card card4">
            <p class="skill">JavaScript</p>
        </div>
        <div class="skill-card large card1" >
            <p class="skill">ReactJS</p>
        </div>
        <div class="skill-card large card2" >
            <p class="skill">NodeJS</p>
        </div>
        <div class="skill-card card3" >
            <p class="skill">C++</p>
        </div>
        <div class="skill-card card4" >
            <p class="skill">Python</p>
        </div>
        <div class="skill-card large card1" >
            <p class="skill">Github</p>
        </div>
    </div>
    </div>
    );


}



export default Skills;