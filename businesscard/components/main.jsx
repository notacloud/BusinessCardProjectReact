import React from "react";
import "../static/main.css";
import profile from "../static/profile.svg"
import email from "../static/email.svg"
import linkedin from "../static/linkedin.svg"
import twitter from "../static/twitter.svg"
import facebook from "../static/facebook.svg"
import instagram from "../static/instagram.svg"
import github from "../static/github.svg"

export function Main(){
  return(
    <div id="main">
      <img src={profile}></img>
      <div className="div--center">
        <h4>Laura Smith</h4>
      </div>
      <div className="div--center">
        <h6>Frontend Developer</h6>
      </div>
      <div className="div--center">
        <small>laurasmith.website</small>
      </div>
      <div className="div--around">
        <button className="emailBtn"><img src={email}></img>Email</button>
        <button className="linkedinBtn"><img src={linkedin}></img>Linkedin</button>
      </div>
      <div className="margins">
        <div>
          <h4 className="about" style={{margin:'0'}}>About</h4>
        </div>
        <div>
          <p>I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
        </div>
        <div>
          <h4 className="interests" style={{margin:'0'}}>Interests</h4>
        </div>
        <div>
          <p>Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>
        </div>
      </div>
      <div className="icons">
        <img src={twitter} style={{padding:'10px'}}></img>
        <img src={facebook} style={{padding:'10px'}}></img>
        <img src={instagram} style={{padding:'10px'}}></img>
        <img src={github} style={{padding:'10px'}}></img>
      </div>
    </div>
  )
}