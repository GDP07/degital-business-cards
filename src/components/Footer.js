import React from "react"
import FacebookIMG from "../images/Facebook.png"
import InstagramIMG from "../images/Instagram.png"
import Twitter from "../images/Twitter.png"
import GithubIMG from "../images/GitHub.png"

export default function Footer(){
    return(
        <footer>
            <img src={Twitter}/>
            <img src={FacebookIMG}/>
            <img src={InstagramIMG}/>
            <img src={GithubIMG}/>
        </footer>
    )
}