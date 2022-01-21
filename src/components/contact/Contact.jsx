

import React from 'react'
import { useState } from "react";
import emailjs from 'emailjs-com';

import "./contact.scss"
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';


function Contact({id,tem,user}) {
    const [message, setMessage] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
     
      emailjs.sendForm(id,tem, e.target, user)
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
      setMessage(true);
    };
    return (
      <div className="contact" id="contact">
        <div className="left">
          <img src="assets/shake.svg" alt="" />
        </div>
        <div className="right">
          <h2 className="con_text">Contact.</h2>

          <form onSubmit={handleSubmit} >
            <input type="email" placeholder="Email" name="from_email"/>
            <textarea placeholder="Message" name="message"></textarea>
            <button type="submit" value="Send">Send</button>
            {message && <span>Thanks, I'll reply ASAP</span>}
          </form>
          <div className="links">
          <button className="btn"><a href="https://www.linkedin.com/in/praveen-kumar-b14381187/"><LinkedInIcon color="secondary" fontSize="medium"/></a></button>
          <button className="btn"><a href="https://github.com/praveen420coder"><GitHubIcon color="secondary" fontSize="medium"/></a></button>
          <button className="btn"><a href="https://www.linkedin.com/in/praveen-kumar-b14381187/"><TwitterIcon color="secondary" fontSize="medium"/></a></button>
        </div>
        <p>&copy;PraveenKumar All rights reserved.</p>
        </div>
        
      </div>
    );

};

export default Contact
