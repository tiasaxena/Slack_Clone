import React from 'react';
import {VideoStyle, VideoBox, ContentBox}from "../style/VideoStyle.style";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';  
export default function RightVideobox(props) {
 let Style={
    color:'#1264a3',
    marginTop:'1rem'
  }
 return (
    <div>
   
       <VideoStyle>
        <ContentBox>
           <h2>{props.heading}</h2>
           <p className="para">{props.content}</p>
           <div>
           <span>{`Learn more about ${props.about} `}</span>
           <ArrowForwardIcon style={Style}/>
           </div>
        </ContentBox>
        <VideoBox>
        <video  autoPlay loop muted > 
          <source src={props.vdo_src} type="video/webm"></source>
          <source src={props.vdo_mp4} type="video/mp4"></source>
         </video>
        </VideoBox>
      </VideoStyle>
    </div>
  )
}
