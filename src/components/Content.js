import React from "react";
import MailIMG from "../images/Mail.png"
import LinkedlnIMG from "../images/linkedin.png"

export default function Content() {
  return (
    <div className="card--content">
      <div className="card--heading-container">
        <p className="card--heading">Laura Smith</p>
        <p className="card--title">Frontend Developer</p>
        <p className="card--website">laurasmith.website</p>
      </div>
      <div className="card--button-container">
        <a className="card--button-email"><img src={MailIMG}/><span>Email</span></a>
        <a className="card--button-linkedln"><img src={LinkedlnIMG}/><span>Linkedln</span></a>
      </div>
      <div className="card--about">
        <div>
            <h3>About</h3>
            <p>
                I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
            </p>
        </div>
        <div>
            <h3>About</h3>
            <p>
                I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
            </p>
        </div>
      </div>
    </div>
  );
}
