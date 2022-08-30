import React from 'react';
import LeftVideobox from "./LeftVideobox";
import RightVideobox from "./RightVideobox";
import video1 from "../../assets/videos/video1.webm";
import video1mp4 from "../../assets/videos/video1-mp4.mp4";
import video2 from "../../assets/videos/video2.webm";
import video2mp4 from "../../assets/videos/video2-mp4.mp4";
import video3 from "../../assets/videos/video3.webm";
import video3mp4 from "../../assets/videos/video3-mp4.mp4";
import {FeaturesStyle,
       Companies} from  '../style/Features.style';
import logo1 from '../../assets/images/seek-logo.png';
import logo2 from '../../assets/images/xero.png';
import logo3 from '../../assets/images/REA-GROUP.png';
import logo4 from '../../assets/images/RMIT.png';
import logo5 from '../../assets/images/ibm.png';
import logo6 from '../../assets/images/Deliveroo.png';

export default function Features() {
  return (
      <FeaturesStyle>
       <p>TRUSTED BY COMPANIES ALL OVER THE WORLD</p>
       <Companies>
           <img src={logo1} alt=""/> 
           <img src={logo2} alt=""/>
           <img src={logo3} alt=""/>
           <img src={logo4} alt=""/>
           <img src={logo5} alt=""/>
           <img src={logo6} alt=""/>
       </Companies>
        <LeftVideobox
          vdo_src={video1}
          vdo_mp4={video1mp4}
          heading="Bring your team together"
          content="At the heart of Slack are channels: organised spaces for everyone and everything that you need for work. In channels, it’s easier to connect across departments, offices, time zones and even other companies."
          about="channels"
       /> 
       <RightVideobox
         vdo_src={video2}
         vdo_mp4={video2mp4}
         heading="Choose how you want to work"
         content="In Slack, you’ve got all the flexibility to work when, where and how it’s best for you. You can easily chat, send audio and video clips, or join a huddle to talk things through live."
         about="flexible communication"
         />
       <LeftVideobox
          vdo_src={video3}
          vdo_mp4={video3mp4}
          heading="Move faster with your tools in one place"
          content="With your other work apps connected to Slack, you can work faster by switching tabs less. And with powerful tools like Workflow Builder, you can automate away routine tasks."
          about="the Slack platform"
       /> 
    </FeaturesStyle>
  )
}
