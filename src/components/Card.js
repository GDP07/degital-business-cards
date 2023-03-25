import React from "react"
import ProfilePic from "../images/PP.png"
import Content from "./Content"
import Footer from "./Footer"

export default function Card(){
    return(
        <div className="card--dark">
            <img src={ProfilePic} />
            <Content />
            <Footer />
        </div>
    )
}