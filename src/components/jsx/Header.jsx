import React from 'react'
import googleImg from '../../assets/images/googleLogo.png';
import {HeaderStyle,
        HeaderContent,
        Button,
        HeaderVideo } from '../style/Header.style';
import headerVdo from "../../assets/videos/headerVdo.webm" ;   
import headerVdo1 from "../../assets/videos/headerVdo1.mp4" ;    
export default function Header() {
  return (
     <HeaderStyle>
       <HeaderContent>
          <h2>Great teamwork starts with a digital HQ</h2>
          <p><span>Slack is free to try </span> for as long as you like</p>
          <Button >
            <button className="btn1">SIGN UP WITH  EMAIL ADDRESS </button>
            <div className="btn2">
                  <img src={googleImg} alt=""/>
                  <p>SIGN UP WITH GOOGLE</p>
              </div>
            </Button>
       </HeaderContent>
       <HeaderVideo>
       <video autoPlay loop muted> 
       <source src={headerVdo} type="video/webm"></source>
       <source src={headerVdo1} type="video/mp4"></source>
       </video>
       </HeaderVideo> 
    </HeaderStyle>
  )
}
